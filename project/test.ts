import { expect } from "chai";
import { ethers } from "hardhat";

describe("LoyaltyVenueToken", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("LoyaltyVenueToken");

    const instance = await ContractFactory.deploy();
    await instance.deployed();

    expect(await instance.name()).to.equal("LoyaltyVenue Token");
  });
});
