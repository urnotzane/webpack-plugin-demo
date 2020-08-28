const getFormattedDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month > 9 ? month : `0${month}`}-${day > 9 ? day : `0${day}`}`
}

class CommentsToEachJs {
  constructor(options) {
    this.options = options
  }
  apply = (compiler) => {
    compiler.hooks.emit.tap({
      name: 'CommentsToEachJs'
    }, (compilation) => {
      try {
        if (!this.options) {
          return;
        }
        const { author, date } = this.options;
        let comment = '\/**\n'
        if (author) {
          if (author instanceof Array) {
            comment += ` * @author ${author.join(', ')}\n`
          }
        }
        if (date) {
          comment += ` * @date ${getFormattedDate()}\n`
        }
        comment += ' *\/\n'
        const { assets } = compilation;
        for (const [key, value] of Object.entries(assets)) {
          if (/.js$/.test(key)) {
            value._source.children.unshift(comment);
          }
        }
      } catch (error) {
        console.log(error)
      }
    })
  }
}

module.exports = CommentsToEachJs