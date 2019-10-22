import hello from '../src/index';

it('should return hello world', () => {
  expect(hello()).toEqual('hello world');
});
