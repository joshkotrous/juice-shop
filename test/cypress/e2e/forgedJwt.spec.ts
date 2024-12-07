import * as jsonwebtoken from 'jsonwebtoken';
import { env } from 'process';


function generateSecureToken(payload: any, config: any): string {
  return jsonwebtoken.sign(payload, config.key, {
    algorithm: config.algorithm,
    expiresIn: config.expiresIn
        localStorage.setItem('token', jwtToken);

describe('/', () => {
  describe('challenge "jwtUnsigned"', () => {
    it('should accept an unsigned token with email jwtn3d@juice-sh.op in the payload ', () => {
      cy.window().then(() => {
        localStorage.setItem(
          'token',
          'eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJkYXRhIjp7ImVtYWlsIjoiand0bjNkQGp1aWNlLXNoLm9wIn0sImlhdCI6MTUwODYzOTYxMiwiZXhwIjo5OTk5OTk5OTk5fQ.'
        )
      })
      cy.visit('/')
            localStorage.setItem('token', jwtToken);

  describe('challenge "jwtForged"', () => {
    it('should accept a token HMAC-signed with public RSA key with email rsa_lord@juice-sh.op in the payload ', () => {
      cy.task('isWindows').then((isWindows) => {
        if (!isWindows) {
          cy.window().then(() => {
            localStorage.setItem(
              'token',
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImVtYWlsIjoicnNhX2xvcmRAanVpY2Utc2gub3AifSwiaWF0IjoxNTgzMDM3NzExfQ.gShXDT5TrE5736mpIbfVDEcQbLfteJaQUG7Z0PH8Xc8'
            )
            localStorage.setItem('token',
              token
          cy.expectChallengeSolved({ challenge: 'Forged Signed JWT' })
function getTokenFromEnvironment(tokenKey: string): string | undefined {
  if (typeof process !== 'undefined' && process.env) {
    return process.env[tokenKey];
  }
  if (typeof Cypress !== 'undefined') {
    return Cypress.env(tokenKey);
  }
  return undefined;
}
        }
      })
    })
  })
})
