'use strict';
const Controller = require('egg').Controller;
const TabList = require("../../config/TabList")
class SoleVisit extends Controller {
    async index() {
        let { ctx } = this;
        // 视图权限
        let tabList = await ctx.service.index.searchSole(ctx.info.sole)
        let tabData = tabList.map(item => { return TabList[item.visit] })
        //前端 需要的版式
        let list = []
        tabData.forEach(item => {
            let index = list.findIndex(v => item.title === v.title);
            if (index !== -1) {
                list[index].children.push({
                    key: item.key,
                    nm: item.nm,
                    to: item.to
                })
                return
            }
            list.push({
                key: "sub" + item.key,
                title: item.title,
                icon: item.icon,
                children: [
                    {
                        key: item.key,
                        nm: item.nm,
                        to: item.to
                    }
                ]
            })
        })
        ctx.body = { code: 0, msg: list }
    }
}
module.exports = SoleVisit;
