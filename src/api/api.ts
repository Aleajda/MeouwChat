import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY": "9ca2952f-915f-4c87-afd0-8a5fff218e08"
    }
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, query: string | null = null) {
        return(
            instance.get(`users?page=${currentPage}&count=${pageSize}&term=${query}`).then(response =>{
                return response.data;
            })
        );
    },
    deleteFollow(userId: number){
        return(
            instance.delete(`follow/${userId}`).then(response => {
                return response.data;
            })
        );
    },
    createFollow(userId: number){
        return(
            instance.post(`follow/${userId}`).then(response => {
                return response.data;
            })
        );
    }
}

export const profileAPI = {
    getProfile(userId: number){
        return(
            instance.get(`profile/${userId}`).then(response => {
                return response.data;
            })
        );
    },
    getStatus(userId: number){
        return(
            instance.get(`profile/status/${userId}`).then(response => {
                return response.data;
            })
        );
    },
    updateStatus(status: string){
        return(
            instance.put(`profile/status`, {status: status})
        )
    },
    updatePhoto(file:any){
        const formData = new FormData();
        formData.append("image", file)
        return(
            instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
        )
    },
    saveProfile(profileData:any){
        return(
            instance.put(`profile`, profileData)
        )
    }
}

export const AuthAPI = {
    authMe(){
        return(
            instance.get(`auth/me`).then(response =>{
                return response.data;
            })  
        );
    },
    logMe(login:string, password:string, rememberMe:boolean = false, captcha: string|null){
        return(
            instance.post("auth/login", {email: login, password: password, rememberMe: rememberMe, captcha: captcha})
        );
    },
    logoutMe(){
        return(
            instance.delete("auth/login")
        );
    },
    getCaptchaUrl(){
        return(
            instance.get("security/get-captcha-url")
        );
    }
}

export const usersPostsApi = {
    getPosts(limit:any, skip:any){
        return(
            axios.get(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
        )
    },
    getPostsWithQuery(query: any, limit:any, skip:any){
        return(
            axios.get(`https://dummyjson.com/posts/search?q=${query}&limit=${limit}&skip=${skip}`)
        )
    },
    setPtatus(){
        return(
            axios.post("http://193.19.100.32:7000/api/set-status", {})
        )
    },
    getUser(id:number){
        return(
            axios.get(`https://dummyjson.com/users/${id}`)
        )
    }
}

export const musicApi = {
    getSongs(limit:any, query:any, genre:any){
        return(
            axios.get(`https://api.jamendo.com/v3.0/tracks/?client_id=a5cb1c79&format=jsonpretty&limit=${limit}&namesearch=${query}&fuzzytags=${genre}`)
        )
    }
}