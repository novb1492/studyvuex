import Vuex from 'vuex';
import actions from './actions'
import mutations from './mutations'

export const store = new Vuex.Store({
    state: {
        arr:[1,2,3]
    },
    getters: {
        getArr(state) {
            return state.arr;
        },
        
    },
    mutations,
    actions,
});

 