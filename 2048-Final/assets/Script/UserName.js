
cc.Class({
    extends: cc.Component,

    properties: {
        labelName: cc.Label,
        showName: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.log(this.labelName, this.showName)
    },

    // update (dt) {},
});
