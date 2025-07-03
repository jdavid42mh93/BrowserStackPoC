import { paymentSelectors } from "../../constants/payment.constants";

class PaymentPage{
    get termsAndConditions() {
        return $(paymentSelectors.termsAndConditions);
    }

    get btnContinue() {
        return $(paymentSelectors.btnContinue);
    }

    get btnConfirmOrder() {
        return $(paymentSelectors.btnConfirmOrder);
    }

    async paymentSection(){
        await this.termsAndConditions.click();
        await this.btnContinue.click();
        await browser.saveScreenshot('./screenshots/payment.png');
        await this.btnConfirmOrder.click();
        
    }
}

export default new PaymentPage();