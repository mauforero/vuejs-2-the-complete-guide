<template>
  <base-card>
    <base-button @click="setTab('resource-list')" :mode="listTabSelected">
      Resources List
    </base-button>
    <base-button @click="setTab('add-resource')" :mode="addTabSelected">
      Add Resource
    </base-button>
  </base-card>
</template>

<script>
export default {
  inject: ['getSelectedTab', 'setSelectedTab'],
  computed: {
    listTabSelected: function () {
      return this.getSelectedTab() !== 'resource-list' ? 'flat' : '';
    },
    addTabSelected: function () {
      return this.getSelectedTab() !== 'add-resource' ? 'flat' : null;
    },
  },
  methods: {
    setTab: function (tab) {
      this.setSelectedTab(tab);
    },
  },
};
</script>
