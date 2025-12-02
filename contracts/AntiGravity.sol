// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AntiGravity {
    struct Transaction {
        address sender;
        address receiver;
        string message;
        uint256 timestamp;
    }

    Transaction[] public transactions;

    event TransactionSent(
        address indexed sender,
        address indexed receiver,
        string message,
        uint256 timestamp
    );

    function sendTransaction(address _receiver, string memory _message) public {
        Transaction memory newTransaction = Transaction({
            sender: msg.sender,
            receiver: _receiver,
            message: _message,
            timestamp: block.timestamp
        });

        transactions.push(newTransaction);

        emit TransactionSent(msg.sender, _receiver, _message, block.timestamp);
    }

    function getTransactionCount() public view returns (uint256) {
        return transactions.length;
    }

    function getTransaction(uint256 index) public view returns (
        address sender,
        address receiver,
        string memory message,
        uint256 timestamp
    ) {
        require(index < transactions.length, "Transaction does not exist");
        Transaction memory txn = transactions[index];
        return (txn.sender, txn.receiver, txn.message, txn.timestamp);
    }

    function getAllTransactions() public view returns (Transaction[] memory) {
        return transactions;
    }
}
