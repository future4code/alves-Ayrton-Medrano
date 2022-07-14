import React, { useState } from 'react'

const useForm = initialState => {
  const [form, setForm] = useState(initialState)
  const onChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const cleanInputs = () => {
    setForm(initialState)
  }
  return { form, onChange, cleanInputs }
}

export default useForm
