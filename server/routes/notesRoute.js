const express = require("express");
const router = express.Router();

let notes = [];

router.post("/notes", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  // Find the maximum ID currently in use, or 0 if no notes exist
  const maxId =
    notes.length > 0 ? Math.max(...notes.map((note) => note.id)) : 0;

  // New ID is one more than the current maximum
  const newId = maxId + 1;

  const newNote = {
    id: newId,
    title,
    content,
    createdAt: new Date().toISOString(),
  };

  notes.push(newNote);
  res.status(201).json(newNote);
});

router.get("/notes", (req, res) => {
  res.json(notes);
});

router.get("/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  const note = notes.find((note) => note.id === noteId);

  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }

  res.json(note);
});

router.put("/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  const { title, content } = req.body;

  if (!title && !content) {
    return res
      .status(400)
      .json({ error: "Title or content is required for update" });
  }

  const noteIndex = notes.findIndex((note) => note.id === noteId);

  if (noteIndex === -1) {
    return res.status(404).json({ error: "Note not found" });
  }

  // Update only the provided fields
  notes[noteIndex] = {
    ...notes[noteIndex],
    ...(title && { title }),
    ...(content && { content }),
    updatedAt: new Date().toISOString(),
  };

  res.json(notes[noteIndex]);
});

router.delete("/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  const noteIndex = notes.findIndex((note) => note.id === noteId);

  if (noteIndex === -1) {
    return res.status(404).json({ error: "Note not found" });
  }

  const deletedNote = notes[noteIndex];
  notes.splice(noteIndex, 1);

  res.json({ message: "Note deleted successfully", deletedNote });
});

module.exports = router;
