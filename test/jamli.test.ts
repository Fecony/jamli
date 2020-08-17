import { Jamli } from '../src';

describe('Jamli', () => {
  it('should return Jamli instance', () => {
    const jamli = new Jamli();
    expect(jamli).toBeInstanceOf(Jamli);
  });
});
