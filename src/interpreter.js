import Error from "./error.js"

class interpreter {
  constructor (py) {
    this.python = py
  }

  interpretation () {
    const code = py
    let interpreterData = {
      line: -1,
      symbol: -1
    }
    const lines = code.split("\n")
    const tab = "\t"
    for (let i = 0; i < lines.length; i++) {
      interpreterData.line = i
    }
  }
}

export default interpreter
