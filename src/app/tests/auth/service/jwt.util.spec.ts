import { JwtUtil } from './../../../auth/service/jwt.util';

describe('Util: JwtUtil', () => {
  describe('Test: getUser', () => {
    it('should return user object', () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoaXZhQGdtYWlsLmNvbSIsImlhdCI6MTYwMDE1NjgyMiwiZXhwIjoxNjAwMTYwNDIyLCJzdWIiOiIxIn0.78R5MWtxrHR26QmTYcADnF1VKqP4bnfJEpEqjgDPoSQ';

      const response = {
        id: 1,
        email: 'shiva@gmail.com',
        accessToken: token
      };

      expect(JwtUtil.getUser(token)).toEqual(response);
    });
  });
});
