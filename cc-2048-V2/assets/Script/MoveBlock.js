const Emitter = require("mEmitter")
const emitName = require("emitName")
cc.Class({
    extends: cc.Component,

    properties: {
        _width: 4,
        _canMove: true,
        _isWin: false,
        _canMoveVertical: true,
        _canMoveHorizontal: true,
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

        this.schedule(() => {
            this._canMove = true
        }, 0.3)
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

            Emitter.instance.emit(emitName.aniMoveUp, arrayBlock, listBlock)

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

            Emitter.instance.emit(emitName.aniMoveDown, arrayBlock, listBlock)

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

                Emitter.instance.emit(emitName.aniMoveLeft, arrayBlock, listBlock)

                arrayBlock[index] = newRow[0]
                arrayBlock[index + 1] = newRow[1]
                arrayBlock[index + 2] = newRow[2]
                arrayBlock[index + 3] = newRow[3]
            }
        }
    },
    moveRight(listBlock, arrayBlock) {
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

                Emitter.instance.emit(emitName.aniMoveRight, arrayBlock, listBlock)

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
                    if(arrayBlock[index]!=0)
                        listBlock[index].runAction(cc.sequence(cc.scaleTo(0.1,1.1),cc.scaleTo(0.1,1)))
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
                if ((index + 1) % 4 != 0) {
                    let combinedTotal = arrayBlock[index] + arrayBlock[index + 1]
                    listBlock[index + 1].getComponent("block").labelPrefab.string = combinedTotal
                    listBlock[index].getComponent("block").labelPrefab.string = 0
                    arrayBlock[index + 1] = combinedTotal
                    arrayBlock[index] = 0
                    if(arrayBlock[index+1]!=0)
                        listBlock[index+ 1].runAction(cc.sequence(cc.scaleTo(0.1,1.1),cc.scaleTo(0.1,1)))
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
                if(arrayBlock[index]!=0)
                    listBlock[index].runAction(cc.sequence(cc.scaleTo(0.1,1.1),cc.scaleTo(0.1,1)))
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
                if(arrayBlock[index]!=0)
                    listBlock[index + this._width].runAction(cc.sequence(cc.scaleTo(0.1,1.1),cc.scaleTo(0.1,1)))
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
        let countVerFalse = 0
        let countHorFalse = 0
        let vert1 = false
        let vert2 = false
        let vert3 = false
        let hor1 = false
        let hor2 = false
        let hor3 = false
        for (let index = 0; index < 16; index++) {
            if (index % 4 == 0) {
                vert1 = arrayBlock[index] != arrayBlock[index + 1]
                vert2 = arrayBlock[index + 1] != arrayBlock[index + 2]
                vert3 = arrayBlock[index + 2] != arrayBlock[index + 3]
                if (vert1 && vert2 && vert3) {
                    countVerFalse++
                }
                else{
                    countVerFalse--
                }
            }
        }
        for (let index = 0; index < 4; index++) {
            let width = this._width
            hor1 = arrayBlock[index] != arrayBlock[index + width]
            hor2 = arrayBlock[index + width] != arrayBlock[index + (width * 2)]
            hor3 = arrayBlock[index + (width * 2)] != arrayBlock[index + (width * 3)]
            if (hor1 && hor2 && hor3) {
                countHorFalse++
            }    
            else{
                countHorFalse--
            }
        }
        cc.log("Hor: ", countHorFalse, "Ver: ", countVerFalse)
        if(countHorFalse==4 && countVerFalse==4){
            this.isLosing()
        }
    },
    isLosing(){
        cc.log("losing")
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP)
    },
    isWinning(total) {
        if (total == 2048) {
            cc.log("win")
        }
    },


    // update (dt) {
    // },
    onDestroy(){
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP)
        
        Emitter.instance.removeEvent(emitName.moveUp, this.evtMoveUp)
        Emitter.instance.removeEvent(emitName.moveDown, this.evtMoveDown)
        Emitter.instance.removeEvent(emitName.moveLeft, this.evtMoveLeft)
        Emitter.instance.removeEvent(emitName.moveRight, this.evtMoveRight)
    }
});