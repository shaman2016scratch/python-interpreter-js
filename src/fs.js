import fs from "node:fs"

class VirtualFS {
  constructor () {}
}

class PyFS {
  constructor (isWeb, isVM) {
    this.isReal = !isWeb && !isVM
    this.isVirtual = isWeb || isVM
  }
}

export { VirtualFS, PyFS }
