class Error {
  constructor (text, metadata) {
    this.txt = text
    this.m = metadata
  }

  syntax (a) {
    return `Syntax Error: ${this.text} in ${this.m.line}, ${this.m.symbol}`
  }
}

export default Error
