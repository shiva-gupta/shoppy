import { User } from './../store/model/user';

export class JwtUtil {
  static getUser(token: string): User {
    const obj: any = JSON.parse(atob(token.split('.')[1]));
    return {
      id: Number(obj.sub),
      email: obj.email,
      accessToken: token
    };
  }
}
