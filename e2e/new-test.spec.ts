import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

test('login', async({ page }) => {
    
    await login(page);


    // Expect a title "to contain" a substring.
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
  

async function login(page: Page) {
    const login = page.getByPlaceholder('Username');

    await login.fill("standard_user");

    await page.getByPlaceholder('Password').fill("secret_sauce");

    await page.locator('[data-test="login-button"]').click();

}

