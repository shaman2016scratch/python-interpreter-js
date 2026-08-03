const replaces = {
  "print": "console.log('{content}')",
  "defStart": "variables.{name} = function ({args}) {",
  "defEnd": "}; variablesData.{name} = { type: types.str }"
}

export default replaces
