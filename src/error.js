class PyError extends Error {
  constructor (text, metadata) {
    this.txt = text
    this.m = metadata
    super(text)
  }

  syntax () {
    return `Syntax Error: ${this.message} in ${this.m.line}, ${this.m.symbol}`
  }

  type () {
    return `Type Error: ${this.message} in ${this.m.line}, ${this.m.symbol}`
  }

  name () {
    return `Name Error: ${this.message} in ${this.m.line}, ${this.m.symbol}`
  }

  other () {
    return `Error: ${this.message} in ${this.m.line}, ${this.m.symbol}`
  }

  setType (t) {
    return `${t} Error: ${this.message} in ${this.m.line}, ${this.m.symbol}`
  }

  noType () {
    return `${this.message} in ${this.m.line}, ${this.m.symbol}`
  }
}

export default PyError
