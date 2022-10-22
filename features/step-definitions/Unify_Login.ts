import { Given, Then, When } from '@cucumber/cucumber'
import SecurePage from '../pageobjects/secure.page';

Given(/^tôi vào trang \"([^\"]*)\"$/, async function (appurl: string) {
  await browser.url(appurl)
  await browser.maximizeWindow()
});

Then(/^tôi xác nhận rằng page có title \"([^\"]*)\"$/, async function (headertext: string) {
  const header = $(".styles_title__2vG2b")
  expect(await header).toHaveText(headertext)
});

When(/^tôi nhập vào ô cellphone (.+) và ô password (.+)$/, async function (cphone: string, pass: string) {
  const fnameInput = $("#phone")
  const lnameInput = $("#password")

  await (await fnameInput).setValue(cphone)
  await (await lnameInput).setValue(pass)
});

When(/^tôi click vào nut Log in$/, async () => {
  const submit_button = await $("button[type='submit']")
  await (await submit_button.click())
});

When(/^tôi nhập số (.+) vào ô security code$/, async function (securitycode: string) {
  const security1 = $("input[aria-label='Please enter verification code. Digit 1']")
  const countdow = $(".styles_timeout_otp__Sk8J3.styles_darkStyles__1FUX9")
  expect(await countdow).toBeExisting()
  await (await security1).setValue(securitycode)
});

When(/^tôi xác nhận rằng trang nhập OTP hiện ra với (.+) giây đếm ngược$/, async function (second: string) {
  const countdown = $(".styles_timeout_otp__Sk8J3.styles_darkStyles__1FUX9")
  expect(await countdown).toHaveText(second)
});

When(/^tôi click vào nút Let's go!$/, async () => {
  const submit_button = await $("button[type='submit']")
  await (await submit_button.click())
});

Then(/^tôi xác nhận page \"([^\"]*)\" được hiển thị$/, async function (textchange: string) {
  const text = $("li:nth-child(1) a:nth-child(1)")
  expect(await text).toHaveText(textchange)
});

Then(/^tôi thấy error (.*) được hiển thị$/, async (message:string) => {
  const errormessage = $("body > div:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)")
  await expect(errormessage).toBeExisting();
  await expect(errormessage).toHaveTextContaining(message);
});