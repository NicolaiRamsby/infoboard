
import * as HttpService from './HttpService'

let namespace = 'http://api.openweathermap.org/data/2.5/'
let keys = '?APPID=a6fcb2e80a6fb18332af93bf64f365e1&units=metric'

let now = (params, cb, errorCb) => {
    HttpService.get(namespace + 'weather' + keys, params, cb, errorCb)
}

let today = (params, cb, errorCb) => {
    HttpService.get(namespace + 'forecast' + keys, params, cb, errorCb)
}

let fiveDays = (params, cb, errorCb) => {
    HttpService.get(namespace + 'forecast/daily' + keys, params, cb, errorCb)
}

export {
    now,
    today,
    fiveDays
}
