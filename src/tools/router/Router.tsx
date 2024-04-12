import {createBrowserRouter} from 'react-router-dom';
import App from '../../App';
import MainPage from '../../MainPage';
import {LinkedInCallback} from 'react-linkedin-login-oauth2';

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/',
				element: (<MainPage />),
			},
			{
				path: 'linkedin',
				element: (<LinkedInCallback />),
			},
		],
	},
]);

export default router;
