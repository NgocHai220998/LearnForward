<template>
  <div class="container">
    <h1>Hello</h1>
  </div>
</template>

<script>

export default {
  name: 'Example',
  middleware: 'authenticated',
  head() {
    return {
      title: 'Example Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Example Page Description',
        },
      ],
    };
  },
  components: {
  },
  methods: {},
};

</script>

<style lang="scss" scoped>
</style>
