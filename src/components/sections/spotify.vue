<template>
    <div class="element-wrapper">
        <div class="element-box spotify">
            <headline :headline="headline.title" :headlineMeta="headline.meta" :icon="headline.icon"></headline>
            <div class="spotify-app-wrapper">
                <div class="element-content" style="color:#fff">
                    {{ song }}
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
                    title: 'SPOTIFY',
                    meta: '"stue"',
                    icon: 'ios-musical-notes'
                },
                song: ''
            }
        },
        created () {
            this.getCurrentSong()
        },
        methods: {
            getCurrentSong () {
                this.song = 'let us get the current song!'
            }
        }
    }
</script>
