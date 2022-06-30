import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles' //estos son los estilos globales hechos con stiled
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

function App() {
	return (
		<div>
			<GlobalStyle />
			<Logo />
			<ListOfCategories />
			<ListOfPhotoCards />
		</div>
	)
}

export default App