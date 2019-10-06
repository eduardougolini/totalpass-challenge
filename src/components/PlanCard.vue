<template>
    <div class="carousel-cell">
        <h1>{{ title }}</h1>
        <img src="@/assets/logo.svg" />
        <div class="dotted-line"></div>
        <h2>{{ subtitle }}</h2>
        <span v-html="description"></span>
        <h2 class="value-info">R$ {{ planValue }} / MÊS</h2>
    </div>
</template>

<script>
export default {
    name: 'PlanCard',
    data() {
        return {
            title: 'MEGA',
            subtitle: 'PLANO FIT +',
            description: '<b>Bio ritmo:</b> Belém, Limeira, Piracicaba, Shopping Metropolitano, Centro, Chácara Santo Antônio, Continental, Santana, Santo André, São Caetano, Tamboré e West Plaza.',
            planValue: '100'
        }
    }
}
</script>

<style scoped>
    .carousel-cell {
        width: 80%;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        text-transform: uppercase;
        color: #00BA9F;
    }

    h2 {
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        text-transform: uppercase;
        color: #2D595E;
        margin: unset;
    }

    span {
        font-family: Source Sans Pro;
        font-style: normal;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #222222;
        margin: 15px 0;
    }

    .dotted-line {
        width: 100%;
        margin: 15px 0;
        border-bottom: 1px dashed #C2D6D7
    }

    .value-info {
        margin: 15px 0;
    }
</style>