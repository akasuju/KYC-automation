import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev-keycloak.waterflow.technology/realms/naasa/protocol/openid-connect/auth?client_id=kyc&scope=openid%20profile%20&response_type=code&redirect_uri=https%3A%2F%2Fdev-naasa-client-management.waterflowtechnology.net%2Fapi%2Fauth%2Fcallback%2Fkeycloak&state=VCXOBnMO6nVVJo4lr-qgDp4scrMdYjQ4U7Hqy22wQTw');
  await page.getByRole('textbox', { name: 'Email' }).click();


 page.getByRole('textbox', { name: 'Enter Your Password' });
  await page.getByText('Remember me').click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
});