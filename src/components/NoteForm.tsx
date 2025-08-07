'use client'

import { Note } from '@/types/notes'
import { useEffect, useState } from 'react'

interface NoteFormProps {
  onAdd: (text: string) => void
  noteEdit?: Note | null
  editNote: (note: Note | null) => void
}

export default function NoteForm({ onAdd, noteEdit, editNote }: NoteFormProps) {
  const [text, setText] = useState('')
  const noteEditing = !!noteEdit;

  useEffect(() => {
    if (noteEdit) {
      setText(noteEdit.text)
    } else {
      setText('')
    }
  }, [noteEdit])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(noteEditing) {
        const editedNote: Note = {
          ...noteEdit,
          text: text.trim(),
          updatedAt: new Date()
        }
        editNote(editedNote)
        setText('')
        return
    }
    if (!text.trim()) return
    onAdd(text.trim())
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        className="border px-3 py-1 w-full rounded"
        placeholder="Bir not yaz..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
        {noteEditing ? 'Düzenle' : 'Ekle'}
      </button>
    </form>
  )
}
