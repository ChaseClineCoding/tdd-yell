module.exports = {
  yellPhrase: (phrase) => typeof phrase !== 'string' ? 'Please input a string' : phrase.toUpperCase()
}
