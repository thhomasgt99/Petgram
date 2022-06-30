import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import  db  from '../../../api/db.json' //aqui destructuramos el json y deuna sacamos la propiedad categories que es un array

export const ListOfCategories = ()=>{
	return (
		<List>
			{
				db.categories.map(category => <Item key={category.id}><Category {...category}/></Item>) //aqui la sintax de {...category} lo que hace es destructurar cada propiedad de la propiedad iterada y mandarlas cada una como prop por separado y como es un objero cada category pues pasa como nombre de la prop la clave
			}
		</List>
	)
}