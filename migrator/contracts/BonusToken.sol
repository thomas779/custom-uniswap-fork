pragma solidity =0.6.6;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract BonusToken is ERC20 {
    address public admin;
    address public liquidator;
    constructor() ERC20('Bonus Token', 'BTK') public {
        admin = msg.sender;
    }

    function setLiquidator(address _liquidator) external {
        require(admin == msg.sender,"only admin (or wizards)");
        liquidator = _liquidator;
    }

    function mint(address to, uint amount) external {
        require(liquidator == msg.sender, "only liquidators (or magicians)");
        _mint(to, amount);
    }
}