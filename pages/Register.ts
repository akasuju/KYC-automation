import { Page, Locator } from "playwright";
import { UserLogin } from "./loginpage";

export class UserRegister {
  constructor(private page: Page) {}
  async Register(
    firstName: string,
    middleName: string,
    lastName: string,
    useremail: string,
    password: string,
    confirm_Password: string
  ) {
    const FirstName = this.page.getByRole("textbox", { name: "First name" });
    await FirstName.waitFor({ state: "visible" });
    await FirstName.fill(firstName);

    const MiddleName = this.page.getByRole("textbox", { name: "Middle name" });
    await MiddleName.waitFor({ state: "visible" });
    await MiddleName.fill(middleName);

    const LastName = this.page.getByRole("textbox", { name: "Last name" });
    await LastName.waitFor({ state: "visible" });
    await LastName.fill(lastName);

    const Useremail = this.page.getByRole("textbox", { name: "Email" });
    await Useremail.waitFor({ state: "visible" });
    await Useremail.fill(useremail);

    const Password = this.page.getByRole("textbox", { name: "Password" });
    await Password.waitFor({ state: "visible" });
    await Password.fill(password);

    const Confirm_Password = this.page.getByRole("textbox", {
      name: "Confirm Password",
    });
    await Confirm_Password.waitFor({ state: "visible" });
    await Confirm_Password.fill(confirm_Password);

    const Register_button = this.page.getByRole("button", {
      name: "Register",
    });
    await Register_button.waitFor({ state: "visible" });
    await Register_button.click();
  }
}
