import PythonInterpreter from "./index.js"

const pyCode1 = new PythonInterpreter(`
input()
`, {})
const pyCode2 = new PythonInterpreter(``, {})
const pyCode3 = new PythonInterpreter(``, {})
const pyCode4 = new PythonInterpreter(``, {})

console.log(await pyCode1.interpretation())