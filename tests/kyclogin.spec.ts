import { test, expect } from "playwright/test";
import { UserLogin } from "../pages/loginpage";
import { UserRegister } from "../pages/Register";
import { Generalinfo } from "../pages/general _details";

//  Using loginpage POM

test.skip("Login", async ({ page }) => {
  //login
  const Login = new UserLogin(page);
  await Login.Login("automation@yopmail.com", "Test@123");
  await page.waitForURL(/.*keycloak.*/);
});

// test("Register", async ({ page }) => {
//   //Register
//   const Login = new UserLogin(page);
//   const Register = new UserRegister(page);
//   await Login.Register;
//   await page.waitForURL(/.*/);
//   await Register.Register(
//     "Test",
//     "",
//     "Automate",
//     "testautomate@yopmail.com",
//     "Test@123",
//     "Test@123"
//   );
// });

test("General Details", async ({ page }) => {

  const generaldetails =new Generalinfo(page);
  await generaldetails.Common_Details("Sujan","9852102123","9852123025")
});
