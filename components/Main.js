import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';
import Paper from '@material-ui/core/Paper';
import Contactus from '../containers/Contactus';
import FormikForm from '../containers/FormikForm';
import Todo from '../containers/Todo';

export const Main = () => (
  <div>
    <Switch>
      <Route path="/todo">
        <Todo/>
      </Route>
      <Route path="/contactus">
        <Contactus/>
      </Route>
      <Route path="/formik">
        <FormikForm/>
      </Route>
    </Switch>
  </div>
);