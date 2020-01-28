'use strict';
const Controller = require('egg').Controller;
class AddDoc extends Controller {
    async index() {
        let { ctx } = this;
        let { obj } = ctx.request.body;
        console.log(obj, "obj")
        let Data = await ctx.service.index.addDoc(obj);
        console.log(Data, "change")
        if (Data.affectedRows === 1) {
            ctx.body = { code: 0, msg: "添加成功" }
        }

    }
}
module.exports = AddDoc;
