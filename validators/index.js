const { check } = require('express-validator');

exports.nomeValidator = check('nome').notEmpty().withMessage('O nome é requerido');
exports.idadeValidator = check('idade').isInt().withMessage('A idade é requerida');