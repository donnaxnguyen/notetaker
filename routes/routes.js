const fs = require('fs');
const path = require ('path');

module.exports = app => {
    fs.readFile("db/db.json","utf8", (err, data) => {

        if (err) throw err;

        var notes = JSON.parse(data);

// api routes //
app.get("/api/notes", function(req, res) {
res.json(notes);
});

// post route //
app.post("/api/notes", function(req, res) {
// reveives a new note , adds it to db.json , returns new note //
let newNote = req.body;
    notes.push(newNote);
    updateDb();
    return console.log("Added new note: "+newNote.title);
        });

// retrieves a note with specific id
    app.get("/api/notes/:id", function(req,res) {
    res.json(notes[req.params.id]);
        });

// deletes a note with specific id
    app.delete("/api/notes/:id", function(req, res) {
    notes.splice(req.params.id, 1);
      updateDb();
    console.log("Deleted note with id "+req.params.id);
        });


/// HTML routes ///

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });



// updates the json file whenever a note is added or deleted
    function updateDb() {
    fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
        if (err) throw err;
          return true;
            });
        }

    });

}