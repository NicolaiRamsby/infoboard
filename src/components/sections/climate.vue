<template>
    <div class="element-wrapper">
        <div class="element-box climate">
            <headline :headline="headline.title" :headlineMeta="headline.meta" :icon="headline.icon"></headline>
            <div class="element-content">
                <div class="row">
                    <div class="col-sm-3 cl-box">
                        <div class="cl-icon">
                            <span class="ion-thermometer"></span>
                        </div>
                        <div class="cl-text">
                            Temperatur
                        </div>
                        <div class="cl-data">
                            21<sup>o</sup>
                        </div>
                    </div>
                    <div class="col-sm-3 cl-box">
                        <div class="cl-icon">
                            <span class="ion-waterdrop"></span>
                        </div>
                        <div class="cl-text">
                            Fugtighed
                        </div>
                        <div class="cl-data">
                            70<span style="font-size:12px;">%</span>
                        </div>
                    </div>
                    <div class="col-sm-3 cl-box">
                        <div class="cl-icon">
                            <span class="ion-shuffle"></span>
                        </div>
                        <div class="cl-text">
                            CO<sup>2</sup>
                        </div>
                        <div class="cl-data">
                            710<span style="font-size:12px;">ppm</span>
                        </div>
                    </div>
                    <div class="col-sm-3 cl-box">
                        <div class="cl-icon">
                            <span class="ion-volume-medium"></span>
                        </div>
                        <div class="cl-text">
                            Støj
                        </div>
                        <div class="cl-data">
                            39<span style="font-size:12px;">dB</span>
                        </div>
                    </div>
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
                    title: 'INDEKLIMA',
                    meta: '3 sensorer',
                    icon: 'thermometer'
                }
            }
        }
    }
</script>
