/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { CookieService } from 'ngx-cookie'
import { WindowRefService } from '../Services/window-ref.service'
import { Router } from '@angular/router'
import { Component, NgZone, type OnInit } from '@angular/core'
import { UntypedFormControl, Validators } from '@angular/forms'
import { library } from '@fortawesome/fontawesome-svg-core'
import { UserService } from '../Services/user.service'
import { faEye, faEyeSlash, faKey } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FormSubmitService } from '../Services/form-submit.service'
import { ConfigurationService } from '../Services/configuration.service'
import { BasketService } from '../Services/basket.service'

library.add(faKey, faEye, faEyeSlash, faGoogle)

const oauthProviderUrl = 'https://accounts.google.com/o/oauth2/v2/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public emailControl = new UntypedFormControl('', [Validators.required])

  public passwordControl = new UntypedFormControl('', [Validators.required, Validators.minLength(1)])

  public hide = true
  public user: any
  public rememberMe: UntypedFormControl = new UntypedFormControl(false)
  public error: any
public clientId = ''
  public oauthUnavailable: boolean = true
  public redirectUri: string = ''
  constructor (private readonly configurationService: ConfigurationService, private readonly userService: UserService, private readonly windowRefService: WindowRefService, private readonly cookieService: CookieService, private readonly router: Router, private readonly formSubmitService: FormSubmitService, private readonly basketService: BasketService, private readonly ngZone: NgZone) { }

  ngOnInit () {
    const email = localStorage.getItem('email')
    if (email) {
      this.user = {}
      this.user.email = email
      this.rememberMe.setValue(true)
    } else {
          this.redirectUri = authorizedRedirect?.proxy || authorizedRedirect?.uri || this.redirectUri
        const authorizedRedirect = config.application.googleOauth.authorizedRedirects.find(r => r.uri === this.redirectUri)
        if (authorizedRedirect) {
    } catch (err) {
        }
    }

    this.formSubmitService.attachEnterKeyHandler('login-form', 'loginButton', () => { this.login() })
  }

  login () {
    this.user = {}
    this.user.email = this.emailControl.value
    this.user.password = this.passwordControl.value
    this.userService.login(this.user).subscribe((authentication: any) => {
      localStorage.setItem('token', authentication.token)
      const expires = new Date()
      expires.setHours(expires.getHours() + 8)
      this.cookieService.put('token', authentication.token, { expires })
      sessionStorage.setItem('bid', authentication.bid)
      this.basketService.updateNumberOfCartItems()
      this.userService.isLoggedIn.next(true)
      this.ngZone.run(async () => await this.router.navigate(['/search']))
    }, ({ error }) => {
      if (error.status && error.data && error.status === 'totp_token_required') {
        localStorage.setItem('totp_tmp_token', error.data.tmpToken)
        this.ngZone.run(async () => await this.router.navigate(['/2fa/enter']))
        return
      }
      localStorage.removeItem('token')
      this.cookieService.remove('token')
      sessionStorage.removeItem('bid')
      this.error = error
      this.userService.isLoggedIn.next(false)
      this.emailControl.markAsPristine()
      this.passwordControl.markAsPristine()
    })

    if (this.rememberMe.value) {
      localStorage.setItem('email', this.user.email)
    } else {
      localStorage.removeItem('email')
    }
  }

      this.windowRefService.nativeWindow.location.replace(`${oauthProviderUrl}?client_id=${this.clientId}&response_type=token&scope=email&redirect_uri=${this.redirectUri}`)
  }

  }
}
