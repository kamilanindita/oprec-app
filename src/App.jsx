import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory  } from 'react-router-dom';

import HeaderComp from './component/header/HeaderComp'
import Home from './container/pages/home/Home'
import Timeline from './container/pages/timeline/Timeline'
import PersonalData from './container/pages/timeline/form/PersonalData'
import ExperienceData from './container/pages/timeline/form/ExperienceData'
import UplaodFile from './container/pages/timeline/form/UplaodFile'
import ChoiceDivision from './container/pages/timeline/form/ChoiceDivision'
import Assignment from './container/pages/timeline/form/Assignment'
import FGD from './container/pages/timeline/form/Fgd'
import Interview from './container/pages/timeline/form/Interview'
import Announcement from './container/pages/timeline/form/Announcement'

import Information from './container/pages/info/Information'
import Login from './container/pages/user/Login'


class App extends Component {
  render(){
    return(
          <Router>
          <Fragment>
            <div>
                 <HeaderComp />
            </div>
            <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/timeline" exact component={ Timeline } />
              <Route path="/timeline/personal-data" exact component={ PersonalData } />
              <Route path="/timeline/experience-data" exact component={ ExperienceData } />
              <Route path="/timeline/choice-division" exact component={ ChoiceDivision } />
              <Route path="/timeline/upload-file" exact component={ UplaodFile } />
              <Route path="/timeline/assignment" exact component={ Assignment } />
              <Route path="/timeline/fgd" exact component={ FGD } />
              <Route path="/timeline/interview" exact component={ Interview } />
              <Route path="/timeline/announcement" exact component={ Announcement } />
              <Route path="/information" exact component={ Information } />
              <Route path="/users/login" exact component={ Login } />
              {/* <Route path="/produk" exact component={ Product } />
              <Route path="/produk/kategori/:namaKategori" component={ DetailCategoryProduct} />
              <Route path="/produk/umkm/:id" component={ UmkmProduct } />
              <Route path="/user/profile" exact component={ withAuth(UserProfile) } />
              <Route path="/user/dashboard" exact component={ withAuth(Dashboard) } />
              <Route path="/user/product" exact component={ withAuth(UserProduct) } />
              <Route path="/user/product/add" exact component={ withAuth(ProductForm) } />
              <Route path="/user/product/edit/:id" component={ withAuth(ProductForm) } />
              <Route path="/user/login" exact component={ Login } />
              <Route path="/user/register" exact component={ Register } />
              <Route path="/user/forgot" exact component={ Forgot } />  */}
              </Switch>

            <div>
                {/* <FooterComp /> */}
            </div>
            </Fragment>
       
        </Router>
          )
  }
}

export default App;