import axios from "axios";

export default {
    namespaced: true,
    state: {
        authState: !!localStorage.getItem("token")
    },
    mutations: {
        setAuthState(state, payload){
            localStorage.setItem("token", payload.token)
            state.authState = payload.token;
        }
    },
    actions: {
        login({commit}, payload){
            return new Promise((resolve) => {
                console.log(payload);
                axios.post("http://localhost:9000/user/auth", payload)
                    .then(resp => {
                        commit("setAuthState", resp.data);
                        resolve(resp.data);
                    }).catch((error) => {
                        console.log(error);
                });

            })
        }
    },
    getters: {
        getAuthState: state => state.authState
    }
}