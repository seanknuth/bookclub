const BookController = require("../controllers/book.controller");
//const UserController = require("../controllers/user.controller");



module.exports = (app) => {

    //login reg routes
    // app.get("api/login", UserController.login);
    // app.get("api/logout", UserController.logout);
    //app.post("api/register", UserController.register);

    app.post("/api/books", BookController.createBook); //post create
    app.get("/api/books", BookController.getAllBooks); //get all
    app.get("/api/books/:id", BookController.getOneBook); //get one w :id param
    app.put("/api/books/:id", BookController.updateBook); // update (can use patch as well)
    app.delete("/api/books/:id", BookController.deleteBook); // delete
}