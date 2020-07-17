// adding two routes for the pages


var path = require("path");

module.exports = function(app) {


// this is the index.html page //
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
// this is the notes.html page //
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));

});
};