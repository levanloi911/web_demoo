import API from "./api"

const Categorys ={
    getAll(){
        const url =`categorys`
        return API.get(url)
    }
}
export default Categorys