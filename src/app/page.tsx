'use client';

import NoteForm from '@/components/NoteForm';
import NoteList from '@/components/NoteList';
import React, { useState } from 'react';    
import { v4 as uuidv4 } from 'uuid';
import { Note } from '@/types/notes';

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([])
  const [noteEdit, setNoteEdit] = useState<Note|null>(null)

  const addNote = (text: string) => {
    const newNote: Note = {
      id: uuidv4(),
      text,
      createdAt: new Date()
    }
    setNotes(prev => [...prev, newNote])
  }

  const deleteNote = (id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id))
  }

  const onEdit = (id: string) => {
    const noteToEdit = notes.find(note => note.id === id);
    if(!noteToEdit) return;
    setNoteEdit(noteToEdit);
  }

  const editNote = (note: Note | null) => {
    console.log('editNote', note);
    if (!note) return;
    setNotes(prev => prev.map(n => n.id === note.id ? note : n))
    setNoteEdit(null);
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">📝 Yeni Not:</h1>
      <NoteForm onAdd={addNote} editNote={editNote} noteEdit={noteEdit}/>
      <hr className="my-6" />
      <h2 className="text-lg font-medium mb-2">🗒️ Notlar:</h2>
      <NoteList onEdit={onEdit} notes={notes} onDelete={deleteNote} />
    </div>
  );
}
