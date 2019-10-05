<template>
    <div class="container">
        <UserImage />

        <form class="basic-data-form">
            <CustomInput :name="'Nome Completo'"/>
            <CustomInput :name="'CPF'"/>
            <CustomInput :name="'Celular'"/>
            <CustomInput :name="'Data de nascimento'" :inputType="'date'" />
            <CustomInput :name="'Gênero'" :inputType="'select'" :selectOptions="genderValues" />
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
        data() {
            return {
                genderValues: [
                    {
                        name: '',
                        value: '',
                        attributes: 'disabled selected'
                    },
                    {
                        name: 'Masculino',
                        value: 'masculino'
                    },
                    {
                        name: 'Feminino',
                        value: 'feminino'
                    },
                    {
                        name: 'Outro',
                        value: 'outro'
                    }
                ]
            }
        },
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