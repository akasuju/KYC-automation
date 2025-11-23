import {Locator, Page} from 'playwright';

export class Generalinfo {
    


private GeneralURL="https://dev-naasa-client-management.waterflowtechnology.net/?step=1"


    constructor(private page: Page) {
 }
 async General_Details( ){
   await this.page.goto(this.GeneralURL);
   const RadioDemat_Trading= this.page.getByRole('radio', { name: 'Demat & Trading Account' })
   await RadioDemat_Trading.waitFor({ state: "visible" });
   await RadioDemat_Trading.check()

 const RadioTrading= this.page.getByRole('radio', { name: 'Trading Account' })
   await RadioTrading.waitFor({ state: "visible" });
   await RadioTrading.check()
   



 }
}