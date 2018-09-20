const Image = require('./db/Images.js');

let handlers = {};

handlers.getAllPhotos = (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    Image.find({})
      .then(data => {
        console.log(data);
        res.send(data);
      })
      .catch(err => { throw new Error(err) })
};

handlers.getfilteredByAuthorPhotos = (req, res) => {
    const {author} = req.params;
    console.log(author)
    res.header('Access-Control-Allow-Origin', '*');
    Image.find({ author })
      .then(data => {
        console.log(data);
        res.send(data);
      })
      .catch(err => { console.error(err) })
};

module.exports = handlers;