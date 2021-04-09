import axios from "axios";

//回调函数方式1
// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: "http://152.136.185.210:7878/api/m5",
//     timeout: 5
//   })

//   instance(config).then((res) => {
//     success(res)  //回调函数
//   }).catch(err => {
//     failure(err)
//   })

// }
//回调函数方式2
// export function request(config) {
//   const instance = axios.create({
//     baseURL: "http://152.136.185.210:7878/api/m5",
//     timeout: 5000
//   });

//   instance(config.baseConfig)
//     .then(res => config.success(res))
//     .catch(err => failure(err));

// }

//promies方式
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://152.136.185.210:7878/api/m5',
//       timeout: 5000
//     })
//     instance(config)
//       .then(res => resolve(res))    //axios最终返回的是promise，所以可以用then
//       .catch(err => reject(err))   //resolve执行后直接返回到请求处执行该处的then  reject-->catch
//   })
// }


//promise最终方式
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  instance.interceptors.request.use(
    config => {
      // console.log(config)
      return config
    },
    err => console.log(err))

    instance.interceptors.response.use(res => {return res.data},
      err=>{
        console.log(err);
      }
      
    )
  return instance(config)
}