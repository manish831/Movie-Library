const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    public: { type: Boolean, default: true },
    movies: [{ type: String }] // Array of movie IMDb IDs
});

module.exports = mongoose.model('Playlist', playlistSchema);
