import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu/Menu";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import ErrorToast from "./components/TrowError/TrowError";
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        {props.getProductsError && <ErrorToast errorMessage={props.getProductsError} />}
        <Menu />
        <Switch>
          <Route path="/products" component={Products} exact={true} />
          <Route path="/product/:id" component={Product} exact={true} />
          <Redirect to="/products" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    getProductsError: state.getProductsError,
  };
};

export default connect(mapStateToProps)(App);
