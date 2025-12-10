// Back and Next Button
import { Locator, Page } from "playwright";
import { GeneralInfo } from "./General_Details";

export class NavButton {
  constructor(private page: Page) {}
  async Next() {
    const Next_Button = this.page.getByRole("button", { name: "Next" });
  }
  async Back() {
    const Back_Button = this.page.getByRole("button", { name: "Back" });
  }
}
