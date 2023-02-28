import http from "../http-common";

class BookDataService {
  getAll() {
    var books = http.get("/books");
    console.log("heree",books)
    return books;
  }

  get(id) {
    return http.get(`/books/${id}`);
  }

  create(data) {
    console.log("create")
    return http.post("/books", data);
  }

  update(id, data) {
    return http.put(`/books/${id}`, data);
  }

  delete(id) {
    return http.delete(`/books/${id}`);
  }

  deleteAll() {
    return http.delete(`/books`);
  }

  findByTitle(title) {
    return http.get(`/books?title=${title}`);
  }
}

export default new BookDataService();
  