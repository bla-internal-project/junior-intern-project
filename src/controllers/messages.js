const sendMessage = async (req, res) => {
  const { message } = req.body
  if (!message) {
    return res.status(401).json({ errors: [{ message: 'A message key is required' }] })
  }
  return res.status(201).json({ message })
}

module.exports = {
  sendMessage,
}
