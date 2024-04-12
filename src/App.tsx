import {Outlet} from 'react-router-dom';
import './App.css';

/**
 * The main page for the React app
 * @return {JSX.Element} The main page component
 */
function App(): JSX.Element {
	return (<Outlet/>);
}

export default App;
