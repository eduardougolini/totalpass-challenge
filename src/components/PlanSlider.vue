<template>
    <div>
        <flickity ref="flickity" :options="slideOptions">
            <MegaPlan />
            <MegaPlan />
        </flickity>
    </div>
</template>

<script>
import Flickity from 'vue-flickity';

import MegaPlan from '@/components/plans/MegaPlan';

export default {
    name: 'PlanSlider',
    components: {
        Flickity,
        MegaPlan
    },
    data() {
        return {
            slideOptions: {
                "pageDots": false,
                "resize": false,
                "wrapAround": true
            }
        }
    }
}
</script>