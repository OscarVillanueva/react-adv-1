import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import { Suspense } from 'react'

import logo from '../logo.svg';

import routes from './routes';

export const Navigation = () => {
  return (
    <Suspense 
      fallback={<p>Cargando . . . </p>}
    >
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              {routes.map(route => (
                <li
                  key={route.path}
                >
                  <NavLink 
                    to = { route.path }
                    activeClassName = 'nav-active'
                  >
                    { route.name }
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route
                key = { path }
                path= { path }
              >
                <Component />
              </Route>
            ))}

            <Redirect to = { routes[0].path } />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}