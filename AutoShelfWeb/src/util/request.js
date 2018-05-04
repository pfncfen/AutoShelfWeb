import axios from 'axios'
import apiMap from './api'


export default function request(apiname, params, callback, config) {
    console.log('request method')
    if( Object.keys(apiMap).includes(apiname)) {
        return axios({
            method: apiMap[apiname].method,
            url: apiMap[apiname].url,
            data: params,
        }).then(callback)
    }else {
        return false
    }

}
