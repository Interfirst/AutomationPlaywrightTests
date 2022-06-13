// @ts-check

const { test, expect } = require('@playwright/test');
const { TypeOfLoanPage } = require('../../../pages/apply/pages/typeOfLoan/typeOfLoanPage');

test.describe('Apply', () => {
    test('User open Apply', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveURL('https://qa-apply.cyberdynemortgage.com');
    });

    test('User click Purchase card', async({page}) => {
        const typeOfLoan = new TypeOfLoanPage(page);
        await page.goto('/');
        await typeOfLoan.selectLoanType('PURCHASE');
        //await expect(page.url()).toContain('*/purchase-process-type');
    });
});