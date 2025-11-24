import { Locator, Page } from "playwright";

export class Generalinfo {
  private GeneralURL =
    "https://dev-naasa-client-management.waterflowtechnology.net/?step=1";

  constructor(private page: Page) {}
  async Common_Details(
    fullname: string,
    primaryphone: string,
    alternativephnum: string
  ) {
    await this.page.goto(this.GeneralURL);

    const FullName = this.page.getByRole("textbox", { name: "Full Name" });
    await FullName.fill(fullname);
    const PrimaryNumber = this.page.getByRole("textbox", {
      name: "Phone Number",
    });
    await PrimaryNumber.fill(primaryphone);

    const AlternativeNumber = this.page.getByRole("textbox", {
      name: "Alternative Number",
    });
    await AlternativeNumber.fill(alternativephnum);

    const BranchDropdown = this.page
      .getByRole("combobox", { name: "Office Branch" }) 
      await BranchDropdown.click();
      

    //    const RadioDemat_Trading= this.page.getByRole('radio', { name: 'Demat & Trading Account' })
    //    await RadioDemat_Trading.waitFor({ state: "visible" });
    //    await RadioDemat_Trading.check()

    //  const RadioTrading= this.page.getByRole('radio', { name: 'Trading Account' })
    //    await RadioTrading.waitFor({ state: "visible" });
    //    await RadioTrading.check()
  }
}
