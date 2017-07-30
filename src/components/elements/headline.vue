<template>
    <div class="headline">
        <span :class="'ion-' + icon"></span>
        {{ headline }}
        <span class="headline-meta">
            <span v-if="headlineMeta != 'calendar'">
                {{ headlineMeta }}
            </span>
            <span v-else>
                {{ date | moment("[uge ]W") }}
            </span>
        </span>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                date: new Date()
            }
        },
        props: ['icon', 'headline', 'headlineMeta']
    }
</script>
