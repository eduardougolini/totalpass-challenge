<template>
    <div class="container">
        <form class="address-form">
            <CustomInput 
                v-model="cep"
                :name="'CEP'"
                :customClasses="{ 'error': this.$v['addressModel'].cep.$dirty && this.$v['addressModel'].cep.$invalid }"
                :format="'#####-###'"
            />
            <CustomInput 
                v-model="addressModel.address"
                :name="'Endereço'"
                :customClasses="{ 'error': this.$v['addressModel'].address.$dirty && this.$v['addressModel'].address.$invalid }"
            />
            <CustomInput 
                v-model="addressModel.number"
                :name="'Número'"
                :customClasses="{ 'error': this.$v['addressModel'].number.$dirty && this.$v['addressModel'].number.$invalid }"
            />
            <CustomInput 
                v-model="addressModel.complement"
                :name="'Complemento'"
                :isRequired="false"
            />
            <CustomInput 
                v-model="addressModel.district"
                :name="'Bairro'"
                :isRequired="false"
            />
            <CustomInput 
                v-model="addressModel.city"
                :name="'Cidade'"
                :customClasses="{ 'error': this.$v['addressModel'].city.$dirty && this.$v['addressModel'].city.$invalid }"
            />
            <CustomInput 
                v-model="addressModel.state"
                :name="'Estado'"
                :customClasses="{ 'error': this.$v['addressModel'].state.$dirty && this.$v['addressModel'].state.$invalid }"
                :inputType="'select'" 
                :selectOptions="brazilianStates" 
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
            addressInfo: {}
        }
    },
    components: {
        NextButton,
        CustomInput
    },
    computed: {
        ...mapState(TOTAL_PASS, [
            'addressData',
            'brazilianStates'
        ]),
        addressModel: {
            get: function () {
                return {
                    ...this.addressData,
                    ...this.addressInfo
                }
            },
            set: function (val) {
                this.addressInfo = val;
            }
        },
        cep: {
            get: function () {
                return this.addressModel.cep
            },
            set: async function (val) {
                const formatedCep = this.getFormattedCep(val);

                if (formatedCep.length != 8) {
                    return;
                }

                const cepInfo = await this.fetchCepData(formatedCep);

                if (cepInfo) {
                    this.addressModel = {
                        cep: formatedCep,
                        address: cepInfo.logradouro || '',
                        number: '',
                        complement: '',
                        district: cepInfo.bairro || '',
                        city: cepInfo.localidade || '',
                        state: cepInfo.uf || ''
                    };
                }
            }
        }
    },
    async created() {
        if (this.brazilianStates.length < 2) {
            await this.loadBrazilianStates();
        } 
    },
    methods: {
        ...mapActions(TOTAL_PASS, [
            'fetchCepData',
            'loadBrazilianStates',
            'setAddressData'
        ]),
        getFormattedCep(cep) {
            return cep.replace('-', '');
        },
        validateAndGo() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                return;
            }
            
            this.setAddressData(this.addressModel);

            this.$router.push({ name: 'PlansList' });
        }
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
        padding-top: 30px;
    }
</style>