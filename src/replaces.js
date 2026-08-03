const replaces = {
  "print": "console.log('{content}')",
  "defStart": "variables.{name} = function ({args}) {",
  "defEnd": "}; variablesData.{name} = { type: types.function };",
  "input": "console.error('input is not defined')",
  "exit": "process.exit()"
}

export default replaces
