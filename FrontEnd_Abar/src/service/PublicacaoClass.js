import axios from "axios";

const PublicacaoApi =  "http://localhost:8080/publicacao";

class PublicacaoAxios{
    getPublicacao() {
        return axios.get(PublicacaoApi);
    }
    getPublicacaoById(id){
        return axios.get(PublicacaoApi+ "/"+ id)
    }
    postPublicacao(publicacao){
        return axios.post(PublicacaoApi, publicacao)
    }
    deletePublicacao(id){
        return axios.delete(PublicacaoApi+ "/" +id)
    }
    putPublicacao(id, publicacao){
        return axios.put(PublicacaoApi+ "/" + id, publicacao)
    }
}
export default new PublicacaoAxios();