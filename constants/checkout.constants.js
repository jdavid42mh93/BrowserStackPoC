export const checkoutSelectors = {
    btnCheckout:            `//a[contains(text(),'Checkout')]`,
    guestUser:              `//input[@type='radio' and @value='guest']`,
    registerUser:           `//input[@type='radio' and @value='register']`,
    btnContinue:            `//input[@id='button-account']`,
    firstName:              `//input[@id='input-payment-firstname']`,
    lastName:               `//input[@id='input-payment-lastname']`,
    email:                  `//input[@id='input-payment-email']`,
    telephone:              `//input[@id='input-payment-telephone']`,
    address1:               `//input[@id='input-payment-address-1']`,
    city:                   `//input[@id='input-payment-city']`,
    postcode:               `//input[@id='input-payment-postcode']`,
    country:                `//select[@id='input-payment-country']`,
    countryOption:          `//option[contains(text(),'Ukraine')]`,
    region:                 `//select[@id='input-payment-zone']`,
    regionOption:           `//option[contains(text(),'Kyiv') and @value='3490']`,
    btnContinueGuest:       `//input[@id='button-guest']`,
    btnContinueRegister:    `//input[@id='button-register']`,
    password:               `//input[@id='input-payment-password']`,
    confirmPassword:        `//input[@id='input-payment-confirm']`,
    privacyPolicy:          `//input[@type='checkbox' and @name='agree']`,
}

export const checkoutData = {
    firstName:              'John',
    lastName:               'Doe',
    telephone:              '123456789'
}