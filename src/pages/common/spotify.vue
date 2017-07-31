<template>
    <div style="color:#fff">
        Album: <img :src="album" style="width:100px;height:100px"><br>
        Sang: {{ song }}<br>
        Kunstner: {{ artist }}<br>
        Status: {{ playing }}
    </div>
</template>
<script>
    export default {
        data () {
            return {
                album: '',
                song: '',
                artist: '',
                playing: ''
            }
        },
        mounted () {
            this.checkSpotify()
            setInterval(() => {
                console.log(window.login)
            })
        },
        methods: {
            checkSpotify () {
                setInterval(() => {
                    console.log('loop')
                    this.album = window.spotifyAlbum
                    this.song = window.spotifySong
                    this.artist = window.spotifyArtist
                    this.playing = window.spotifyPlaying
                }, 1 * 1000)
            }
        }
    }
</script>
