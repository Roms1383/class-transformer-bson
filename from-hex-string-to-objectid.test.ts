import { ObjectId } from 'bson';
import { plainToClass, Transform } from 'class-transformer';

class User {
  @Transform((v: string) => ObjectId.createFromHexString(v), { toClassOnly: true })
  _id!: ObjectId
}

describe('from plain hex string to class ObjectId', () => {
  const plain = { _id: new ObjectId().toHexString() }
  const from = plain._id
  it('can deserialize', () => {
    const deserialized = plainToClass(User, plain)
    const to = deserialized._id.toHexString()
    expect(from).toBe(to)
  })
})
