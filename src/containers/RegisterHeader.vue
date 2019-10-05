<template>
    <div class="header-box">
        <div class="back-button" v-if="backButton">
            <img src="@/assets/up-arrow.svg">
        </div>
        <div>
            <h1>Cadastro</h1>
            <h2>{{ subtitle }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterHeader',
    props: {
        subtitle: {
            type: String,
            required: true
        },
        backButton: {
            type: String,
            required: false,
            default: () => ''
        }
    }
}
</script>

<style scoped>
    .header-box {
        margin: 20px 0 20px 0;
        display: flex;
        position: relative;
        text-align: center;
        justify-content: center;
    }

    .back-button {
        width: 25px;
        transform: rotate(270deg);
        position: absolute;
        left: 15px;
        color: #C2D6D7;
    }

    h1 {
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        margin: unset;
        color: #222222;
    }

    h2 {
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: #C2D6D7;
        margin: unset;
    }
</style>