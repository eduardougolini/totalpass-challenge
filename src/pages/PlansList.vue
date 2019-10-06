<template>
    <div>
        <RegisterHeader :subtitle="'Planos'" :backButton="true" />
        <PlanChooser />
        <FooterSteps :actualStep="3" />
    </div>
</template>

<script>
import RegisterHeader from '@/containers/RegisterHeader';
import PlanChooser from '@/containers/PlanChooser';
import FooterSteps from '@/components/FooterSteps';

export default {
    name: 'PlansList',
    components: {
        RegisterHeader,
        PlanChooser,
        FooterSteps
    }
}
</script>