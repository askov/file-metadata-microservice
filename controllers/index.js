const express = require('express'),
  router = express.Router(),
  multer = require('multer'),
  upload = multer();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  if (!req.file) {
    res.status(400).json({
      error: 'no file attached',
    });
    return;
  }
  res.json({
    size: req.file.size,
    name: req.file.originalname
  });
});


module.exports = router;
