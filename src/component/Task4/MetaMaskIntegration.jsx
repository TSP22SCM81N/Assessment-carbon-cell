import React, { useState } from 'react';
import Web3 from 'web3';
import './MetaMaskIntegration.css'

const MetaMaskIntegration = () => {
const [web3, setWeb3] = useState(null);
const [account, setAccount] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const [connected, setConnected] = useState(false);


const connectWallet = async () => {
    setLoading(true);
    try {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await web3Instance.eth.getAccounts();
            setWeb3(web3Instance);
            setAccount(accounts[0]);
            setConnected(true);
            setError(null);
        } else {
            setError('Not much familiar with this, just gave a try. May be will do my further learnings on this Thank you');
        }
    } catch (error) {
        setError(error.message);
        setConnected(false);
    } finally {
        setLoading(false);
    }
};

return (
    <div className="metamask">
        {loading ? (
            <p>Connecting...</p>
        ) : (
            <>
                {connected ? (
                    <p>Connected Account: {account}</p>
                ) : (
                    <>
                        <button onClick={connectWallet}>Connect Wallet</button>
                        {error && <p className="error-message">{error}</p>}
                    </>
                )}
            </>
        )}
    </div>
);
};
export default MetaMaskIntegration;
