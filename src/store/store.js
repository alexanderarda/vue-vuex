import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: "arda",
    post_title: "Default title",
    post_content: "Default content"
  },

  mutations: {
    updatePostTitle(state, post_title) {
      state.post_title = post_title;
    },
    updatePostContent(state, post_content) {
      state.post_content = post_content;
    }
  },

  getters: {
    NAME: state => {
      return state.name;
    },
    POST_TITLE: state => {
      return state.post_title;
    },
    POST_CONTENT: state => {
      return state.post_content;
    }
  },

  actions: {
    SET_NAME: async (context, name) => {
      let { data } = await Axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );

      console.log(data);

      if (data.status === 200) {
        context.dispatch("SET_NAME", name);
      }
    }
  }
});
