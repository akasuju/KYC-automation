import { test ,Page,expect,Locator } from "playwright/test";
import { UserLogin } from "../pages/loginpage";
import { UserRegister } from "../pages/Register";
import { Generalinfo } from "../pages/general _details";
import { NavButton } from "../pages/Page_Navigation";

export class PersonalDetails {
    constructor(private page:Page) {}
    async Personal_Details(
        citizenshipnumber:string,
        issueddistrict:string,
        issueddate:string,
        dob:string,
    ){
        
    }
}
