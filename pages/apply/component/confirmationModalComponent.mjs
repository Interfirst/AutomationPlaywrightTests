// @ts-check
class ConfirmationModalComponent {
    constructor(page) {
        this.page = page;
        this.descriptionText = this.page.locator('[class^="ConfirmationModalstyles__Question"]');
        this.cancelButton = this.page.locator('[class^="AssignApplicationModalstyles__Wrapper"]', {hasText: 'No'});
        this.submitButton = this.page.locator('[class^="AssignApplicationModalstyles__Wrapper"]', {hasText: 'Yes'});
    }

    async clickButton({buttonName}) {
        this.buttons = this.page.locator('[class^="AssignApplicationModalstyles__Wrapper"]', {hasText: buttonName});
        await this.buttons.click();
    }
}

export {ConfirmationModalComponent};