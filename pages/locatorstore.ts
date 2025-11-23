import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev-keycloak.waterflow.technology/realms/naasa/protocol/openid-connect/auth?client_id=kyc&scope=openid%20profile%20&response_type=code&redirect_uri=https%3A%2F%2Fdev-naasa-client-management.waterflowtechnology.net%2Fapi%2Fauth%2Fcallback%2Fkeycloak&state=VYa29lh2fiOOZDMPNWm4HFk1kswdvFwipcMsPGT2sGs');

  await page.getByRole('radio', { name: 'Demat & Trading Account' }).check();
  await page.goto('https://dev-naasa-client-management.waterflowtechnology.net/');
  await page.getByRole('radio', { name: 'Trading Account', exact: true }).check();
  await page.goto('https://dev-naasa-client-management.waterflowtechnology.net/');
  await page.locator('div').filter({ hasText: /^Minor \(अवयस्क\)User below 18 \(१८ वर्षमुनिको उमेर\)$/ }).nth(1).click();
  await page.getByRole('heading', { name: 'Adult (वयस्क)' }).click();
  await page.getByRole('button', { name: 'Browse files' }).click();
  await page.locator('div').filter({ hasText: /^Minor \(अवयस्क\)User below 18 \(१८ वर्षमुनिको उमेर\)$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Browse files' }).click();
  await page.locator('div').filter({ hasText: 'Adult (वयस्क)User above 18' }).nth(5).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('9749716003');
  await page.getByRole('textbox', { name: 'Alternative Number' }).click();
  await page.getByRole('textbox', { name: 'Alternative Number' }).fill('9748521202');
  await page.getByRole('textbox', { name: 'Demat Number' }).click();
  await page.getByRole('textbox', { name: 'Demat Number' }).fill('130245860124578');
  await page.locator('div').filter({ hasText: 'Minor (अवयस्क)User below 18' }).nth(5).click();
});




test('test', async ({ page }) => {
  await page.goto('https://dev-keycloak.waterflow.technology/realms/naasa/protocol/openid-connect/auth?client_id=kyc&scope=openid%20profile%20&response_type=code&redirect_uri=https%3A%2F%2Fdev-naasa-client-management.waterflowtechnology.net%2Fapi%2Fauth%2Fcallback%2Fkeycloak&state=0LJglKw4g_CoGqGInjJ3QUcsVVnceKdlrrDTLPCQVHo');
  await page.getByRole('link', { name: 'Register' }).click();
  await 
  await page.getByRole('textbox', { name: 'First name' }).fill('sujan');
  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('sujan');
  await page.getByRole('textbox', { name: 'Last name' }).click();
  await page.getByRole('textbox', { name: 'Last name' }).fill('sujan');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('sujan@yopmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Enter');
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Test@123');
  await page.getByRole('textbox', { name: 'Confirm password' }).click();
  await page.getByRole('textbox', { name: 'Confirm password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Register' }).click();
});