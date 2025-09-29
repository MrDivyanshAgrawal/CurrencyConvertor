import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);
    
    useEffect(() => {
        setLoading(true);
        const base = currency.toLowerCase();
        
        // Primary URL using jsdelivr
        const primaryUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base}.json`;
        
        // Fallback URL using Cloudflare as recommended
        const fallbackUrl = `https://latest.currency-api.pages.dev/v1/currencies/${base}.json`;
        
        // Function to fetch data with retry logic
        const fetchData = async (url, isRetry = false) => {
            try {
                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
                }
                
                const result = await response.json();
                
                if (result && result[base]) {
                    setData(result[base]);
                    setLastUpdated(new Date());
                    setLoading(false);
                    setError(null);
                    return true;
                } else {
                    throw new Error('Invalid API response format');
                }
            } catch (err) {
                console.error(`Error fetching from ${isRetry ? 'fallback' : 'primary'} URL:`, err);
                
                if (!isRetry) {
                    // If primary URL failed, try fallback
                    console.log("Trying fallback URL...");
                    return fetchData(fallbackUrl, true);
                } else {
                    // Both primary and fallback failed
                    setError("Failed to fetch currency data from all sources. Please try again later.");
                    setLoading(false);
                    return false;
                }
            }
        };
        
        // Start with primary URL
        fetchData(primaryUrl);
        
    }, [currency]);
    
    return { data, loading, error, lastUpdated };
}

export default useCurrencyInfo;
