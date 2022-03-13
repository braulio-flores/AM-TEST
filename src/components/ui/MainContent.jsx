import React from 'react'

import ButtonFilter from '../buttons/ButtonFilter';
import CharactersContainer from '../characters/CharactersContainer';
import OptionsMenu from './OptionsMenu';
const hpImages = require.context('../../assets/images', true);


const MainContent = () => {
  return (
    <>
        <OptionsMenu />
        <div className="ui__backgroud"></div>
        <div className="ui__title-container">
            <img className="ui__title-image" src={ hpImages('./hptitle.png')  } alt="Harry Potter Titl" />
        </div>
        <div className="ui__subtitle-container mt-5">
            <div className="ui__subtitle-content">
                <p>Selecciona tu filtro</p>
                <div className="buttons__container">
                    <ButtonFilter title="ESTUDIANTES" />
                    <ButtonFilter title="STAF" />
                </div>
            </div>
        </div>
        <CharactersContainer /> 
    </>
  )
}


export default MainContent