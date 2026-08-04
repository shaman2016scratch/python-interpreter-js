class Error {
  constructor (text, metadata) {
    this.txt = text
    this.m = metadata
  }

  syntax () {
    return `Syntax Error: ${this.text} in ${this.m.line}, ${this.m.symbol}`
  }

  type () {
    return `Type Error: ${this.text} in ${this.m.line}, ${this.m.symbol}`
  }

  name () {
    return `Name Error: ${this.text} in ${this.m.line}, ${this.m.symbol}`
  }

  other () {
    return `Error: ${this.text} in ${this.m.line}, ${this.m.symbol}`
  }

  setType (t) {
    return `${t} Error: ${this.text} in ${this.m.line}, ${this.m.symbol}`
  }

  noType () {
    return `${this.text} in ${this.m.line}, ${this.m.symbol}`
  }
}

export default Error
