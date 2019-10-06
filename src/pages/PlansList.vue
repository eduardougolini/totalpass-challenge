<template>
    <div>
        <RegisterHeader :subtitle="'Planos'" :backButton="true" />
        <PlanChooser />
        <FooterSteps :actualStep="3" />
    </div>
</template>

<script>
import { mapActions } from 'vuex';

import RegisterHeader from '@/containers/RegisterHeader';
import PlanChooser from '@/containers/PlanChooser';
import FooterSteps from '@/components/FooterSteps';
import { TOTAL_PASS } from '@/store/modules';

export default {
    name: 'PlansList',
    components: {
        RegisterHeader,
        PlanChooser,
        FooterSteps
    },
    async beforeMount() {
        await this.loadGymGifs();
    },
    methods: {
        ...mapActions(TOTAL_PASS, [
            'loadGymGifs'
        ])
    }
}
</script>