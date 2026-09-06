class PyError extends Error {
  constructor (text, metadata) {
    super(text)
    this.txt = text
    this.m = metadata
  }

  syntax () {
    return `Syntax Error: ${this.message} in ${this.m.line+1}, ${this.m.symbol}`
  }

  type () {
    return `Type Error: ${this.message} in ${this.m.line+1}, ${this.m.symbol}`
  }

  name () {
    return `Name Error: ${this.message} in ${this.m.line+1}, ${this.m.symbol}`
  }

  other () {
    return `Error: ${this.message} in ${this.m.line+1}, ${this.m.symbol}`
  }

  setType (t) {
    return `${t} Error: ${this.message} in ${this.m.line+1}, ${this.m.symbol}`
  }

  noType () {
    return `${this.message} in ${this.m.line+1}, ${this.m.symbol}`
  }
}

export default PyError
