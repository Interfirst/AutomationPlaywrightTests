// @ts-check
import { test, expect } from '@playwright/test';
import { Pages, Components } from '../../pages/apply/po.mjs';

test.describe('Apply', () => {
    test('User open Apply', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveURL('https://qa-apply.cyberdynemortgage.com');
    });

    test('User click Purchase card', async({page}) => {
        const pages = new Pages(page);
        await page.goto('/');
        await pages.typeOfLoanPage.cardComponent.selectLoanType({loanType: 'Purchase'});
        await expect(page).toHaveURL(/.*purchase-process-type/);
    });

    test('Check Login', async({page}) => {
        const component = new Components(page);
        await page.goto('/');
        await component.headerComponent.login({userPhone: '(888)888-8888'});
        const header_title = page.locator('h1[class^="step__StepTitle"]');
        await expect(header_title)
            .toHaveText('Welcome Back! Let’s finish up your application');
    });
});
