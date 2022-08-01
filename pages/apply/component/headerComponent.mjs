// @ts-check
import {SignInComponent, PhoneVerificationComponent, ConfirmationModalComponent} from './index.mjs';

class HeaderComponent {
    constructor(page) {
        this.page = page;
        this.logoIcon = this.page.locator('.Headerstyles__LogoIcon-sc-ssd9vy-7');
        this.myAccountButton = this.page.locator('[data-testid="header__clientNameLink"]');
        this.loginButton = this.page.locator('[data-testid="header__loginButton"]');
        this.profileDropdown = this.page.locator('[data-testid="header__dropDownMenuButton"]');

        //Components
        this.signInComponent = new SignInComponent(this.page);
        this.phoneVerificationComponent = new PhoneVerificationComponent(this.page);
        this.confirmationModalComponent = new ConfirmationModalComponent(this.page);
    }

    /**
   * @param userPhone - User Phone number
   */
    async login({userPhone}) {
        await this.loginButton.click();
        await this.signInComponent.enterPhoneNumber({phoneNumber: userPhone});
        await this.signInComponent.clickContinueButton();
        await this.phoneVerificationComponent.getVerificationCode();
    }
}

export {HeaderComponent};
