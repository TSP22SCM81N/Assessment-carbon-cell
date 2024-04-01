import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoPrices = () => {
    const [prices, setPrices] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
                setPrices(response.data.bpi);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='title'>Cryptocurrency Prices
        <div className="crypto-prices">
            
            <div className="cardUSD">
                <h3>Bitcoin (USD)</h3>
                <p>{prices.USD.rate}</p>
            </div>
            <div className="cardEURO">
                <h3>Bitcoin (Euro)</h3>
                <p>{prices.EUR.rate}</p>
            </div>
        </div>
        </div>
    );
};

export default CryptoPrices;
