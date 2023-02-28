import http from "../http-common";

class ShelfDataService {
  getAll() {
    return http.get("/shelfs");
  }

  get(id) {
    return http.get(`/shelfs/${id}`);
  }

  create(data) {
    console.log("create")
    return http.post("/shelfs", data);
  }

  update(id, data) {
    return http.put(`/shelfs/${id}`, data);
  }

  delete(id) {
    return http.delete(`/shelfs/${id}`);
  }

  deleteAll() {
    return http.delete(`/shelfs`);
  }

  findByTitle(title) {
    return http.get(`/shelfs?title=${title}`);
  }
}

export default new ShelfDataService();
  