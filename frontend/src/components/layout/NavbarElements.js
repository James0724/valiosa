import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
	background: #390375;
	height: 50px;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem calc((100vw - 1000px) / 2);
	z-index: 10;
	@media screen and (max-width: 991px) {
	}
	/* Third Nav */
	/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
	color: #ca76d8;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #ca76d8;
	}
	&:hover {
		transition: all 0.2s ease-in-out;
		text-decoration: none;
		color: #fff;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	width: 100%;
	justify-content: inherit;
	margin-right: -24px;
	/* Second Nav */
	/* margin-right: 24px; */
	/* Third Nav */
	/* width: 100vw;
  white-space: nowrap; */
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-right: 24px;
	/* Third Nav */
	/* justify-content: flex-end;
  width: 100vw; */
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: #256ce1;
	padding: 10px 22px;
	color: #ca76d8;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	/* Second Nav */
	margin-left: 24px;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #ca76d8;
	}
`;
