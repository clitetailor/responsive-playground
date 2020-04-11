import { Page } from 'puppeteer'

declare const page: Page

describe('HomePage', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080/', {
      waitUntil: 'networkidle2'
    })
  })

  test('the title is "Responsive Playground"', async () => {
    await expect(page.title()).resolves.toMatch(
      'Responsive Playground'
    )
  })

  test('the heading is "Responsive Web Application"', async () => {
    const text = await page.evaluate(
      () => document.querySelector('h1')?.textContent
    )

    expect(text).toBe('Responsive Web Application')
  })
})
