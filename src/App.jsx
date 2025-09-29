import { useState, useEffect } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [history, setHistory] = useState([]);
  
  const { data: currencyInfo, loading, error, lastUpdated } = useCurrencyInfo(from);
  
  const options = Object.keys(currencyInfo);
  
  // Popular currencies for easy access
  const popularCurrencies = ["usd", "eur", "gbp", "jpy", "cad", "inr", "aud", "btc", "eth"];
  
  // Currency names mapping
  const currencyNames = {
    usd: "US Dollar",
    eur: "Euro",
    gbp: "British Pound",
    jpy: "Japanese Yen",
    cad: "Canadian Dollar",
    aud: "Australian Dollar",
    inr: "Indian Rupee",
    chf: "Swiss Franc",
    cny: "Chinese Yuan",
    nzd: "New Zealand Dollar",
    btc: "Bitcoin",
    eth: "Ethereum",
    xau: "Gold",
    xag: "Silver",
    mxn: "Mexican Peso",
    sgd: "Singapore Dollar",
    hkd: "Hong Kong Dollar",
    nok: "Norwegian Krone",
    sek: "Swedish Krona",
    krw: "South Korean Won",
    zar: "South African Rand",
    try: "Turkish Lira",
    brl: "Brazilian Real",
    dkk: "Danish Krone",
    pln: "Polish Złoty",
    thb: "Thai Baht",
    ils: "Israeli Shekel",
  };

  // Swap currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
    // The useEffect will handle conversion after state updates
  };

  // Perform conversion
  const convert = () => {
    if (!currencyInfo || !currencyInfo[to]) return;
    
    const result = amount * (currencyInfo[to] || 0);
    // Round to 4 decimal places for internal value
    const roundedResult = parseFloat(result.toFixed(4));
    setConvertedAmount(roundedResult);
    
    // Add to conversion history with proper formatting
    const newEntry = {
      id: Date.now(),
      from,
      to,
      amount: parseFloat(amount),
      result: roundedResult,
      date: new Date().toISOString()
    };
    setHistory([newEntry, ...history.slice(0, 4)]); // Keep last 5 conversions
  };

  // Auto-convert when currencies or amount change
  useEffect(() => {
    if (currencyInfo && Object.keys(currencyInfo).length > 0) {
      convert();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyInfo, from, to, amount]);

  // Format date
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString();
    } catch (e) {
      console.error("Date formatting error:", e);
      return "Unknown";
    }
  };

  // Copy to clipboard function
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div
      className="w-full min-h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center bg-fixed py-10"
      style={{
        backgroundImage: `url('/bg.png')`,
        // Add a semi-transparent overlay for better text readability
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="w-full max-w-md mx-auto">
        <div className="w-full max-w-md mx-auto border border-gray-800 rounded-lg p-5 backdrop-blur-sm bg-gray-800/80 shadow-xl">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white text-center mb-1">Currency Converter</h2>
            {lastUpdated && (
              <p className="text-xs text-center text-gray-300">
                Rates updated: {formatDate(lastUpdated)}
              </p>
            )}
          </div>
          
          {/* Error display */}
          {error && (
            <div className="bg-red-900 border border-red-700 text-red-100 px-4 py-3 rounded-md mb-4" role="alert">
              <p className="font-bold">Error</p>
              <p>{error}</p>
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center p-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox 
                  label="From" 
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(value) => setAmount(value)}
                  popularCurrencies={popularCurrencies}
                  currencyNames={currencyNames}
                  className="bg-gray-700 text-white border border-gray-600"
                  labelClass="text-gray-300"
                  inputClass="text-white bg-gray-700"
                  selectClass="bg-gray-800 text-white border border-gray-600"
                />
              </div>
              <div className="relative w-full h-0.5 my-4 bg-gray-600">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-600 rounded-full bg-indigo-700 text-white p-2 hover:bg-indigo-800 transition-colors duration-200 shadow-lg"
                  onClick={swap}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox 
                  label="To" 
                  amount={convertedAmount.toFixed(2)} // Format to 2 decimal places
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                  popularCurrencies={popularCurrencies}
                  currencyNames={currencyNames}
                  className="bg-gray-700 text-white border border-gray-600"
                  labelClass="text-gray-300"
                  inputClass="text-white bg-gray-700"
                  selectClass="bg-gray-800 text-white border border-gray-600"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="flex-grow bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-3 rounded-lg transition-colors duration-200 shadow-md"
                >
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
                <button
                  type="button"
                  onClick={() => copyToClipboard(convertedAmount.toFixed(2))}
                  className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-3 rounded-lg transition-colors duration-200 shadow-md"
                  title="Copy to clipboard"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </button>
              </div>
            </form>
          )}
          
          {/* Conversion History */}
          {history.length > 0 && (
            <div className="mt-6">
              <h3 className="text-gray-200 font-semibold mb-2">Recent Conversions</h3>
              <div className="bg-gray-700/70 backdrop-blur-sm rounded-lg p-3">
                {history.map((item) => (
                  <div key={item.id} className="text-sm border-b border-gray-600 last:border-0 py-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200">
                        {item.amount.toFixed(2)} {item.from.toUpperCase()} = {item.result.toFixed(2)} {item.to.toUpperCase()}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {formatDate(item.date).split(',')[1]?.trim() || formatDate(item.date)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-6 text-center text-white text-xs">
          <p>Data provided by @fawazahmed0/currency-api</p>
          <p className="mt-1">Developed with ❤️ by Divyansh Agrawal</p>
        </div>
      </div>
    </div>
  );
}

export default App;
