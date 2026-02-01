# 🧠 AI Web Page Summarizer (Gemini Powered)

AI Web Page Summarizer is a Chrome Extension that instantly summarizes any web page using Google Gemini AI.  
It helps you save time by converting long articles into short, meaningful summaries with just one click.

---

## ✨ Features

- One-click AI-powered webpage summarization
- Powered by Google Gemini AI
- Multiple summary modes:
  - Brief Summary
  - Detailed Summary
  - Bullet Points
- Secure Gemini API key storage using Chrome Sync
- Copy summary with visual confirmation (toast message)
- Works on most blogs, articles, and documentation sites
- Fast, lightweight, and easy to use

---

## 🛠️ Tech Stack

- JavaScript (ES6)
- Chrome Extension (Manifest v3)
- Google Gemini REST API
- HTML & CSS

---

## 🔑 Getting a Gemini API Key

1. Visit Google AI Studio  
   https://aistudio.google.com
2. Create a new API key
3. Copy the API key

The API key is stored securely using Chrome Sync and is never hard-coded.

---

## 🚀 Installation (Local Setup)

1. Clone the repository:

2. Open Chrome and navigate to:

3. Enable **Developer mode** (top-right)

4. Click **Load unpacked**

5. Select the project folder

---

## ⚙️ How to Use

1. Click the extension icon in Chrome
2. Open **Settings**
3. Paste your **Gemini API Key** and save
4. Open any webpage
5. Click **Summarize This Page**
6. Choose a summary type
7. Copy the generated summary with one click

---

## 🧠 How It Works


This architecture:
- Avoids CORS issues
- Keeps the API key secure
- Follows Chrome Extension best practices

---

## 🤖 Supported Gemini Models

The extension uses a REST API supported Gemini model:

- `models/gemini-flash-latest` (default)

You can change the model inside `background.js` if needed.

---

## 🔒 Privacy & Security

- No user tracking
- No data storage
- API key stored securely in Chrome Sync
- Webpage text is sent only to Gemini for summarization

---

## ⚠️ Known Limitations

- Cannot summarize:
  - `chrome://` pages
  - Chrome Web Store pages
- Very long webpages are truncated to stay within token limits

---

## 🧩 Future Enhancements

- Dark mode
- Highlight summarized content on the webpage
- Auto-detect best summary type

---

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository
2. Create a new feature branch
3. Commit your changes
4. Open a pull request

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Anurag Prajapati**  
Development Enthusiast | AI Enthusiast | Student at NIT Raipur
