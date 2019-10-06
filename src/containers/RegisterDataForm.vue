<template>
    <div class="container">
        <UserImage />

        <form class="basic-data-form">
            <CustomInput 
                v-model="userModel.name"
                :name="'Nome Completo'"
                :value="userData.name"
            />
            <CustomInput
                v-model="userModel.cpf"
                :name="'CPF'"
                :value="userData.cpf"
            />
            <CustomInput
                v-model="userModel.phone"
                :name="'Celular'"
                :value="userData.phone"
            />
            <CustomInput 
                v-model="userModel.birth"
                :name="'Data de nascimento'" 
                :inputType="'date'" 
                :isRequired="false" 
            />
            <CustomInput 
                v-model="userModel.gender"
                :name="'Gênero'" 
                :inputType="'select'" 
                :selectOptions="genderValues" 
                :isRequired="false" 
            />
        </form>

        <NextButton @clicked-forward-button="setRegisterData(userModel)" />
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    import UserImage from '@/components/UserImage';
    import NextButton from '@/components/NextButton';
    import CustomInput from '@/components/CustomInput';
    import { TOTAL_PASS } from '@/store/modules';

    export default {
        name: 'RegisterDataForm',
        data() {
            return {
                userModel: {
                    name: '',
                    cpf: '',
                    phone: '' 
                },
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
        },
        computed: {
            ...mapState(TOTAL_PASS, [
                'userData'
            ])
        },
        methods: {
            ...mapActions(TOTAL_PASS, [
                'setRegisterData'
            ])
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