import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData(){
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch('https://petgram-server-thh.vercel.app/categories')
			.then(res => res.json()
				.then(response => {
					setCategories(response)
					setLoading(false)
				}))
	}, [])

	return {categories, loading} //devuelve un objeto con la propiedad categories
}

export const ListOfCategories = () => {
	const { categories, loading }= useCategoriesData() //destructuramos 
	const [showFixed, serShowFixed] = useState (false)

	useEffect(()=>{
		const onScroll = e => {
			const newShowFixed = window.scrollY > 200 //esto guarda true o false en funcion de si es cierto o no
			showFixed !== newShowFixed && serShowFixed(newShowFixed)//&& aquí es como un 'entonces' que valida solo true
		}
		document.addEventListener('scroll',onScroll)

		return ()=>document.removeEventListener('scroll', onScroll) //esto lo que hace es linpiar el effect siempre

	},[showFixed])

	const renderList = (fixed) => ( //pilas la siguiente sintax parece una prop pero es la adjudicacion de una clase
		<List fixed={fixed}>
			{
				loading 
				? <Item key={'loading'}><Category /></Item>//esto es solo como ejemplo de inyectar algo en la carga, aqui solo metimos los valores por defecto de un mismo componente category
				:	categories.map(category => <Item key={category.id}><Category {...category} /></Item>) //aqui la sintax de {...category} lo que hace es destructurar cada propiedad de la propiedad iterada y mandarlas cada una como prop por separado y como es un objero cada category pues pasa como nombre de la prop la clave
			}
		</List>
	)

	return (
		<Fragment>
			{renderList()}
			{showFixed && renderList(true)} {/*aqui denuevo es como una validacion pero aún mas directa si lo primero es true pasa lo segundo */}
		</Fragment>

	)
}