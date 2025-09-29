# 💱 Currency Converter

A modern **Currency Converter** web application built with **React**, **Tailwind CSS**, and a free currency API.  
Convert between 200+ global currencies and cryptocurrencies with live exchange rates.

**[View Live Demo](https://currencyconvertorreact.vercel.app/)** 🚀

![Currency Converter Screenshot](/public/currencyconvertor.png)


---

## 📌 Features

- 🔄 Convert between 200+ currencies in real-time, including cryptocurrencies and precious metals  
- 💱 Support for Bitcoin, Ethereum, Gold, Silver, and all major world currencies  
- 💡 One-click swap functionality to quickly interchange currencies  
- 📜 Conversion history tracking to review your recent conversions  
- 🎨 Elegant dark-themed UI using **Tailwind CSS** for better visual experience  
- 🌐 Fetches live exchange rates from [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api)  
- 📱 Fully responsive design - works perfectly on desktop, tablet and mobile  
- 📋 Copy results to clipboard with a single click

---

## 🛠️ Tech Stack

- **React** – Frontend framework with hooks for state management  
- **Tailwind CSS** – Utility-first CSS framework for styling  
- **Currency API** – Free API with no rate limits for live conversion rates  
- **Vite** – Next generation frontend tooling for fast development

---

## 📂 Project Structure

```text
currency-converter/
│── public/
│   └── bg.png              # Background image
│── src/
│ ├── components/
│ │ ├── index.js            # Component exports
│ │ └── InputBox.jsx        # Currency input component
│ ├── hooks/
│ │ └── useCurrencyInfo.js  # Custom hook for API data
│ ├── App.jsx               # Main application
│ ├── main.jsx              # Entry point
│ └── index.css             # Global styles
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

1. **Enter the amount** you want to convert in the "From" field
2. **Select currencies** from the dropdown menus (popular currencies appear at the top)
3. **View the converted amount** instantly in the "To" field
4. **Swap currencies** using the swap button to quickly reverse the conversion
5. **Copy the result** to your clipboard with the copy button
6. **View your history** of recent conversions at the bottom of the app

## 📱 Mobile Support

The app is fully responsive and works perfectly on devices of all sizes:
- **Desktop**: Full-featured experience
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Streamlined interface for on-the-go conversions

## 📌 API Reference

This project utilizes the free Currency API by @fawazahmed0 which offers:
- 200+ currencies including cryptocurrencies
- No rate limits
- Daily updated rates
- Fallback mechanisms for reliability

Example endpoint:
```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json
```

## 🔗 Links

- **Live Demo**: [https://currencyconvertorreact.vercel.app/](https://currencyconvertorreact.vercel.app/)
- **GitHub Repository**: **GitHub Repository**: [https://github.com/MrDivyanshAgrawal/CurrencyConvertor](https://github.com/MrDivyanshAgrawal/CurrencyConvertor)

## 📜 License

This project is licensed under the MIT License.  
Feel free to use, modify, and distribute it.

---

## 👨‍💻 Developed with ❤️ by Divyansh Agrawal

Connect with me:
- [GitHub](https://github.com/MrDivyanshAgrawal)
- [LinkedIn](https://www.linkedin.com/in/divyansh-agrawal-673420257)
