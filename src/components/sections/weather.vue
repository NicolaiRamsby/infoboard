<template>
    <div class="element-wrapper">
        <div class="element-box weather">
            <headline :headline="headline.title" :headlineMeta="headline.meta" :icon="headline.icon"></headline>
            <div id="weather-wrapper" v-if="todayForecast && fiveDayForecast">
                <div class="element-content weather" v-if="todayForecast">
                    <div class="row">
                        <div class="col-sm-2 weather-hour" v-for="hour in todayForecast.list" v-if="todayForecast">
                            <div class="wh-time">
                                {{ hour.dt * 1000 | moment("HH:mm") }}
                            </div>
                            <div class="wh-icon">
                                <icon-converter :icon="hour.weather[0].icon"></icon-converter>
                            </div>
                            <!--<div class="wh-description">
                                {{ hour.weather[0].description }}
                            </div>-->
                            <div class="wh-degrees">
                                {{ hour.main.temp | round }}<sup>o</sup>
                            </div>
                            <div class="wh-speed">
                                <i>{{ hour.wind.speed | round }} m/s</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="element-content" v-for="(day, index) in fiveDayForecast.list" v-if="fiveDayForecast && index != 0">
                    <div class="wh-date-wrapper">
                        <div class="row">
                            <div class="col-sm-3 fdf-day" v-if="day.dt">
                                {{ day.dt * 1000 | moment("ddd") }}
                                <span>
                                {{ day.dt * 1000 | moment("DD.") }}
                            </span>
                            </div>
                            <div class="col-sm-2 wh-date-icon">
                                <icon-converter :icon="day.weather[0].icon"></icon-converter>
                                <span></span>
                            </div>
                            <div class="col-sm-2 wh-date-max" v-if="day.temp">
                                {{ day.temp.max | round }}<sup>o</sup>
                            </div>
                            <div class="col-sm-2 wh-date-min">
                                {{ day.temp.min | round }}<sup>o</sup>
                            </div>
                            <div class="col-sm-3">
                                {{ day.speed | round }} m/s
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section-error v-else></section-error>
        </div>
    </div>
</template>
<script>
    import * as weatherService from '../../services/weatherService'
    export default {
        data () {
            return {
                headline: {
                    title: 'VEJR',
                    meta: 'ukendt placering',
                    icon: 'android-cloud'
                },
                todayForecast: [],
                fiveDayForecast: []
            }
        },
        created () {
            this.getWeather()
            setInterval(() => {
                this.getWeather()
            }, 30 * 1000)
        },
        methods: {
            getWeather () {
                weatherService.today({'q': this.$store.state.city, 'cnt': 6}, (response) => {
                    this.todayForecast = response.data
                    this.headline.meta = response.data.city.name
                }, (error) => {
                    alert('fejlen er: ' + error)
                })
                weatherService.fiveDays({'q': this.$store.state.city, 'cnt': 6}, (response) => {
                    this.fiveDayForecast = response.data
                    this.$store.state.weatherTodayMin = response.data.list[0].temp.min
                    this.$store.state.weatherTodayMax = response.data.list[0].temp.max
                    this.headline.meta = response.data.city.name
                }, (error) => {
                    alert('fejlen er: ' + error)
                })
            }
        },
        filters: {
            round (value) {
                return value.toFixed()
            }
        },
        components: {
            'icon-converter': require('../elements/icon-converter.vue')
        }
    }
</script>
