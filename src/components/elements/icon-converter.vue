<template>
    <div class="converted-icon">
        <span :class="convertedIcon"></span>
    </div>
</template>
<script>
    export default {
        computed: {
            convertedIcon: function () {
                switch (this.icon) {
                    case '01d':
                        return 'ion-ios-sunny-outline'
                    case '01n':
                        return 'ion-ios-moon-outline'
                    case '02d':
                        return 'ion-ios-partlysunny-outline'
                    case '02n':
                        return 'ion-ios-cloudy-night-outline'
                    case '03d':
                    case '03n':
                        return 'ion-ios-cloudy-outline'
                    case '04d':
                    case '04n':
                        return 'ion-ios-cloudy-outline'
                    case '09d':
                    case '09n':
                        return 'ion-ios-rainy-outline'
                    case '10d':
                    case '10n':
                        return 'ion-ios-rainy-outline'
                    case '11d':
                    case '11n':
                        return 'ion-ios-thunderstorm-outline'
                    case '13d':
                    case '13n':
                        return 'ion-ios-snowy'
                    case '50d':
                    case '50n':
                        return 'ion-alert-circled'
                    default:
                        return this.icon
                }
            }
        },
        props: ['icon']
    }
</script>
