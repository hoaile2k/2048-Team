const Emitter = require("mEmitter")
const emitName = require("emitName")
const Color = require("color")
const { thru } = require("lodash")
let positionX = [80, 240, 400, 560]
let positionY = [560, 400, 240, 80]
cc.Class({
    extends: cc.Component,

    properties: {
        _width: 4,
        _canMove: true,
        _isWin: false,
        getCell: cc.Prefab,
        getParentNode: cc.Component,
        getScore: cc.Label,
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
        this.canMoveRight = true
        this.canMoveLeft = true
        this.canMoveUp = true
        this.canMoveDown = true

        this.schedule(()=>{
            this._canMove = true
        },0.3)
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

            Emitter.instance.emit(emitName.aniMoveUp, arrayBlock, listBlock, this._canMove)

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

            Emitter.instance.emit(emitName.aniMoveDown, arrayBlock, listBlock, this._canMove)

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

                Emitter.instance.emit(emitName.aniMoveLeft, arrayBlock, listBlock, this._canMove)

                arrayBlock[index] = newRow[0]
                arrayBlock[index + 1] = newRow[1]
                arrayBlock[index + 2] = newRow[2]
                arrayBlock[index + 3] = newRow[3]
            }
        }
    },
    moveRight(listBlock, arrayBlock, timeAction = 0.15) {
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

                Emitter.instance.emit(emitName.aniMoveRight, arrayBlock, listBlock, this._canMove)

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
                    let score = parseInt(this.getScore.string)
                    this.getScore.string = score + combinedTotal
                    this.isWinning(combinedTotal)
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
                    let score = parseInt(this.getScore.string)
                    this.getScore.string = score + combinedTotal
                    this.isWinning(combinedTotal)

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
                let score = parseInt(this.getScore.string)
                this.getScore.string = score + combinedTotal
                this.isWinning(combinedTotal)

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
                let score = parseInt(this.getScore.string)
                this.getScore.string = score + combinedTotal
                this.isWinning(combinedTotal)
            }
        }
    },
    moveRightCombined(listBlock, arrayBlock) {
        if (this._canMove == true) {
            this._canMove = false
            this.moveRight(listBlock, arrayBlock)
            this.combineRowRight(listBlock, arrayBlock)
            this.moveRight(listBlock, arrayBlock)
            if (arrayBlock.includes(0)) {
                Emitter.instance.emit(emitName.generate)
            }
            else {
                this.isFull(arrayBlock)
            }
        }
    },
    moveLeftCombined(listBlock, arrayBlock) {
        if (this._canMove == true) {
            this._canMove = false
            this.moveLeft(listBlock, arrayBlock)
            this.combineRowLeft(listBlock, arrayBlock)
            this.moveLeft(listBlock, arrayBlock)
            if (arrayBlock.includes(0)) {
                Emitter.instance.emit(emitName.generate)
            }
            else {
                this.isFull(arrayBlock)
            }
        }
    },
    moveUpCombined(listBlock, arrayBlock) {
        if (this._canMove == true) {
            this._canMove = false
            this.moveUp(listBlock, arrayBlock)
            this.combineColumnUp(listBlock, arrayBlock)
            this.moveUp(listBlock, arrayBlock)
            if (arrayBlock.includes(0)) {
                Emitter.instance.emit(emitName.generate)
            }
            else {
                this.isFull(arrayBlock)
            }
        }

    },
    moveDownCombined(listBlock, arrayBlock) {
        if (this._canMove == true) {
            this._canMove = false
            this.moveDown(listBlock, arrayBlock)
            this.combineColumnDown(listBlock, arrayBlock)
            this.moveDown(listBlock, arrayBlock)
            if (arrayBlock.includes(0)) {
                Emitter.instance.emit(emitName.generate)
            }
            else {
                this.isFull(arrayBlock)
            }
        }

    },
    isFull(arrayBlock) {
        let canMoveVertical = true
        let canMoveHorizontal = true
        for (let index = 0; index < 16; index++) {
            let arr1 = arrayBlock[index]
            let arr2 = arrayBlock[index + this._width]
            let arr3 = arrayBlock[index + (this._width * 2)]
            let arr4 = arrayBlock[index + (this._width * 3)]
            //Vertical
            if (arr1 != arr2 && arr2 != arr3 && arr3 != arr4) {
                canMoveVertical = false
            }
            //Horizontal
            if (index % 4 === 0) {
                if (arrayBlock[index] != arrayBlock[index + 1]) {
                    canMoveHorizontal = false
                }
            }
        }
        if (canMoveHorizontal && canMoveVertical) {
            canMoveHorizontal = true
            canMoveVertical = false
        }
        else {
            cc.log("you lose")
        }
    },
    isWinning(total) {
        if (total == 2048) {
            cc.log("you win")
        }
    },


    // update (dt) {
    // },
});