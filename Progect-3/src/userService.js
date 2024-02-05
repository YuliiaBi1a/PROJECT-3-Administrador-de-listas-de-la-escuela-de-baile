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

    async getAllUsers() {
        try {
            let response = await apiClient.get("/users");
            let allUsers = response.data;
            return allUsers;
        } catch (error) {
            console.error("Error fetching all users:", error);
            throw error; 
        }
    },

    async submitUser(newUser) {
        try {
            let response = await apiClient.post("/users", { ...newUser });
            let submitNewUser = response.data;
            return submitNewUser;
        } catch (error) {
            console.error("Error submitting user:", error);
            throw error;
        }
    },

    async editUser(userId, updatedUserData) {
       
        try {
            let response = await apiClient.put(`/users/${userId}`, updatedUserData);
            let editedUser = response.data;
            return editedUser;
        } catch (error) {
            console.error(`Error editing user with ID ${userId}:`, error);
            throw error;
        }
    },

    async deleteUser(userId) {
        
        try {
            await apiClient.delete(`/users/${userId}`);
        } catch (error) {
            console.error(`Error deleting user with ID ${userId}:`, error);
            throw error;
        }
    },
}