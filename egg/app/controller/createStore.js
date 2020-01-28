'use strict';
const Controller = require('egg').Controller;
class createStoreController extends Controller {
    async index() {
        let { ctx } = this;
        let { KnowStore, Doc, by } = ctx.request.body
        if (KnowStore === '') {
            ctx.body = { code: 1, msg: "请输入名称" }
            return
        }
        if (Doc === '') {
            ctx.body = { code: 1, msg: "请输入简介" }
        }
        let Data = await ctx.service.index.addtoknowStore(KnowStore, Doc, by);
        if (Data.affectedRows = 1) {
            ctx.body = { code: 0, msg: "创建成功" }
        }
    }
}
module.exports = createStoreController;
