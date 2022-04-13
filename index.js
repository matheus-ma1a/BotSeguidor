
require('dotenv').config()
const puppeteer = require('puppeteer')


;(async () => {
  const listaDeUsuarios = [
    'rodrigobarenco',
    'guilhermeteixo',
    'dipedro__',
    'emisntx',
    'mourawilly',
    'robinsndias',
    'angelitavillasboas',
    '_lealmts',
    'rjunior.ourives',
    'eedmilson_',
    'gabrielluc_g',
    'rivaldeeex',
    'liv_barbosa',
    'henriquedsf1',
    'gi.vigueles',
    'carlasopedro',
    'rafaeltfontes',
    'joaocarlosbonisson',
    'patrick_son',
    'eduardooribeiroo',
    'danilo_do _cfc',
    'alfredoasas',
    'gabedwalker',
    'josivaldo_barbos',
    'milenamarcelee',
    'wtfguilh'
  ]

  
  const browser = await puppeteer.launch({
      headless: false
    })
    const page = await browser.newPage()
    
    // acessa o instagram
    await page.goto('https://www.instagram.com/')
    await page.waitFor('input[name="username"]')
    await page.type('input[name="username"]', 'matheus_ma1a', { delay: 100 })
    await page.type('input[name="password"]', `${process.env.SENHA_INSTA}`, { delay: 100 })
    await page.keyboard.press('Enter')
    // acessa o instagram

    await page.waitForSelector('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.QY4Ed.P0xOK > input')

    for(let i=0; i < listaDeUsuarios.length; i++){
      
      await page.type('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.QY4Ed.P0xOK > input', `${listaDeUsuarios[i]}`, { delay: 100 })
      await page.waitFor(2000)
      await page.keyboard.press('Enter')
      await page.keyboard.press('Enter')
      await page.waitFor(2000)
      
      await page.click('._7UhW9.xLCgt.qyrsm.uL8Hv.T0kll')
     


    }

    await browser.close()

  })()

 