
import * as HttpService from './HttpService'

let namespace = 'https://api.homeboard.dk/events/'

let get = (startDate, endDate, params, cb, errorCb) => {
    HttpService.get(namespace + startDate + '/' + endDate, params, cb, errorCb)
}

export {
    get
}
