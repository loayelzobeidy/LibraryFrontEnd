<template>
    <div class="list row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search by id"
            v-model="id"/>
          <div class="input-group-append">
            <button class="btn btn-success" type="button"
              @click="searchId"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h4>Shelfs List</h4>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(shelf, index) in shelfs"
            :key="index"
            @click="setActiveShelf(shelf, index)"
          >
            {{ shelf.id }}
          </li>
        </ul>
  
        <button class="m-3 btn btn-sm btn-danger" @click="removeAllShelfs">
          Remove All
        </button>
      </div>
      <div class="col-md-6">
        <div v-if="currentShelf">
          <h4>Shelf</h4>
          <div>
            <label><strong>Id:</strong></label> {{ currentShelf.id }}
          </div>
          <div>
            <label><strong>location:</strong></label> {{ currentShelf.location }}
          </div>
          
          <router-link :to="'/shelfs/' + currentShelf.id" class="badge badge-warning">Edit</router-link>
        </div>
        <div v-else>
          <br />
          <p>Please click on a Shelf...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ShelfDataService from "../services/ShelfDataService"
  
  export default {
    name: "shelfs-list",
    data() {
      return {
        shelfs: [],
        currentShelf: null,
        currentIndex: -1,
        title: ""
      };
    },
    methods: {
      retrieveShelfs() {
        ShelfDataService.getAll()
          .then(response => {
            this.shelfs = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      refreshList() {
        this.retrieveShelfs();
        this.currentShelf = null;
        this.currentIndex = -1;
      },
  
      setActiveShelf(shelf, index) {
        this.currentShelf = shelf;
        this.currentIndex = shelf ? index : -1;
      },
  
      removeAllShelfs() {
        ShelfDataService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      searchId() {
        ShelfDataService.findById(this.id)
          .then(response => {
            this.shelfs = response.data;
            this.setActiveShelf(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.retrieveShelfs();
    }
  };
  </script>
  
  <style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
    margin-top: 3%;
  }
  </style>
  