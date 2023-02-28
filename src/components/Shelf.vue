<template>
    <div v-if="currentShelf" class="edit-form">
      <h4>Shelf</h4>
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title"
            v-model="currentShelf.title"
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="description"
            v-model="currentShelf.description"
          />
        </div>
  
        <div class="form-group">
          <label><strong>Status:</strong></label>
          {{ currentShelf.published ? "Published" : "Pending" }}
        </div>
      </form>
  
      <button class="badge badge-primary mr-2"
        v-if="currentShelf.published"
        @click="updatePublished(false)"
      >
        UnPublish
      </button>
      <button v-else class="badge badge-primary mr-2"
        @click="updatePublished(true)"
      >
        Publish
      </button>
  
      <button class="badge badge-danger mr-2"
        @click="deleteShelf"
      >
        Delete
      </button>
  
      <button type="submit" class="badge badge-success"
        @click="updateShelf"
      >
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Please click on a Shelf...</p>
    </div>
  </template>
  
  <script>
  import ShelfDataService from "../services/ShelfDataService"
  
  export default {
    name: "shelf-temp",
    data() {
      return {
        currentShelf: null,
        message: ''
      };
    },
    methods: {
      getShelf(id) {
        ShelfDataService.get(id)
          .then(response => {
            this.currentShelf = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      updatePublished(status) {
        var data = {
          id: this.currentShelf.id,
          title: this.currentShelf.title,
          description: this.currentShelf.description,
          published: status
        };
  
        ShelfDataService.update(this.currentShelf.id, data)
          .then(response => {
            console.log(response.data);
            this.currentShelf.published = status;
            this.message = 'The status was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      updateShelf() {
        ShelfDataService.update(this.currentShelf.id, this.currentShelf)
          .then(response => {
            console.log(response.data);
            this.message = 'The shelf was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      deleteShelf() {
        ShelfDataService.delete(this.currentShelf.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "shelfs" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.message = '';
      this.getShelf(this.$route.params.id);
    }
  };
  </script>
  
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>
  