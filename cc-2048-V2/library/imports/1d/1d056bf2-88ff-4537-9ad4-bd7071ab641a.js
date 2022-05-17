"use strict";
cc._RF.push(module, '1d056vyiP9FN5rUvXBxq2Qa', 'MoveBlock');
// Script/MoveBlock.js

"use strict";

var Emitter = require("mEmitter");
var emitName = require("emitName");

cc.Class({
    extends: cc.Component,

    properties: {
        _width: 4,
        _isMoveRight: false

    },

    onLoad: function onLoad() {
        this.evtMoveUp = this.moveUpCombined.bind(this);
        this.evtMoveDown = this.moveDownCombined.bind(this);
        this.evtMoveLeft = this.moveLeftCombined.bind(this);
        this.evtMoveRight = this.moveRightCombined.bind(this);

        Emitter.instance.registerEvent(emitName.moveUp, this.evtMoveUp);
        Emitter.instance.registerEvent(emitName.moveDown, this.evtMoveDown);
        Emitter.instance.registerEvent(emitName.moveLeft, this.evtMoveLeft);
        Emitter.instance.registerEvent(emitName.moveRight, this.evtMoveRight);
    },
    start: function start() {},
    moveUp: function moveUp(listBlock, arrayBlock) {
        for (var index = 0; index < 4; index++) {
            var totalOne = arrayBlock[index];
            var totalTwo = arrayBlock[index + this._width];
            var totalThree = arrayBlock[index + this._width * 2];
            var totalFour = arrayBlock[index + this._width * 3];
            var column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

            var filterColumn = column.filter(function (num) {
                return num;
            });
            var missing = this._width - filterColumn.length;
            var zeros = Array(missing).fill(0);
            var newColumn = filterColumn.concat(zeros);

            listBlock[index].getComponent("block").labelPrefab.string = newColumn[0];
            listBlock[index + this._width].getComponent("block").labelPrefab.string = newColumn[1];
            listBlock[index + this._width * 2].getComponent("block").labelPrefab.string = newColumn[2];
            listBlock[index + this._width * 3].getComponent("block").labelPrefab.string = newColumn[3];

            arrayBlock[index] = newColumn[0];
            arrayBlock[index + this._width] = newColumn[1];
            arrayBlock[index + this._width * 2] = newColumn[2];
            arrayBlock[index + this._width * 3] = newColumn[3];
        }
    },
    moveDown: function moveDown(listBlock, arrayBlock) {
        for (var index = 0; index < 4; index++) {
            var totalOne = arrayBlock[index];
            var totalTwo = arrayBlock[index + this._width];
            var totalThree = arrayBlock[index + this._width * 2];
            var totalFour = arrayBlock[index + this._width * 3];
            var column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

            var filterColumn = column.filter(function (num) {
                return num;
            });
            var missing = this._width - filterColumn.length;
            var zeros = Array(missing).fill(0);
            var newColumn = zeros.concat(filterColumn);

            listBlock[index].getComponent("block").labelPrefab.string = newColumn[0];
            listBlock[index + this._width].getComponent("block").labelPrefab.string = newColumn[1];
            listBlock[index + this._width * 2].getComponent("block").labelPrefab.string = newColumn[2];
            listBlock[index + this._width * 3].getComponent("block").labelPrefab.string = newColumn[3];

            arrayBlock[index] = newColumn[0];
            arrayBlock[index + this._width] = newColumn[1];
            arrayBlock[index + this._width * 2] = newColumn[2];
            arrayBlock[index + this._width * 3] = newColumn[3];
        }
    },
    moveLeft: function moveLeft(listBlock, arrayBlock) {
        for (var index = 0; index < 16; index++) {
            if (index % 4 === 0) {
                var totalOne = arrayBlock[index];
                var totalTwo = arrayBlock[index + 1];
                var totalThree = arrayBlock[index + 2];
                var totalFour = arrayBlock[index + 3];
                var row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
                var filterRow = row.filter(function (num) {
                    return num;
                });
                var missing = this._width - filterRow.length;
                var zeros = Array(missing).fill(0);
                var newRow = filterRow.concat(zeros);

                listBlock[index].getComponent("block").labelPrefab.string = newRow[0];
                listBlock[index + 1].getComponent("block").labelPrefab.string = newRow[1];
                listBlock[index + 2].getComponent("block").labelPrefab.string = newRow[2];
                listBlock[index + 3].getComponent("block").labelPrefab.string = newRow[3];

                arrayBlock[index] = newRow[0];
                arrayBlock[index + 1] = newRow[1];
                arrayBlock[index + 2] = newRow[2];
                arrayBlock[index + 3] = newRow[3];
            }
        }
    },
    moveRight: function moveRight(listBlock, arrayBlock) {
        this._isMoveRight = true;
        for (var index = 0; index < 16; index++) {
            if (index % 4 === 0) {
                var totalOne = arrayBlock[index];
                var totalTwo = arrayBlock[index + 1];
                var totalThree = arrayBlock[index + 2];
                var totalFour = arrayBlock[index + 3];
                var row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
                var filterRow = row.filter(function (num) {
                    return num;
                });
                var missing = 4 - filterRow.length;
                var zeros = Array(missing).fill(0);
                var newRow = zeros.concat(filterRow);

                listBlock[index].getComponent("block").labelPrefab.string = newRow[0];
                listBlock[index + 1].getComponent("block").labelPrefab.string = newRow[1];
                listBlock[index + 2].getComponent("block").labelPrefab.string = newRow[2];
                listBlock[index + 3].getComponent("block").labelPrefab.string = newRow[3];

                arrayBlock[index] = newRow[0];
                arrayBlock[index + 1] = newRow[1];
                arrayBlock[index + 2] = newRow[2];
                arrayBlock[index + 3] = newRow[3];
            }
        }
    },
    combineRowLeft: function combineRowLeft(listBlock, arrayBlock) {
        for (var index = 0; index <= 15; index++) {
            if (arrayBlock[index] === arrayBlock[index + 1]) {
                var combinedTotal = arrayBlock[index] + arrayBlock[index + 1];
                listBlock[index].getComponent("block").labelPrefab.string = combinedTotal;
                listBlock[index + 1].getComponent("block").labelPrefab.string = 0;

                arrayBlock[index] = combinedTotal;
                arrayBlock[index + 1] = 0;
            }
        }
    },
    combineRowRight: function combineRowRight(listBlock, arrayBlock) {
        for (var index = 15; index >= 0; index--) {
            if (arrayBlock[index] === arrayBlock[index + 1]) {
                var combinedTotal = arrayBlock[index] + arrayBlock[index + 1];
                listBlock[index + 1].getComponent("block").labelPrefab.string = combinedTotal;
                listBlock[index].getComponent("block").labelPrefab.string = 0;

                arrayBlock[index + 1] = combinedTotal;
                arrayBlock[index] = 0;
            }
        }
    },
    combineColumnUp: function combineColumnUp(listBlock, arrayBlock) {
        for (var index = 0; index <= 15; index++) {
            if (arrayBlock[index] === arrayBlock[index + this._width]) {
                var combinedTotal = arrayBlock[index] + arrayBlock[index + this._width];
                listBlock[index].getComponent("block").labelPrefab.string = combinedTotal;
                listBlock[index + this._width].getComponent("block").labelPrefab.string = 0;

                arrayBlock[index] = combinedTotal;
                arrayBlock[index + this._width] = 0;
            }
        }
    },
    combineColumnDown: function combineColumnDown(listBlock, arrayBlock) {
        for (var index = 15; index >= 0; index--) {
            if (arrayBlock[index] == arrayBlock[index + this._width]) {
                var combinedTotal = arrayBlock[index] + arrayBlock[index + this._width];
                listBlock[index + this._width].getComponent("block").labelPrefab.string = combinedTotal;
                listBlock[index].getComponent("block").labelPrefab.string = 0;

                arrayBlock[index + this._width] = combinedTotal;
                arrayBlock[index] = 0;
            }
        }
    },
    moveRightCombined: function moveRightCombined(listBlock, arrayBlock) {
        this.moveRight(listBlock, arrayBlock);
        this.combineRowRight(listBlock, arrayBlock);
        this.moveRight(listBlock, arrayBlock);
        Emitter.instance.emit(emitName.generate);
    },
    moveLeftCombined: function moveLeftCombined(listBlock, arrayBlock) {
        this.moveLeft(listBlock, arrayBlock);
        this.combineRowLeft(listBlock, arrayBlock);
        this.moveLeft(listBlock, arrayBlock);
        Emitter.instance.emit(emitName.generate);
    },
    moveUpCombined: function moveUpCombined(listBlock, arrayBlock) {
        this.moveUp(listBlock, arrayBlock);
        this.combineColumnUp(listBlock, arrayBlock);
        this.moveUp(listBlock, arrayBlock);
        Emitter.instance.emit(emitName.generate);
    },
    moveDownCombined: function moveDownCombined(listBlock, arrayBlock) {
        this.moveDown(listBlock, arrayBlock);
        this.combineColumnDown(listBlock, arrayBlock);
        this.moveDown(listBlock, arrayBlock);
        Emitter.instance.emit(emitName.generate);
    }

    // update (dt) {},

});
/** 
  Bugs:
   => move down và move right chưa hoàn thiện (check lại điều kiện)
   => tất cả các cột hết đườngg đi qua tay phải rồi vẫn hiện số

**/

cc._RF.pop();