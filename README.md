# 💱 Currency Converter

A simple **Currency Converter** web application built with **React**, **Tailwind CSS**, and a free currency API.  
It allows users to seamlessly convert between different currencies with live exchange rates.

---

## 📌 Features

- 🔄 Convert between multiple currencies in real-time.  
- 💡 Swap functionality to quickly interchange `From` and `To` currencies.  
- 🎨 Clean and modern UI using **Tailwind CSS**.  
- 🌐 Fetches live exchange rates from [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api).  
- 📱 Responsive design, works on desktop and mobile.

---

## 🛠️ Tech Stack

- **React** – Frontend framework  
- **Tailwind CSS** – Styling  
- **Currency API** – Live conversion rates  

---

## 📂 Project Structure

``` text
currency-converter/
│── public/
│── src/
│ ├── components/
│ │ ├── index.js
│ │ └── InputBox.jsx
│ ├── hooks/
│ │ └── useCurrencyInfo.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│── vite.config.js
│── package.json
│── README.md
└── LICENSE

```

---

## ⚙️ Installation & Setup

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   👉 http://localhost:5173/

## 🚀 Usage

- Enter the amount you want to convert.
- Select the currency type in the From dropdown.
- Select the target currency type in the To dropdown.
- Click on Convert to see the converted amount.
- Use the Swap button to switch From and To currencies quickly.

## 🖼️ Screenshot

![Currency Converter Screenshot](./screenshot.png)

## 📌 API Reference

This project fetches data from FawazAhmed0’s Currency API.

Example endpoint:
```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json
```

## 📜 License

This project is licensed under the MIT License.  
Feel free to use, modify, and distribute it.

## 👨‍💻 Developed with ❤️ by Divyansh Agrawal using React & Tailwind
