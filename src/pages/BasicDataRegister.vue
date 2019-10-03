<template>
    <div>
        <RegisterHeader :subtitle="'Dados Pessoais'" />
        <RegisterDataForm />
    </div>
</template>

<script>
    import RegisterHeader from '@/containers/RegisterHeader';
    import RegisterDataForm from '@/containers/RegisterDataForm';

    export default {
        name: 'BasicDataRegister',
        components: {
            RegisterHeader,
            RegisterDataForm
        }
    }
</script>