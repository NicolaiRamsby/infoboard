
import * as HttpService from './HttpService'

let namespace = 'http://192.168.0.10/api/WXrmd01EO1zSFET3bWrYCRSprrU-wqCbh5Olv7FF/'

let get = (type, params, cb, errorCb) => {
    HttpService.get(namespace + type, params, cb, errorCb)
}

let update = (type, params, cb, errorCb) => {
    HttpService.put(namespace + type, params, cb, errorCb)
}

export {
    get,
    update
}
