<script>
  import page from 'page'
  import { BehaviorSubject } from 'rxjs'
  import { distinctUntilChanged } from 'rxjs/operators'

  import Home from './pages/index/Home.svelte'

  const component$ = new BehaviorSubject(Home)
  const props$ = new BehaviorSubject({})

  page('*', () => {
    this.component$.next(Home)
  })

  const changedComponent$ = component$.pipe(
    distinctUntilChanged()
  )
</script>

<svelte:component this={$changedComponent$} {...$props$} />
