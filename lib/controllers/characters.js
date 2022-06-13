const { Router } = require('express');
const { Character } = require('../models/Character');

(module.exports = Router().get('/characters')),
  async (req, res, next) => {
    const characters = await Character.getAll();
    const respData = characters.map(({ id, name }) => ({ id, name }));
    res.json(respData);
  };

//what is post vs get?
