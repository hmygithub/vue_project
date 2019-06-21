export const prefix='http://192.168.0.82:9011/caseApi';

export default function request({ url, options }){
    if(options.method=='GET'){
        return axios.get(prefix+url)
        .then(function(response){
            console.log(response)
            return response.data
        })
        .catch(function(){
            console.log(error)
        })
    }else{
        return axios.post(prefix+url, options.params)
          .then(function (response) {
            return response.data
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}