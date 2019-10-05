<template>
    <div>
        <RegisterHeader :subtitle="'Dados Pessoais'" />
        <RegisterDataForm />
        <FooterSteps :actualStep="1" />
    </div>
</template>

<script>
    import RegisterHeader from '@/containers/RegisterHeader';
    import RegisterDataForm from '@/containers/RegisterDataForm';
    import FooterSteps from '@/components/FooterSteps';

    export default {
        name: 'BasicDataRegister',
        components: {
            RegisterHeader,
            RegisterDataForm,
            FooterSteps
        }
    }
</script>