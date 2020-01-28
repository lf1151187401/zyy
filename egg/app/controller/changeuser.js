'use strict';
const Controller = require('egg').Controller;
class ChangeUser extends Controller {
    async index() {
        // 管理员 和 游客 看不同的 信息列表
        let { ctx } = this;
        let { obj } = ctx.request.body

        let userList = await ctx.service.index.changeuser(obj);
        console.log(userList, "userList")
        if (userList.affectedRows === 1) {
            ctx.body = { code: 0, msg: "更改成功" }
        }

    }
}
module.exports = ChangeUser;
