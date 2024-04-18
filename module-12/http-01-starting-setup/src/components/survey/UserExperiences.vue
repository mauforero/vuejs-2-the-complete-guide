<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading surveys...</p>
      <p v-else-if="!isLoading && !results.length && !error">
        No surveys found. Add some experience first.
      </p>
      <ul v-else-if="!isLoading && !!results">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <p v-if="error">{{ error }}</p>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async loadExperiences() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await fetch(
          'https://vuejs-ca168-default-rtdb.firebaseio.com/surveys.'
        );

        const data = await response.json();

        if (data) {
          const results = [];
          for (const id in data) {
            results.push({
              id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
          this.isLoading = false;
        } else {
          this.isLoading = false;
        }
      } catch (error) {
        this.isLoading = false;
        this.error = 'Failed to fetch data. Please try again.';
      }
    },
  },
  mounted() {
    // setTimeout(() => {
    this.loadExperiences();
    // }, 3 * 1000);
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
