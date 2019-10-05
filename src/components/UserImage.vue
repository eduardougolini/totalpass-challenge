<template>
    <div class="container">
        <img class="user-image" src="@/assets/user-default-image.svg">
        <button>ENVIAR FOTO</button>
    </div>
</template>

<script>
export default {
    name: 'UserImage'
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
    }

    .user-image {
        margin-right: 13px;
    }

    button {
        border: 1px solid #00BA9F;
        background-color: #F7FAFA;
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 24px;
        color: #00BA9F;
        border-radius: 50px;
        height: 40px;
        padding: 8px 15px;
    }
</style>