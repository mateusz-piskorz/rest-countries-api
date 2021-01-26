import React, { useEffect } from 'react'
import Settings from '../components/settings'
import Countries from '../components/countries'
import { getAllCountries } from '../redux/ducks/app'
import { useDispatch } from 'react-redux'

export default function Home() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllCountries())
    }, [dispatch])
    return (
        <div>
            <Settings />
            <Countries />
        </div>
    )
}
