import { Given, Then } from '@cucumber/cucumber'


Given(/^I open the browser and load the url (.+)$/, async function (homepageurl) {
    await browser.url(homepageurl)
    await browser.maximizeWindow()
});

Then(/^I should see a title (.+)$/, async function (homepagetitle) {
    const header = await $("//div[@class='sc-ldZUWu grkmNM']")
    expect(header.getText()).toHaveText(homepagetitle)
});

