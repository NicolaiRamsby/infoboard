<template>
    <div>
        <div id="wrapper">
            <div class="col-sm-12 header">
                <div class="row">
                    <div class="col-sm-6 header-left">
                        <div class="header-wh-degrees">
                            19<sup>o</sup>
                        </div>
                        <div class="header-wh-icon">
                            <span class="ion-ios-rainy-outline"></span>
                        </div>
                    </div>
                    <div class="col-sm-6 header-right">
                        <div class="header-date">
                            Fredag 25. juni
                        </div>
                        <div class="header-time">
                            {{ date | moment("hh") }}<span :style="'color:' + color">:</span>{{ date | moment("mm") }}<span style="color:rgba(255,255,255,0.5)">:{{ date | moment("ss") }}</span>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-sm-7">
                <div class="element-wrapper">
                    <weather></weather>
                </div>
                <div class="element-wrapper">
                    <climate></climate>
                </div>
                <div class="element-wrapper">
                    <hue></hue>
                </div>
            </div>
            <div class="col-sm-5">
                <div class="element-wrapper">
                    <div class="element-box calendar">
                        <div class="headline">
                            <span class="ion-android-calendar"></span>
                            KALENDER
                        </div>
                        <div class="date-divider">
                            <div class="dd-left">
                                I DAG
                            </div>
                            <div class="dd-right">
                                26. JUNI
                            </div>
                        </div>
                        <div class="element-content calendar-white">
                            <div class="ca-app">
                                Frisør
                            </div>
                            <div class="ca-time">
                                10.00
                            </div>
                        </div>
                        <div class="element-content calendar-white">
                            <div class="ca-app">
                                Quooker møde
                            </div>
                            <div class="ca-time">
                                12.00
                            </div>
                        </div>
                        <div class="element-content calendar-white">
                            <div class="ca-app">
                                Besøge familien i Roskilde
                            </div>
                            <div class="ca-time">
                                17.00
                            </div>
                        </div>
                        <div class="date-divider">
                            <div class="dd-left">
                                FREDAG
                            </div>
                            <div class="dd-right">
                                28. JULI
                            </div>
                        </div>
                        <div class="element-content calendar-white">
                            <div class="ca-app">
                                IKEA
                            </div>
                            <div class="ca-time">
                                10.00
                            </div>
                        </div>
                        <div class="element-content calendar-white">
                            <div class="ca-app">
                                Sørens housewarming
                            </div>
                            <div class="ca-time">
                                20.00
                            </div>
                        </div>
                        <div class="date-divider">
                            <div class="dd-left">
                                LØRDAG
                            </div>
                            <div class="dd-right">
                                29. JULI
                            </div>
                        </div>
                        <div class="element-content calendar-white">
                            <div class="ca-app">
                                IKEA
                            </div>
                            <div class="ca-time">
                                09.00
                            </div>
                        </div>
                        <div class="element-content calendar-white">
                            <div class="ca-app">
                                Ses med Caro
                            </div>
                            <div class="ca-time">
                                18.00
                            </div>
                        </div>
                        <div class="date-divider">
                            <div class="dd-left">
                                SØNDAG
                            </div>
                            <div class="dd-right">
                                30. JULI
                            </div>
                        </div>
                        <div class="element-content calendar-white">
                            <div class="ca-app">
                                Fly til Barcelona
                            </div>
                            <div class="ca-time">
                                06.15
                            </div>
                        </div>
                        <div class="date-divider">
                            <div class="dd-left">
                                MANDAG
                            </div>
                            <div class="dd-right">
                                31. JULI
                            </div>
                        </div>
                        <div class="date-divider">
                            <div class="dd-left">
                                TIRSDAG
                            </div>
                            <div class="dd-right">
                                1. AUGUST
                            </div>
                        </div>
                        <div class="date-divider">
                            <div class="dd-left">
                                ONSDAG
                            </div>
                            <div class="dd-right">
                                2. AUGUST
                            </div>
                        </div>
                        <div class="date-divider">
                            <div class="dd-left">
                                TORSDAG
                            </div>
                            <div class="dd-right">
                                3. AUGUST
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Index',
        data () {
            return {
                color: '#fff',
                date: ''
            }
        },
        created () {
            this.liveClock()
            this.date = new Date()
        },
        components: {
            'weather': require('../../components/elements/weather.vue'),
            'climate': require('../../components/elements/climate.vue'),
            'hue': require('../../components/elements/hue.vue')
        },
        methods: {
            liveClock () {
                let self = this
                setInterval(function () {
                    self.date = new Date()
                    if (self.color === '#fff') {
                        // self.color = 'rgba(255,255,255,0.75)'
                    } else {
                        // self.color = '#fff'
                    }
                }, 1000)
            }
        }
    }
</script>
