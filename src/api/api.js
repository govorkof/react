import axios from "axios"




const instance = axios.create({
    withCredentials: true,
    headers: { 'API-KEY': '5498c77f-cca6-4f56-be95-cbc780ffb25f' },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {   //После равно значение по умолчанию если ничего не передано
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    
    getProfile(userId) {
        return instance.get(`profile/` + userId);   //запрос на сервер          
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

