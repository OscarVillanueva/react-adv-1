import { lazy, LazyExoticComponent } from 'react'
import NoLazy from '../lazyload/pages/Nolazy'

type JSXComponent = () => JSX.Element

interface Route {
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string,
  children ?: Route[]
}

const routes: Route[] = [
  {
    name: 'Lazy loading nested',
    path: '/lazyload',
    Component: lazy(() => import('../lazyload/layout/LazyLayout')),
  },
  {
    name: 'No Lazy',
    path: '/nolazyload',
    Component: NoLazy,
  },
]

export default routes