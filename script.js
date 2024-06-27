const fetch = require('node-fetch');

async function fetchTransactionsForWallet(walletAddress) {
    const options = {
        method: 'GET',
        headers: {
            'x-chain': 'solana',  // Set to 'solana' since you are working with Solana network
            'X-API-KEY': '78adfb4eac1144a99ad16349b3aa670b'
        }
    };
    const url = `https://public-api.birdeye.so/v1/wallet/tx_list?wallet=${walletAddress}`;

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const transactions = await response.json();
        console.log("Transactions for Wallet:", walletAddress);
        console.log(transactions);
    } catch (error) {
        console.error('Failed to fetch transactions:', error);
    }
}

// Example usage with a specific wallet address
fetchTransactionsForWallet('arsc4jbDnzaqcCLByyGo7fg7S2SmcFsWUzQuDtLZh2y');