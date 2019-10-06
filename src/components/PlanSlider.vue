<template>
    <div>
        <flickity ref="flickity" :options="slideOptions">
            <PlanCard />
            <PlanCard />
        </flickity>
    </div>
</template>

<script>
import Flickity from 'vue-flickity';

import PlanCard from '@/components/PlanCard';

export default {
    name: 'PlanSlider',
    components: {
        Flickity,
        PlanCard
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