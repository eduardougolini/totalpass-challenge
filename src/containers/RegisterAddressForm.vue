<template>
  <div class="container">
    <form class="address-form">
      <CustomInput
        v-model="$v.cep.$model"
        :name="'CEP'"
        :customClasses="{
          'error': $v.cep.$dirty
            && $v.cep.$invalid
        }"
        :format="'#####-###'"
      />
      <CustomInput
        v-model="$v.address.$model"
        :name="'Endereço'"
        :customClasses="{
          'error': $v.address.$dirty
            && $v.address.$invalid
        }"
      />
      <CustomInput
        v-model="$v.number.$model"
        :name="'Número'"
        :customClasses="{
          'error': $v.number.$dirty
            && $v.number.$invalid
        }"
      />
      <CustomInput
        v-model="complement"
        :name="'Complemento'"
        :isRequired="false"
      />
      <CustomInput
        v-model="district"
        :name="'Bairro'"
        :isRequired="false"
      />
      <CustomInput
        v-model="$v.city.$model"
        :name="'Cidade'"
        :customClasses="{
          'error': $v.city.$dirty
            && $v.city.$invalid
        }"
      />
      <CustomInput
        v-model="$v.state.$model"
        :name="'Estado'"
        :customClasses="{
          'error': $v.state.$dirty
            && $v.state.$invalid
        }"
        :inputType="'select'"
        :selectOptions="brazilianStates"
      />
    </form>

    <NextButton @clicked-forward-button="validateAndGo()" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';

import NextButton from '@/components/NextButton';
import CustomInput from '@/components/CustomInput';
import { TOTAL_PASS } from '@/store/modules';

export default {
  name: 'RegisterAddressForm',
  data() {
    return {
      cep: '',
      address: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
    };
  },
  components: {
    NextButton,
    CustomInput,
  },
  computed: {
    ...mapState(TOTAL_PASS, {
      cepState: state => state.addressData.cep,
      addressState: state => state.addressData.address,
      numberState: state => state.addressData.number,
      complementState: state => state.addressData.complement,
      districtState: state => state.addressData.district,
      cityState: state => state.addressData.city,
      stateState: state => state.addressData.state,
      brazilianStates: state => state.brazilianStates,
    }),
    
  },
  async created() {
    if (this.brazilianStates.length < 2) {
      await this.loadBrazilianStates();
    }
    
    this.cep = this.cepState;
    this.address = this.addressState;
    this.number = this.numberState;
    this.complement = this.complementState;
    this.district = this.districtState;
    this.city = this.cityState;
    this.state = this.stateState;
  },
  watch: {
    async cep(val) {
      const formatedCep = this.getFormattedCep(val);

      if (formatedCep.length !== 8) {
        return;
      }

      const cepInfo = await this.fetchCepData(formatedCep);

      if (cepInfo) {
        this.address = cepInfo.logradouro || '';
        this.district = cepInfo.bairro || '';
        this.city = cepInfo.localidade || '';
        this.state = cepInfo.uf || '';
      };
    }
  },
  methods: {
    ...mapActions(TOTAL_PASS, [
      'fetchCepData',
      'loadBrazilianStates',
      'setAddressData',
    ]),
    getFormattedCep(cep) {
      return cep.replace('-', '');
    },
    validateAndGo() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      this.setAddressData({
        cep: this.cep,
        address: this.address,
        number: this.number,
        complement: this.complement,
        district: this.district,
        city: this.city,
        state: this.state,
      });

      this.$router.push({ name: 'PlansList' });
    },
  },
  validations: {
    cep: {
      required,
    },
    address: {
      required,
    },
    number: {
      required,
    },
    city: {
      required,
    },
    state: {
      required,
    },
  },
};
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
