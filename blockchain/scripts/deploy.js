// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// deploy.js

async function main() {
	const [deployer] = await ethers.getSigners();
  
	console.log("Deploying contracts with the account:", deployer.address);
  
	const YourContract = await ethers.getContractFactory("Tournaments");
	const yourContract = await YourContract.deploy();
  
	console.log("Contract address:", yourContract.address);
  }
  
  main()
	.then(() => process.exit(0))
	.catch((error) => {
	  console.error(error);
	  process.exit(1);
	});
  