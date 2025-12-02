# Blockchain Transaction Messenger

A decentralized messaging application built on Ethereum blockchain. Users can send messages with transaction records stored permanently on-chain, featuring a modern web interface with real-time updates.




## Features

- On-chain message storage with sender and receiver addresses
- Real-time transaction updates via blockchain events
- Modern split-screen interface
- MetaMask wallet integration
- Transaction history with timestamps
- Responsive design

## Tech Stack

- **Smart Contract**: Solidity ^0.8.0
- **Development Framework**: Hardhat
- **Frontend**: HTML, CSS, JavaScript
- **Blockchain Library**: Ethers.js v6
- **Network**: Ethereum (Local/Testnet/Mainnet compatible)

## Prerequisites

- Node.js (v14 or higher)
- MetaMask browser extension
- Git

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/blockchain-transaction-messenger.git
cd blockchain-transaction-messenger
```

2. Install dependencies
```bash
npm install
```

3. Configure environment (optional for testnet deployment)
```bash
cp .env.example .env
# Edit .env with your settings
```

## Quick Start

### 1. Start Local Blockchain

Open a terminal and run:
```bash
npx hardhat node
```

Keep this terminal running. You should see a list of test accounts with private keys.

### 2. Deploy Smart Contract

Open a new terminal and deploy the contract:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

Copy the deployed contract address from the output.

### 3. Update Frontend Configuration

Open `frontend/index.html` and update the contract address (around line 424):
```javascript
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
```

### 4. Start Development Server

```bash
npm run serve
```

The application will be available at `http://localhost:3000`

### 5. Configure MetaMask

1. Open MetaMask
2. Add network: localhost:8545
3. Import one of the test accounts using the private key from step 1
4. Connect to the application

### 6. Test the Application

1. Enter a receiver address in the form
2. Write a message
3. Click "Kirim Transaksi"
4. Approve the transaction in MetaMask
5. Watch the transaction appear in the history panel

## Project Structure

```
.
├── contracts/
│   └── AntiGravity.sol       # Main smart contract
├── scripts/
│   ├── deploy.js             # Deployment script
│   └── interact.js           # Interaction script for testing
├── frontend/
│   └── index.html            # Web interface
├── hardhat.config.js         # Hardhat configuration
└── package.json
```

## Smart Contract

The `AntiGravity` contract stores transaction records with the following structure:

```solidity
struct Transaction {
    address sender;
    address receiver;
    string message;
    uint256 timestamp;
}
```

### Main Functions

- `sendTransaction(address _receiver, string _message)` - Send a new transaction
- `getTransactionCount()` - Get total number of transactions
- `getTransaction(uint256 index)` - Get specific transaction details
- `getAllTransactions()` - Get all transactions

## Testing

Run the interaction script to test contract functionality:
```bash
npx hardhat run scripts/interact.js --network localhost
```

## Deployment to Testnet

1. Get testnet ETH from a faucet (Sepolia recommended)
2. Update `.env` with your private key and RPC URL
3. Deploy to testnet:
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## Development Notes

- Local blockchain data is ephemeral and resets when the node stops
- For persistent data, deploy to a testnet or mainnet
- Contract address changes with each deployment on local network
- Always update the frontend with the new contract address after deployment


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
