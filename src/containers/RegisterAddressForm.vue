<template>
    <div class="container">
        <form class="address-form">
            <CustomInput 
                v-model="addressModel.cep"
                :name="'CEP'"
                :value="addressData.cep"
                :customClasses="{ 'error': this.$v['addressModel'].cep.$dirty && this.$v['addressModel'].cep.$invalid }"
            />
            <CustomInput 
                v-model="addressModel.address"
                :name="'Endereço'"
                :value="addressData.address"
                :customClasses="{ 'error': this.$v['addressModel'].address.$dirty && this.$v['addressModel'].address.$invalid }"
            />
            <CustomInput 
                v-model="addressModel.number"
                :name="'Número'"
                :value="addressData.number"
                :customClasses="{ 'error': this.$v['addressModel'].number.$dirty && this.$v['addressModel'].number.$invalid }"
            />
            <CustomInput 
                v-model="addressModel.complement"
                :name="'Complemento'"
                :value="addressData.complement"
                :isRequired="false"
            />
            <CustomInput 
                v-model="addressModel.district"
                :name="'Bairro'"
                :value="addressData.district"
                :isRequired="false"
            />
            <CustomInput 
                v-model="addressModel.city"
                :name="'Cidade'"
                :value="addressData.city"
                :customClasses="{ 'error': this.$v['addressModel'].city.$dirty && this.$v['addressModel'].city.$invalid }"
            />
            <CustomInput 
                v-model="addressModel.state"
                :name="'Estado'"
                :value="addressData.state"
                :customClasses="{ 'error': this.$v['addressModel'].state.$dirty && this.$v['addressModel'].state.$invalid }"
            />
        </form>

        <NextButton @clicked-forward-button="validateAndGo()" />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators'

import NextButton from '@/components/NextButton';
import CustomInput from '@/components/CustomInput';
import { TOTAL_PASS } from '@/store/modules';

export default {
    name: 'RegisterAddressForm',
    data() {
        return {
            addressModel: {
                cep: '',
                address: '',
                number: '',
                complement: '',
                district: '',
                city: '',
                state: ''
            }
        }
    },
    components: {
        NextButton,
        CustomInput
    },
    computed: {
        ...mapState(TOTAL_PASS, [
            'addressData'
        ])
    },
    validations: {
        addressModel: {
            cep: {
                required
            },
            address: {
                required
            },
            number: {
                required
            },
            city: {
                required
            },
            state: {
                required
            }
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #F7FAFA;
        padding-bottom: 15px;
    }

    .address-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px 0;
    }
</style>