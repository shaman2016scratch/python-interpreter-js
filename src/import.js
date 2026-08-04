class Import {
  constructor (imports) {
    this.imports = imports
    this.installed = []
  }

  install (name, version) {}

  import (name) {}

  addPackage (data) {}
}

export default Import
