const Emitter = require("mEmitter")
const emitName = require("emitName")
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
cc.Class({
    extends: cc.Component,

    properties: {
        _width: 4,
<<<<<<< Updated upstream
        _isMoveRight: false,
        _canMoveLeft: true,
        _canMoveRight: true,
        _canMoveUp: true,
        _canMoveDown: true,
=======
        _canMove: true,
        _isWin: false,
        _canMoveVertical: true,
        _canMoveHorizontal: true,
        getCell: cc.Prefab,
        getParentNode: cc.Component,
        getScore: cc.Label,
>>>>>>> Stashed changes
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

    moveUp(listBlock, arrayBlock) {
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

<<<<<<< Updated upstream
=======
            Emitter.instance.emit(emitName.aniMoveUp, arrayBlock, listBlock)

>>>>>>> Stashed changes
            arrayBlock[index] = newColumn[0]
            arrayBlock[index + this._width] = newColumn[1]
            arrayBlock[index + (this._width * 2)] = newColumn[2]
            arrayBlock[index + (this._width * 3)] = newColumn[3]
        }
    },
    moveDown(listBlock, arrayBlock) {
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

<<<<<<< Updated upstream
=======
            Emitter.instance.emit(emitName.aniMoveDown, arrayBlock, listBlock)

>>>>>>> Stashed changes
            arrayBlock[index] = newColumn[0]
            arrayBlock[index + this._width] = newColumn[1]
            arrayBlock[index + (this._width * 2)] = newColumn[2]
            arrayBlock[index + (this._width * 3)] = newColumn[3]
        }
    },
    moveLeft(listBlock, arrayBlock) {
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

<<<<<<< Updated upstream
=======
                Emitter.instance.emit(emitName.aniMoveLeft, arrayBlock, listBlock)

>>>>>>> Stashed changes
                arrayBlock[index] = newRow[0]
                arrayBlock[index + 1] = newRow[1]
                arrayBlock[index + 2] = newRow[2]
                arrayBlock[index + 3] = newRow[3]
            }
        }
    },
    moveRight(listBlock, arrayBlock) {
<<<<<<< Updated upstream
        this._isMoveRight = true
=======
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
=======
                Emitter.instance.emit(emitName.aniMoveRight, arrayBlock, listBlock)

>>>>>>> Stashed changes
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
                    cc.log(true)
                }
                else {
                    let combinedTotal = arrayBlock[index] + arrayBlock[index + 1]
                    listBlock[index+1].getComponent("block").labelPrefab.string = combinedTotal
                    listBlock[index].getComponent("block").labelPrefab.string = 0
                    arrayBlock[index+1] = combinedTotal
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
        this.moveRight(listBlock, arrayBlock)
        this.combineRowRight(listBlock, arrayBlock)
        this.moveRight(listBlock, arrayBlock)
        if(arrayBlock.includes(0)){
            Emitter.instance.emit(emitName.generate)
        }
        else{
            cc.log("full")
        }
        // cc.log(arrayBlock)
    },
    moveLeftCombined(listBlock, arrayBlock) {
        this.moveLeft(listBlock, arrayBlock)
        this.combineRowLeft(listBlock, arrayBlock)
        this.moveLeft(listBlock, arrayBlock)
        if(arrayBlock.includes(0)){
            Emitter.instance.emit(emitName.generate)

        }
        else{
            cc.log("full")
        }    },
    moveUpCombined(listBlock, arrayBlock) {
        this.moveUp(listBlock, arrayBlock)
        this.combineColumnUp(listBlock, arrayBlock)
        this.moveUp(listBlock, arrayBlock)
        if(arrayBlock.includes(0)){
            Emitter.instance.emit(emitName.generate)

        }
        else{
            cc.log("full")
        }
    },
    moveDownCombined(listBlock, arrayBlock) {
        this.moveDown(listBlock, arrayBlock)
        this.combineColumnDown(listBlock, arrayBlock)
        this.moveDown(listBlock, arrayBlock)
        if(arrayBlock.includes(0)){
            Emitter.instance.emit(emitName.generate)

<<<<<<< Updated upstream
        }
        else{
            cc.log("full")
        }
    }
=======
    },
    isFull(arrayBlock) {
        for (let index = 0; index < 16; index++) {
            if(index%4==0){
                if(arrayBlock[index]!= arrayBlock[index+1] && arrayBlock[index+1]!= arrayBlock[index+2]&&arrayBlock[index+2]!= arrayBlock[index+3])
                    this._canMoveVertical = false
            }
        }
        for(let index = 0; index < 4; index ++){
            let width = this._width
            let isIndex = arrayBlock[index]!= arrayBlock[index + width]
            let isIndex1 = arrayBlock[index + 1]!= arrayBlock[index + (width * 2)]
            let isIndex2 = arrayBlock[index + (width * 2)]!= arrayBlock[index + (width * 3)]
            if(isIndex&& isIndex1&&isIndex2)
                this._canMoveHorizontal = true
            // if(arrayBlock[index]!= arrayBlock[index + width] )
        }
        
        if (!this._canMoveHorizontal && !this._canMoveVertical) {
            cc.log('lose')
        }
        else{
            this._canMoveHorizontal = true
            this._canMoveVertical = true
        }
    },
    isWinning(total) {
        if (total == 2048) {
            cc.log("you win")
        }
    },
>>>>>>> Stashed changes

    // update (dt) {},
});
/** 
  Bugs:
   => move down và move right chưa hoàn thiện (check lại điều kiện)
   => tất cả các cột hết đườngg đi qua tay phải rồi vẫn hiện số

**/