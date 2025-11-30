import { test, expect } from "playwright/test";
import { UserLogin } from "../pages/loginpage";
import { UserRegister } from "../pages/Register";
import { GeneralInfo } from "../pages/General _Details";
import { NavButton } from "../pages/Page_Navigation";
import { PersonalDetails } from "../pages/Personal_Detail";

test("Personal Details", async ({ page }) => {
  const Login = new UserLogin(page);
  await Login.Login("automate@yopmail.com", "Test@123");
  const PD = new PersonalDetails(page);
  await PD.Personal_Details(
    "march",
    "2002",
    "28",
    "Male",
    "Single",
    "5544454",
    "Banke",
    //citizenship issued date in nepali language"",
    "04",
    "2079",
    "10"
  );
});
