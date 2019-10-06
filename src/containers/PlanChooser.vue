<template>
    <div class="container">
        <div>
            <div class="plan-info">
                <p>Escolha seu plano</p>
            </div>

            <PlanSlider />
        </div>

        <NextButton @clicked-forward-button="$router.push({ name: 'RegistrationCompleted' })" />
    </div>
</template>

<script>
import NextButton from '@/components/NextButton';
import PlanSlider from '@/components/PlanSlider';

export default {
    name: 'planChooser',
    components: {
        NextButton,
        PlanSlider
    }
}
</script>

<style scoped>
    .container {
        background-color: #F7FAFA;
        padding-top: 30px;
        padding-bottom: 15px;
        height: calc(100vh - 165px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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