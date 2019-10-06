import axios from 'axios';

export default {

  getCepInfo(cep) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  },

};
