import './App.css';
import { Layout } from './Layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './views/Home';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={
					<Layout><Home /></Layout>
				} />
			</Routes>
		</Router>
	)
}

export default App
