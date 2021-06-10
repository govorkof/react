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
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);   //запрос на сервер          
    },

    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },

    updateStatus(status) {
        return instance.put('profile/status/', { status: status })  //отправляем на сервер обьект, у которого есть свойство status
        // с ланными из перменной status. Так описано в документации на сервере
    }
}



export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },

    logout() {
        return instance.delete(`auth/login`)
    }
}

