import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_rabbits.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
	const element = useRef(null) //creamos un referencia, que es practicamente capturar el elemento del dom
	//como este componente se va a repetir varias veces tendran un ref para cada uno que denuvo sera el tomar el elemento referenciado
	const [show, setShow] = useState(false)
	const key=`like-${id}`
	const [liked, setLiked] = useState(()=>{
		try{
			const like = window.localStorage.getItem(key)
			return like
		}catch(err){
			return false
		}
	})

	console.log('se likeo')
	useEffect(() => {
		Promise.resolve( //necesita ser simpre una pormesa esta parte asi que aparece esta sintax
			typeof window.IntersectionObserver !== 'undefined'
				? window.IntersectionObserver
				: import('intersection-observer')//esto es un import dinamico para que solo se importe esto es este momento
		).then(() => { //este impor devulbe una promesa pero como es un polyfill lo que hace es parchear el objeto window
			const observer = new window.IntersectionObserver((entries) => {//asi que no deve retornar nada la promesa
				const { isIntersecting } = entries[0]
				if (isIntersecting) {
					console.log('si')
					setShow(true)
					observer.disconnect()//esto ya deja de observar
				}
				console.log(isIntersecting)
			}, { threshold: 0.95 })
			observer.observe(element.current)
		})
	}, [element])

	const Icon = liked ? MdFavorite : MdFavoriteBorder //esto valida para saver que icono poner

	const setLocalStorage = value => { //esto es para guardar los likes
		try{
			window.localStorage.setItem(key, value)
			setLiked(value)
		} catch(err){
			console.error(err)
		}
	}

	return (
		<Article ref={element}>{/*ref ya es una prop de jsx*/}
			{
				show && <Fragment>
					<a href={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} alt="" />
						</ImgWrapper>
					</a>

					<Button onClick={()=>setLocalStorage(!liked)}>
						<Icon size='32px' color='red' />{likes} likes!	{/*vease que los iconos aceptan unas prop ya definidas*/}
					</Button>
				</Fragment>
			}

		</Article>
	)
}