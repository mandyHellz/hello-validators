const express = require('express');
const router = express.Router();

const { validationResult } = require('express-validator');

const validators = require('../validators');


const { nomeValidator, idadeValidator } = validators;

router.post('/', [nomeValidator, idadeValidator]);

module.exports = router;
