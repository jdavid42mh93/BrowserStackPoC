import { successSelectors } from "../../constants/success.constants";

class SuccessPage{
    get successMessage() {
        return $(successSelectors.successMessage);
    }

    get btnContinue() {
        return $(successSelectors.btnContinue);
    }

    async successSection() {
        if (await this.successMessage.isDisplayed()) {
            // Verificar que el mensaje de éxito esté visible
            await this.successMessage.waitForDisplayed();
            // Hacer clic en el botón continuar
            await this.btnContinue.click();
        }else{
            throw new Error("Success message is not displayed");
        }
    }
}

export default new SuccessPage();