"use strict";
exports.__esModule = true;
// 枚举类型
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 10] = "up";
    // up='10',
    Direction[Direction["down"] = 11] = "down";
    Direction[Direction["left"] = 12] = "left";
    Direction[Direction["right"] = 13] = "right";
})(Direction || (Direction = {}));
console.log(Direction.up, Direction[0], Direction);
console.log('Direction1', "UP" /* Up */);
