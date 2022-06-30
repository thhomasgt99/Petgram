import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'//esta es por si no llega la prop de la imagen en este caso

export const Category = ({cover = DEFAULT_IMAGE, path, emoji='?'})=>(
	<Anchor href={path}>
		<Image src={cover} alt="" />
		{emoji}
	</Anchor>
)
