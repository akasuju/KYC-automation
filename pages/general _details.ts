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
      // Fallback: some combobox implementations require typing and pressing Enter
      // or the option may not appear quickly — type the branch name and confirm.
      try {
        await BranchDropdown.fill(branch_name);
        await BranchDropdown.press("Enter");
      } catch (inner) {
        // rethrow the original error for visibility if fallback also fails
        throw err;
      }
    }

    const filePath = "C:\Users\admin\\Downloads\hello.jpg";
    const Dematconfirm_doc = this.page.getByRole("button", {
      name: "Browse files",
    });
    // use Page.setInputFiles(selector, files) when targeting the input by selector
    await this.page.setInputFiles('input[type="file"]', filePath);
    //await Dematconfirm_doc.setInputFiles(filePath);
    await this.page.waitForTimeout(500);
  }

  async TradingandDemat_details(Dematnum: string) {}
}
