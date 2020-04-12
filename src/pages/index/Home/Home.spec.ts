import { render } from '@testing-library/svelte'
import { createMemoryHistory } from 'history'

import Home from './Home.svelte'

describe('Home', () => {
  let container: HTMLElement

  beforeEach(() => {
    const history = createMemoryHistory()

    history.push('/')

    container = render(Home).container
  })

  test('the heading is "Responsive Web Application"', () => {
    expect(location.pathname).toBe('/')

    expect(container.querySelector('h1')?.textContent).toBe(
      'Responsive Web Application'
    )
  })
})
