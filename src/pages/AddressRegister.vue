<template>
    <div class="address-register">
        <RegisterHeader :subtitle="'Endereço'" :backButton="true" />
        <RegisterAddressForm />
        <FooterSteps :actualStep="2" />
    </div>
</template>

<script>
import RegisterHeader from '@/containers/RegisterHeader';
import RegisterAddressForm from '@/containers/RegisterAddressForm';
import FooterSteps from '@/components/FooterSteps';

export default {
    name: 'AddressRegister',
    components: {
        RegisterHeader,
        RegisterAddressForm,
        FooterSteps
    }
}
</script>