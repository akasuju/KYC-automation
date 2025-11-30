import { test, expect, Page } from "playwright/test";
import { UserLogin } from "../pages/loginpage";
import { GeneralInfo } from "../pages/General _Details";
import "dotenv/config";
test("General Details Trading Adult", async ({ page }) => {
  //const Login = new UserLogin(page);
  //const navbutton = new NavButton(page);
  //await Login.Login("automate@yopmail.com", "Test@123");
  const generaldetails = new GeneralInfo(page);
  await generaldetails.Tradingonly_Details(
    "9852102123",
    "9852123025",
    "Pokhara",
    "1305245785210225"
  );

  await page.pause();
});

test("General Details Trading MINOR", async ({ page }) => {
  const Login = new UserLogin(page);
  //const navbutton = new NavButton(page);
  // await Login.Login("automate@yopmail.com", "Test@123");
  const generaldetails = new GeneralInfo(page);
  await generaldetails.TradingonlyMINOR_Details(
    "9852102123",
    "9852123025",
    "Pokhara",
    "1305245785210225"
  );

  await page.getByRole("button", { name: "Next" }).click();
  await page.pause();
});
test("Empty General Details", async ({ page }) => {
  const Login = new UserLogin(page);
  //Empty General Details fields
  // await Login.Login("automate@yopmail.com", "Test@123");
  const generaldetails = new GeneralInfo(page);
  await generaldetails.Tradingonly_Details("", "", "", "Pokhara");
  await page.getByRole("button", { name: "Next" }).click();
  await expect(page).toHaveURL(process.env.ExpectedURL_GeneralDetails!);
  await page.pause();
});

test("General Details Trading and Demat adult ", async ({ page }) => {
  // const Login = new UserLogin(page);
  // await Login.Login("automate@yopmail.com", "Test@123");
  const generaldetails = new GeneralInfo(page);
  //const navbutton = new NavButton(page);
  await generaldetails.DematandTradingADULT_Details(
    "9852102193",
    "9852183025",
    "Janakpur"
  );
  await page.getByRole("button", { name: "Next" }).click();
  await page.pause();
});
test("General Details Trading and Demat minor ", async ({ page }) => {
  // const Login = new UserLogin(page);
  //await Login.Login("automate@yopmail.com", "Test@123");
  const generaldetails = new GeneralInfo(page);
  //const navbutton = new NavButton(page);
  await generaldetails.DematandTradingMINOR_Details(
    "9852102123",
    "9852123025",
    "Pokhara"
  );
  await page.getByRole("button", { name: "Next" }).click();
  await page.pause();
});
