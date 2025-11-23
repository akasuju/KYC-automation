import { Locator, Page } from "@playwright/test";

export class Login {
  // readonly nextbutton: Locator;

  readonly usereamil:Locator;
  readonly password:Locator;
  readonly signinbutton:Locator;

  constructor(private page:Page){
    this.usereamil= page.getByPlaceholder("Enter your email");
    this.password=page.getByPlaceholder("Enter your password");
    this.signinbutton=page.getByRole("button",{name:"Sign IN"});
  }
  async LoginURL(){
    await this.page.goto( "https://dev-naasa-client-management.waterflowtechnology.net/login")
  }
  async Login(username:string,password:string){
await this.usereamil.fill(username);
await this.password.fill(password);
await this.signinbutton.click();
  }


  // constructor(private page: Page) {
  //   this.page=page;
  //   this.nextbutton = page.locator("button", {hasText: "Sign In" });
    
  // }
  // async buttons(){
  //   this.nextbutton.click();

  // }
}
