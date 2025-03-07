export interface IEnvironment {
  apiUrl: string,
  authUrl: string,
  baseHref: string,
  environment: 'localhost' | 'test' | 'production' | string,
}
