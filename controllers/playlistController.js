const Playlist = require('../models/Playlist');

// Controller method to create a new playlist
exports.createPlaylist = async (req, res) => {
    try {
        const { userId, name, public,movieId } = req.body;
        const newPlaylist = new Playlist({ userId, name, public ,movies:[movieId]});
        await newPlaylist.save();
        res.status(201).json(newPlaylist);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller method to get all playlists for a user
exports.getPlaylists = async (req, res) => {
    try {
        const userId = req.params.userId;
        const playlists = await Playlist.find({ userId });
        res.json(playlists);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller method to update a playlist
exports.updatePlaylist = async (req, res) => {
    try {
        const { movieId } = req.body;
        const playlistId = req.params.id; 

        const updatedPlaylist = await Playlist.findByIdAndUpdate(
            playlistId,
            { $push: { movies: movieId } },
            { new: true }
        );

        if (!updatedPlaylist) {
            return res.status(404).json({ message: 'Playlist not found' });
        }

        res.json(updatedPlaylist);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.updatePlaylistView= async (req, res) => {
    try {
        const { public } = req.body;
        const playlistId = req.params.id; 

        const updatedPlaylist = await Playlist.findByIdAndUpdate(
            playlistId,
            { $set: { public } },
            { new: true }
        );

        if (!updatedPlaylist) {
            return res.status(404).json({ message: 'Playlist not found' });
        }

        res.json(updatedPlaylist);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller method to delete a playlist
exports.deletePlaylist = async (req, res) => {
    try {
        const playlistId = req.params.id; // Assuming playlistId is passed in the URL params

        const deletedPlaylist = await Playlist.findByIdAndDelete(playlistId);

        if (!deletedPlaylist) {
            return res.status(404).json({ message: 'Playlist not found' });
        }

        res.json({ message: 'Playlist deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
