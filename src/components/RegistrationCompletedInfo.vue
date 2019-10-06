<template>
    <div class="container">
        <div class="info-box">
            <img src="@/assets/checked.svg" />
            <h1>CADASTRO CONCLUÍDO</h1>
            <h2>Acesse a sua conta e comece a se exercitar agora mesmo!</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegistrationCompletedInfo'
}
</script>

<style scoped>
    .container {
        background-color: #F7FAFA;
        padding-bottom: 15px;
        display: flex;
        justify-content: center;
    }

    .info-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 65%;
    }

    h1 {
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        color: #00BA9F;
    }

    h2 {
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #2D595E;
    }
</style>