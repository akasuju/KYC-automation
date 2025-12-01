import { Page } from "playwright";
import "dotenv/config";
import { GeneralInfo } from "./General_Details";
export class UserLogin {
  private loginURL = process.env.LoginURL!;

  constructor(private page: Page) {
    // console.log("Login URL:", this.loginURL);
    if (!this.loginURL) {
      throw new Error(
        "Environment variable LoginURL is not set. Set process.env.LoginURL to the login page URL."
      );
    }
  }

  async Login(username: string, password: string) {
    await this.page.goto(this.loginURL);

    const emailInput = this.page.getByRole("textbox", { name: "Email" });
    await emailInput.waitFor({ state: "visible" });
    await emailInput.fill(username);

    const passwordInput = this.page.getByRole("textbox", {
      name: "Enter Your Password",
    });
    await passwordInput.waitFor({ state: "visible" });
    await this.page.waitForTimeout(300);
    await passwordInput.fill(password);

    const signInButton = this.page.getByRole("button", { name: "Sign In" });
    await signInButton.waitFor({ state: "visible" });
    await signInButton.click();

    //await this.page.waitForURL(/.*keycloak.*/);
  }
  async Login_fillonly(username: string, password: string) {
    await this.page.goto(this.loginURL);

    const emailInput = this.page.getByRole("textbox", { name: "Email" });
    await emailInput.waitFor({ state: "visible" });

    await emailInput.fill(username);

    const passwordInput = this.page.getByRole("textbox", {
      name: "Enter Your Password",
    });
    await passwordInput.waitFor({ state: "visible" });
    await this.page.waitForTimeout(300);
    await passwordInput.fill(password);
  }
  async Register() {
    await this.page.goto(this.loginURL);
    const RegisterButton = this.page.getByRole("link", { name: "Register" });
    await RegisterButton.waitFor({ state: "visible" });
    await RegisterButton.click();
  }
}
