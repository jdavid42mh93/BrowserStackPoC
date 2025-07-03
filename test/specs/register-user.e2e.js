import checkoutPage from '../pageobjects/checkout.page.js'
import deliveryPage from '../pageobjects/delivery.page.js'
import menuPage from '../pageobjects/menu.page.js'
import paymentPage from '../pageobjects/payment.page.js'
import principalPage from '../pageobjects/principal.page.js'
import successPage from '../pageobjects/success.page.js'

describe('Shopping Cart application', () => {
    it('shopping cart - register user', async () => {
        await principalPage.open()

        await browser.maximizeWindow()

        await menuPage.menuSection()
        await browser.pause(3000)

        await checkoutPage.checkoutFormRegisterUser()
        await browser.pause(3000)

        await deliveryPage.deliverySectionRegisterUser()
        await browser.pause(3000)

        await paymentPage.paymentSection()
        await browser.pause(3000)

        await successPage.successSection()
        await browser.pause(3000)
    })
})

