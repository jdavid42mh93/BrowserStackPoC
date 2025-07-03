import { deliverySelectors } from "../../constants/delivery.constants";

class DeliveryPage{
    get btnContinue() {
        return $(deliverySelectors.btnContinue);
    }

    get btnContinueDelivery() {
        return $(deliverySelectors.btnContinueDelivery);
    }

    async deliverySectionGuestUser(){
        // click en el boton continuar
        await this.btnContinue.click();
    }

    async deliverySectionRegisterUser(){
        // click en el boton continuar
        await this.btnContinueDelivery.click();
        await this.btnContinue.click();
    }
}

export default new DeliveryPage();