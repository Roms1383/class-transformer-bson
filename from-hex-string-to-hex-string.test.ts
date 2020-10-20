import { ObjectId } from 'bson';
import { plainToClass } from 'class-transformer';

class User {
  _id!: string
}

describe('from plain hex string to class string', () => {
  const plain = { _id: new ObjectId().toHexString() }
  const from = plain._id
  it('can deserialize', () => {
    const deserialized = plainToClass(User, plain)
    const to = deserialized._id
    expect(from).toBe(to)
  })
})
