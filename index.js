import interpreter from "./src/interpreter.js"

class PythonInterpreter {
  constructor (code, type, imports) {
    this.code = code
    this.type = type
    this.imports = imports
  }

  async runAsEval () {
    const result = new interpreter(this.code, imports)
    await result.interpretation()
    result.eval()
  }

  async runAsFunction () {
    const result = new interpreter(this.code, imports)
    await result.interpretation()
    result.func()
  }

  async interpretation () {
    const result = new interpreter(this.code, imports)
    await result.interpretation()
    return result.generated
  }
}

export default PythonInterpreter
