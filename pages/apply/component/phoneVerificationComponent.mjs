// @ts-check
class PhoneVerificationComponent {
    constructor(page) {
        this.page = page;
        this.verificationCodeInput = this.page.locator('[data-testid="phoneVerification__codeInput"] > input');
        this.resendCodeButton = this.page.locator('[class="Button__BaseButton-sc-k5apaq-0"]', {hasText: 'Resend Code'});
        this.verificationCodeText = this.page.locator('[data-testid=phoneVerification__codeMessage]');
    }

    async getVerificationCode() {
        const code = await this.verificationCodeText.textContent();
        await this.verificationCodeInput.type(await code.substring(code.length - 6));
    }
}

export {PhoneVerificationComponent};