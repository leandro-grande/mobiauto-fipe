import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #d1e6da;

	padding: 0 8px;
`;

export const Section = styled.section`
	width: 100%;
	max-width: 600px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
	text-align: center;
`;

export const Price = styled.div`
	padding: 16px;
	border-radius: 32px;

	color: #eee;
	font-weight: bold;
	background-color: #51a877;
`;

export const Info = styled.span`
	font-size: 0.875rem;
	color: #999;
`;

export const Back = styled(Link)`
	font-size: 0.875rem;
	color: #333;
`;
