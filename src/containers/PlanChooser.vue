<template>
    <div class="container">
        <div class="plan-info">
            <p>Escolha seu plano</p>
        </div>

        <NextButton @clicked-forward-button="$router.push({ name: 'RegistrationCompleted' })" />
    </div>
</template>

<script>
import NextButton from '@/components/NextButton';

export default {
    name: 'planChooser',
    components: {
        NextButton
    }
}
</script>

<style scoped>
    .container {
        background-color: #F7FAFA;
        padding-top: 30px;
        padding-bottom: 15px;
    }

    .plan-info {
        display: flex;
        justify-content: center;
    }

    p {
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #222222;
    }
</style>