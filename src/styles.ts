import styled from "styled-components";

export const GlobalStyles = styled.body`
	background: black;
	padding: 4vw;
	font-family: "Roboto Mono", monospace;
`;

export const Wrapper = styled.div`
	background: #181c24;
	padding: 1vw;
	margin: 2vw 0;
	border-radius: 20px;
	display: flex;
	flex-wrap: wrap;
`;

export const WrapperText = styled.p`
	color: white;
	font-weight: 600;
	font-size: 22px;
	margin-left: 10px;
`;

export const WrapperImage = styled.img`
	margin: 10px;
	border-radius: 10px;
	width: 400px;
	height: 300px;
`;

export const WrapperHeader = styled.h4`
	color: white;
	font-size: 20px;
`;

export const ImageContainer = styled.div`
	position: relative;
	cursor: pointer;
	&:hover .overlay {
		opacity: 1;
	}
`;

export const Overlay = styled.div`
	position: absolute;
	top: 10px;
	left: 10px;
	width: 400px;
	height: 300px;
	background-color: rgba(0, 0, 0, 0.5);
	opacity: 0;
	transition: opacity 0.3s ease;
	display: flex;
	align-items: center;
	justify-content: center;
`;
