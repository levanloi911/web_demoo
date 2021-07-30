import API from "./api"

const Profile ={
    getAll(){
        const url =`CategoryItems`
        return API.get(url)
    }
}
export default Profile