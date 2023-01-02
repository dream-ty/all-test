import { createApp, h } from '../node_modules/vue/dist/vue.esm-browser.js'
// import App from '../app.js'
console.log(h('h1', { onClick: () => {console.log(123) }}, 'aaaa'));
const app = createApp({
  render() {
    // return h('h1', { onClick: () => {console.log(123) }}, 'aaaa')
    return {
      tag:'h1',
      // type: 'h1',
      props: {
        onClick: () => {console.log(456)},
      },
      children: 'aaaa1'
      
    }
  }
})
app.mount('#app')


// h函数返回值其实就是一个对象，如下
// export default {
//   render() {
//     return {
//       tag:'h1',
//       props: {
//         onClick: () => {console.log(456)}
//       }
//     }
//   }
// }