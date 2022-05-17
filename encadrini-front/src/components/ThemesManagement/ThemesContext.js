import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from './Themes.json';

export const ThemeContext = createContext()

const ThemeContextProvider  = (props) => {
    const [Themes, setThemes] = useState(data)
console.log(ThemeContext)

useEffect(()=> {
    setThemes(JSON.parse(localStorage.getItem('Themes')))
},[])

useEffect(() => {
    localStorage.setItem('Themes', JSON.stringify(Themes));
})



const sortedThemes = Themes.sort((a,b)=>(a.Titre < b.Titre ? -1 : 1));



const addTheme = (Titre, Promotion, statut) => {
    setThemes([...Themes , {id:uuidv4(), Titre, Promotion, statut}])
}

const deleteTheme = (id) => {
    setThemes(Themes.filter(Theme => Theme.id !== id))
}

const updateTheme = (id, updatedTheme) => {
    setThemes(Themes.map((Theme) => Theme.id === id ? updatedTheme : Theme))
}

    return (
        <ThemeContext.Provider value={{sortedThemes, addTheme, deleteTheme, updateTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;