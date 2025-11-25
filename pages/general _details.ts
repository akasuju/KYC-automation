import { Locator, Page } from "playwright";

export class Generalinfo {
  private GeneralURL =
    "https://dev-naasa-client-management.waterflowtechnology.net/?step=1";

  constructor(private page: Page) {}
  async Tradingonly_Details(
    fullname: string,
    primaryphone: string,
    alternativephnum: string,
    branch_name: string,
    Demat_num: string
  ) {
    await this.page.goto(this.GeneralURL);
    const TradingOnly_Radio = this.page.getByRole("radio", {
      name: "Trading Account",
      exact: true,
    });
    await TradingOnly_Radio.waitFor({ state: "visible", timeout: 5000 });
    await TradingOnly_Radio.check();
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

    const BranchDropdown = this.page.getByRole("combobox", {
      name: "Office Branch",
    });
    await BranchDropdown.click();
    await this.page.waitForTimeout(500);
    // select the branch by waiting for the option at page level and clicking it
    try {
      const BranchOptionLocator = this.page.getByRole("option", {
        name: branch_name,
      });
      await BranchOptionLocator.waitFor({ state: "visible", timeout: 5000 });
      await BranchOptionLocator.click();
    } catch (err) {
      try {
        await BranchDropdown.fill(branch_name);
        await BranchDropdown.press("Enter");
      } catch (inner) {
        throw err;
      }
    }

    const filePath = "C:\\Users\\admin\\Downloads\\Lab 13 - SPM Details_1.pdf";

    await this.page.setInputFiles('input[type="file"]', filePath);
    await this.page.waitForTimeout(500);

    // const DematNumber = this.page.getByRole("textbox", {
    //   name: "Demat Number",
    // });
    const DematNumber = this.page.getByLabel("Demat Number", {
      exact: true,
    });
    await DematNumber.fill(Demat_num);
  }

   async DematandTrading_Details(
    fullname: string,
    primaryphone: string,
    alternativephnum: string,
    branch_name: string,
    Demat_num: string
  ) {
    await this.page.goto(this.GeneralURL);
    const TradingOnly_Radio = this.page.getByRole("radio", {
      name: "Trading Account",
      exact: true,
    });
    await TradingOnly_Radio.waitFor({ state: "visible", timeout: 5000 });
    await TradingOnly_Radio.check();
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

    const BranchDropdown = this.page.getByRole("combobox", {
      name: "Office Branch",
    });
    await BranchDropdown.click();
    await this.page.waitForTimeout(500);
    // select the branch by waiting for the option at page level and clicking it
    try {
      const BranchOptionLocator = this.page.getByRole("option", {
        name: branch_name,
      });
      await BranchOptionLocator.waitFor({ state: "visible", timeout: 5000 });
      await BranchOptionLocator.click();
    } catch (err) {
      try {
        await BranchDropdown.fill(branch_name);
        await BranchDropdown.press("Enter");
      } catch (inner) {
        throw err;
      }
    }

    const filePathcitifront = "C:\\Users\\admin\\Downloads\\Lab 13 - SPM Details_1.pdf";
const filePathcitiback = "C:\\Users\\admin\\Downloads\\Lab 13 - SPM Details_1.pdf";
    await this.page.setInputFiles('input[type="file"]', filePathcitifront);
    await this.page.waitForTimeout(500); 

    await this.page.setInputFiles('input[type="file"]', filePathcitiback);
    await this.page.waitForTimeout(500);

    // const DematNumber = this.page.getByRole("textbox", {
    //   name: "Demat Number",
    // });
  
  }
}
