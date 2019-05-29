const FindModel = require("../modules/find");

class findController {
  /**
   * 创建文章
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async create(ctx){
    //接收客服端
    let req = ctx.request.body;
    if(req.title && req.author && req.content && req.category){
      try{
        //创建文章模型
        const ret = await FindModel.createFind(req);
        //使用刚刚创建的文章ID查询文章详情，且返回文章详情信息
          const data = await FindModel.getFindDetail(ret.id);

        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '创建文章成功',
          data
        }
      }catch(err){
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: '创建文章失败',
          data: err
        }
      }
    }else {
      ctx.response.status = 416;
      ctx.body = {
        code: 200,
        msg: '参数不齐全'
      }
    }
  }

  /**
   * 获取文章详情
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async detail(ctx){
    console.log(ctx.params.id);
    let id = ctx.params.id;
    try{
      // 查询文章详情模型
      let data = await FindModel.getFindDetail(id);
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

module.exports = findController;
