import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      tools:[],
      search: "",
      toastStatus: false,
      toastColor: "",
      toastText:"",
      tagonly:false
    },
    actions:{
        makeToast({commit}, payload){
            commit('SHOW_TOAST', payload);
        },
        async getTools({commit}){
            try{
                let {data} = await Vue.axios.get('/v1/tool');
                commit('SET_TOOLS', data);
                return true;
            }catch(e){
                console.log(e)
                commit('SET_TOOLS', []);
                return false;
            }
        },
        async getSearchTools({commit, state}){
            try{
                let {data} = await Vue.axios.get(`/v1/tool?search=${state.search}&tagonly=${state.tagonly}`);
                commit('SET_TOOLS', data);
                return true;
            }catch(e){
                commit('SET_TOOLS', []);
                return false;
            }
        },
        async createTool({commit},payload){
            try{
                let response = await Vue.axios.post('/v1/tool', payload);
                if(response.status == 201){
                    commit('ADD_TOOL', response.data)
                    return true;
                }else{
                    return false
                }
            }catch(e){
                return false;
            }
        },
        async deleteTool({commit},payload){
            try{
                let response = await Vue.axios.delete(`/v1/tool/${payload.id}`);
                if(response.status === 200){
                    commit('DELETE_TOOL', payload.index)
                    return true;
                }else{
                    return false
                }
            }catch(e){
                return false;
            }
        }
    },
    getters: {
      getTools(state){
        return state.tools;
      },
      getToastColor(state){
          return state.toastColor;
      },
      getToastMessage(state){
          return state.toastText;
      },
      getSearch(state){
        return [state.search];
      }
    },
    mutations: {
      SET_TOOLS (state,payload) {
        state.tools = payload
      },
      SET_SEARCH(state,payload){
        state.search = payload
      },
      SET_TAGONLY(state,payload){
        state.tagonly = payload
      },
      SET_TOAST_STATUS(state,payload){
        state.toastStatus = payload;
      },
      ADD_TOOL(state,payload){
        state.tools.unshift(payload);
      },
      DELETE_TOOL(state,payload){
        state.tools.splice(payload, 1);
      },
      SHOW_TOAST(state, payload){
        state.toastStatus = true;
        state.toastText = payload.message;
        if(payload.type == "DANGER"){
            state.toastColor = "red darken-2"
        }else if(payload.type == "SUCCESS"){
            state.toastColor = "teal"
        }
      }
    }
})