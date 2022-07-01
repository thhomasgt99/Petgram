import styled, { css } from "styled-components";

export const List = styled.ul`
display: flex;
overflow: scroll;
width: 100%;
::-webkit-scrollbar {
	display: none;
}
${props => props.fixed && css` //aqui le llega una prop que devera ser true o false, vease que no fue nesesario declarar las prop para poder utilizarlas
	{
		background-color: #fff;
		border-radius: 60px;
		box-sizing: 0 0 20px rgba(0,0,0,0.3);
		left: 0;
		right: 0;
		margin: 0 auto;/*left 0 y rigth 0 mas esto centra en horizontal */
		max-width:  400px;
		padding: 5px;
		position: fixed;
		top: -20px;
		transform: scale(.5);
		z-index: 1;
	}
`}

`

export const Item = styled.li`
	padding: 0 8px;
`
