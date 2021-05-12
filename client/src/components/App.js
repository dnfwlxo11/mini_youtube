import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from '../hoc/auth'

import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import LandingPage from './views/LandingPage/LandingPage'
import LoginPage from './views/LoginPage/LoginPage'
import RegisterPage from './views/RegisterPage/RegisterPage'
import VideoUploadPage from './views/VideoUploadPage/VideoUploadPage'
import VideoDetailPage from './views/VideoDetailPage/VideoDetailPage'


function App() {
	return (
	  <Suspense fallback={(<div>Loading...</div>)}>
		<NavBar />
		<div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
		  <Switch>
			<Route exact path="/" component={Auth(LandingPage, null)} />
			<Route exact path="/login" component={Auth(LoginPage, false)} />
			<Route exact path="/register" component={Auth(RegisterPage, false)} />
			<Route exact path="/video/upload" component={Auth(VideoUploadPage, true)} />
			<Route exact path="/video/:videoId" component={Auth(VideoDetailPage, null)} />
			{/* <Route exact path="/video/detail" component={Auth(VideoDetailPage, null)} /> */}
		  </Switch>
		</div>
		<Footer />
	  </Suspense>
	);
  }
  
  export default App;