import { ObjectId } from 'bson';

describe('basic behaviour of bson', () => {
  it('constructor always produces different hex string', () => {
    const one = new ObjectId()
    const two = new ObjectId()
    const hexOne = one.toHexString()
    const hexTwo = two.toHexString()
    expect(hexOne)
    .not
    .toBe(hexTwo)
  })
  it('constructor with same hex string produces same ObjectId', () => {
    const hex = '5f8e96c425d5a9404b9b6750'
    const one = new ObjectId(hex)
    const two = new ObjectId(hex)
    const hexOne = one.toHexString()
    const hexTwo = two.toHexString()
    expect(hexOne)
    .toBe(hexTwo)
  })
  it('createFromHexString produces same ObjectId', () => {
    const hex = '5f8e96c425d5a9404b9b6750'
    const one = ObjectId.createFromHexString(hex)
    const two = ObjectId.createFromHexString(hex)
    const hexOne = one.toHexString()
    const hexTwo = two.toHexString()
    expect(hexOne)
    .toBe(hexTwo)
    expect(one)
    .toStrictEqual(two)
  })
})