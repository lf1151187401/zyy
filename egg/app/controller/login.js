'use strict';

const Controller = require('egg').Controller;

const jwt = require('jsonwebtoken')

class Loginontroller extends Controller {
    async index() {
        const { ctx, app } = this;
        let { user, pwd } = ctx.request.body;

        if (user === '') {
            ctx.body = { code: 1, msg: "请输入账号" }
            return
        }
        if (pwd === '') {
            ctx.body = { code: 1, msg: "请输入密码" }
        }
        let Data = await ctx.service.index.login(user)
        if (Data.length === 0) {
            ctx.body = { code: 1, msg: "该账号未注册,快去注册吧!" }
            return
        }
        if (Data[0].pwd !== pwd) {
            ctx.body = { code: 1, msg: "密码输入错误,请重新输入!" }
            return
        }
        let token = jwt.sign({ ...Data[0] }, app.config.keys);
        ctx.body = { code: 0, msg: "登录成功!", data: { token } };
    }
}
module.exports = Loginontroller;
