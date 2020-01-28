const Service = require("egg").Service
class Main extends Service {
    //登录
    async login(user) {
        return await this.app.mysql.select("user", { where: { user } })
    }
    // 注册
    async add(user, pwd, sole = "游客") {
        return await this.app.mysql.insert("user", { id: null, user: user, pwd: pwd, sole: sole })
    }
    // 查找当前用户的 身份
    async searchSole(sole) {
        return await this.app.mysql.select("sole_table", { where: { sole } })
    }
    //用户列表
    async userList() {
        return await this.app.mysql.select("user")
    }
    // 登入者 是游客 只让他看自己的 
    async oneuserlist(user, pwd) {
        return await this.app.mysql.select("user", { where: { user, pwd } })
    }
    //知识库 创建知识库
    async addtoknowStore(KnowStore, Doc, by) {
        return await this.app.mysql.insert("knowstore", { KnowStore: KnowStore, KnowID: null, Doc: Doc, by: by })
    }
    //  知识库 列表
    async KnowStoreList() {
        return await this.app.mysql.select("knowstore")
    }
    //删除知识库
    async  removeknowstore(KnowStore, KnowID, Doc, by) {
        return await this.app.mysql.delete("knowstore", { KnowStore, KnowID, Doc, by })
    }
    // 更改前
    async AwaitChange(user, pwd, sole, id) {
        return await this.app.mysql.select("user", { where: { user, pwd, sole, id } })
    }
    //更改后
    async changeuser(obj) {
        let newObj = { ...obj }
        delete newObj.id
        console.log(newObj, "obj")
        return await this.app.mysql.update('user', newObj, { where: { id: obj.id } })
    }
    // 文档
    async addDoc(obj) {
        let { Doc, Time, Content, ToHome } = obj;
        console.log(Doc, Time, Content, ToHome)
        return await this.app.mysql.insert("docstore", { Doc, Time, Content, ToHome })
    }
    //文档列表
    async getList() {
        return await this.app.mysql.select("docstore")
    }

}
module.exports = Main