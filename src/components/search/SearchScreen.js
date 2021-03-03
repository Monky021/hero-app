import React, { useMemo } from "react";
import queryString from 'query-string';
import { useLocation } from "react-router-dom";
import { useForm } from "../../customHook/useForm";
import { heroes } from "../../data/heroes";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroByName } from "../../selector/getHeroByName";

export const SearchScreen = ({history}) => {

  const locations = useLocation();
  const {q = ''} = queryString.parse(locations.search);

  const [form, handleInputChange, reset] = useForm({
    busqueda: q
  });
  const {busqueda} = form;
  const memoHeroFilter = useMemo(() => getHeroByName(q), [q]);
  // const heroesFiltrados = getHeroByName(busqueda);

  

  const handleSubmit = (e) =>{
    e.preventDefault();
    history.push( `?q=${busqueda}`)
  } 
  return (
    <div>
      <div className="row">
        <div className="col-5">
          <h1>SearchScreen</h1>
          <hr />
          <form onSubmit={handleSubmit} >
              <input 
                    type="text"
                    placeholder="Search"
                    className="form-control"
                    name="busqueda"
                    value={busqueda}
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn m-1 btn-block btn-outline-primary"> Buscar </button>
          </form>
        </div>
        <div className="col-7">
            <h4>Resultados</h4>
            <hr/>
            {
                memoHeroFilter.map(hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    /> 
                ))
            }

        </div>
      </div>
    </div>
  );
};
