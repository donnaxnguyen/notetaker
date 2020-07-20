// work in progress //

// connect routes to my data 
var noteData = require("../data/data");

// routing
module.exports = function (app) {


  // get request
  app.get("/api/notes", function (req, res) {
    res.json(noteData);
  });

  // POST request
  app.post("/api/notes", function (req, res) {
    noteData.push(req.body);
    res.json("saved");
  });

  // DELETE request
  app.delete("/api/notes/:index", function (req, res) {
    var elem = parseInt(req.params.index);
    var tempnote = [];
    for (var i = 0; i < noteData.length; i++) {
      if (i !== elem) {
        tempnote.push(noteData[i]);
      }
    }
    noteData = tempnote;

    res.json("delete completed");
  });


}
