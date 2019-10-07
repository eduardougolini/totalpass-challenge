import axios from 'axios';

export default {
    fetchBrazilianStates() {
        return axios.get('http://www.geonames.org/childrenJSON?geonameId=3469034');
    }
}