<template>
    <div>
        <RegisterHeader :subtitle="'Planos'" :backButton="true" />
        <FooterSteps :actualStep="3" />
    </div>
</template>

<script>
import RegisterHeader from '@/containers/RegisterHeader';
import FooterSteps from '@/components/FooterSteps';

export default {
    name: 'PlansList',
    components: {
        RegisterHeader,
        FooterSteps
    }
}
</script>