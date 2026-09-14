if (typeof globalThis.Blob === 'undefined') {
  globalThis.Blob = require('buffer').Blob;
}

if (typeof globalThis.File === 'undefined') {
  const Blob = globalThis.Blob;

  class File extends Blob {
    constructor(bits = [], name = '', options = {}) {
      super(bits, options);
      this.name = name;
      this.lastModified = options.lastModified ?? Date.now();
    }

    get lastModifiedDate() {
      return new Date(this.lastModified);
    }

    toString() {
      return '[object File]';
    }
  }

  globalThis.File = File;
}
