module.exports = {
  processors: {
    '.php': {
      preprocess: (text, filename) => [text.replace(/<\?.*\?>/g, '0')],
      postprocess: (messages, filename) => messages[0]
    }
  }
}

