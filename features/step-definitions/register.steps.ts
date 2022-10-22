import { Given, Then, When } from '@cucumber/cucumber'

    Given(/^tôi vào trang \"([^\"]*)\"$/, async function (appurl:string) {
      await browser.url(appurl)
      await browser.maximizeWindow()
    });
  
    Then(/^tôi xác nhận rằng page có title \"([^\"]*)\"$/,async  function (headertext:string) {
      const header=$(".styles_title__2vG2b")
      expect(await header).toHaveText(headertext)
    });
  
    Then(/^tôi xác nhận chữ trên page đã đổi thành \"([^\"]*)\"$/,async  function (textchange:string) {
      const text=$(".styles_title__2vG2b")
      expect(await text).toHaveText(textchange)
    });
  
    When(/^tôi nhập vào ô cellphone (.+) và ô password (.+)$/,async  function (cphone:string, pass:string) {
      const fnameInput=$("#phone")
      const lnameInput=$("#password")

      await (await fnameInput).setValue(cphone)
      await (await lnameInput).setValue(pass)
    });
  
    When(/^tôi chọn giới tính là (.+) năm (.+) món chai yêu thích (.+) và lý do (.+)$/,async  function (gender:string, yrs:string, favchai:string, reason:string) {
      const gender_radio = await $$('[name=sex]')
      const Exp_radio = await $$('[name=exp]')
      const Favchai_checkbox = await $$('[name*=Tea]')
      const whychai_checkbox = await $$('[name=tool]')

      for (let i=0; i< gender_radio.length; i++)
      {
        const element = await (gender_radio[i]).getAttribute('value');
        if (element === gender)
        {
          await (gender_radio[i]).click()
          break;
        }
      }

      for (let i=0; i< Exp_radio.length; i++)
      {
        const element = await (Exp_radio[i]).getAttribute('value');
        if (element === yrs)
        {
          await (Exp_radio[i]).click()
          break;
        }
      }

      for (let i=0; i< Favchai_checkbox.length; i++)
      {
        const element = await (Favchai_checkbox[i]).getAttribute('value');
        if (element === favchai)
        {
          await (Favchai_checkbox[i]).click()
          break;
        }
      }

      for (let i=0; i< whychai_checkbox.length; i++)
      {
        const element = await (whychai_checkbox[i]).getAttribute('value');
        if (element === reason)
        {
          await (whychai_checkbox[i]).click()
          break;
        }
      }
    });
  
    When(/^tôi chọn quốc tịch (.+) và commands (.+)$/,async  function (continent:string, command:string) {
      const continent_dropdown = $('#continents')
      const selCommands_multiselect = $('#selenium_commands')

      await (await continent_dropdown).selectByVisibleText(continent)
      await (await selCommands_multiselect).selectByVisibleText(command)
      await browser.pause(5000)
    });

    When(/^tôi click vào nut submit$/,async  () => {
      const submit_button = await $('#submit')
      await (await submit_button.click())
    });