import React from 'react'
import { HerosList } from '../heroes/HerosList'

export const DcScreen = () => {
    return (
        <div>
            <h1>Dc Screen</h1>
            <hr/>
            
            <HerosList publisher="DC Comics" />
        </div>
    )
}
