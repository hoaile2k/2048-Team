const Emitter = require("mEmitter")
const emitName = require("emitName")
const Color = require("color")
const { aniMoveLeft } = require("./emitName")
let positionX = [80, 240, 400, 560]
let positionY = [560, 400, 240, 80]

cc.Class({
    extends: cc.Component,

    properties: {
        _width: 4,
        getCell: cc.Prefab,
        getParentNode: cc.Component,
    },

    onLoad() {
        this.evtAniMoveUp = this.aniMoveUp.bind(this)
        this.evtAniMoveDown = this.aniMoveDown.bind(this)
        this.evtAniMoveLeft = this.aniMoveLeft.bind(this)
        this.evtAniMoveRight = this.aniMoveRight.bind(this)

        Emitter.instance.registerEvent(emitName.aniMoveUp, this.evtAniMoveUp)
        Emitter.instance.registerEvent(emitName.aniMoveDown, this.evtAniMoveDown)
        Emitter.instance.registerEvent(emitName.aniMoveLeft, this.evtAniMoveLeft)
        Emitter.instance.registerEvent(emitName.aniMoveRight, this.evtAniMoveRight)
    },

    start() {

    },

    aniMoveUp(arrayBlock, listBlock, timeAction = 0.15) {
        for (let index = 0; index < 4; index++) {
            if (arrayBlock[index + (this._width * 3)] != 0 && arrayBlock[index] == 0) {
                let cell = cc.instantiate(this.getCell)
                cell.parent = this.getParentNode.node
                cell.x = listBlock[index + (this._width * 3)].x
                cell.y = listBlock[index + (this._width * 3)].y
                cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + (this._width * 3)]
                cell.color = cc.color(Color[arrayBlock[index + (this._width * 3)]])
                if (arrayBlock[index + (this._width * 1)] == 0 && arrayBlock[index + (this._width * 2)] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()

                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[0]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }
                else if (arrayBlock[index + (this._width * 1)] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()

                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[1]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }
                else if (arrayBlock[index] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()

                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[2]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }
                else {
                    cell.destroy()
                }

            }
            if (arrayBlock[index + (this._width * 2)] != 0 && arrayBlock[index] == 0) {
                let cell = cc.instantiate(this.getCell)
                cell.parent = this.getParentNode.node
                cell.x = listBlock[index + (this._width * 2)].x
                cell.y = listBlock[index + (this._width * 2)].y
                cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + (this._width * 2)]
                cell.color = cc.color(Color[arrayBlock[index + (this._width * 2)]])
                if (arrayBlock[index + (this._width)] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()
                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[0]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }
                else if (arrayBlock[index] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()
                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[1]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }
                else {
                    cell.destroy()
                }
            }
            if (arrayBlock[index + (this._width * 1)] != 0 && arrayBlock[index] == 0) {
                let cell = cc.instantiate(this.getCell)
                cell.parent = this.getParentNode.node
                cell.x = listBlock[index + this._width].x
                cell.y = listBlock[index + this._width].y
                cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + (this._width)]
                cell.color = cc.color(Color[arrayBlock[index + (this._width)]])
                if (arrayBlock[index] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()

                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[0]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }
                else {
                    cell.destroy()
                }
            }
        }
    },
    aniMoveDown(arrayBlock, listBlock, timeAction = 0.15) {
        for (let index = 0; index < 4; index++) {
            if (arrayBlock[index + (this._width * 3)] == 0 && arrayBlock[index] != 0) {
                let cell = cc.instantiate(this.getCell)
                cell.parent = this.getParentNode.node
                cell.x = listBlock[index].x
                cell.y = listBlock[index].y
                cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index]
                cell.color = cc.color(Color[arrayBlock[index]])
                if (arrayBlock[index + this._width] == 0 && arrayBlock[index + (this._width * 2)] == 0) {
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
                else if (arrayBlock[index + (this._width * 3)] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()

                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[1]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }
                else {
                    cell.destroy()
                }

            }
            if (arrayBlock[index + (this._width * 3)] == 0 && arrayBlock[index + this._width] != 0) {
                let cell = cc.instantiate(this.getCell)
                cell.parent = this.getParentNode.node
                cell.x = listBlock[index + this._width].x
                cell.y = listBlock[index + this._width].y
                cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + this._width]
                cell.color = cc.color(Color[arrayBlock[index + this._width]])
                if (arrayBlock[index + (this._width * 2)] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()
                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[3]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }
                else if (arrayBlock[index + (this._width * 3)] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()

                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[2]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }
                else {
                    cell.destroy()
                }
            }
            if (arrayBlock[index + (this._width * 3)] == 0 && arrayBlock[index + (this._width * 2)] != 0) {
                let cell = cc.instantiate(this.getCell)
                cell.parent = this.getParentNode.node
                cell.x = listBlock[index + this._width].x
                cell.y = listBlock[index + this._width].y
                cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + (this._width * 2)]
                cell.color = cc.color(Color[arrayBlock[index + (this._width * 2)]])
                if (arrayBlock[index + (this._width * 3)] == 0) {
                    let callFunc = cc.callFunc(() => {
                        cell.destroy()

                    })
                    let moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[3]))
                    cell.runAction(cc.sequence(moveTo, callFunc))
                }
                else {
                    cell.destroy()


                }
            }
        }

    },
    aniMoveLeft(arrayBlock, listBlock, timeAction = 0.15) {
        for (let index = 0; index < 16; index++) {
            if (index % 4 === 0) {
                if (arrayBlock[index + 3] != 0 && arrayBlock[index] == 0) {
                    let cell = cc.instantiate(this.getCell)
                    cell.parent = this.getParentNode.node
                    cell.x = listBlock[index + 3].x
                    cell.y = listBlock[index + 3].y
                    cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 3]
                    cell.color = cc.color(Color[arrayBlock[index + 3]])
                    if (arrayBlock[index + 1] == 0 && arrayBlock[index + 2] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[0], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else if (arrayBlock[index + 1] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[1], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else if (arrayBlock[index] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[2], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else {
                        cell.destroy()
                    }
                }
                if (arrayBlock[index + 2] != 0 && arrayBlock[index] == 0) {
                    let cell = cc.instantiate(this.getCell)
                    cell.parent = this.getParentNode.node
                    cell.x = listBlock[index + 2].x
                    cell.y = listBlock[index + 2].y
                    cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 2]
                    cell.color = cc.color(Color[arrayBlock[index + 2]])
                    if (arrayBlock[index + 1] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[0], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else if (arrayBlock[index] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[1], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else {
                        cell.destroy()
                    }
                }
                if (arrayBlock[index + 1] != 0 && arrayBlock[index] == 0) {
                    let cell = cc.instantiate(this.getCell)
                    cell.parent = this.getParentNode.node
                    cell.x = listBlock[index + 1].x
                    cell.y = listBlock[index + 1].y
                    cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 1]
                    cell.color = cc.color(Color[arrayBlock[index + 1]])
                    if (arrayBlock[index] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[0], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else {
                        cell.destroy()
                    }
                }
            }
        }
    },
    aniMoveRight(arrayBlock, listBlock, timeAction = 0.15) {
        for (let index = 0; index < 16; index++) {
            if (index % 4 === 0) {
                if (arrayBlock[index + 3] == 0 && arrayBlock[index] != 0) {
                    let cell = cc.instantiate(this.getCell)
                    cell.parent = this.getParentNode.node
                    cell.x = listBlock[index].x
                    cell.y = listBlock[index].y
                    cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index]
                    cell.color = cc.color(Color[arrayBlock[index]])
                    if (arrayBlock[index + 1] == 0 && arrayBlock[index + 2] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[3], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else if (arrayBlock[index + 2] == 0 && arrayBlock[index + 1] != 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[2], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))

                    }
                    else if (arrayBlock[index + 3] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[1], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else {
                        cell.destroy()
                    }
                }
                if (arrayBlock[index + 3] == 0 && arrayBlock[index + 1] != 0) {
                    let cell = cc.instantiate(this.getCell)
                    cell.parent = this.getParentNode.node
                    cell.x = listBlock[index + 1].x
                    cell.y = listBlock[index + 1].y
                    cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 1]
                    cell.color = cc.color(Color[arrayBlock[index + 1]])
                    if (arrayBlock[index + 2] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[3], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else if (arrayBlock[index + 3] == 0 && arrayBlock[index + 2] != 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[2], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else {
                        cell.destroy()
                    }
                }
                if (arrayBlock[index + 3] == 0 && arrayBlock[index + 2] != 0) {
                    let cell = cc.instantiate(this.getCell)
                    cell.parent = this.getParentNode.node
                    cell.x = listBlock[index + 2].x
                    cell.y = listBlock[index + 2].y
                    cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 2]
                    cell.color = cc.color(Color[arrayBlock[index + 2]])
                    if (arrayBlock[index + 3] == 0) {
                        let callFunc = cc.callFunc(() => {
                            cell.destroy()
                        })
                        let moveTo = cc.moveTo(timeAction, cc.v2(positionX[3], cell.y))
                        cell.runAction(cc.sequence(moveTo, callFunc))
                    }
                    else {
                        cell.destroy()

                    }

                }
            }

        }
    },
    // update (dt) {},
    onDestroy(){
        Emitter.instance.registerEvent(emitName.aniMoveUp, this.evtAniMoveUp)
        Emitter.instance.registerEvent(emitName.aniMoveDown, this.evtAniMoveDown)
        Emitter.instance.registerEvent(emitName.aniMoveLeft, this.evtAniMoveLeft)
        Emitter.instance.registerEvent(emitName.aniMoveRight, this.evtAniMoveRight)
    }
});
