const Emitter = require("mEmitter")
const emitName = require("emitName")
const Color = require("color")
let positionX = [80, 240, 400, 560]
let positionY = [560, 400, 240, 80]
cc.Class({
    extends: cc.Component,

    properties: {
        _width: 4,
        _isMoveRight: false,
        _canMove: true,
        getCell: cc.Prefab,
        getParentNode: cc.Component,

    },

    onLoad() {
        this.evtMoveUp = this.moveUpCombined.bind(this)
        this.evtMoveDown = this.moveDownCombined.bind(this)
        this.evtMoveLeft = this.moveLeftCombined.bind(this)
        this.evtMoveRight = this.moveRightCombined.bind(this)

        Emitter.instance.registerEvent(emitName.moveUp, this.evtMoveUp)
        Emitter.instance.registerEvent(emitName.moveDown, this.evtMoveDown)
        Emitter.instance.registerEvent(emitName.moveLeft, this.evtMoveLeft)
        Emitter.instance.registerEvent(emitName.moveRight, this.evtMoveRight)
    },
    start() {

    },

    moveUp(listBlock, arrayBlock, timeAction = 0.15) {
        for (let index = 0; index < 4; index++) {
            let totalOne = arrayBlock[index]
            let totalTwo = arrayBlock[index + this._width]
            let totalThree = arrayBlock[index + (this._width * 2)]
            let totalFour = arrayBlock[index + (this._width * 3)]
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

            let filterColumn = column.filter(num => num)
            let missing = this._width - filterColumn.length
            let zeros = Array(missing).fill(0)
            let newColumn = filterColumn.concat(zeros)

            listBlock[index].getComponent("block").labelPrefab.string = newColumn[0]
            listBlock[index + this._width].getComponent("block").labelPrefab.string = newColumn[1]
            listBlock[index + (this._width * 2)].getComponent("block").labelPrefab.string = newColumn[2]
            listBlock[index + (this._width * 3)].getComponent("block").labelPrefab.string = newColumn[3]

            if (arrayBlock[index + (this._width * 3)] != 0) {
                let cell = cc.instantiate(this.getCell)
                cell.parent = this.getParentNode.node
                cell.x = listBlock[index + (this._width * 3)].x
                cell.y = listBlock[index + (this._width * 3)].y
                cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + (this._width * 3)]
                cell.color = cc.color(Color[arrayBlock[index + (this._width * 3)]])
                if(arrayBlock[index] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()
                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[0]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }
                else if (arrayBlock[index + this._width] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()
                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[1]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }

            }

            if (arrayBlock[index + (this._width * 2)] != 0) {
                let cell = cc.instantiate(this.getCell)
                cell.parent = this.getParentNode.node
                cell.x = listBlock[index + (this._width * 2)].x
                cell.y = listBlock[index + (this._width * 2)].y
                cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + (this._width * 2)]
                cell.color = cc.color(Color[arrayBlock[index + (this._width * 2)]])
                if (arrayBlock[index] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()
                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[0]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }
                else if (arrayBlock[index + this._width] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()
                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[1]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }

            }

            arrayBlock[index] = newColumn[0]
            arrayBlock[index + this._width] = newColumn[1]
            arrayBlock[index + (this._width * 2)] = newColumn[2]
            arrayBlock[index + (this._width * 3)] = newColumn[3]
        }
    },
    moveDown(listBlock, arrayBlock, timeAction = 0.15) {
        for (let index = 0; index < 4; index++) {
            let totalOne = arrayBlock[index]
            let totalTwo = arrayBlock[index + this._width]
            let totalThree = arrayBlock[index + (this._width * 2)]
            let totalFour = arrayBlock[index + (this._width * 3)]
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

            let filterColumn = column.filter(num => num)
            let missing = this._width - filterColumn.length
            let zeros = Array(missing).fill(0)
            let newColumn = zeros.concat(filterColumn)

            listBlock[index].getComponent("block").labelPrefab.string = newColumn[0]
            listBlock[index + this._width].getComponent("block").labelPrefab.string = newColumn[1]
            listBlock[index + (this._width * 2)].getComponent("block").labelPrefab.string = newColumn[2]
            listBlock[index + (this._width * 3)].getComponent("block").labelPrefab.string = newColumn[3]

            if (arrayBlock[index] != 0) {
                let cell = cc.instantiate(this.getCell)
                cell.parent = this.getParentNode.node
                cell.x = listBlock[index].x
                cell.y = listBlock[index].y
                cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index]
                cell.color = cc.color(Color[arrayBlock[index]])
                if(arrayBlock[index + (this._width * 3)] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()
                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[3]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }
                else if (arrayBlock[index + (this._width * 2)] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()
                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[2]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }

            }

            if (arrayBlock[index + this._width] != 0) {
                let cell = cc.instantiate(this.getCell)
                cell.parent = this.getParentNode.node
                cell.x = listBlock[index + this._width].x
                cell.y = listBlock[index + this._width].y
                cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + this._width]
                cell.color = cc.color(Color[arrayBlock[index + this._width]])
                if (arrayBlock[index + (this._width * 3)] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()
                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[3]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }
                else if (arrayBlock[index + (this._width * 2)] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()
                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[2]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }

            }

            arrayBlock[index] = newColumn[0]
            arrayBlock[index + this._width] = newColumn[1]
            arrayBlock[index + (this._width * 2)] = newColumn[2]
            arrayBlock[index + (this._width * 3)] = newColumn[3]
        }
    },
    moveLeft(listBlock, arrayBlock, timeAction = 0.15) {
        for (let index = 0; index < 16; index++) {
            if (index % 4 === 0) {
                let totalOne = arrayBlock[index]
                let totalTwo = arrayBlock[index + 1]
                let totalThree = arrayBlock[index + 2]
                let totalFour = arrayBlock[index + 3]
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
                let filterRow = row.filter(num => num)
                let missing = this._width - filterRow.length
                let zeros = Array(missing).fill(0)
                let newRow = filterRow.concat(zeros)

                listBlock[index].getComponent("block").labelPrefab.string = newRow[0]
                listBlock[index + 1].getComponent("block").labelPrefab.string = newRow[1]
                listBlock[index + 2].getComponent("block").labelPrefab.string = newRow[2]
                listBlock[index + 3].getComponent("block").labelPrefab.string = newRow[3]
                if (arrayBlock[index + 3] != 0) {
                    let cell = cc.instantiate(this.getCell)
                    cell.parent = this.getParentNode.node
                    cell.x = listBlock[index + 3].x
                    cell.y = listBlock[index + 3].y
                    let labelCell = cell.getChildByName("label").getComponent("cc.Label")
                    labelCell.string = arrayBlock[index + 3]
                    cell.color = cc.color(Color[arrayBlock[index + 3]])
                    if (newRow[3] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()

                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[0], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else if (newRow[2] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[1], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else if (newRow[1] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()

                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[2], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else {
                        cell.destroy()
                        this.scheduleOnce(function () {

                        }, timeAction);
                    }
                }

                if (arrayBlock[index + 2] != 0) {
                    let cell = cc.instantiate(this.getCell)
                    cell.parent = this.getParentNode.node
                    cell.x = listBlock[index + 1].x
                    cell.y = listBlock[index + 1].y
                    cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 2]
                    cell.color = cc.color(Color[arrayBlock[index + 2]])
                    if (newRow[2] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[0], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else if (newRow[2] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()


                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[1], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else {
                        cell.destroy()
                        this.scheduleOnce(function () {

                        }, timeAction);
                    }
                }
                if (arrayBlock[index + 1] != 0) {
                    let cell = cc.instantiate(this.getCell)
                    cell.parent = this.getParentNode.node
                    cell.x = listBlock[index + 1].x
                    cell.y = listBlock[index + 1].y

                    cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 1]
                    cell.color = cc.color(Color[arrayBlock[index]])
                    if (newRow[1] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[0], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else {
                        cell.destroy()

                        this.scheduleOnce(function () {
                            //  
                        }, timeAction);
                    }
                }
                arrayBlock[index] = newRow[0]
                arrayBlock[index + 1] = newRow[1]
                arrayBlock[index + 2] = newRow[2]
                arrayBlock[index + 3] = newRow[3]
            }
        }
    },
    moveRight(listBlock, arrayBlock, timeAction = 0.15) {
        this._isMoveRight = true
        for (let index = 0; index < 16; index++) {
            if (index % 4 === 0) {
                let totalOne = arrayBlock[index]
                let totalTwo = arrayBlock[index + 1]
                let totalThree = arrayBlock[index + 2]
                let totalFour = arrayBlock[index + 3]
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
                let filterRow = row.filter(num => num)
                let missing = 4 - filterRow.length
                let zeros = Array(missing).fill(0)
                let newRow = zeros.concat(filterRow)

                listBlock[index].getComponent("block").labelPrefab.string = newRow[0]
                listBlock[index + 1].getComponent("block").labelPrefab.string = newRow[1]
                listBlock[index + 2].getComponent("block").labelPrefab.string = newRow[2]
                listBlock[index + 3].getComponent("block").labelPrefab.string = newRow[3]
                if (arrayBlock[index] != 0) {
                    let cell = cc.instantiate(this.getCell)
                    cell.parent = this.getParentNode.node
                    cell.x = listBlock[index].x
                    cell.y = listBlock[index].y
                    cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index]
                    cell.color = cc.color(Color[arrayBlock[index]])
                    if (newRow[3] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()

                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[4], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else if (newRow[2] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()

                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[3], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else if (newRow[1] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()

                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[2], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else {
                        cell.destroy()
                        this.scheduleOnce(function () {

                        }, timeAction);
                    }

                }

                if (arrayBlock[index + 1] != 0) {
                    let cell = cc.instantiate(this.getCell)
                    cell.parent = this.getParentNode.node
                    cell.x = listBlock[index + 1].x
                    cell.y = listBlock[index + 1].y

                    cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 1]
                    cell.color = cc.color(Color[arrayBlock[index + 1]])
                    if (newRow[3] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[4], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else if (newRow[2] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[3], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else {
                        cell.destroy()
                        this.scheduleOnce(function () {

                        }, timeAction);
                    }
                }
                if (arrayBlock[index + 2] != 0) {
                    let cell = cc.instantiate(this.getCell)
                    cell.parent = this.getParentNode.node
                    cell.x = listBlock[index + 2].x
                    cell.y = listBlock[index + 2].y

                    cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 2]
                    cell.color = cc.color(Color[arrayBlock[index + 2]])
                    if (newRow[3] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[4], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else {
                        cell.destroy()

                        this.scheduleOnce(function () {
                            //  
                        }, timeAction);
                    }
                }
                arrayBlock[index] = newRow[0]
                arrayBlock[index + 1] = newRow[1]
                arrayBlock[index + 2] = newRow[2]
                arrayBlock[index + 3] = newRow[3]
            }
        }
    },

    combineRowLeft(listBlock, arrayBlock) {
        for (let index = 0; index <= 15; index++) {
            if (arrayBlock[index] === arrayBlock[index + 1]) {
                if ((index + 1) % 4 != 0) {
                    let combinedTotal = arrayBlock[index] + arrayBlock[index + 1]
                    listBlock[index].getComponent("block").labelPrefab.string = combinedTotal
                    listBlock[index + 1].getComponent("block").labelPrefab.string = 0
                    arrayBlock[index] = combinedTotal
                    arrayBlock[index + 1] = 0
                }
            }

        }
    },
    combineRowRight(listBlock, arrayBlock) {
        for (let index = 15; index >= 0; index--) {
            if (arrayBlock[index] === arrayBlock[index + 1]) {

                if ((index + 1) % 4 == 0) {

                }
                else {
                    let combinedTotal = arrayBlock[index] + arrayBlock[index + 1]
                    listBlock[index + 1].getComponent("block").labelPrefab.string = combinedTotal
                    listBlock[index].getComponent("block").labelPrefab.string = 0
                    arrayBlock[index + 1] = combinedTotal
                    arrayBlock[index] = 0
                }
            }

        }
    },
    combineColumnUp(listBlock, arrayBlock) {
        for (let index = 0; index <= 15; index++) {
            if (arrayBlock[index] === arrayBlock[index + this._width]) {
                let combinedTotal = arrayBlock[index] + arrayBlock[index + this._width]
                listBlock[index].getComponent("block").labelPrefab.string = combinedTotal
                listBlock[index + this._width].getComponent("block").labelPrefab.string = 0

                arrayBlock[index] = combinedTotal
                arrayBlock[index + this._width] = 0
            }
        }
    },

    combineColumnDown(listBlock, arrayBlock) {
        for (let index = 15; index >= 0; index--) {
            if (arrayBlock[index] == arrayBlock[index + this._width]) {
                let combinedTotal = arrayBlock[index] + arrayBlock[index + this._width]
                listBlock[index].getComponent("block").labelPrefab.string = combinedTotal
                listBlock[index + this._width].getComponent("block").labelPrefab.string = 0

                arrayBlock[index] = combinedTotal
                arrayBlock[index + this._width] = 0
            }
        }
    },

    moveRightCombined(listBlock, arrayBlock) {
        if (this._canMove == true) {

            this.moveRight(listBlock, arrayBlock)
            this.combineRowRight(listBlock, arrayBlock)
            this.moveRight(listBlock, arrayBlock)
            if (arrayBlock.includes(0)) {
                Emitter.instance.emit(emitName.generate)
            }
            else {
                cc.log("full")
            }
        }

        // cc.log(arrayBlock)
    },
    moveLeftCombined(listBlock, arrayBlock) {
        if (this._canMove == true) {
            this.moveLeft(listBlock, arrayBlock)
            this.combineRowLeft(listBlock, arrayBlock)
            this.moveLeft(listBlock, arrayBlock)
            if (arrayBlock.includes(0)) {
                Emitter.instance.emit(emitName.generate)

            }
            else {
                cc.log("full")
            }
        }
    },
    moveUpCombined(listBlock, arrayBlock) {
        this.moveUp(listBlock, arrayBlock)
        this.combineColumnUp(listBlock, arrayBlock)
        this.moveUp(listBlock, arrayBlock)
        if (arrayBlock.includes(0)) {
            Emitter.instance.emit(emitName.generate)
        }
        else {
            cc.log("full")
        }
    },
    moveDownCombined(listBlock, arrayBlock) {
        this.moveDown(listBlock, arrayBlock)
        this.combineColumnDown(listBlock, arrayBlock)
        this.moveDown(listBlock, arrayBlock)
        if (arrayBlock.includes(0)) {
            Emitter.instance.emit(emitName.generate)

        }
        else {
            cc.log("full")
        }
    }

    // update (dt) {},
});
/** 
  Bugs:
   => move down và move right chưa hoàn thiện (check lại điều kiện)
   => tất cả các cột hết đườngg đi qua tay phải rồi vẫn hiện số

**/