import { test, Page, expect, Locator } from "playwright/test";
import { UserLogin } from "../pages/loginpage";
import { UserRegister } from "../pages/Register";
import { Generalinfo } from "../pages/general _details";
import { NavButton } from "../pages/Page_Navigation";
import 

export class PersonalDetails {
  // use url from env file
  
  constructor(private page: Page) {}

  async Personal_Details(
    dob_month: string,
    dob_year: string,
    dob_day: string,
    gender: string,
    maritalstatus: string,
    citizenshipnumber: string,
    issueddistrict: string,
    citi_monthdate: string,
    citi_year: string,
    citi_day: string,
    NIDnumber?: string,
    Pannumber?: string,
    passportnumber?: string,
    passportissuedistrict?: string,
    passportissuedate?: string
  ) {
    await this.page.goto(this.PersonalURL);
    // Date picker using calendar widget for DOB
    // const DOBDatePicker = this.page
    //   .getByRole("button", { name: "Choose date" })
    //   .nth(1);
    // await DOBDatePicker.click();
    // await this.page.waitForTimeout(500);
    // await this.page.getByRole("gridcell", { name: dob, exact: true }).click();

    await this.page.click('input[name="Date of Birth (AD)"]');
    await this.page.click('[data-testid="ArrowDropDownIcon"]');
    await this.page.getByRole("option", { name: dob_month }).click();
    await this.page.getByRole("option", { name: dob_day }).click();
    await this.page.getByRole("option", { name: dob_year }).click();

    const genderRadio = this.page.getByRole("radio", {
      name: gender,
      exact: true,
    });
    await genderRadio.check();

    const maritalStatusRadio = this.page.getByRole("radio", {
      name: maritalstatus,
    });
    await maritalStatusRadio.check();
    await this.page.waitForTimeout(500);

    const CitizenshipNumber = this.page.getByRole("textbox", {
      name: "Citizenship Number",
    });
    await CitizenshipNumber.fill(citizenshipnumber);

    const IssuedDistrictDropdown = this.page.getByRole("combobox", {
      name: "Issued District",
    });
    await IssuedDistrictDropdown.click();
    await this.page.waitForTimeout(500);

    try {
      const IssuedDistrictOptionLocator = this.page.getByRole("option", {
        name: issueddistrict,
      });
      await IssuedDistrictOptionLocator.waitFor({
        state: "visible",
        timeout: 5000,
      });
      await IssuedDistrictOptionLocator.click();
    } catch (err) {
      try {
        await IssuedDistrictDropdown.fill(issueddistrict);
        await IssuedDistrictDropdown.press("Enter");
      } catch (inner) {
        throw err;
      }
    }
    await this.page.click('input[name="citizenshipIssuedDate"]');
    await this.page.click('[data-testid="ArrowDropDownIcon"]');
    await this.page.getByRole("option", { name: citi_monthdate }).click();
    await this.page.getByRole("option", { name: citi_day }).click();
    await this.page.getByRole("option", { name: citi_year }).click();
  }
}
