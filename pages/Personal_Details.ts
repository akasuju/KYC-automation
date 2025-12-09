import { Page, Locator } from "@playwright/test";

export class PersonalDeatils {
  //readonly page: Page;
  readonly button: Locator;
  readonly femaleradio: Locator;
  readonly othersradio: Locator;
  readonly birthcertificatenofield: Locator;
  readonly selfnextfselfnextfpush0selftext: Locator;
  readonly baitiditext: Locator;
  readonly birth_button: Locator;
  readonly nextbutton: Locator;

  constructor(private page: Page) {
    //this.page = page;
    this.button = page.getByRole("button", { name: "27", exact: true });
    this.femaleradio = page.getByRole("radio", {
      name: "Female",
      exact: true,
      checked: true,
    });
    this.othersradio = page.getByRole("radio", {
      name: "Others",
      exact: true,
      checked: true,
    });
    this.birthcertificatenofield = page.getByRole("textbox", {
      name: "Birth Certificate No.",
      exact: true,
    });
    this.selfnextfselfnextfpush0selftext = page.getByText(
      "(self.__next_f=self.__next_f||[]).push([0]);self._",
      { exact: true }
    );
    this.baitiditext = page.getByText("Baitidi", { exact: true });
    this.birth_button = page.getByRole("button", { name: "23", exact: true });
    this.nextbutton = page.getByRole("button", { name: "Next", exact: true });
  }

  async click27button(): Promise<void> {
    await this.button.click();
  }

  async checkFemaleradio(): Promise<void> {
    await this.femaleradio.check();
  }

  async checkOthersradio(): Promise<void> {
    await this.othersradio.check();
  }

  async fillBirthcertificatenofield(value: string): Promise<void> {
    await this.birthcertificatenofield.fill(value);
  }

  async clickSelfnextfselfnextfpush0selftext(): Promise<void> {
    await this.selfnextfselfnextfpush0selftext.click();
  }

  async clickBaitiditext(): Promise<void> {
    await this.baitiditext.click();
  }

  async click23button(): Promise<void> {
    await this.button.click();
  }

  async clickNextbutton(): Promise<void> {
    await this.nextbutton.click();
  }
}
