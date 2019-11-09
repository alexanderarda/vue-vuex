<template>
  <div>
    <h2>{{ this.$store.getters.POST_TITLE }}</h2>
    <p>{{ POST_CONTENT }}</p>
    <p>
      <small>Author : {{ author }}</small>
    </p>
    <button @click="load_content_from_server">Load Content</button>
    <br>
    <label for="post_title">Change Content</label>
    <br>
    <input @input="change_content" name="post_title">
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    // change content without using  mapActions
    change_content: function(event) {
      this.$store.commit("updatePostContent", event.target.value);
    },

    // change content using mapActions
    ...mapActions({
      load_content_from_server: "LOAD_CONTENT"
    })
  },
  data() {
    return {
      // getting store value without using map getter
      author: this.$store.getters.POST_AUTHOR
    };
  },
  computed: {
    // getting store value using map getter
    ...mapGetters(["POST_CONTENT"])
  }
};
</script>