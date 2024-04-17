<template>
  <resource-list :resources="resources"></resource-list>
</template>

<script>
import ResourceList from './components/resources/ResourceList.vue';

export default {
  components: {
    ResourceList,
  },
  data() {
    return {
      resources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org/guide/introduction.html',
        },
        {
          id: 'style-guide',
          title: 'Style Guide',
          description: 'The official Vue.js style guide',
          link: 'https://vuejs.org/style-guide/rules-strongly-recommended.html',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
