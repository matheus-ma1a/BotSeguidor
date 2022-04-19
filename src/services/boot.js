import 'dotenv/config'
import puppeteer from 'puppeteer'

export const BotService = async (userList, username, password) => {
  try {
    const browser = await puppeteer.launch({
      headless: false
    })
    const page = await browser.newPage()

    await page.goto('https://www.instagram.com/')
    await page.waitForSelector('input[name="username"]')
    await page.type('input[name="username"]', username, { delay: 100 })
    await page.type('input[name="password"]', password, { delay: 100 })
    await page.keyboard.press('Enter')

    await page.waitForSelector('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.QY4Ed.P0xOK > input')

    for (let i = 0; i < userList.length; i++) {

      await page.type('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.QY4Ed.P0xOK > input', `${userList[i]}`, { delay: 100 })
      await page.waitFor(2000)

      await page.keyboard.press('Enter')
      await page.keyboard.press('Enter')
      await page.waitFor(2000)

      await page.click('._7UhW9.xLCgt.qyrsm.uL8Hv.T0kll')
    }

    await browser.close()

    return {
      msg: `${username}, deu tudo certooooo!`,
      status: 200
    }
  } catch (error) {
    console.error(error)

    return {
      msg: `${username} Infelizmente, ocorreu um erro :(`,
      status: 400
    }
  }
}
