import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #eee;
`;

export const Main = styled.main`
	width: 100%;
	max-width: 400px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;

export const Form = styled.form`
	width: 100%;
	margin-top: 1rem;
	background-color: white;
	padding: 2rem;
	border-radius: 8px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;

