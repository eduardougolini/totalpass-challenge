<template>
  <div class="container">
    <UserImage />

    <form class="basic-data-form">
      <CustomInput
        v-model="$v.name.$model"
        :name="'Nome Completo'"
        :customClasses="{
          'error': $v.name.$dirty
            && $v.name.$invalid
        }"
      />
      <CustomInput
        v-model="$v.cpf.$model"
        :name="'CPF'"
        :inputType="'tel'"
        :customClasses="{
          'error': $v.cpf.$dirty
            && $v.cpf.$invalid
        }"
        :format="'###.###.###-##'"
      />
      <CustomInput
        v-model="$v.phone.$model"
        :name="'Celular'"
        :inputType="'tel'"
        :customClasses="{
          'error': $v.phone.$dirty
            && $v.phone.$invalid
        }"
        :format="'(##) #####-####'"
      />
      <CustomInput
        v-model="birth"
        :name="'Data de nascimento'"
        :inputType="'date'"
        :isRequired="false"
      />
      <CustomInput
        v-model="gender"
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
import { required } from 'vuelidate/lib/validators';

import UserImage from '@/components/UserImage';
import NextButton from '@/components/NextButton';
import CustomInput from '@/components/CustomInput';
import { TOTAL_PASS } from '@/store/modules';
import CPF from 'cpf-check';

const cpfValidator = cpf => CPF.validate(cpf);

export default {
  name: 'RegisterDataForm',
  data() {
    return {
      name: '',
      cpf: '',
      phone: '',
      birth: '',
      gender: '',
      genderValues: [
        {
          name: '',
          value: '',
          attributes: 'disabled selected',
        },
        {
          name: 'Masculino',
          value: 'masculino',
        },
        {
          name: 'Feminino',
          value: 'feminino',
        },
        {
          name: 'Outro',
          value: 'outro',
        },
      ],
    };
  },
  components: {
    UserImage,
    NextButton,
    CustomInput,
  },
  computed: {
    ...mapState(TOTAL_PASS, {
      nameState: state => state.userData.name,
      cpfState: state => state.userData.cpf,
      phoneState: state => state.userData.phone,
      birthState: state => state.userData.birth,
      genderState: state => state.userData.gender,
    }),
  },
  mounted() {
    this.name = this.nameState;
    this.cpf = this.cpfState;
    this.phone = this.phoneState;
    this.birth = this.birthState;
    this.gender = this.genderState;
  },
  methods: {
    ...mapActions(TOTAL_PASS, [
      'setRegisterData',
    ]),
    validateAndGo() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      this.setRegisterData({
        name: this.name,
        cpf: this.cpf,
        phone: this.phone,
        birth: this.birth,
        gender: this.gender,
      });
      this.$router.push({ name: 'AddressRegister' });
    },
  },
  validations: {
    name: {
      required,
    },
    cpf: {
      required,
      cpfValidator,
    },
    phone: {
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

  .basic-data-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
  }
</style>
