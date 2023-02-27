import axios from "axios";
import authHeader from './services/auth-header';
console.log(authHeader())
export default axios.create({
  baseURL: "http://localhost:8000/api",
  headers:  authHeader() 
});
