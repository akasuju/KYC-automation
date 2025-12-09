import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://dev-keycloak.waterflow.technology/realms/naasa/protocol/openid-connect/auth?client_id=kyc&scope=openid%20profile%20&response_type=code&redirect_uri=https%3A%2F%2Fdev-naasa-client-management.waterflowtechnology.net%2Fapi%2Fauth%2Fcallback%2Fkeycloak&state=56-Vm5FS1i4Tl43uDwSgl0eHnCeRbhmE1qGVKeSY2fQ"
  );
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("automate@yopmail.com");
  await page.getByRole("textbox", { name: "Email" }).press("Enter");
  await page.getByRole("textbox", { name: "Enter Your Password" }).click();
  await page
    .getByRole("textbox", { name: "Enter Your Password" })
    .fill("Test@123");
  await page.getByRole("button", { name: "Show password" }).click();
  await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();
  await expect(page.locator("#kc-login")).toMatchAriaSnapshot(
    `- button "Sign In"`
  );
  await page.getByRole("button", { name: "Sign In" }).click();
  // await page.getByText('Sujan29% KYC Registration').dblclick();
  await page.getByRole("img", { name: "NaasaLogo" }).click();
 // await expect(page.locator("body")).toContainText("KYC Registration Form");
 // await expect(page.locator("body")).toMatchAriaSnapshot(
  //  `- text: Personal Details`
 // );
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByRole("button", { name: "Next" }).click();
});
