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
    // Commit state
    updatePostTitle(state, post_title) {
      console.log("updatePostTitle triggered");
      state.post_title = post_title;
    },
    updatePostContent(state, post_content) {
      console.log("updatePostContent triggered");
      state.post_content = post_content;
    },

    // Commit state using Object-Style Commit
    SET_CONTENT: (state, payload) => {
      state.post_content = payload.body;
      state.post_title = payload.title;
    }
  },

  getters: {
    POST_TITLE: state => {
      return state.post_title;
    },
    POST_CONTENT: state => {
      return state.post_content;
    }
  },

  actions: {
    // load content from server
    LOAD_CONTENT: async (context, payload) => {
      let { data } = await Axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      console.log(data);
      context.commit("SET_CONTENT", data);
    }
  }
});
