import { browser } from '@wdio/globals'

export default class Page {
    open () {
        return browser.url(`https://opencart.abstracta.us/`)
    }
}
