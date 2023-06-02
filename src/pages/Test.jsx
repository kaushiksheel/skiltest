import React, { useContext } from 'react'
import Header from '../components/Header'
import Instructions from '../components/Instructions'
import Quiz from '../components/Quiz'
import { useState } from 'react'
import QInstruction from '@/components/QInstruction'
import QSections from '@/pages/QSections'
import Result from '@/components/Result'
import { MyContext } from '@/context/AppContext'


const Test = () => {
  const[isActive,setIsActive]=useState(false)

  const { instructionPage, setinstructionPage} = useContext(MyContext);

  return (
  <>
  <Header/>
  {isActive  ?
   <Quiz/> :

  <Instructions setIsActive={setIsActive}/>
  }

{/* <Result/> */}

  {/* <QInstruction/> */}
  {/* <QSections/> */}
  </>
  )
}

export default Test