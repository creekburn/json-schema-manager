'use strict'

const JSONSchemaManager = require('@creekburn/schema-manager-lib')

describe('constructor', () => {
  it('can be constructed', () => {
    const manager = new JSONSchemaManager({})
  })

  it('options are publically saved to instance', () => {
    const manager = new JSONSchemaManager({
      someOpt: 'someValue'
    })
    expect(manager.options.someOpt).toBe('someValue')
  })
})
