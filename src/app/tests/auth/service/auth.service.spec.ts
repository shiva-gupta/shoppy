import { EnvService } from './../../../main/service/env/env.service';
import { User } from 'src/app/auth/store/model/user';
import { AuthService } from './../../../auth/service/auth.service';
import { of } from 'rxjs';

describe('Service: AuthService', () => {
  let service: AuthService;
  let envService: EnvService;
  const http = jest.fn();
  const env = jest.fn();

  beforeEach(() => {
    service = new AuthService(http as any, env as any);
    envService = new EnvService();
  });

  describe('Test: register', () => {
    it('should return token', done => {
      const user: User = {name: 'a1', email: 'a1@gmail.com', password: 'password'};
      const response = {token: {}};

      const httpMock = {
        post: jest.fn().mockReturnValue(of(response))
      };
      const serviceMock = new AuthService(httpMock as any, envService);

      serviceMock.register(user)
        .subscribe(data => {
          expect(httpMock.post).toBeDefined();
          expect(httpMock.post).toHaveBeenCalled();
          expect(data).toEqual(response);

          done();
        });
    });
  });

  describe('Test: login', () => {
    it('should return token', done => {
      const user: User = {email: 'shiva@gmail.com', password: 'password'};
      const response = {token: {}};

      const httpMock = {
        post: jest.fn().mockReturnValue(of(response))
      };
      const serviceMock = new AuthService(httpMock as any, envService);

      serviceMock.login(user)
        .subscribe(data => {
          expect(httpMock.post).toBeDefined();
          expect(httpMock.post).toBeCalled();
          expect(data).toEqual(response);

          done();
        });
    });
  });
});
