import { menuSelectors } from "../../constants/menu.constants";

class MenuPage{
    get macbook() {
        return $(menuSelectors.macbook);
    }

    get iphone() {
        return $(menuSelectors.iphone);
    }

    get btnAddToCart() {
        return $(menuSelectors.btnAddToCart);
    }

    get yourStore() {
        return $(menuSelectors.yourStore);
    }

    get btnCart() {
        return $(menuSelectors.btnCart);
    }

    get btnViewCart() {
        return $(menuSelectors.btnViewCart);
    }

    async menuSection(){
        // seleccion macbook
        await this.macbook.click();
        await this.btnAddToCart.click();
        await browser.saveScreenshot('./screenshots/macbook.png');
        // retorna al menu
        await this.yourStore.click();
        // seleccion iphone
        await this.iphone.click();
        await this.btnAddToCart.click();
        await browser.saveScreenshot('./screenshots/iphone.png');
        // visualiza el carrito
        await this.btnCart.click();
        await this.btnViewCart.click();
        await browser.saveScreenshot('./screenshots/cart.png');
    }
}

export default new MenuPage();