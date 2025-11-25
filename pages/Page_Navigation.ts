// Back and Next Button
import { Locator, Page } from "playwright";

export class NavButton {
  constructor(private page: Page) {}
  async Next() {
    const Next_Button = this.page.getByRole("button", { name: "Next" });
  }
  async Back() {
    const Back_Button = this.page.getByRole("button", { name: "Back" });
  }
}
