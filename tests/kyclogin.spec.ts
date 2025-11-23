import { test, expect } from "playwright/test";
import { Login } from "../pages/loginpage";
//  Using loginpage POM

test('Login', async ({page}) => { 
    
 })

//test("login", async ({ page }) => {
//   await page.goto(
//     "https://dev-naasa-client-management.waterflowtechnology.net/login"
//   );
//   await page.getByPlaceholder("Enter your email").fill("automate@yopmail.com");
//   await page.getByPlaceholder("Enter your Password").fill("Test@123");
//   await page.getByRole("button", { name: "Sign In" }).click();
//   // await expect(page).toHaveURL("https://dev-keycloak.waterflow.technology/realms/naasa/protocol/openid-connect/auth?client_id=kyc&scope=openid%20profile%20&response_type=code&redirect_uri=https%3A%2F%2Fdev-naasa-client-management.waterflowtechnology.net%2Fapi%2Fauth%2Fcallback%2Fkeycloak")
//   //await page.toHaveURL(/.*keycloak.*/);
//   await expect(page).toHaveURL(
//     "https://dev-naasa-client-management.waterflowtechnology.net/"
//   );
//});


