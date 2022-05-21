
cc.Class({
    extends: cc.Component,

    properties: {
        scoreTween: cc.Label,
        getScore: cc.Label,
        _score: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    start() {
        let fakeScore = parseInt(this.getScore.string)
        cc.tween(this)
            .to(2, { _score: fakeScore })
            .start()
    },

    update (dt) {
        this.scoreTween.string = Math.floor(this._score)
    },
});
