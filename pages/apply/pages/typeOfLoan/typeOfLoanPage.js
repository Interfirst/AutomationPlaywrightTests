exports.TypeOfLoanPage = class TypeOfLoanPage {

    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
    }

    /**
   * @param loan - Loan type
   */
    async selectLoanType(loan) {
        this.cardType = this.page.locator('[class^="RadioCardstyles__Wrapper"]', {hasText: loan}).waitFor();
        this.cardType.click();
    }
};
