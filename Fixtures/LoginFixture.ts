import { UserLogin } from '../pages/loginpage';
import {test as base} from '@playwright/test'
type FixtureDemo={
    LoginFixture:any
}
export const test= base.extend<LoginFixture>
LoginFixture: async({},use())
