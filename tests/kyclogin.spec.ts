import { test, expect } from "playwright/test";
import { UserLogin } from "../pages/loginpage";
import { UserRegister } from "../pages/Register";
import { Generalinfo } from "../pages/general _details";
import { NavButton } from "../pages/Page_Navigation";

//  Using loginpage POM

test.skip("Login", async ({ page }) => {
  //login
  const Login = new UserLogin(page);
  await Login.Login("automate@yopmail.com", "Test@123");
  //await page.waitForURL(/.*keycloak.*/);
  //expect(page).toHaveURL("")
});

// test("Register", async ({ page }) => {
//   //Register
//   const Login = new UserLogin(page);
//   const Register = new UserRegister(page);
//   await Login.Register;
//   await Register.Register(
//     "Test",
//     "",
//     "Automate",
//     "testautomate@yopmail.com",
//     "Test@123",
//     "Test@123"
//   );
// });

test("General Details Trading only", async ({ page }) => {
  const Login = new UserLogin(page);
  const navbutton = new NavButton(page);
  await Login.Login("automate@yopmail.com", "Test@123");
  const generaldetails = new Generalinfo(page);
  await generaldetails.Tradingonly_Details(
    "Sujan Khatri",
    "9852102123",
    "9852123025",
    "Janakpur",
    "1305245785210225"
  );

  await navbutton.Next();
});

test.skip("General Details Trading and Demat ", async ({ page }) => {
  const Login = new UserLogin(page);
  await Login.Login("automate@yopmail.com", "Test@123");
  const generaldetails = new Generalinfo(page);
  const navbutton = new NavButton(page);
  await generaldetails.Tradingonly_Details(
    "Sujan Khatri",
    "9852102123",
    "9852123025",
    "Janakpur",
    "1305245785210225"
  );
  await navbutton.Next();
  await page.pause();
});

