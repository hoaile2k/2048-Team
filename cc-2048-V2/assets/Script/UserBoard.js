cc.Class({
    extends: cc.Component,

    properties: {
        username: cc.Label,
        leadBoard: cc.Node,
        _flag: false,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    textChange(value){
        cc.log(value);
        this.username.string = value;
    },
    loadLeadBoard(){
        if(!this._flag){
            this._flag = true;
            this.leadBoard.active = true;
            this.leadBoard.runAction(cc.moveBy(0.5,0,-700));
        }
    },
    start () {

    },

    // update (dt) {},
});
