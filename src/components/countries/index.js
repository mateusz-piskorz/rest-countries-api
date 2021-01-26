import React from 'react'
import Country from './country'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 1440px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    & > div{
        margin: 40px;
    }
`

export default function Countries() {
    const allCountries = useSelector(state=>state.app.allCountries)
    return (
        <Wrapper>
            {allCountries.length ? allCountries.map((country, index)=><Country key={index} country={country} />) : <h1>Loading</h1>}
        </Wrapper>
    )
}
