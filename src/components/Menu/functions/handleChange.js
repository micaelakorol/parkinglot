export const handleChange = (e, setInput) => {
  const { name, value } = e.target
  setInput((prev) => ({
    ...prev,
    [name]: value,
  }))
}

export default handleChange
