import React, { useEffect } from 'react'
import Settings from '../components/settings'
import Countries from '../components/countries'
import { getAllCountries } from '../redux/ducks/app'
import { useDispatch, useSelector } from 'react-redux'

let regionTab = ['Oceania', 'Europe', 'Asia', 'Americas', 'Africa']
let regionTabHelper = 0
export default function Home() {
    const fetching = useSelector(state=>state.app.allCountriesLoading)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(fetching === false){
            if(regionTab[regionTabHelper]){
                dispatch(getAllCountries({case:'all', parameters:regionTab[regionTabHelper]}))
                regionTabHelper++
            }
        }
    }, [dispatch, fetching])
    return (
        <div>
            <Settings />
            <Countries />
        </div>
    )
}
