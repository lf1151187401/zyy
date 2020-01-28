'use strict';
const Controller = require('egg').Controller;
class getList extends Controller {
    async index() {
        let { ctx } = this;
        let Doclist = await ctx.service.index.getList();
        if (Doclist.length > 0) {
            ctx.body = { code: 0, msg: Doclist }
        }
    }
}
module.exports = getList;
