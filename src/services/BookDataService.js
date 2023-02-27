import http from "../http-common";

class TutorialDataService {
  getAll() {
    var tutorials = http.get("/tutorials");
    console.log("heree",tutorials)
    return tutorials;
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    console.log("create")
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
  