<template>
    <div>
        <button @click="$emit('clicked-forward-button')">
            AVANÇAR
        </button>    
    </div>
</template>

<script>
export default {
    name: 'NextButton'
}
</script>

<style scoped>
    div {
        display: flex;
        justify-content: center;
    }

    button {
        background-color: #00B098;
        color: #F7FAFA;
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 24px;
        border: none;
        border-radius: 50px;
        width: 80%;
        height: 40px;
    }
</style>