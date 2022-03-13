import React from 'react'
import CharacterAdd from '../characters/CharacterAdd'
import CharacterAddFavFill from '../characters/CharacterAddFavFill'
import MenuItem from './MenuItem'

const OptionsMenu = () => {
  return (
    <div className='menu__container'>
        <MenuItem option="FAVORITOS" iteme={ <CharacterAddFavFill/> } />
        <MenuItem option="AGREGAR" iteme={ <CharacterAdd/> } />
    </div>
  )
}

export default OptionsMenu