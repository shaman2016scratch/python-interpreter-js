const replaces = {
  "print": "console.log('{content}')",
  "defStart": "variables.{name} = function ({args}) {",
  "defEnd": "}"
}

export default replaces
