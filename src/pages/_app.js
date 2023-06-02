import { MyContext } from '@/context/AppContext'
import '@/styles/globals.css'
import { useState } from 'react';



export default function App({ Component, pageProps }) {
  const [instructionPage, setinstructionPage] = useState(true);
  return  (
  
    <Component {...pageProps} />
  
  ) 
}
