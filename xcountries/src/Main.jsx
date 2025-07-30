import React from "react"
import { useEffect } from "react"
import axios from 'axios'
import { useState } from "react"
import Card from "./Card"
import "./Main.css"

const Main = () => {

    const [data ,setData] = useState([])
    
    useEffect(() => {
        main()
    },[])

    async function main() {

        const response = await axios.get('https://xcountries-backend.azurewebsites.net/all')
        console.log(response.data)
        setData(response.data)
       
    }

    return(

        <div>
            
            <div className="card-container">
                {
                    data.map(((item) => { 
                        return (
                            <Card
                                key = {item.abbr}
                                name = {item.name}
                                img = {item.flag} 
                                abbr = {item.abbr} />
                        )
                    } ))
                    
                }
            </div>
                
        </div>

    )

    

}

export default Main