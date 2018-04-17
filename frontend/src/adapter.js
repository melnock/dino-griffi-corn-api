url = "http://localhost:3000/api/v1/"
class Adapter {
  static fetchItems() {
    fetch(url + "items").then(r => r.json()).then(json => console.log(json))
  }
}
