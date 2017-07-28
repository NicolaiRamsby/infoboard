<template>
    <div style="color:#fff">
        <h1>VEJR</h1>
        <div style="padding:20px;display:inline-block;">
            <table>
                <tr>
                    <td colspan="2">
                        <h4>
                            <span v-show="initialLoad">
                                <i class="fa fa-refresh fa-spin fa-fw"></i> Finder din placering
                            </span>
                            <span v-show="!initialLoad" v-if="weather.name">
                                <i class="fa fa-globe fa-fw"></i> {{ weather.name + ', ' + weather.sys.country}}
                            </span>
                            <span v-show="!initialLoad && !weather.name">
                                <i>Ukendt placering</i>
                            </span>
                            <span v-show="loading">
                                <i class="fa fa-refresh fa-spin"></i>
                            </span>
                        </h4>
                    </td>
                </tr>
            </table>
            <table v-if="weather.main">
                <tr>
                    <td><b>Temperatur:</b></td>
                    <td>{{ weather.main.temp | round }} <sup>o</sup></td>
                </tr>
                <tr>
                    <td><b>Luftfugtighed:</b></td>
                    <td>{{ weather.main.humidity | round }} %</td>
                </tr>
                <tr>
                    <td><b>Min. temp.:</b></td>
                    <td>{{ weather.main.temp_min | round }} <sup>o</sup></td>
                </tr>
                <tr>
                    <td><b>Max. temp.:</b></td>
                    <td>{{ weather.main.temp_max | round }} <sup>o</sup></td>
                </tr>
                <tr>
                    <td><b>Vindhastighed:</b></td>
                    <td>{{ weather.wind.speed | round }} m/s</td>
                </tr>
                <tr>
                    <td><b>Overskrift:</b></td>
                    <td>{{ weather.weather[0].main }}</td>
                </tr>
                <tr>
                    <td><b>Beskrivelse:</b></td>
                    <td>{{ weather.weather[0].description }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import * as weatherService from '../../services/weatherService'
export default{
    data () {
        return {
            weather: [],
            loading: false,
            initialLoad: true,
            position: {
                lat: '',
                lng: ''
            }
        }
    },
    created () {
        this.getPosition()
        // this.getWeather()
    },
    methods: {
        getPosition () {
            let self = this
            navigator.geolocation.getCurrentPosition(function (position) {
                let lat = position.coords.latitude
                let lng = position.coords.longitude
                self.position.lat = position.coords.latitude
                self.position.lng = position.coords.longitude
                self.getWeather(lat, lng)
            }, (error) => {
                console.log('error in collecting position')
            })
        },
        getWeather (lat, lng) {
            let self = this
            weatherService.get({'lat': lat, 'lon': lng}, (response) => {
                self.weather = response.data
                self.initialLoad = false
            }, (error) => {
                console.log('fejl: ' + error)
            })
        }
    },
    filters: {
        round (value) {
            return value.toFixed()
        }
    }
}
</script>
<style scoped>
    h1{
        margin: 20px 0 0 20px;
    }
    table td{
        padding: 5px;
    }
    table{
        margin-right: 50px;
        transition: 0.5s ease all;
    }
    table.loading{
        opacity: 0.5
    }
</style>
