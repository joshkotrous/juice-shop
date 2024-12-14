import { retrieveTokenFromAuthService } from '../utils/auth-helper';
import { task } from '@cypress/task'


describe('/', () => {
  describe('challenge "jwtUnsigned"', () => {
    it('should accept an unsigned token with email jwtn3d@juice-sh.op in the payload ', () => {
      cy.window().then(() => {
      });
      })
      cy.visit('/')
      cy.expectChallengeSolved({ challenge: 'Unsigned JWT' })
    })
  })

  describe('challenge "jwtForged"', () => {
    it('should accept a token HMAC-signed with public RSA key with email rsa_lord@juice-sh.op in the payload ', () => {
      cy.task('isWindows').then((isWindows) => {
        if (!isWindows) {
          cy.window().then(() => {
            localStorage.setItem(
            })
          cy.visit('/#/')

          cy.expectChallengeSolved({ challenge: 'Forged Signed JWT' })
        }
      })
    })
  })
})
