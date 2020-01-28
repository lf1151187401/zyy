'use strict';
const Controller = require('egg').Controller;
class userListController extends Controller {
    async index() {
        // 管理员 和 游客 看不同的 信息列表
        let { ctx } = this;
        if (ctx.info.sole === "管理员") {
            let userList = await ctx.service.index.userList();
            ctx.body = { code: 0, msg: userList, flag: true }

        }
        if (ctx.info.sole === "游客") {
            let userList = await ctx.service.index.oneuserlist(ctx.info.user, ctx.info.pwd);
            ctx.body = { code: 0, msg: userList, flag: false }
        }

    }
}
module.exports = userListController;
