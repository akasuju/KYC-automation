import { Page } from "playwright";
export class UserLogin {
  private loginURL =
    "https://dev-naasa-client-management.waterflowtechnology.net/login";

  constructor(private page: Page) {}

  async Login(username: string, password: string) {
    await this.page.goto(this.loginURL);

    const emailInput = this.page.getByRole("textbox", { name: "Email" });
    await emailInput.waitFor({ state: "visible" });
    await emailInput.fill(username);

    const passwordInput = this.page.getByRole("textbox", {
      name: "Enter Your Password",
    });
    await passwordInput.waitFor({ state: "visible" });
    await passwordInput.fill(password);

    const signInButton = this.page.getByRole("button", { name: "Sign In" });
    await signInButton.waitFor({ state: "visible" });
    await signInButton.click();

   await this.page.waitForURL(/.*keycloak.*/);
  }
}
