import { ObjectId } from 'bson';
import { plainToClass, Transform } from 'class-transformer';

class User {
  @Transform((_, from: any) => from._id, { toClassOnly: true })
  _id!: ObjectId
}

describe('from plain ObjectId to class hex string', () => {
  const plain = { _id: new ObjectId() }
  const from = plain._id.toHexString()
  it('can deserialize', () => {
    const deserialized = plainToClass(User, plain)
    const to = deserialized._id.toHexString()
    expect(from).toBe(to)
  })
})