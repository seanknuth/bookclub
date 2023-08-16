const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// required routes
require("./config/mongoose.config");
require("./routes/books.routes")(app);





app.listen(8000, () => {console.log("Book Club solo is listening on port 8000")});