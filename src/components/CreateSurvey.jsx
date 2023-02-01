import React from 'react'
import { useAuth } from '../Context/AuthContext'
import Basic from './Basic'

function CreateSurvey() {
   const {textArray} = useAuth();
    console.log(textArray,"textArray1");
   
  return (
    <div>
     {textArray.length > 0 && textArray[0].card_id === 'kisa-metin' && <Basic question={textArray[1].question} option1="ilk"/>}
    </div>
  )
}

export default CreateSurvey
