'use client';
import React, { useState, useEffect } from 'react';

const initialNotes = JSON.parse(localStorage.getItem('notes') || '[]');

export default function Home() {

  const [newNote, setNewNote] = useState<string>();
  const [notes, setNotes] = useState<string[]>(initialNotes);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote?.trim()) {
      setNotes(prev => [...prev, newNote.trim()]);
      setNewNote('');
    }
  };

  const deleteNote = (index:number) => {
    const updateNotes = notes.filter((_, i) => i !== index);
    setNotes(updateNotes);
    localStorage.setItem('notes', JSON.stringify(updateNotes)); 
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">📝 Yeni Not:</h1>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          className="border px-3 py-1 w-full rounded"
          placeholder="Bir not yaz..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote} className="bg-blue-500 text-white px-4 py-1 rounded">
          +
        </button>
      </div>

      <h2 className="text-lg font-medium mb-2">🗒️ Notlar:</h2>
      <ul className="space-y-2">
        {notes.map((note, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded">
            <span>{note}</span>
            <button
              onClick={() => deleteNote(index)}
              className="text-sm text-red-500 hover:underline"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
