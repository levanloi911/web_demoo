import API from "./api"

const HomePage ={
    getAll(){
        const url =`Homepage`
        return API.get(url)
    }
}
export default HomePage