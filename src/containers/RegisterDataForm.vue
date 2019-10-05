<template>
    <div class="container">
        <UserImage />

        <form class="basic-data-form">
            <CustomInput :name="'Nome Completo'"/>
            <CustomInput :name="'CPF'"/>
            <CustomInput :name="'Celular'"/>
            <input placeholder="Data de nascimento" type="text">
            <select placeholder="Gênero">
                <option value="" disabled selected>Gênero</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
            </select>
        </form>

        <NextButton />
    </div>
</template>

<script>
    import UserImage from '@/components/UserImage';
    import NextButton from '@/components/NextButton';
    import CustomInput from '@/components/CustomInput';

    export default {
        name: 'RegisterDataForm',
        components: {
            UserImage,
            NextButton,
            CustomInput
        }
    }
</script>

<style scoped>
    .container {
        background-color: #F7FAFA;
        padding-bottom: 15px;
    }

    .basic-data-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px 0;
    }
</style>