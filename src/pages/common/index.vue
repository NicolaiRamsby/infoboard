<template>
    <div>
        <div id="wrapper">
            <main-header></main-header>
            <div class="col-sm-7">
                <weather></weather>
                <climate></climate>
                <hue></hue>
            </div>
            <div class="col-sm-5">
                <calendar></calendar>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Index',
        components: {
            'main-header': require('../../components/layout/header.vue'),
            'weather': require('../../components/sections/weather.vue'),
            'climate': require('../../components/sections/climate.vue'),
            'hue': require('../../components/sections/hue.vue'),
            'calendar': require('../../components/sections/calendar.vue')
        }
    }
</script>
