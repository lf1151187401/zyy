'use strict';

const Controller = require('egg').Controller;
// let jwt = require("jsonwebtoken")
class Registerontroller extends Controller {
    async index() {
        const { ctx } = this;
        let { user, pwd } = ctx.request.body;
        if (user === '') {
            ctx.body = { code: 1, msg: "请输入账号" }
            return
        }
        if (pwd === '') {
            ctx.body = { code: 1, msg: "请输入密码" }
        }


        let Data = await ctx.service.index.login(user);
        if (Data.length > 0) {
            ctx.body = { code: 1, msg: "该账号已被注册" }
            return
        }
        let AddData = await ctx.service.index.add(user, pwd)
        if (AddData.affectedRows === 1) {
            ctx.body = { code: 0, msg: "注册成功!" };
        }
    }
}
module.exports = Registerontroller;
