import { test, expect } from "playwright/test";
import { UserLogin } from "../pages/loginpage";
import { UserRegister } from "../pages/Register";
import { GeneralInfo } from "../pages/General_Details";
import { NavButton } from "../pages/Page_Navigation";
import "dotenv/config";

//  Using loginpage POM

test.only("Login", async ({ page }) => {
  //login
  await page.goto(process.env.LoginURL!);
  // const Login = new UserLogin(page);
  // await Login.Login("automate@yopmail.com", "Test@123");

  //await page.waitForURL(/.*keycloak.*/);
  await expect(page).toHaveURL(process.env.ExpectedLoginURL!);

  //await expect(page).toHaveURL(/.*keycloak.*/);
  await page.pause();
  //expect(page).toHaveURL("")
});

test("Invalid Login", async ({ page }) => {
  //invalid credentials
  const Login = new UserLogin(page);
  await Login.Login("automation@yopmail.com", "wrongpassword");
  await expect(page.getByText("Invalid username or password.")).toBeVisible();
});
test("Empty Password Login", async ({ page }) => {
  //Empty fields
  const Login = new UserLogin(page);
  await Login.Login("automation@yopmail.com", "wrongpassword");
  await expect(page.getByText("Invalid username or password.")).toBeVisible();
});

test("password view eye button", async ({ page }) => {
  //password view eye button
  const Login = new UserLogin(page);
  await Login.Login_fillonly("automation@yopmail.com", "wrongpassword");
  await page.getByRole("button", { name: "Show password" }).click();
  await page.waitForTimeout(2000);
  await page.getByRole("button", { name: "Hide password" }).click();
  await page.waitForTimeout(2000);
  await page.pause();
});

test("playstore Navigation", async ({ page }) => {
  //playstore Navigation
  //const Login = new UserLogin(page);
  await page.goto(process.env.LoginURL!);
  //add settimeout
  await page.waitForTimeout(2000);
  //await page.getByRole("link", { name: "Get it on Google Play" }).click();
  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator('img[alt="Get it on Google Play"]').click(),
  ]);
  await popup.waitForLoadState("domcontentloaded");
  // perform assertions on the new tab
  await expect(popup).toHaveURL(
    "https://play.google.com/store/apps/details?id=com.nepse.nepal"
  );
});

test("Appstore Navigation", async ({ page }) => {
  //password view eye button
  //const Login = new UserLogin(page);
  await page.goto(
    "https://dev-naasa-client-management.waterflowtechnology.net/login"
  );
  // await page.getByRole("link", { name: "Download on the App Store" }).click();
  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator('img[alt="Download on the App Store"]').click(),
  ]);
  await popup.waitForLoadState("domcontentloaded");
  // perform assertions on the new tab
  await expect(popup).toHaveURL(
    "https://apps.apple.com/us/app/naasa-x/id6737237945"
  );
});
