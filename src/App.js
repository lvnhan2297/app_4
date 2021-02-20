import React , {useCallback, Suspense} from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './containers/Header'
import {routes} from './routes';
import Loading from './components/Loading'

const App = () => {

  const renderRoutes = useCallback(routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        const { path, exact, component } = route;
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            component={component}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  },[]);

  return (
    <HashRouter>
    <>
      <Header/>
        <Suspense fallback={<Loading loading={true}/>}>
          {renderRoutes(routes)}
        </Suspense>
    </>
    </HashRouter>
  )
}

export default App
