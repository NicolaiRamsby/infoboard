<template>
    <div style="color:#fff">
        <h1>HUE LAMPER</h1>
        <div style="padding:20px;display:inline-block;" v-for="(light, index) in lights">
            <table>
                <tr>
                    <td colspan="2" align="center">
                        <h4>{{ light.name }}</h4>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Status:</b>
                    </td>
                    <td>
                        <span v-show="light.state.on">Tændt</span>
                        <span v-show="!light.state.on">Slukket</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Lysstyrke:</b>
                    </td>
                    <td>
                        {{ light.state.bri }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Farve mætning:</b>
                    </td>
                    <td>
                        {{ light.state.sat }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Farve kode:</b>
                    </td>
                    <td>
                        {{ light.state.xy }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Farve temp.:</b>
                    </td>
                    <td>
                        {{ light.state.ct }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Forbindelse:</b>
                    </td>
                    <td>
                        <span v-show="light.state.reachable">Forbundet</span>
                        <span v-show="!light.state.reachable">Ikke forbundet</span>
                    </td>
                </tr>
            </table>
            <button class="btn btn-success" @click="turnOn(index)">Tænd</button><br>
            <button class="btn btn-danger" @click="turnOff(index)">Sluk</button><br>
            <button class="btn btn-primary" @click="darken(index, light.state.bri)">Mørkere</button><br>
            <button class="btn btn-primary" @click="lighten(index, light.state.bri)">Lysere</button><br>
        </div><br>
        <button @click="turnAllOn()" class="btn-success">
            Tænd alle lamper
        </button>
        <button @click="turnAllOff()" class="btn-danger">
            Sluk alle lamper
        </button>
    </div>
</template>
<script>
    import * as hueService from '../../services/hueService'
    export default {
        data () {
            return {
                lights: []
            }
        },
        created () {
            this.getHueInfo()
        },
        methods: {
            getHueInfo () {
                hueService.get('lights', {}, (response) => {
                    this.lights = response.data
                }, (error) => {
                    console.log('fejl: ' + error)
                })
            },
            turnAllOn () {
                this.turnOn('1')
                this.turnOn('3')
                this.turnOn('4')
            },
            turnAllOff () {
                this.turnOff('1')
                this.turnOff('3')
                this.turnOff('4')
            },
            turnOn (id) {
                hueService.update('lights/' + id + '/state', {'on': true, 'sat': 140, 'xy': [0.457, 0.4098], 'bri': 254}, (response) => {
                    this.getHueInfo()
                }, (error) => {
                    alert('der skete en fejl: ' + error)
                })
            },
            turnOff (id) {
                hueService.update('lights/' + id + '/state', {'on': false}, (response) => {
                    this.getHueInfo()
                }, (error) => {
                    alert('der skete en fejl: ' + error)
                })
            },
            darken (id, bri) {
                if (bri < 20) {
                    bri = 20
                }
                hueService.update('lights/' + id + '/state', {'on': true, 'bri': bri - 20}, (response) => {
                    this.getHueInfo()
                }, (error) => {
                    alert('der skete en fejl: ' + error)
                })
            },
            lighten (id, bri) {
                if (bri > 234) {
                    bri = 234
                }
                hueService.update('lights/' + id + '/state', {'on': true, 'bri': bri + 20}, (response) => {
                    this.getHueInfo()
                }, (error) => {
                    alert('der skete en fejl: ' + error)
                })
            }
        }
    }
</script>
<style scoped>
button.btn{
    margin-bottom: 5px;
    width: 100%;
}
</style>
