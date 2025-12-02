// scripts/interact.js
const hre = require("hardhat");

async function main() {
    // Alamat contract dari hasil deployment sebelumnya
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    console.log("Interacting with AntiGravity contract at:", contractAddress);

    const AntiGravity = await hre.ethers.getContractFactory("AntiGravity");
    const antiGravity = AntiGravity.attach(contractAddress);

    // Get signers
    const [sender, receiver] = await hre.ethers.getSigners();

    console.log("Sender address:", sender.address);
    console.log("Receiver address:", receiver.address);

    // Check current transaction count
    const currentCount = await antiGravity.getTransactionCount();
    console.log("\nCurrent transaction count:", currentCount.toString());

    // Send a transaction with message
    console.log("\nSending transaction with message...");
    const tx = await antiGravity.sendTransaction(
        receiver.address,
        "Hello from blockchain! This is a test message."
    );

    // Wait for confirmation
    await tx.wait();
    console.log("✅ Transaction confirmed!");

    // Check new count
    const newCount = await antiGravity.getTransactionCount();
    console.log("New transaction count:", newCount.toString());

    // Get the latest transaction
    if (newCount > 0) {
        const [txSender, txReceiver, txMessage, txTimestamp] = await antiGravity.getTransaction(newCount - 1n);
        console.log("\nLatest transaction:");
        console.log("  Sender:", txSender);
        console.log("  Receiver:", txReceiver);
        console.log("  Message:", txMessage);
        console.log("  Timestamp:", new Date(Number(txTimestamp) * 1000).toLocaleString());
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

