<template>
    <div style="color:#fff">
        <h1>VEJR</h1>
        <div style="padding:20px;display:inline-block;">
            <table v-if="this.weatherCopenhagen.main">
                <tr>
                    <td colspan="2">
                        <h4>Lige nu i Kbh</h4>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Temperatur:</b>
                    </td>
                    <td>
                        {{ weatherCopenhagen.main.temp | round }} <sup>o</sup>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Luftfugtighed:</b>
                    </td>
                    <td>
                        {{ weatherCopenhagen.main.humidity }} %
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Min. temp.:</b>
                    </td>
                    <td>
                        {{ weatherCopenhagen.main.temp_min }} <sup>o</sup>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Max. temp.:</b>
                    </td>
                    <td>
                        {{ weatherCopenhagen.main.temp_max }} <sup>o</sup>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Vindhastighed:</b>
                    </td>
                    <td>
                        {{ weatherCopenhagen.wind.speed | round }} m/s
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Overskrift:</b>
                    </td>
                    <td>
                        {{ weatherCopenhagen.weather[0].main }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Beskrivelse:</b>
                    </td>
                    <td>
                        {{ weatherCopenhagen.weather[0].description }}
                    </td>
                </tr>
            </table>
            <table v-if="this.weatherRoskilde.main">
                <tr>
                    <td colspan="2">
                        <h4>Lige nu i Roskilde</h4>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Temperatur:</b>
                    </td>
                    <td>
                        {{ weatherRoskilde.main.temp | round }} <sup>o</sup>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Luftfugtighed:</b>
                    </td>
                    <td>
                        {{ weatherRoskilde.main.humidity }} %
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Min. temp.:</b>
                    </td>
                    <td>
                        {{ weatherRoskilde.main.temp_min }} <sup>o</sup>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Max. temp.:</b>
                    </td>
                    <td>
                        {{ weatherRoskilde.main.temp_max }} <sup>o</sup>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Vindhastighed:</b>
                    </td>
                    <td>
                        {{ weatherRoskilde.wind.speed | round }} m/s
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Overskrift:</b>
                    </td>
                    <td>
                        {{ weatherRoskilde.weather[0].main }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Beskrivelse:</b>
                    </td>
                    <td>
                        {{ weatherRoskilde.weather[0].description }}
                    </td>
                </tr>
            </table>
            <table v-if="this.weatherBarcelona.main">
                <tr>
                    <td colspan="2">
                        <h4>Lige nu i Barcelona</h4>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Temperatur:</b>
                    </td>
                    <td>
                        {{ weatherBarcelona.main.temp | round }} <sup>o</sup>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Luftfugtighed:</b>
                    </td>
                    <td>
                        {{ weatherBarcelona.main.humidity }} %
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Min. temp.:</b>
                    </td>
                    <td>
                        {{ weatherBarcelona.main.temp_min }} <sup>o</sup>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Max. temp.:</b>
                    </td>
                    <td>
                        {{ weatherBarcelona.main.temp_max }} <sup>o</sup>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Vindhastighed:</b>
                    </td>
                    <td>
                        {{ weatherBarcelona.wind.speed | round }} m/s
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Overskrift:</b>
                    </td>
                    <td>
                        {{ weatherBarcelona.weather[0].main }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Beskrivelse:</b>
                    </td>
                    <td>
                        {{ weatherBarcelona.weather[0].description }}
                    </td>
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
            weatherCopenhagen: [],
            weatherRoskilde: [],
            weatherBarcelona: []
        }
    },
    created () {
        this.getWeather()
    },
    methods: {
        getWeather () {
            weatherService.get({'q': 'copenhagen,dk'}, (response) => {
                this.weatherCopenhagen = response.data
            }, (error) => {
                console.log('fejl: ' + error)
            })
            weatherService.get({'q': 'roskilde,dk'}, (response) => {
                this.weatherRoskilde = response.data
            }, (error) => {
                console.log('fejl: ' + error)
            })
            weatherService.get({'q': 'barcelona,es'}, (response) => {
                this.weatherBarcelona = response.data
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
    table td{
        padding: 5px;
    }
    table{
        display: inline-block;
        margin-right: 50px;
    }
</style>
