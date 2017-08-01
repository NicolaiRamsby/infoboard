
import * as HttpService from './HttpService'

let namespace = 'http://localhost:8000/events/'

let get = (startDate, endDate, params, cb, errorCb) => {
    HttpService.get(namespace + startDate + '/' + endDate, params, cb, errorCb)
}

export {
    get
}
