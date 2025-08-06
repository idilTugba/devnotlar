'use client'

import { useState } from 'react'

interface NoteFormProps {
  onAdd: (text: string) => void
}

export default function NoteForm({ onAdd }: NoteFormProps) {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
        + 
      </button>
    </form>
  )
}
