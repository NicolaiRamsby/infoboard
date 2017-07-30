<template>
    <div class="element-wrapper">
        <div class="element-box calendar">
            <headline :headline="headline.title" :headlineMeta="headline.meta" :icon="headline.icon"></headline>
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
</template>
<script>
    export default {
        data () {
            return {
                headline: {
                    title: 'KALENDER',
                    meta: 'calendar',
                    icon: 'android-calendar'
                }
            }
        }
    }
</script>
