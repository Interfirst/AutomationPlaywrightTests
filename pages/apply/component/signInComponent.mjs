// @ts-check
class SignInComponent {
    constructor(page) {
        this.page = page;
        this.header = this.page.locator('h1');
        this.phoneNumberField = this.page.locator('[data-testid="phoneNumberModal__mobileNumberInput"]');
        this.continueButton = this.page.locator('[data-testid="phoneNumberModal__submitButton"]');
        this.profileDropdown = this.page.locator('[data-testid="header__dropDownMenuButton"]');
    }

    /**
   * @param phoneNumber - User Phone number
   */
    async enterPhoneNumber({phoneNumber}) {
        await this.phoneNumberField.type(phoneNumber);
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }
}

export { SignInComponent};
