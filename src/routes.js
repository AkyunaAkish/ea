import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import Layout from './components/Layout'
import Blogs from './components/Blogs'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import AddBlog from './components/AddBlog'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Blogs} />
    <Route path='signin' component={SignIn} />
    <Route path='signup' component={SignUp} />
    <Route path='profile' component={Profile} />
    <Route path='addblog' component={AddBlog} />
    <Redirect from="*" to="/" />
  </Route>
)
