<template>
    <div class="col-sm-12 header">
        <div class="row">
            <div class="col-sm-6 header-left" v-if="weather">
                <div class="header-weather-meta">
                    Vejret lige nu i
                    <span v-if="$store.state.formattedCity">
                        {{ $store.state.formattedCity }}
                    </span>
                    <span v-else>
                        <i class="fa fa-refresh fa-spin"></i>
                    </span>
                </div>
                <div class="header-weather">
                    <div class="header-wh-degrees" v-if="weather.main">
                        {{ weather.main.temp | round }}<sup>o</sup>
                    </div>
                    <div class="header-wh-icon" v-if="weather.weather">
                        <icon-converter :icon="weather.weather[0].icon"></icon-converter>
                    </div>
                    <div class="header-wh-meta">
                        <div class="header-meta-text" v-if="weather.main && $store.state.weatherTodayMin">
                            min. {{ $store.state.weatherTodayMin | round }}<sup>o</sup><br>
                            max. {{ $store.state.weatherTodayMax | round }}<sup>o</sup><br>
                            {{ weather.wind.speed | round }} m/s
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 header-right">
                <div class="header-date">
                    {{ date | moment("dddd [d.] DD. MMMM") }}
                </div>
                <div class="header-time">
                    {{ date | moment("HH:mm") }}<span class="time-seconds">{{ date | moment(":ss") }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as weatherService from '../../services/weatherService'
    export default {
        data () {
            return {
                date: '',
                weather: []
            }
        },
        created () {
            this.liveClock()
            this.getWeather()
            this.date = new Date()
        },
        methods: {
            liveClock () {
                let self = this
                setInterval(function () {
                    self.date = new Date()
                }, 1000)
            },
            getWeather () {
                weatherService.now({'q': this.$store.state.city}, (response) => {
                    this.weather = response.data
                }, () => {
                    this.$toastr('error', 'Vejret lige nu kunne ikke hentes')
                })
            }
        },
        components: {
            'icon-converter': require('../elements/icon-converter.vue')
        },
        filters: {
            round (value) {
                return value.toFixed()
            }
        }
    }
</script>
<style>
    .time-seconds{
        color: rgba(255,255,255,0.5);
    }
</style>
