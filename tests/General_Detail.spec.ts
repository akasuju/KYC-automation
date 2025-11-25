import { test, expect, Page } from "playwright/test";
import { UserLogin } from "../pages/loginpage";
import { Generalinfo } from "../pages/general _details";
import { NavButton } from "../pages/Page_Navigation";

test("General Details Trading only", async ({ page }) => {
  const Login = new UserLogin(page);
  //const navbutton = new NavButton(page);
  await Login.Login("automate@yopmail.com", "Test@123");
  const generaldetails = new Generalinfo(page);
  await generaldetails.Tradingonly_Details(
    "Sujan Khatri",
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
  await Login.Login("automate@yopmail.com", "Test@123");
  const generaldetails = new Generalinfo(page);
  await generaldetails.Tradingonly_Details("", "", "", "", "");
  await page.getByRole("button", { name: "Next" }).click();
  await page.pause();
});

test.skip("General Details Trading and Demat ", async ({ page }) => {
  const Login = new UserLogin(page);
  await Login.Login("automate@yopmail.com", "Test@123");
  const generaldetails = new Generalinfo(page);
  const navbutton = new NavButton(page);
  await generaldetails.DematandTrading_Details(
    "Sujan Khatri",
    "9852102123",
    "9852123025",
    "Pokhara"
  );
  await navbutton.Next();
  await page.pause();
});
