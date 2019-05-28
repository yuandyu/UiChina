const router = require('koa-router')()
const ArtileController = require('../controllers/article');
const FindController = require('../controllers/find');
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.post('/article/create',ArtileController.create);
router.get('/article/:id',ArtileController.detail);
router.post('/find/create',FindController.create);
router.get('/find',FindController.detail);

module.exports = router;
