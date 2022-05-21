const Emitter = require("mEmitter")
const emitName = require("emitName")
const Variables = require('Variables');
const DIRECTION = cc.Enum({
    RIGHT: -1,
    LEFT: -1,
    UP: -1,
    DOWN: -1
});

cc.Class({
    extends: cc.Component,
    properties: {
        blockPrefab: cc.Prefab,
        getScore: cc.Label,
        _listBlock: [],
        _arrayBlock: [],
        _canMove: true
    },

    onLoad() {
        this.node.on("touchstart", (event) => {
            this.startPoint = event.getLocation();
        })
        this.node.on("touchend", (event) => {
            this.endPoint = event.getLocation();
            this.reflectTouch();
        })
        this.node.on("touchcancel", (event) => {
            this.endPoint = event.getLocation();
            this.reflectTouch();
        })

        this.evtGenerate = this.generate.bind(this)
        this.evtResetGame = this.resetGame.bind(this)
        Emitter.instance.registerEvent(Variables.transAudio, this.transAudio, this);
        Emitter.instance.registerEvent(emitName.resetGame, this.evtResetGame)
        Emitter.instance.registerEvent(emitName.generate, this.evtGenerate)
    },

    start() {   
        this.createBlock()
    },
    resetGame(){
        this.node.on("touchstart", (event) => {
            this.startPoint = event.getLocation();
        })
        this.node.on("touchend", (event) => {
            this.endPoint = event.getLocation();
            this.reflectTouch();
        })
        this.node.on("touchcancel", (event) => {
            this.endPoint = event.getLocation();
            this.reflectTouch();
        })

        this.node.removeAllChildren()
        this._arrayBlock = []
        this._listBlock = []
        this.getScore.string = 0
        this.createBlock()
    },
    createBlock(){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp.bind(this))
        for (let index = 0; index <= 15; index++) {
            let block = cc.instantiate(this.blockPrefab)
            block.getComponent("block").labelPrefab.string = ""
            block.parent = this.node
            this._arrayBlock.push(block.getComponent("block").labelPrefab.string)
            this._listBlock.push(block)
        }
        this.generate()
        this.generate()
    },
    transAudio(data) {
        Variables.audio = data
    },
    generate() {
        let generateNumber = [2, 4]
        let random = generateNumber[Math.floor(Math.random() * generateNumber.length)]
        let randomNumber = Math.floor(Math.random() * this._listBlock.length)
        if (this._arrayBlock[randomNumber] == 0) {
            this._arrayBlock[randomNumber] = random
            this._listBlock[randomNumber].getComponent("block").labelPrefab.string = random
            cc.tween(this._listBlock[randomNumber])
                .to(0, { scale: 0, opacity: 0 })
                .to(0.2, { scale: 1, opacity: 255 })
                .start()
        } else { this.generate() }
        Emitter.instance.emit(emitName.blockColor, this._listBlock, this._arrayBlock)
    },
    reflectTouch: function () {
        let startVec = this.startPoint;
        let endVec = this.endPoint;
        let pointsVec = endVec.sub(startVec);
        let VecLength = pointsVec.mag();
        if (VecLength > 0) {
            if (Math.abs(pointsVec.x) > Math.abs(pointsVec.y)) {
                if (pointsVec.x > 0) this.moveBlock(DIRECTION.RIGHT);

                else this.moveBlock(DIRECTION.LEFT);
            }
            else {
                if (pointsVec.y > 0) this.moveBlock(DIRECTION.UP);

                else this.moveBlock(DIRECTION.DOWN);
            }
        }

    },
    moveBlock: function (direction) {
        switch (direction) {
            case DIRECTION.RIGHT: {
                this.moveRight()
                break;
            }
            case DIRECTION.LEFT: {
                this.moveLeft()
                break;
            }
            case DIRECTION.UP: {
                this.moveUp()
                break;
            }
            case DIRECTION.DOWN: {
                this.moveDown()
                break;
            }
        }
    },
    onKeyUp(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                this.moveUp()
                break;

            case cc.macro.KEY.down:
                Variables.audio.playMove_sound()
                this.moveDown()
                break;

            case cc.macro.KEY.left:
                Variables.audio.playMove_sound()
                this.moveLeft()
                break;

            case cc.macro.KEY.right:
                Variables.audio.playMove_sound()
                this.moveRight()
                break;

            case cc.macro.KEY.w:
                Variables.audio.playMove_sound()
                this.moveUp()
                break;

            case cc.macro.KEY.s:
                Variables.audio.playMove_sound()
                this.moveDown()
                break;

            case cc.macro.KEY.a:
                Variables.audio.playMove_sound()
                this.moveLeft()
                break;

            case cc.macro.KEY.d:
                Variables.audio.playMove_sound()
                this.moveRight()
                break;

        }


    },
    moveUp: function () {
        Variables.audio.playMove_sound()
        Emitter.instance.emit(emitName.moveUp, this._listBlock, this._arrayBlock, this.generate)
    },
    moveDown: function () {
        Variables.audio.playMove_sound()

        Emitter.instance.emit(emitName.moveDown, this._listBlock, this._arrayBlock, this.generate)
    },
    moveLeft: function () {
        Variables.audio.playMove_sound()

        Emitter.instance.emit(emitName.moveLeft, this._listBlock, this._arrayBlock, this.generate)
    },
    moveRight: function () {
        Variables.audio.playMove_sound()

        Emitter.instance.emit(emitName.moveRight, this._listBlock, this._arrayBlock, this.generate)
    },

    // update(dt) {

    // },
    onDestroy(){
        Emitter.instance.removeEvent(emitName.resetGame, this.evtResetGame)
        Emitter.instance.removeEvent(emitName.generate, this.evtGenerate)
        Emitter.instance.removeEvent(Variables.transAudio, this.transAudio, this);
    }

});
