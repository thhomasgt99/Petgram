import React from 'react'
import { ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from "react-icons/md"

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_rabbits.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE })=>{
	return (
		<article>
			<a href={`/detail/${id}`}>
				<ImgWrapper>
					<Img src={src} alt="" />
				</ImgWrapper>
			</a> 

			<Button>
				<MdFavoriteBorder size='32px' color='red' />{likes} likes!	{/*vease que los iconos aceptan unas prop ya definidas*/}
			</Button>
		</article>
	)
}