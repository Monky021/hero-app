import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selector/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HerosList = ({publisher}) => {
    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])
    //const heroes = getHeroByPublisher(publisher)
    return (
      <div className="card-columns animate__animated animate__pulse" >
          {
              heroes.map(hero => (
                  <HeroCard key={hero.id} {...hero}/>
                      
                  
              ))
          }
      </div>
    )
}
