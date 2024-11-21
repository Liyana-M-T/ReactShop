import axios from 'axios';
import { AllProducts } from './Urls';
const instance = axios.create({
    baseURL: AllProducts
  });

  export default instance