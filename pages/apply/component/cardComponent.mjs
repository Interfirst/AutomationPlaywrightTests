// @ts-check
class CardComponent {
    constructor(page) {
        this.page = page;
        this.cardType = page.locator('label[class^="RadioCardstyles__Wrapper"]');
    }

    /**
   * @param loan - Loan type
   */
    async selectLoanType({loanType}) {
        await this.cardType.locator(':scope', {hasText: loanType}).click();
    }
}

export {CardComponent};