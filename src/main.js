import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import {
  request
} from './networks/request'

Vue.config.productionTip = false

new Vue({
  render: function (h) {
    return h(App)
  },
}).$mount('#app')

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then((res)=>{
//   console.log(res);
// })

// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'sell',
//     page:1
//   }
// }).then((res)=>{
//   console.log(res);
// })
// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/m5';
// axios.defaults.timeout = 5000;

// axios.all([
//   axios({
//     url: '/home/multidata',
//   }), axios({
//     url: '/home/data',
//     params: {
//       type: 'sell',
//       page: 1
//     }
//   })
// ]).then((results)=>console.log(results[0],results[1]))


// const instance1 = axios.create({
//   baseURL:'http://152.136.185.210:7878/api/m5',
//   timeout:5000
// })

// instance1({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then((res)=>{
//   console.log(res);
// })

// request({
//   url:'/home/multidata',
// },(res)=>{
//   console.log(res);
// },(err)=>{
//   console.log(err);   //回调函数返回res  err
// })

// request({
//   baseConfig:{
//     url:'/home/multidata',
//     params:{
//       type:'pop',
//       page:1
//     }
//   },
//   success:res=>console.log(res),
//   failure:err=>console.log(err)
// })

request({
    url: '/home/multidata',
  })
  .then(res => console.log(res))
  .catch(err => console.log(err))