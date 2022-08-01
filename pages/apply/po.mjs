// @ts-check
import {
    HeaderComponent,
    ConfirmationModalComponent,
    CardComponent,
    PhoneVerificationComponent,
    SignInComponent} from './component/index.mjs';

import { TypeOfLoanPage } from './pages/index.mjs';

class Components {
    constructor(page) {
        this.headerComponent = new HeaderComponent(page);
        this.confirmationModalComponent = new ConfirmationModalComponent(page);
        this.cardComponent = new CardComponent(page);
        this.phoneVerificationComponent = new PhoneVerificationComponent(page);
        this.signInComponent =  new SignInComponent(page);
    }
}

class Pages {
    constructor(page) {
        this.typeOfLoanPage = new TypeOfLoanPage(page);
    }
}

export {Components, Pages};