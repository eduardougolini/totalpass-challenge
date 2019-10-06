<template>
    <div class="container">
        <UserImage />

        <form class="basic-data-form">
            <CustomInput 
                v-model="userModel.name"
                :name="'Nome Completo'"
                :value="userData.name"
                :customClasses="{ 'error': this.$v['userModel'].name.$dirty && this.$v['userModel'].name.$invalid }"
            />
            <CustomInput
                v-model="userModel.cpf"
                :name="'CPF'"
                :value="userData.cpf"
                :customClasses="{ 'error': this.$v['userModel'].cpf.$dirty && this.$v['userModel'].cpf.$invalid }"
                :format="'###.###.###-##'"
            />
            <CustomInput
                v-model="userModel.phone"
                :name="'Celular'"
                :value="userData.phone"
                :customClasses="{ 'error': this.$v['userModel'].phone.$dirty && this.$v['userModel'].phone.$invalid }"
                :format="'(##) #####-####'"
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

        <NextButton @clicked-forward-button="validateAndGo()" />
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import { required } from 'vuelidate/lib/validators'

    import UserImage from '@/components/UserImage';
    import NextButton from '@/components/NextButton';
    import CustomInput from '@/components/CustomInput';
    import { TOTAL_PASS } from '@/store/modules';
    import CPF from 'cpf-check';
    
    const cpfValidator = (cpf) => {
        return CPF.validate(cpf);
    };

    export default {
        name: 'RegisterDataForm',
        data() {
            return {
                userModel: {
                    name: '',
                    cpf: '',
                    phone: '',
                    birth: '',
                    gender: ''
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
            ]),
            validateAndGo() {
                this.$v.$touch();

                if (this.$v.$invalid) {
                    return;
                }
                
                this.setRegisterData(this.userModel);
                this.$router.push({ name: 'AddressRegister' });
            }
        },
        validations: {
            userModel: {
                name: {
                    required
                },
                cpf: {
                    required,
                    cpfValidator
                },
                phone: {
                    required
                },
            }
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