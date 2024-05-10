const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');
const authenticateUser = require('../middlewares/authenticate');

router.post('/create',authenticateUser, playlistController.createPlaylist);
router.get('/:userId',authenticateUser, playlistController.getPlaylists);
router.patch('/:id',authenticateUser, playlistController.updatePlaylist);
router.patch('/update/:id', authenticateUser,playlistController.updatePlaylistView);
// Add more routes for playlist-related operations

module.exports = router;
