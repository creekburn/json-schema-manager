/**
 * @type {AJV}
 * @see {@link https://github.com/ajv-validator/ajv|AJV}
 */
const AJV = require('ajv')
const _ = require('lodash')

const AJV_DEFAULTS = {}

/**
 * Manages JSON Schema Files.
 * @type {JSONSchemaManager}
 */
class JSONSchemaManager {
  /**
   * Create a JSON Schema Manager with reusable options.
   * @param {object} options Options to use for Manager operations.
   * @param {string} [options.baseDir] Base directory to use to resolve JSON Schemas.
   *                                   If relative, will be converted to absolute from
   *                                   {@link process#cwd}
   * @param {object} [options.ajvOpts] Configuration options to pass to the instance of
   *                                   AJV that gets constructed.
   * @param {AJV} [options.ajv] Already configured instance of AJV.
   * @return {JSONSchemaManager} Ready to use JSONSchemaManager
   */
  constructor (options) {
    this.options = options

    if (options.ajv) {
      this.ajv = ajv
    }
  }

  /**
   * Creates a new instance of {@link AJV},
   * or returns the previously constructed AJV.
   * @return {AJV} Configured instance of AJV.
   */
  async createAJV () {
    if (!this.ajv) {
      this.ajv = new AJV(_.merge({}, AJV_DEFAULTS, this.options.ajvOpts || {}))
    }
    return this.ajv
  }
}

module.exports = JSONSchemaManager
