import { test, expect } from "playwright/test";
import { UserLogin } from "../pages/loginpage";
import { UserRegister } from "../pages/Register";
//  Using loginpage POM

test("Login", async ({ page }) => {
  const Login = new UserLogin(page);
  await Login.Login("automation@yopmail.com", "Test@123");
  await page.waitForURL(/.*keycloak.*/);
});

test("Register", async ({ page }) => {
  const Login = new UserLogin(page);
  const Register = new UserRegister(page);
  await Login.Register;
  await Register.Register
  
});
