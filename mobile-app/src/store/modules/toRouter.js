/* eslint-disable no-console */
const _ = require('lodash');
import { setStore, getStore } from '../../utils/loaction';
const toRouter = {
  state: {
    SkuData: '',
    CarType: '',
    ShoppingCart: [],
    SeckillGoods: [],
    GoodsJson: [],
    GroupActivityProduct: []
  },
  mutations: {
    SKU_DATA: (state, SkuData) => {
      state.SkuData = SkuData;
    },
    CAR_TYPE: (state, CarType) => {
      state.CarType = CarType;
    },
    SHOPPING_CART: (state, ShoppingCart) => {
      // 获取缓存购物车数据
      state.ShoppingCart = JSON.parse(getStore("ShoppingCart"));
      const index = _.findIndex(state.ShoppingCart, ['id', ShoppingCart.id]);
      if(index === -1){
        state.ShoppingCart.push(ShoppingCart)
      } else {
        state.ShoppingCart[index] = ShoppingCart;
      }
      // 更新购物车
      setStore("ShoppingCart", state.ShoppingCart);
    },
    GOODS_JSON(state, GoodsJson) {
      state.GoodsJson = GoodsJson;
    },
    SECKIL_GOODS(state, SeckillGoods) {
      state.SeckillGoods = SeckillGoods;
    },
    GROUP_ACTIVITY_PRODUCT(state, GroupActivityProduct) {
      state.GroupActivityProduct = GroupActivityProduct;
    }
  },
  actions: {
    SkuData({ commit }, { SkuData }) {
      commit('SKU_DATA', SkuData);
    },
    CarType({ commit }, { CarType }) {
      commit('CAR_TYPE', CarType);
    },
    ShoppingCart({ commit }, { ShoppingCart }) {
      commit('SHOPPING_CART', ShoppingCart);
    },
    GoodsJson({ commit }, { GoodsJson }) {
      commit('GOODS_JSON', GoodsJson);
    },
    SeckillGoods({ commit }, { SeckillGoods }) {
      commit('SECKIL_GOODS', SeckillGoods);
    },
    GroupActivityProduct({ commit }, { GroupActivityProduct }) {
      commit('GROUP_ACTIVITY_PRODUCT', GroupActivityProduct);
    }
  }
};
export default toRouter;
