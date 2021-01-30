import React from 'react'
import { changePage } from '../../redux/ducks/app'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: auto;
    width: 250px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-bottom: 20px;
    & > span{
        border-radius: 5px;
        ${p=>p.darkMode ? p.theme.darkModeCss : p.theme.whiteModeCss};
        box-shadow: 0px 0px 5px 5px rgba(0,0,0,${p=>p.darkMode ? '.4' : '.02'});
        font-size: 1.3rem;
        padding: 5px 10px;
        cursor: pointer;
        &:hover{
            opacity: .8;
        }
    }
`

export default function Pagination() {
    const currentPage = useSelector(state=>state.app.currentPage)
    const itemsPerPage = useSelector(state=>state.app.itemsPerPage)
    const darkMode = useSelector(state=>state.app.darkMode)
    const allCountries = useSelector(state=>state.app.allCountries)
    const dispatch = useDispatch()
    const changePageClickHandler = (nextPage)=>{
        if(nextPage!==0 && nextPage!==Math.ceil(allCountries.length/itemsPerPage)+1){
            dispatch(changePage(nextPage))
        }
    } 
    return (
        <Wrapper darkMode={darkMode}>
            <span onClick={()=>changePageClickHandler(currentPage-1)} >previous</span>
            <span >{currentPage}</span>
            <span onClick={()=>changePageClickHandler(currentPage+1)} >next</span>
        </Wrapper>
    )
}
