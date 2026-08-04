import interpreter from "./src/interpreter.js"

class PythonInterpreter {
  constructor (code, imports) {
    this.code = code
    this.imports = imports
  }

  async runAsEval (runner) {
    const result = new interpreter(this.code, this.imports, runner)
    await result.interpretation()
    result.eval()
  }

  async runAsFunction (runner) {
    const result = new interpreter(this.code, this.imports, runner)
    await result.interpretation()
    result.func()
  }

  async interpretation (runner) {
    const result = new interpreter(this.code, this.imports, runner)
    await result.interpretation()
    return result.generated
  }
}

export default PythonInterpreter
