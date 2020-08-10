import { UserManager } from 'oidc-client'

class ApplicationUserManager extends UserManager {
  constructor () {
    super({
      authority: 'http://127.0.0.1:9070',
      client_id: 'eggsjwsrweb',
      redirect_uri: 'http://127.0.0.1:8081/callback',
      response_type: 'id_token token',
      scope: 'roles blog.core.api openid profile',
      post_logout_redirect_uri: 'http://127.0.0.1:8081'
    })
  }

  async login () {
    await this.signinRedirect()
    return this.getUser()
  }

  async logout () {
    return this.signoutRedirect()
  }
}

const applicationUserManager = new ApplicationUserManager()
export { applicationUserManager as default }
