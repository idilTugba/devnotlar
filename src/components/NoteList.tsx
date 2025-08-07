'use client'

import { Note } from '@/types/notes'

interface NoteListProps {
  notes: Note[]
  onDelete: (id: string) => void
  onEdit: (id: string) => void
}

export default function NoteList({ notes, onDelete, onEdit }: NoteListProps) {
  return (
    <ul className="space-y-2">
      {notes.map((note) => (
        <li key={note.id} className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded">
          <span>{note.text}</span>
          <button
            onClick={() => onDelete(note.id)}
            className="text-sm text-red-500 hover:underline"
          >
            X
          </button>
          <button
            className="text-sm text-red-500 hover:underline"
            onClick={()=>onEdit(note.id)}
          >Edit</button>   
        </li>
      ))}
    </ul>
  )
}
