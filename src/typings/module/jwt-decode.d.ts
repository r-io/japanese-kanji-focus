declare module 'jwt-decode' {
  import { UserData } from '@typings/model/auth';

  export function jwt_decode(token: string): UserData;

  export default jwt_decode;
}