import errorHandle from './utils.js'
errorHandle.registerErrorHandling((e) => {
  console.log('报错了', e);
})
errorHandle.foo(() => {
  console.log('调用了foo', aa);
})