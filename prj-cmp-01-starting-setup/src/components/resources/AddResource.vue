<template>
  <base-card>
    <form @submit.prevent="submitResource">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="title" />
      </div>
      <div class="form-control">
        <label for="description">description</label>
        <textarea
          name="description"
          id="description"
          rows="4"
          v-model="description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" v-model="link" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
  <teleport to="body">
    <base-dialog
      title="Invalid Data"
      v-if="isInvalidData"
      @close-dialog="this.isInvalidData = false"
    >
      <p>Please verify all fields and enter all the data.</p>
      <template #actions>
        <base-button @click="this.isInvalidData = false">OK</base-button>
      </template>
    </base-dialog>
  </teleport>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      title: '',
      description: '',
      link: '',
      isInvalidData: false,
    };
  },
  methods: {
    submitResource() {
      if (
        this.title.trim === '' ||
        this.description.trim() === '' ||
        this.link.trim() === ''
      ) {
        this.isInvalidData = true;
      } else {
        this.addResource(this.title, this.description, this.link);
        this.title = '';
        this.description = '';
        this.link = '';
      }
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
