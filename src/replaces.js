const replaces = {
  "print": "console.log('{content}')",
  "defStart": "variables.{name} = function ({args}) {",
  "defEnd": "}; variablesData.{name} = { type: types.string }"
}

export default replaces
