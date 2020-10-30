const router = require('express').Router();
let SavedInfo = require('../models/savedInfo.model');

router.route('/').get((req, res) => {
  SavedInfo.find()
    .then(savedInfo => res.json(savedInfo))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/save').post((req, res) => {
  const departureName = req.body.departureName;
  const destinationName = req.body.destinationName;
  const price = Number(req.body.price);
  const userId = req.body.userId;
  const carrierName = req.body.carrierName
  const departureDate = req.body.departureDate;
  const time = req.body.time;
  const userName = req.body.userName;
  
  const newSavedInfo = new SavedInfo({
    departureName,
    destinationName,
    price,
    userId,
    carrierName,
    time,
    departureDate,
    userName
  });

  newSavedInfo.save()
  .then(() => res.json('SavedInfo added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  SavedInfo.findById(req.params.id)
    .then(SavedInfo => res.json(SavedInfo))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  SavedInfo.findByIdAndDelete(req.params.id)
    .then(() => res.json('SavedInfo deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  SavedInfo.findById(req.params.id)
    .then(savedInfo => {
      savedInfo.tripName = req.body.tripName;
      savedInfo.save()
        .then(() => res.json('SavedInfo updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;