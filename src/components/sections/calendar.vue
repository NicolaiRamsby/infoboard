<template>
    <div class="element-wrapper">
        <div class="element-box calendar" v-if="events.length > 0">
            <headline :headline="headline.title" :headlineMeta="headline.meta" :icon="headline.icon"></headline>
            <div class="calendar-app-wrapper">
                <div v-for="date in dates">
                    <div class="date-divider">
                        <div class="dd-left">{{ date.date | moment("dddd") }}</div>
                        <div class="dd-right">{{ date.date | moment("D. MMMM") }}</div>
                    </div>
                    <div class="element-content calendar-white" v-for="event in filteredEvents" v-if="event.start === date.date && !event.deleted">
                        <div class="ca-app">
                            {{ event.summary }}
                        </div>
                        <div class="ca-time">
                            {{ event.time }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as calendarService from '../../services/calendarService'
    import Vue from 'vue'
    export default {
        data () {
            return {
                headline: {
                    title: 'KALENDER',
                    meta: 'calendar',
                    icon: 'android-calendar'
                },
                count: 0,
                dates: [],
                events: []
            }
        },
        mounted () {
            this.setDates()
        },
        created () {
            this.getEvents()
            setInterval(() => {
                this.getEvents()
            }, 30 * 1000)
        },
        computed: {
            startDate: function () {
                let today = new Date()
                return Vue.moment(today).format('YYYY-MM-DD')
            },
            endDate: function () {
                let today = new Date()
                let enddate = today.setDate(today.getDate() + 28)
                return Vue.moment(enddate).format('YYYY-MM-DD')
            },
            filteredEvents: function () {
                return this.events.filter(function (event) {
                    event.time = event.start.time.slice(11, 13) + '.' + event.start.time.slice(14, 16)
                    event.start = event.start.time.slice(0, 10)
                    if (event.time === '.') {
                        // event.time = 'hele dagen'
                        // return event
                        return
                    } else {
                        return event
                    }
                })
            }
        },
        methods: {
            getEvents () {
                calendarService.get(this.startDate, this.endDate, {}, (response) => {
                    this.events = response.data.first_page.events
                }, (error) => {
                    alert('fejlen er: ' + error)
                })
            },
            setDates () {
                let now = new Date()
                let newDate = ''
                if (this.count === 0) {
                    newDate = now.setDate(now.getDate())
                } else {
                    newDate = now.setDate(now.getDate() + this.count)
                }
                    let formatted = Vue.moment(newDate).format('YYYY-MM-DD')
                if (this.count < 28) {
                    this.count = this.count + 1
                    this.dates.push({date: formatted})
                } else {
                    return
                }
                this.setDates()
            }
        }
    }
</script>
