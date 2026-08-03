import interpreter from "./src/interpreter.js"
import Import from "./src/import.js"

class PythonInterpreter {
  constructor (code, type, imports) {
    this.code = code
    this.type = type
    this.imports = imports
  }

  async runAsEval () {
    const result = new interpreter(this.code)
    await result.interpretation()
    result.eval()
  }

  async runAsFunction () {
    const result = new interpreter(this.code)
    await result.interpretation()
    result.func()
  }

  async interpretation () {
    const result = new interpreter(this.code)
    await result.interpretation()
    return result.generated
  }
}

export default PythonInterpreter
