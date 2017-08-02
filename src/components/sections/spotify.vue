<template>
    <div class="element-wrapper">
        <div class="element-box spotify">
            <headline :headline="headline.title" :headlineMeta="headline.meta" :icon="headline.icon"></headline>
            <div class="spotify-app-wrapper" style="color:#fff">
                <div class="spf-song">{{ spotify.song }}</div>
                <div class="spf-artists">
                    <span v-for="(artist, index) in spotify.artists">
                        {{ artist.name }}<span v-if="index + 1 !== spotify.artists.length">, </span>
                    </span>
                </div>
                <div class="spf-time" :style="'background:#fff;height:2px;transition:2s ease all;width:' + spotify.progress + '%;'"></div>
                <div class="spf-album"><img :src="spotify.album" style="width:100px;"></div>
                <div class="spf-device">{{ spotify.playingOn }}</div>
                <div class="spf-volume">{{ spotify.volume }}</div>
                <div class="spf-status">{{ spotify.status }}</div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                headline: {
                    title: 'SPOTIFY',
                    meta: '"stue"',
                    icon: 'ios-musical-notes'
                },
                spotify: {
                    song: '',
                    artists: [],
                    progress: '',
                    album: '',
                    playingOn: '',
                    volume: '',
                    status: ''
                }
            }
        },
        created () {
            this.getTrackInfo()
            setInterval(() => {
                this.getTrackInfo()
            }, 2 * 1000)
        },
        methods: {
            getTrackInfo () {
                let self = this
                let instance = axios.create()
                let namespace = 'https://api.spotify.com/v1/me/player'
                Object.assign(instance.defaults, {headers: {authorization: 'Bearer BQDU-sXyG6wjH4nCCP6hJ8C73LTd-50TxFkl50Mj3Y6OMwzG1M5PhF8CirqOhNTwqe1_8jkGMRvutNXnOnChOYGZH-U_Nav8rWjnmAISGz1XU7DpJX2EzG5ElvILaXgz1IfcgVbrIJlclIxeQLGdxQ'}})
                instance.get(namespace)
                    .then(function (response) {
                        self.spotify.song = response.data.item.name
                        self.spotify.artists = response.data.item.artists
                        self.spotify.progress = response.data.progress_ms / response.data.item.duration_ms * 100
                        self.spotify.album = response.data.item.album.images[0].url
                        self.spotify.playingOn = response.data.device.name
                        self.spotify.volume = response.data.device.volume_percent
                        self.spotify.status = response.data.is_playing ? 'Afspiller' : 'Sat på pause'
                    }, () => {
                        this.$toastr('error', 'Spotify kunne ikke hentes')
                    })
            }
        }
    }
</script>
