const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./assets/routes/apiRoutes")(app);
require("./assets/routes/htmlRoutes")(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use(express.static("public"));
