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
    await result.interprete()
    result.eval()
  }
}

export default PythonInterpreter
