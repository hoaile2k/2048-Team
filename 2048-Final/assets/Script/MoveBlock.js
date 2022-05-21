const Emitter = require("mEmitter")
const emitName = require("emitName")
const Variables = require('Variables');
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
        getLoseScreen: cc.Node,
        getWinScreen: cc.Node,
        nameOnBoardGame: cc.Label,
        getLabelName: cc.Label,
        getLeaderBoard: cc.ScrollView,
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
        Emitter.instance.registerEvent(Variables.transAudio, this.transAudio, this);
    },
    start() {

        this.canMoveRight = true
        this.canMoveLeft = true
        this.canMoveUp = true
        this.canMoveDown = true
        let arrUsers = JSON.parse(cc.sys.localStorage.getItem("users"));
        this.getLabelName.string = arrUsers[arrUsers.length - 1].name
        this.schedule(() => {
            this._canMove = true
        }, 0.3)
    },
    transAudio(data) {
        Variables.audio = data
    },

    combineRowLeft(listBlock, arrayBlock) {
        for (let index = 0; index <= 15; index++) {
            if (arrayBlock[index] === arrayBlock[index + 1]) {
                if ((index + 1) % 4 != 0) {
                    let combinedTotal = arrayBlock[index] + arrayBlock[index + 1]
                    listBlock[index].getComponent("block").labelPrefab.string = combinedTotal
                    listBlock[index + 1].getComponent("block").labelPrefab.string = 0
                    if (arrayBlock[index] != 0)
                        listBlock[index].runAction(cc.sequence(cc.scaleTo(0.1, 1.1), cc.scaleTo(0.1, 1)))
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
                    if (arrayBlock[index + 1] != 0)
                        listBlock[index + 1].runAction(cc.sequence(cc.scaleTo(0.1, 1.1), cc.scaleTo(0.1, 1)))
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
                if (arrayBlock[index] != 0)
                    listBlock[index].runAction(cc.sequence(cc.scaleTo(0.1, 1.1), cc.scaleTo(0.1, 1)))
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
                if (arrayBlock[index] != 0)
                    listBlock[index + this._width].runAction(cc.sequence(cc.scaleTo(0.1, 1.1), cc.scaleTo(0.1, 1)))
                let score = parseInt(this.getScore.string)
                this.getScore.string = score + combinedTotal
                this.isWinning(combinedTotal)
            }
        }
    },

    moveRightCombined(listBlock, arrayBlock) {
        if (this._canMove == true) {
            this._canMove = false
            Emitter.instance.emit(emitName.EvtMoveRight, listBlock, arrayBlock)
            this.combineRowRight(listBlock, arrayBlock)
            Emitter.instance.emit(emitName.EvtMoveRight, listBlock, arrayBlock)
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
            Emitter.instance.emit(emitName.EvtMoveLeft, listBlock, arrayBlock)
            this.combineRowLeft(listBlock, arrayBlock)
            Emitter.instance.emit(emitName.EvtMoveLeft, listBlock, arrayBlock)
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
            Emitter.instance.emit(emitName.EvtMoveUp, listBlock, arrayBlock)
            this.combineColumnUp(listBlock, arrayBlock)
            Emitter.instance.emit(emitName.EvtMoveUp, listBlock, arrayBlock)
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
            Emitter.instance.emit(emitName.EvtMoveDown, listBlock, arrayBlock)
            this.combineColumnDown(listBlock, arrayBlock)
            Emitter.instance.emit(emitName.EvtMoveDown, listBlock, arrayBlock)
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
                else {
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
            else {
                countHorFalse--
            }
        }
        if (countHorFalse == 4 && countVerFalse == 4) {
            this.isLosing()
        }
    },
    isLosing() {
        this.node.off("touchstart")
        this.node.off("touchend")
        this.node.off("touchcancel")
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP)

        this.getLoseScreen.active = true
        Variables.audio.playLose_sound()
        this.updateScore()
        this.getLoseScreen.getChildByName("TryAgainBtn").on("click", () => {
            this.getLoseScreen.active = false
        })
    },
    isWinning(total) {
        if (total == 2048) {
            this.node.off("touchstart")
            this.node.off("touchend")
            this.node.off("touchcancel")
            cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP)
            this.updateScore()
            this.getWinScreen.active = true
            Variables.audio.playWin_sound()
            this.getWinScreen.getChildByName("replayBtn").on("click", () => {
                this.getWinScreen.active = false
            })
        }
    },
    updateScore() {
        let arrUsers = JSON.parse(cc.sys.localStorage.getItem("users"));
        if (arrUsers) {
            for (let i = 0; i < arrUsers.length; i++) {
                if (arrUsers[i].name == this.getLabelName.string) {
                    if (this.getScore.string > arrUsers[i].score) {
                        arrUsers[i].score = parseInt(this.getScore.string);
                        cc.sys.localStorage.setItem("users", JSON.stringify(arrUsers));
                        let leadBoard = this.getLeaderBoard.content.children
                        let leadBoardUser = leadBoard[leadBoard.length-1].getChildByName("score").getComponent("cc.Label")
                        leadBoardUser.string = this.getScore.string
                    }
                }
            }
        } else return;


    },
    // update (dt) {
    // },
    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP)

        Emitter.instance.removeEvent(emitName.moveUp, this.evtMoveUp)
        Emitter.instance.removeEvent(emitName.moveDown, this.evtMoveDown)
        Emitter.instance.removeEvent(emitName.moveLeft, this.evtMoveLeft)
        Emitter.instance.removeEvent(emitName.moveRight, this.evtMoveRight)
        Emitter.instance.removeEvent(Variables.transAudio, this.transAudio, this);
    }
});