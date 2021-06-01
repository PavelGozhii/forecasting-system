import axios from "axios";
import baseUrl from "../../util/api";
import router from '@/router';

export default {
    namespaced: true,
    state: {
        authState: !!localStorage.getItem("token"),
        user: null
    },
    mutations: {
        setAuthState(state, payload){
            localStorage.setItem("token", payload.token)
            state.authState = payload.token;
        },
        unsetUser(state) {
            state.user = null;
            state.authState = null;
            localStorage.removeItem('token')
        }
    },
    actions: {
        login({commit}, payload){
            return new Promise((resolve, reject) => {
                console.log(payload);
                axios.post(`${baseUrl}/user/auth`, payload)
                    .then(resp => {
                        commit("setAuthState", resp.data);
                        resolve(resp.data);
                    }).catch((err) => {
                        reject(err.response.data.error);
                });

            })
        },
        logOut({commit}) {
            commit('unsetUser')
            router.push('/sign-in')
        }
    },
    getters: {
        getAuthState: state => state.authState
    }
}
