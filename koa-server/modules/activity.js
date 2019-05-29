// 引入mysql的配置文件
const db = require('../config/db');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const Activity = Sequelize.import('../schema/activity');
Activity.sync({force: false}); //自动创建表

class ActivityModel {
  /**
   * 查询文章的详情
   * @param id 文章ID
   * @returns {Promise<Model>}
   */
  static async modulesActivity(){
    return await Activity.findAll();
  }
}

module.exports = ActivityModel;
