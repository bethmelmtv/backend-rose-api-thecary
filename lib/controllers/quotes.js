const { Router } = require('express');
const { Quote } = require('../models/Quote');

module.exports = Router();

module.exports = Router().post('/', async (req, res) => {
  //request is CRUD
  //response is what were getting back
  const quotes = await Quote.insert(req.body);
  // console.log(req);
  // console.log(req.body);
  // console.log(quotes);
  res.json(quotes);
});
