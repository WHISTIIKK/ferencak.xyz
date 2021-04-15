let GetRandomEmoji = () => {
  let emojis = ['😎', '😊', '😇', '🤗', '🤠']
  return emojis[ Math.floor(Math.random() * emojis.length) ]
}

export default GetRandomEmoji