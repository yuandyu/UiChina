const ActivityModel = require("../modules/activity");

class activityController {
  /**
   * 获取文章详情
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async activity(ctx){
    console.log(ctx, 'ctx')
    try{
      // 查询文章详情模型
      let data = await ActivityModel.modulesActivity();
      ctx.response.status = 200;
      ctx.body = {
        code: 200,
        msg: '查询成功',
        data
      }
    }catch(err){
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: '查询失败',
        data
      }
    }
  }
}

module.exports = activityController;
