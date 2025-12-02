// scripts/deploy.js
const hre = require("hardhat");

async function main() {
    console.log("Deploying AntiGravity contract...");

    // Deploy contract (no constructor parameters needed)
    const AntiGravity = await hre.ethers.getContractFactory("AntiGravity");
    const antiGravity = await AntiGravity.deploy();

    // Wait for deployment to complete (ethers v6 API)
    await antiGravity.waitForDeployment();

    const contractAddress = await antiGravity.getAddress();
    console.log("✅ AntiGravity deployed to:", contractAddress);

    // Check initial transaction count
    const txCount = await antiGravity.getTransactionCount();
    console.log("Initial transaction count:", txCount.toString());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

