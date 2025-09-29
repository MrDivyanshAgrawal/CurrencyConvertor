import { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
    labelClass = "",
    inputClass = "",
    selectClass = "",
    currencyNames = {},
    popularCurrencies = []
}) {
    const amountInputId = useId()
    
    return (
        <div className={`p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className={`mb-2 inline-block ${labelClass || "text-black/40"}`}>
                    {label}
                </label>
                <input    
                    id={amountInputId}                
                    className={`outline-none w-full py-1.5 text-lg font-semibold bg-transparent ${inputClass}`}
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className={labelClass || "text-black/40 mb-2 w-full"}>Currency Type</p>
                <select
                    className={`rounded-lg px-1 py-1 cursor-pointer outline-none ${selectClass || "bg-gray-100"}`}
                    disabled={currencyDisable} 
                    value={selectCurrency}  
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}              
                >
                    {popularCurrencies.length > 0 && (
                        <optgroup label="Popular Currencies">
                            {popularCurrencies.map((currency) => (
                                <option key={`popular-${currency}`} value={currency}>
                                    {currency.toUpperCase()} {currencyNames[currency] ? `- ${currencyNames[currency]}` : ""}
                                </option>
                            ))}
                        </optgroup>
                    )}
                    <optgroup label={popularCurrencies.length > 0 ? "All Currencies" : ""}>
                        {currencyOptions
                            .filter(currency => !popularCurrencies.includes(currency))
                            .map((currency) => (
                                <option key={currency} value={currency}>
                                    {currency.toUpperCase()} {currencyNames[currency] ? `- ${currencyNames[currency]}` : ""}
                                </option>    
                            ))
                        }
                    </optgroup>          
                </select>
            </div>
        </div>
    );
}

export default InputBox;
