# Web-Based AI Chatbot

A lightweight, web-based AI chatbot powered by the **Google Gemini API**. This project uses `gemini-3.5-flash-lite`, a fast and efficient model available on the Google AI Studio free tier, to generate real-time responses through a clean browser interface.

## ✨ Features
* **Pure Frontend Stack:** Built entirely with vanilla HTML, CSS, and JavaScript—no frameworks required.
* **Fast Responses:** Powered by Google's lightweight Gemini model for low-latency text generation.
* **Real-Time UI:** Dynamically updates the chat window as you send and receive messages.

## 📁 Project Structure
The project consists of three core files:
1. **`index.html`**: Defines the layout and visual components, including the header, chat window, input area, and buttons.
2. **`style.css`**: Handles the visual styling, colors, fonts, and spacing of the interface.
3. **`script.js`**: Manages user interactions, sends requests to the Gemini API, and updates the chat window in real time.

## 🚀 Setup & Usage

### 1. Get a Gemini API Key
1. Go to [Google AI Studio Projects](https://aistudio.google.com/projects) and sign in.
2. Create a new project and click **"Get API key"** to generate your key.

### 2. Configure the Project
1. Clone or download this repository to your local machine.
2. Open `script.js` and replace the placeholder value on **line 15** with your actual API key.

> ⚠️ **Security Warning:** Do not deploy this project to a public website or push your actual API key to a public GitHub repository, as anyone inspecting the frontend code will be able to see and use your key.

### 3. Run the Chatbot
Run it using a local development server (such as the **Live Server** extension in VS Code).

