<template>
    <div class="element-wrapper">
        <div class="element-box spotify">
            <headline :headline="headline.title" :headlineMeta="headline.meta" :icon="headline.icon"></headline>
            <div class="spotify-app-wrapper">
                <div style="overflow:hidden" v-if="loggedIn">
                    <div class="spotify-overlay" :style="albumart"></div>
                </div>
                <div class="element-content spotify-on-top" v-if="loggedIn">
                    <div v-if="spotify.song.length > 0" style="margin-left:-10px;">
                        <span class="spf spf-playing">{{ spotify.status }}</span>
                        <span class="spf spf-song">{{ spotify.song }}</span>
                        <span class="spf spf-artist">{{ spotify.artist }}</span>
                    </div>
                    <div v-else>
                        <i class="fa fa-refresh fa-spin"></i>
                    </div>
                </div>
                <div style="line-height:200px;width:324px;text-align:center;position:absolute;" v-if="!loggedIn">
                    <button @click="tester()" class="btn">
                        Spotify login
                    </button>
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
                spotify: {
                    song: '',
                    artist: '',
                    album: '',
                    status: ''
                },
                albumart: '',
                loggedIn: false
            }
        },
        mounted () {
            this.getCurrentSong()
        },
        methods: {
            getCurrentSong () {
                setInterval(() => {
                    this.spotify.song = window.spotifySong
                    this.spotify.album = window.spotifyAlbum
                    this.spotify.artist = window.spotifyArtist
                    this.spotify.status = window.spotifyPlaying
                    this.albumart = 'background:url(' + window.spotifyAlbum + ') center'
                    this.loggedIn = window.login
                }, 1 * 1000)
            },
            tester () {
                window.dispatchEvent(new Event('spf-login'))
            }
        }
    }
</script>
