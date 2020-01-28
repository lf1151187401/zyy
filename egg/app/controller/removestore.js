'use strict';
const Controller = require('egg').Controller;
class removeStore extends Controller {
    async index() {
        let { ctx } = this;
        let { data } = ctx.request.body;
        let { KnowStore, KnowID, Doc, by } = data;
        console.log(KnowStore, KnowID, Doc, by, " affectedRows: 0");
        // affectedRows: 0
        let state = await ctx.service.index.removeknowstore(KnowStore, KnowID, Doc, by);
        console.log(state, "deleta")
        if (state.affectedRows === 1) {
            ctx.body = { code: 0, msg: "删除成功" }
        }
    }
}
module.exports = removeStore;
