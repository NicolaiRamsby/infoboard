
import * as HttpService from './HttpService'

let namespace = 'https://api.cronofy.com/v1/events'

let get = (params, cb, errorCb) => {
    HttpService.get(namespace, params, cb, errorCb)
}

export {
    get
}
