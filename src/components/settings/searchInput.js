import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Loupe } from '../../asset/loupe.svg'
import { useSelector, useDispatch } from 'react-redux'
import { setFilters, changePage } from '../../redux/ducks/app'
import { ReactComponent as RemoveIco } from '../../asset/removeIco.svg'

const Wrapper = styled.form`
,& > input{
    ${p=>p.darkMode ? p.theme.darkModeCss : p.theme.whiteModeCss};
}
border-radius: 10px;
margin-left: 10px;
box-shadow: 0px 0px 5px 5px rgba(0,0,0,.04);
width: 90vw;
max-width: 450px;
padding: 10px 10px;
display: flex;
align-items: center;

& > input{
        border: none;
        outline: none;
        padding: 15px;
        width: 100%;
        font-size: 1rem;
        ::placeholder,
        ::-webkit-input-placeholder {
          opacity: 1;
        }
        :-ms-input-placeholder {
           opacity: 1;
        }
    }
    & > svg{
        display: none;
        margin-left: 20px;
        cursor: pointer;
        transform: scale(3);
        transform-origin: left;
        & > g {
            ${p=>p.darkMode && `
                & > line{
                    stroke: white;
                }
                & > g{
                    stroke: white;
                }
                `}
        }
        &:hover{
            opacity: .8;
        }
        &:nth-child(3){
            display: block;
            margin-left: 0px;
            margin-right: 20px;
        }
    }
    ${p=>p.theme.media.mobile1}{
        & > input{
            margin-left: 35px;
        }
        & > svg{
            display: block;
        }
    }
    ${p=>p.theme.media.maxWidth}{
        margin: 0px;
    }
`

export default function SearchInput() {
    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.app.darkMode)
    const searchedCountry = useSelector(state => state.app.searchedCountry)
    const searchHandler = (e)=>{
        e.preventDefault()
        const country = e.target.children[1].value.trim()
        if(country){
            dispatch(changePage(1))
            dispatch(setFilters({name: 'searchedCountry', value: country}))
            e.target.children[1].value = ""
        }
    }
    return (
        <Wrapper onSubmit={searchHandler} darkMode={darkMode}>
            <Loupe />
            <input type="text" placeholder={searchedCountry ? searchedCountry : "Search for a country..."} />
            <RemoveIco onClick={()=>dispatch(setFilters({name: 'searchedCountry', value: ""}))} />
        </Wrapper>
    )
}
