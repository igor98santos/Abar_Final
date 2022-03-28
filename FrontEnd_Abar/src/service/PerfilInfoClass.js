import axios from "axios";

const PerfilInfoApi =  "http://localhost:8080/PerfilInfo";

class PerfilInfoAxios{
    getPerfilInfo() {
        return axios.get(PerfilInfoApi);
    }
    getPerfilInfoById(id){
        return axios.get(PerfilInfoApi+ "/"+ id)
    }
    postPerfilInfo(perfilInfo){
        return axios.post(PerfilInfoApi, perfilInfo)
    }
    deletePerfilInfo(id){
        return axios.delete(PerfilInfoApi+ "/" +id)
    }
    putPerfilInfo(perfilInfo, id){
        return axios.put(PerfilInfoApi+ "/" + id, perfilInfo)
    }
}
export default new PerfilInfoAxios();