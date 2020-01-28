'use strict';
const Controller = require('egg').Controller;
class ChangeUser extends Controller {
    async index() {
        let { ctx } = this;
        let { user, pwd, sole, id } = ctx.request.body;
        let [Change] = await ctx.service.index.AwaitChange(user, pwd, sole, id);
        console.log(Change, "change")
        ctx.body = { code: 0, msg: Change }

    }
}
module.exports = ChangeUser;
