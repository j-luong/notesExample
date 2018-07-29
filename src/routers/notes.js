const express = require('express');
const { notesController } = require('../controllers');

const router = express.Router();


router.post('/', async (req, res) => {
  try {
    this.response = notesController.create({
      subject: req.body.subject,
      body: req.body.body
    });
    res.status(201).json({ noteId: this.response });
  } catch (err) {
    // TODO handle error
  }
});

module.exports = router;
