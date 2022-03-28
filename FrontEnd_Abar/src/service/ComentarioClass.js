import axios from "axios";

const ComentarioApi =  "http://localhost:8080/feed";

class ComentarioAxios{
    getComentario() {
        return axios.get(ComentarioApi);
    }
    getComentarioById(id){
        return axios.get(ComentarioApi+ "/"+ id)
    }
    postComentario(comentario){
        return axios.post(ComentarioApi, comentario)
    }
    deleteComentario(id){
        return axios.delete(ComentarioApi+ "/" +id)
    }
    putComentario(comentario, id){
        return axios.put(ComentarioApi+ "/" + id, comentario)
    }
}
export default new ComentarioAxios();