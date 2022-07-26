import React, { useState } from 'react'

export const useForm = initialState => {
  const [form, setForm] = useState(initialState)

  const onChange = event => {
    const { value, name } = event.target
    setForm({ ...form, [name]: value })
  }

  const clearForm = () => {
    setForm(initialState)
  }

  return [form, onChange, clearForm]
}

export default useForm
