import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployRiggedRoll: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const diceGame = await hre.ethers.getContract("DiceGame", deployer);
  const diceGameAddress = await diceGame.getAddress();

  await deploy("RiggedRoll", {
    from: deployer,
    args: [diceGameAddress],
    log: true,
    autoMine: true,
  });

  const riggedRoll = await hre.ethers.getContract("RiggedRoll", deployer);

  // --- SỬA Ở ĐÂY CHO CHECKPOINT 4 ---
  // Thay thế chuỗi bên dưới bằng địa chỉ ví bạn vừa copy trên web
  const yourFrontendAddress = "0x6B023117539dBf3956c95D222BA157372A692410"; // <--- Dán địa chỉ của bạn vào đây

  console.log("\n 🫅  Transferring ownership to frontend address:", yourFrontendAddress);
  await (riggedRoll as any).transferOwnership(yourFrontendAddress);

  // --- Gửi vốn ---
  console.log("💰 Funding RiggedRoll contract...");
  await (diceGame as any).connect(await hre.ethers.getSigner(deployer)).runner.sendTransaction({
    to: await riggedRoll.getAddress(),
    value: hre.ethers.parseEther("0.1"),
  });
};

export default deployRiggedRoll;
deployRiggedRoll.tags = ["RiggedRoll"];
