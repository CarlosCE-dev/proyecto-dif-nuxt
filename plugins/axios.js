export default function ({ $axios, redirect, request }) {
    $axios.onRequest(config => {
      config.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}` 
      console.log('Making request to ' + config.url)
    })
  
    $axios.onError(error => {
      console.log(error);
      if (error.response) {
        console.group();
        console.info('------Error Request------');
        console.info('status:------', error.response.status);
        console.info('error:-------', error.message);
        console.info('message:-----', error.response.data.error);
        console.groupEnd();
      }else if(error.request){
        console.log(error.request);
        console.log('status:------', error.response.status);
        console.log('message:-----', error.message);
      }
    })
}