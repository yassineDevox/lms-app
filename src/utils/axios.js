import axios from "axios";
//la partie provider qui se repete pour chaque requete http 
export default axios.create({
    baseURL:''
})