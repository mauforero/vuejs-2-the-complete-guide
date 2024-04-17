<template>
  <the-header title="Vue Resources"></the-header>
  <the-navigation></the-navigation>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
  <!-- <resource-list :resources="resources"></resource-list> -->
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheNavigation from './components/layout/TheNavigation.vue';
import AddResource from './components/resources/AddResource.vue';
import ResourceList from './components/resources/ResourceList.vue';

export default {
  components: {
    TheHeader,
    TheNavigation,
    AddResource,
    ResourceList,
  },
  provide() {
    return {
      getResources: () => this.resources,
      getSelectedTab: () => this.selectedTab,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
      setSelectedTab: this.setSelectedTab,
    };
  },
  data() {
    return {
      selectedTab: 'resource-list',
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
  methods: {
    setSelectedTab(selection) {
      this.selectedTab = selection;
    },
    addResource(title, description, link) {
      const newResource = {
        id: crypto.randomUUID(),
        title,
        description,
        link,
      };
      this.resources.unshift(newResource);
      this.setSelectedTab('resource-list');
    },
    deleteResource(id) {
      console.log({ id });
      console.log(this.resources.filter((res) => res.id !== id));
      this.resources = this.resources.filter((res) => res.id !== id);
    },
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
