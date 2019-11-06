<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ $store.getters.POST_CONTENT }}</p>
    <small>Author : {{ author }}</small>
    <hr>

    <label for="post_title">Change Content</label>
    <input @input="change_content" name="post_title">
  </div>
</template>

<script>
export default {
  methods: {
    change_content: function(event) {
      console.log(event.target.value);
      this.$store.commit("updatePostContent", event.target.value);
    }
  },
  data() {
    return {
      // get default value from store
      title: this.$store.getters.POST_TITLE,
      //content: this.$store.getters.POST_CONTENT,
      author: this.$store.getters.NAME
    };
  },
  // data: {
  //   message: 'Hello world!'
  // },
  computed: {
    //return this.$store.getters.POST_TITLE;
  }
};
</script>