const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

const API_KEY = "ENTER YOUR API KEY HERE"
const MODEL = "gemini-3.5-flash-lite";
const url = `https://generativelanguage.googleapis.com/v1/models/${MODEL}:generateContent?key=${API_KEY}`;

const chatbotSchema = {
    type: 'object',
    properties: {
        reply: {type: 'string', 
            description: 'Please generate a response to the users message. Keep it empathatic, concise and helpful'
        }
    },
    required: ['reply'] 
};

async function sendMessage() {
    const messageText = userInput.value.trim();

    if (messageText === "") return;

    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.innerHTML = `<i>You</i><br><b>${messageText}.</b>`;
    chatMessages.appendChild(userMessageDiv );

    userInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;

    const payload = {
        contents: [{parts: [{text: messageText}] }],
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: chatbotSchema
        }
    };

    try {
        const response = await fetch (url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const rawJsonString = data.candidates[0].content.parts[0].text;
        const cleanJson = JSON.parse(rawJsonString);
        const botReply = cleanJson.reply;

        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('message', 'bot-message');
        botMessageDiv.innerHTML = `<i>Chatbot</i><br><b>${botReply}</b>`;
        chatMessages.appendChild(botMessageDiv);
    }

    catch (error) {
        console.error("Gemini API Error:", error)
        const errorMessageDiv = document.createElement('div');
        errorMessageDiv.classList.add('message', 'bot-message');
        errorMessageDiv.innerHTML = `<i>Chatbot</i><br><b style= 'color: red'>Failed to get a response.</b>`;
        chatMessages.appendChild(errorMessageDiv);
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendButton.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', function(event)  {
    if (event.key === 'Enter')  {
        sendMessage();
    }
});