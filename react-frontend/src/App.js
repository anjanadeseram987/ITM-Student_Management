import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentListComponent from './components/StudentListComponent';
import Footer from './components/Footer';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import updateStudent from './components/updateStudent';
import ViewStudent from './components/ViewStudent';

function App() {
  return (
    <div>
      <Router>

        <Header />
        <div className="container">
          <section>
            <Switch>
              <Route path="/" exact component={StudentListComponent} />
              <Route path="/students" component={StudentListComponent} />
              <Route path="/add-student" component={AddStudent} />
              <Route path="/update-student/:id" component={updateStudent} />
              <Route path="/view-student/:id" component={ViewStudent} />
               
 

            </Switch>
          </section>
        </div>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
