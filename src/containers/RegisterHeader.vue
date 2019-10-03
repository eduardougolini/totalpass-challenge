<template>
    <div class="header-box">
        <h1>Cadastro</h1>
        <h2>{{ subtitle }}</h2>
    </div>
</template>

<script>
export default {
    name: 'RegisterHeader',
    props: {
        subtitle: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    .header-box {
        margin: 20px 0 20px 0;
    }
</style>