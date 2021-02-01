import React from 'react'
import Country from './country'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Pagination from './pagination'

const Wrapper = styled.div`
max-width: 1440px;
margin: auto;
& > div{
    &:nth-child(1){
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        & > div{
            margin: 30px;
        }
    }
}    

`
export default function Countries() {
    const currentPage = useSelector(state=>state.app.currentPage)
    const itemsPerPage = useSelector(state=>state.app.itemsPerPage)
    const allCountries = useSelector(state=>state.app.allCountries)
    const regionFilter = useSelector(state=>state.app.regionFilter)
    const searchFilter = useSelector(state=>state.app.searchedCountry)

    const filteredByRegion = allCountries.filter(e=>regionFilter==="Filter by Region" ? e : e.region === regionFilter ? e : null)
    const filteredBySearch = filteredByRegion.filter(e=>searchFilter==="" ? e : e.name.includes(searchFilter) ? e : null)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage

    const paginationFilter = filteredBySearch.slice(indexOfFirstItem, indexOfLastItem) 


    const countriesRes = paginationFilter.map((country, index)=><Country key={index} country={country} />)

    return (
        <Wrapper >
            <div>
                {allCountries.length ? countriesRes : <h1>Loading</h1>}
            </div>
            <Pagination />
        </Wrapper>
    )
}
