<template>
    <div>
        <RegisterHeader :subtitle="'Endereço'" :backButton="true" />
        <FooterSteps :actualStep="2" />
    </div>
</template>

<script>
import RegisterHeader from '@/containers/RegisterHeader';
import FooterSteps from '@/components/FooterSteps';

export default {
    name: 'AddressRegister',
    components: {
        RegisterHeader,
        FooterSteps
    }
}
</script>