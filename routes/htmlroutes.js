// adding routes for the pages
// note to self // this is done // shouldn't be touched //

var path = require("path");

module.exports = function(app) {

  // get request to the notes file that was given //
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // get the css file that was given //
  app.get("/styles", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/css/styles.css"));
  });

  // if no matching route is found then default to index page which was given //
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};