const { ethers } = require("hardhat")

async function main() {
 const MyNft = await ethers.getContractFactory("MyNFT")

 // Start deployment, returning a promise that resolves to a contract object
 const myNft = await MyNft.deploy()
 await myNft.deployed()
 console.log(`Contract deployed to the address: ${myNft.address}`)
}

main()
 .then(() => process.exit(0))
 .catch((error) => {
  console.error(error)
  process.exit(1)
 })
