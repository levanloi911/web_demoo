import API from "./api"

const Product ={
    getAll(){
        const url =`products`
        return API.get(url)
    }
}
export default Product