<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="shelf.title"
            name="title"
          />
        </div>
  
        <div class="form-group">
          <label for="description">Description</label>
          <input
            class="form-control"
            id="description"
            required
            v-model="shelf.description"
            name="description"
          />
        </div>
  
        <button @click="saveShelf" class="btn btn-success">Submit</button>
      </div>
  
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newShelf">Add</button>
      </div>
    </div>
  </template>
  
  <script>
  import ShelfDataService from "../services/ShelfDataService"
  
  export default {
    name: "add-shelf",
    data() {
      return {
        shelf: {
          id: null,
          title: "",
          description: "",
          published: false
        },
        submitted: false
      };
    },
    methods: {
      saveShelf() {
        var data = {
          title: this.shelf.title,
          description: this.shelf.description
        };
  
        ShelfDataService.create(data)
          .then(response => {
            this.shelf.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newShelf() {
        this.submitted = false;
        this.shelf = {};
      }
    }
  };
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>
  