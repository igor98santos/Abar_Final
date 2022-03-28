import axios from "axios";

const OpcoesApi =  "http://localhost:8080/opcoes";

class OpcoesAxios{
    getOpcoes() {
        return axios.get(OpcoesApi);
    }
    getOpcoesById(id){
        return axios.get(OpcoesApi+ "/"+ id)
    }
    postOpcoes(opcoes){
        return axios.post(OpcoesApi, opcoes)
    }
    deleteOpcoes(id){
        return axios.delete(OpcoesApi+ "/" +id)
    }
    putOpcoes(opcoes, id){
        return axios.put(OpcoesApi+ "/" + id, opcoes)
    }
}
export default new OpcoesAxios();