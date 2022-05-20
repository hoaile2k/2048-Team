const Emitter = require("mEmitter")
const emitName = require("emitName")
cc.Class({
    extends: cc.Component,

    properties: {
        _width: 4,
    },

    onLoad () {
        this.evtMoveUp = this.moveUp.bind(this)
        this.evtMoveDown = this.moveDown.bind(this)
        this.evtMoveLeft = this.moveLeft.bind(this)
        this.evtMoveRight = this.moveRight.bind(this)

        Emitter.instance.registerEvent(emitName.EvtMoveUp, this.evtMoveUp)
        Emitter.instance.registerEvent(emitName.EvtMoveDown, this.evtMoveDown)
        Emitter.instance.registerEvent(emitName.EvtMoveLeft, this.evtMoveLeft)
        Emitter.instance.registerEvent(emitName.EvtMoveRight, this.evtMoveRight)
    },

    start () {
        
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

            let sequence = cc.sequence(cc.fadeOut(0), cc.fadeIn(15))
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

    // update (dt) {},
    onDestroy(){
        Emitter.instance.removeEvent(emitName.EvtMoveUp, this.evtMoveUp)
        Emitter.instance.removeEvent(emitName.EvtMoveDown, this.evtMoveDown)
        Emitter.instance.removeEvent(emitName.EvtMoveLeft, this.evtMoveLeft)
        Emitter.instance.removeEvent(emitName.EvtMoveRight, this.evtMoveRight)
    }
});
