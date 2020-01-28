module.exports = (app) => {
    //登录
    app.router.post('/api/login', app.controller.login.index);
    // 注册
    app.router.post("/api/register", app.controller.register.index)
    // 用户身份 权限
    app.router.get("/api/sole", app.controller.soleVisit.index)
    //用户列表
    app.router.get("/api/ulist", app.controller.list.index)
    // 知识库
    app.router.post("/api/addknowstore", app.controller.createStore.index)
    // 知识库 列表
    app.router.get("/api/getlistknow", app.controller.knowlist.index)

    // 删除 知识库
    app.router.delete("/api/removestore", app.controller.removestore.index)

    //查找 将要更改的用户的信息
    app.router.post("/api/awaituser", app.controller.awaitchange.index)
    // 更改用户信息
    app.router.post("/api/changeuser", app.controller.changeuser.index)
    //文档
    app.router.post("/api/addDoc", app.controller.addDoc.index)
    // getList
    app.router.get("/api/getDoclist", app.controller.getList.index)
}