<template>
    <div style="color:#fff" v-if="trackInfo">
        {{ trackInfo }}<br><br>
        Sang: {{ trackInfo.item.name }}<br>
        Kunstner:
        <span v-for="(artist, index) in trackInfo.item.artists">
            {{ artist.name }}<span v-if="index + 1 !== trackInfo.item.artists.length">, </span>
        </span><br>
        Tid gået: {{ trackInfo.progress_ms }}<br>
        Tid i alt: {{ trackInfo.item.duration_ms }}<br>
        Albumbillede URL: {{ trackInfo.item.album.images[0].url }}<br>
        Afspiller på: {{ trackInfo.device.name }}<br>
        Lydstyrke: {{ trackInfo.device.volume_percent }}%<br>
        Status: {{ trackInfo.is_playing }}
    </div>
</template>
<script>
    // import * as spotifyService from '../../services/spotifyService'
    import axios from 'axios'
    export default {
        data () {
            return {
                trackInfo: []
            }
        },
        created () {
            this.getTrackInfo()
            setInterval(() => {
                this.getTrackInfo()
            }, 1 * 1000)
        },
        methods: {
            getTrackInfo () {
                let self = this
                let instance = axios.create()
                let namespace = 'https://api.spotify.com/v1/me/player'
                Object.assign(instance.defaults, {headers: {authorization: 'Bearer BQCZWU11eXLfUEBWOhtQkpuTHnOxx7YRg8G8HG0aM0KG41qR3efTJTRYB3dj5kRIgIQOk9i6n6TfCuRHst8Wb5t0JJh87VUxO4SGex0Mt5tpndUEsfOmOpwtvcH3Wz7-5mNfWYnKw8ODXskG7UOd8A'}})
                instance.get(namespace)
                .then(function (response) {
                    self.trackInfo = response.data
                }, () => {
                    this.$toastr('error', 'Spotify kunne ikke hentes')
                })
            }
        }
    }
</script>
