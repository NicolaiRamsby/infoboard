<template>
    <div class="element-wrapper">
        <div class="element-box hue">
            <headline :headline="headline.title" :headlineMeta="headline.meta" :icon="headline.icon"></headline>
            <div class="hue-app-wrapper">
                <div class="element-content">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="col-sm-3 bulb-wrapper" v-for="bulb in bulbs">
                                {{ bulb.id }}<br>
                                {{ bulb.name }}<br>
                                {{ bulb.room }}<br>
                                {{ bulb.color }}<br>
                                {{ bulb.status }}
                            </div>
                            <div class="col-sm-3 bulb-wrapper" v-for="bulb in bulbs">
                                {{ bulb.id }}<br>
                                {{ bulb.name }}<br>
                                {{ bulb.room }}<br>
                                {{ bulb.color }}<br>
                                {{ bulb.status }}
                            </div>
                            <div class="col-sm-3 bulb-wrapper" v-for="bulb in bulbs">
                                {{ bulb.id }}<br>
                                {{ bulb.name }}<br>
                                {{ bulb.room }}<br>
                                {{ bulb.color }}<br>
                                {{ bulb.status }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 hue-buttons">
                    <div class="col-sm-6" align="center">
                        <button class="btn btn-success" @click="turnOn()" :disabled="$store.state.loading">
                            Tænd alle
                        </button>
                    </div>
                    <div class="col-sm-6" align="center">
                        <button class="btn btn-danger" @click="turnOff()" :disabled="$store.state.loading">
                            Sluk alle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                headline: {
                    icon: 'lightbulb',
                    title: 'HUE',
                    meta: '3 enheder'
                },
                bulbs: [
                    {
                        id: 1,
                        name: 'Loft',
                        room: 'Nicolai',
                        color: '#ffffff',
                        status: true
                    },
                    {
                        id: 2,
                        name: 'Kommode',
                        room: 'Nicolai',
                        color: '#cccccc',
                        status: false
                    },
                    {
                        id: 3,
                        name: 'Vindue',
                        room: 'Nicolai',
                        color: '#F7F7F7',
                        status: true
                    }
                ]
            }
        },
        methods: {
            turnOn () {
                let self = this
                this.$store.state.loading = true
                setTimeout(function () {
                    // do function
                    self.$store.state.loading = false
                }, 1500)
            },
            turnOff () {
            }
        }
    }
</script>
