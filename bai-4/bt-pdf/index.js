const puppeteer = require('puppeteer')

const exportToPdf = async () => {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    await page.goto('https://google.com/', {waitUntil: 'networkidle0'})
    await page.pdf({
        path: 'google.pdf',
        format: 'a4',
        printBackground: false
    })
	
	await browser.close()
}

exportToPdf()