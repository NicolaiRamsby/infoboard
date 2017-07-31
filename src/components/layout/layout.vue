<template>
    <div class="content" v-if="isOnline" :class="{'loading-active': $store.state.loading}">
        <loader></loader>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
    <offline v-else></offline>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                isOnline: true
            }
        },
        created () {
            this.updateStatus()
            // window.addEventListener('touchmove', function (e) { e.preventDefault() }, false)
        },
        components: {
            'offline': require('@/components/core/offline'),
            'loader': require('../../components/core/loader')
        },
        methods: {
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
