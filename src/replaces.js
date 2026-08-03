const replaces = {
  "print": "console.log('{content}')",
  "def": "variables.{name} = function ({args}) { {interpretedContent} }"
}
