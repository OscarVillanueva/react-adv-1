import { lazy, LazyExoticComponent } from 'react'
// import LazyPage1 from '../lazyload/pages/LazyPage1';
// import LazyPage2 from '../lazyload/pages/LazyPage2'
// import LazyPage3 from '../lazyload/pages/LazyPage3'

type JSXComponent = () => JSX.Element

interface Route {
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string,
  children ?: Route[]
}

const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1"  */'../lazyload/pages/LazyPage1'))
const LazyPage2 = lazy(() => import(/* webpackChunkName: "LazyPage2"  */'../lazyload/pages/LazyPage2'))
const LazyPage3 = lazy(() => import(/* webpackChunkName: "LazyPage3"  */'../lazyload/pages/LazyPage3'))

const routes: Route[] = [
  {
    name: 'Lazy 1',
    path: '/lazy1',
    Component: LazyPage1,
  },
  {
    name: 'Lazy 2',
    path: '/lazy2',
    Component: LazyPage2,
  },
  {
    name: 'Lazy 3',
    path: '/lazy3',
    Component: LazyPage3,
  },
]

export default routes