import {useEffect, useState} from 'react';
import {useLinkedIn} from 'react-linkedin-login-oauth2';
import {useSearchParams} from 'react-router-dom';

/**
 * The main page
 * @return {JSX.Element} The main page component
 */
export default function MainPage(): JSX.Element {
	const [queryParameters] = useSearchParams();
	const userToken = queryParameters.get('token');

	const [isSuccessfullyConnected, setIsSuccessfullyConnected] = useState<boolean | undefined>(undefined);

	const {linkedInLogin} = useLinkedIn({
		clientId: '78iz03p3kxk46h',
		redirectUri: `${window.location.origin}/linkedin`,
		scope: 'rw_organization_admin w_organization_social',
		onSuccess: async (code) => {
			setIsSuccessfullyConnected(false);
			try {
				await fetch('https://api-tests.mymae.pro/api/v1/socials/linkedin/registertoken', {
				// await fetch('http://localhost:8080/api/v1/socials/linkedin/registertoken', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${userToken}`,
					},
					body: JSON.stringify({
						'auth_code': code,
						'redirect_uri': `${window.location.origin}/linkedin`,
					}),
				});

				console.log(code);
				setIsSuccessfullyConnected(true);
			} catch (error) {
				console.log(error);
				if (!isSuccessfullyConnected) {
					setIsSuccessfullyConnected(false);
				}
			}
		},
		onError: (error) => {
			console.log(error);
		},
	});

	useEffect(() => {
		console.log(`${window.location.origin}/linkedin`);
		linkedInLogin();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (userToken != undefined && userToken != '') {
		if (isSuccessfullyConnected) {
			return (
				<p>Vous avez été connecté avec succès. Vous pouvez retourner dans l'application</p>
			);
		}

		return (
			<div>
				{isSuccessfullyConnected === false && (
					<p>Une erreur s'est produite...</p>
				)}
				<h1>{'Pensez à autoriser les popups'.toUpperCase()}</h1>
				<p>Pret à se connecter</p>
				<img
					onClick={linkedInLogin}
					src='./linkedin.png'
					alt="Se connecter avec LinkedIn"
					style={{maxWidth: '180px', cursor: 'pointer'}}
				/>
			</div>
		);
	}

	return (
		<>
			<div>
				<h1>Cette page n'est pas accessible si vous n'êtes pas connecté à MyMae...</h1>
			</div>
		</>
	);
}
