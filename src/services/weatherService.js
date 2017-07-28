
import * as HttpService from './HttpService'

let namespace = 'http://api.openweathermap.org/data/2.5/weather?APPID=a6fcb2e80a6fb18332af93bf64f365e1&units=metric'

let get = (params, cb, errorCb) => {
    HttpService.get(namespace, params, cb, errorCb)
}

export {
    get
}
