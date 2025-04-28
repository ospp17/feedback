
import { useState } from "react"
import { CardFinal } from "./components/CardFinal"
import { CardInicial } from "./components/CardInicial"




export function App(){
const [submited, setSubmited] = useState(false)
const [rateNote,setRateNote] = useState(0)

  return(
 
     
     submited === false ? (

      <CardInicial setRateNote={setRateNote} setSubmited={setSubmited} />
     
     ) : (
 
      <CardFinal rateNote={rateNote} rateNote={rateNote} />

     )
 
  )
}