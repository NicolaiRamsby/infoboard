<template>
    <div class="element-box hue">
        <div class="headline">
            <span class="ion-lightbulb"></span>
            HUE
        </div>
        <div class="element-content">
            <div class="row">
                <div class="col-sm-3 hue-wrapper livingroom">
                    <div class="ph-color">

                    </div>
                    <div class="ph-text">
                        <span>Stue</span><br>loft
                    </div>
                </div>
                <div class="col-sm-3 hue-wrapper n-ceiling">
                    <div class="ph-color">

                    </div>
                    <div class="ph-text">
                        <span>Nicolai</span><br>loft
                    </div>
                </div>
                <div class="col-sm-3 hue-wrapper n-dresser">
                    <div class="ph-color">

                    </div>
                    <div class="ph-text">
                        <span>Nicolai</span><br>kommode
                    </div>
                </div>
                <div class="col-sm-3 hue-wrapper n-window">
                    <div class="ph-color">
                        <span class="ion-close"></span>
                    </div>
                    <div class="ph-text">
                        <span>Nicolai</span><br>vindue
                    </div>
                </div>
                <div class="col-sm-3 hue-wrapper n-ceiling">
                    <div class="ph-color">
                        <span class="ion-close"></span>
                    </div>
                    <div class="ph-text">
                        <span>Niclas</span><br>loft
                    </div>
                </div>
                <div class="col-sm-3 hue-wrapper livingroom">
                    <div class="ph-color">

                    </div>
                    <div class="ph-text">
                        <span>Køkken</span><br>spisebord
                    </div>
                </div>
                <div class="col-sm-3 hue-wrapper n-ceiling">
                    <div class="ph-color">

                    </div>
                    <div class="ph-text">
                        <span>Køkken</span><br>bord
                    </div>
                </div>
                <div class="col-sm-3 hue-wrapper n-dresser">
                    <div class="ph-color">

                    </div>
                    <div class="ph-text">
                        <span>Gæstev.</span><br>loft
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <div class="col-sm-6 hue-on" @click="turnOn()">
                        <div>
                            Tænd alle
                        </div>
                    </div>
                    <div class="col-sm-6 hue-off" @click="turnOff()">
                        <div>
                            Sluk alle
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            turnOn () {
                this.$swal({
                    title: '<i class="fa fa-spinner fa-spin"></i>&nbsp;Knokler..',
                    type: 'info',
                    timer: '3000',
                    showConfirmButton: false
                })
                let self = this
                setTimeout(function () {
                    self.$swal({
                        title: 'Alle lys er nu tændt',
                        type: 'success',
                        timer: '3000',
                        showConfirmButton: false
                    })
                }, 3000)
            },
            turnOff () {
                this.$swal({
                    title: '<i class="fa fa-spinner fa-spin"></i>&nbsp;Knokler..',
                    type: 'info',
                    timer: '3000',
                    showConfirmButton: false
                })
                let self = this
                setTimeout(function () {
                    self.$swal({
                        title: 'Alle lys er nu slukket',
                        type: 'success',
                        timer: '3000',
                        showConfirmButton: false
                    })
                }, 3000)
            }
        }
    }
</script>
