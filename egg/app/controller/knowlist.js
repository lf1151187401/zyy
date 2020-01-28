'use strict';
const Controller = require('egg').Controller;
class knowStorelist extends Controller {
    async index() {
        let { ctx } = this;
        if (ctx.info.sole === "游客") {
            let KnowStoreList = await ctx.service.index.KnowStoreList();
            ctx.body = { code: 0, msg: KnowStoreList, flag: false }
        }
        if (ctx.info.sole === "管理员") {
            let KnowStoreList = await ctx.service.index.KnowStoreList();
            ctx.body = { code: 0, msg: KnowStoreList, flag: true }
        }

    }
}
module.exports = knowStorelist;
