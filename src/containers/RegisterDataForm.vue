<template>
    <div class="container">
        <UserImage />
        <NextButton />
    </div>
</template>

<script>
    import UserImage from '@/components/UserImage';
    import NextButton from '@/components/NextButton';

    export default {
        name: 'RegisterDataForm',
        components: {
            UserImage,
            NextButton
        }
    }
</script>

<style scoped>
    .container {
        background-color: #F7FAFA;
        padding-bottom: 15px;
    }
</style>