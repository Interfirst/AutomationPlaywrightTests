// @ts-check
import {CardComponent} from '../../component/index.mjs';

class TypeOfLoanPage {
    constructor(page) {
        this.page = page;
        this.cardComponent = new CardComponent(this.page);
    }
}

export {TypeOfLoanPage};
