<template>
    <div>
        <RegisterHeader />
        <FooterSteps :actualStep="3" />
    </div>
</template>

<script>
import RegisterHeader from '@/containers/RegisterHeader';
import FooterSteps from '@/components/FooterSteps';

export default {
    name: 'RegistrationCompleted',
    components: {
        RegisterHeader,
        FooterSteps
    }
}
</script>