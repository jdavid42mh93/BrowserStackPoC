import { checkoutData, checkoutSelectors } from "../../constants/checkout.constants";

class CheckoutPage {
    get btnCheckout() {
        return $(checkoutSelectors.btnCheckout);
    }

    get guestUser() {
        return $(checkoutSelectors.guestUser);
    }

    get registerUser() {
        return $(checkoutSelectors.registerUser);
    }

    get btnContinue() {
        return $(checkoutSelectors.btnContinue);
    }

    get firstName() {
        return $(checkoutSelectors.firstName);
    }

    get lastName() {
        return $(checkoutSelectors.lastName);
    }

    get email() {
        return $(checkoutSelectors.email);
    }

    get telephone() {
        return $(checkoutSelectors.telephone);
    }

    get address() {
        return $(checkoutSelectors.address1);
    }

    get city() {
        return $(checkoutSelectors.city);
    }

    get postCode() {
        return $(checkoutSelectors.postcode);
    }

    get country() {
        return $(checkoutSelectors.country);
    }

    get countryOption() {
        return $(checkoutSelectors.countryOption);
    }

    get region() {
        return $(checkoutSelectors.region);
    }

    get regionOption() {
        return $(checkoutSelectors.regionOption);
    }

    get btnContinueGuest() {
        return $(checkoutSelectors.btnContinueGuest);
    }

    get password() {
        return $(checkoutSelectors.password);
    }

    get confirmPassword() {
        return $(checkoutSelectors.confirmPassword);
    }

    get btnContinueRegister() {
        return $(checkoutSelectors.btnContinueRegister);
    }

    get privacyPolicy() {
        return $(checkoutSelectors.privacyPolicy);
    }

    async checkoutFormGuestUser(){
        const randomNum = Math.floor(Math.random() * 100) + 1;
        const email = `pruebabi${randomNum}@gmail.com`;
        // click on checkout button
        await this.btnCheckout.click();
        // select guest user
        await this.guestUser.click();
        // continue to next step
        await this.btnContinue.click();
        // fill in the form
        await this.firstName.setValue('John');
        await this.lastName.setValue('Doe');
        await this.email.setValue(email);
        await this.telephone.setValue('123456789');
        await this.address.setValue('123 Main St');
        await this.city.setValue('Kyiv');
        await this.postCode.setValue('12345');
        await browser.saveScreenshot('./screenshots/checkout.png');
        // select country
        await this.country.selectByVisibleText('Ukraine');
        // wait for country option to be visible and select it
        await this.countryOption.click();
        // select region
        await this.region.selectByVisibleText('Kyiv');
        // wait for region option to be visible and select it
        await this.regionOption.click();
        // continue to next step
        await this.btnContinueGuest.click();
    }

    async checkoutFormRegisterUser(){
        const randomNum = Math.floor(Math.random() * 100) + 1;
        const email = `pruebabi${randomNum}@gmail.com`;
        // click on checkout button
        await this.btnCheckout.click();
        // select guest user
        await this.registerUser.click();
        // continue to next step
        await this.btnContinue.click();
        // fill in the form
        await this.firstName.setValue(checkoutData.firstName);
        await this.lastName.setValue(checkoutData.lastName);
        await this.email.setValue(email);
        await browser.pause(3000); // wait for email to be set
        await this.telephone.setValue(checkoutData.telephone);
        await this.address.setValue('123 Main St');
        await this.city.setValue('Kyiv');
        await this.postCode.setValue('12345');
        await this.password.setValue('password123');
        await this.confirmPassword.setValue('password123');
        await browser.saveScreenshot('./screenshots/checkout.png');

        // select country
        await this.country.selectByVisibleText('Ukraine');
        // wait for country option to be visible and select it
        await this.countryOption.click();
        // select region
        await this.region.selectByVisibleText('Kyiv');
        // wait for region option to be visible and select it
        await this.regionOption.click();
        // continue to next step
        await this.privacyPolicy.click();
        await this.btnContinueRegister.click();
    }
}

export default new CheckoutPage();