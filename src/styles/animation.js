import { css, keyframes } from "styled-components";

export const fadeInKeyFrames =  keyframes`
	0% {
		filter: blur(5px);
		opacity: 0;
	}
	100% {
		filter: blur(0);
		opacity: 1;
	}
`
export const fadeIn = ({time = '1s', type = 'ease'} = {}) => (//el valor por defecto de todos los parametros es un objeto vacio
	css`
		animation: 1s ${time} ${fadeInKeyFrames} ${type}; 
`
)