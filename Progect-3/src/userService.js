import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3001/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const UserService = {

    
    async getAllUsers () {
        
         let response = await apiClient.get("/users");
         let allUsers = response.data;
         return allUsers;

    },
    
    async submitUser (newUser) {
      
        let response = await apiClient.post("/users", { ...newUser});
        let submitNewUser = response.data;
        return submitNewUser;

   }
}