import App from './App.svelte'

const app = new App({
  target: document.body
})
;(window as any).app = app

export default app
