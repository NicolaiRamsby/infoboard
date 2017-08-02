<template>
    <div>
        <div v-if="isOnline">
            <div v-if="dimensionsOK">
                <div class="content" :class="{'loading-active': $store.state.loading}">
                    <loader></loader>
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
                </div>
                <div @click="refresh()" style="padding:20px;background:red;color:#fff;position:absolute;right:50px;bottom:50px;">OPDATER</div>
            </div>
            <dimension-error v-else></dimension-error>
        </div>
        <offline v-else></offline>
    </div>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                isOnline: true,
                dimensionsOK: true
            }
        },
        created () {
            this.updateStatus()
            // this.checkDimensions()
            this.tempHax()
            window.addEventListener('resize', this.checkDimensions)
            // window.addEventListener('touchmove', function (e) { e.preventDefault() }, false)
        },
        components: {
            'offline': require('@/components/core/offline'),
            'loader': require('@/components/core/loader'),
            'dimension-error': require('@/components/elements/dimension-error')
        },
        methods: {
            refresh () {
                location.reload()
            },
            checkDimensions () {
                let userAgent = window.navigator.userAgent
                let iPadIdentifier = 'iPad'
                let height = window.innerHeight
                let width = window.innerWidth
                if (userAgent.match(iPadIdentifier)) {
                    if (height === 1282 && width === 980) {
                        this.dimensionsOK = true
                    } else {
                        this.dimensionsOK = false
                    }
                } else {
                    this.dimensionsOK = false
                }
            },
            updateStatus: function () {
                if (typeof window.navigator.onLine === 'undefined') {
                    this.isOnline = true
                } else {
                    this.isOnline = window.navigator.onLine
                }
                window.addEventListener('online', this.updateStatus)
                window.addEventListener('offline', this.updateStatus)
            }
        }
    }
</script>
