const chai = require('chai')
const assert = chai.assert
const yellPhrase = require('../yellPhrase').yellPhrase
/* eslint-env node, mocha */

describe('yellPhrase', () => {
  it('should convert a string to all caps', () => {
    assert.equal(yellPhrase('hey there'), 'HEY THERE')
    assert.equal(yellPhrase('hi there'), 'HI THERE')
  })
  it('should dispay a message if given a non-string input', () => {
    assert.equal(yellPhrase(['hi', 'there']), 'Please input a string')
    assert.equal(yellPhrase(), 'Please input a string')
  })
})
