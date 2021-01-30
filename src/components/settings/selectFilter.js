import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ArrowDown } from '../../asset/arrowDown.svg'
import { useSelector, useDispatch } from 'react-redux'
import { switchState, setFilters, changePage } from '../../redux/ducks/app'

const Wrapper = styled.div`
& > div, & > div > p, & > div > span{
    ${p=>p.darkMode ? p.theme.darkModeCss : p.theme.whiteModeCss};

}
& > div{
    padding: 20px 15px;
    width: 90vw;
    max-width: 300px;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,.04);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
& > div{
    &:nth-child(1){
        & > svg{
            transform: scale(.7) ${p=>p.filterEject && 'rotate(180deg)'};
            & > path{
                ${p=>p.darkMode && `
                    stroke: white;
                `}
            }
        }
    }
    &:nth-child(2){
        ${p=>!p.filterEject && 'display: none'};
        flex-direction: column;
        align-items: flex-start;
        & > span{
            width: 100%;
            padding: 5px 5px;
            &:hover{
                background: ${p=>p.theme.color1};                
            }
        }
    }
}
${p=>p.theme.media.desktop1}{
    margin-left: 50px;
    & > div{
        margin: 0px 10px;
        &:nth-child(1){
            margin-bottom: 10px;
        }
    }
}
${p=>p.theme.media.maxWidth}{
    margin: 0px;
}
`

const SelectFilter = ()=> {
    const regionFilter = useSelector(state=>state.app.regionFilter)
    const filterEject = useSelector(state=>state.app.filterEject)
    const darkMode = useSelector(state=>state.app.darkMode)
    const dispatch = useDispatch()
    const filtersHandler = (filterValue)=>{
        dispatch(changePage(1))
        dispatch(setFilters({name: 'regionFilter', value: filterValue}))
        dispatch(switchState('filterEject'))
    }
    return (
        <Wrapper darkMode={darkMode} filterEject={filterEject}>
            <div onClick={()=>dispatch(switchState('filterEject'))}>
                <p>{regionFilter ? regionFilter : 'Filter by Region' }</p>
                <ArrowDown />
            </div>
            <div>
                <span onClick={()=>filtersHandler('Filter by Region')}>All</span>
                <span onClick={()=>filtersHandler('Africa')}>Africa</span>
                <span onClick={()=>filtersHandler('Americas')}>Americas</span>
                <span onClick={()=>filtersHandler('Asia')}>Asia</span>
                <span onClick={()=>filtersHandler('Europe')}>Europa</span>
                <span onClick={()=>filtersHandler('Oceania')}>Oceania</span>
            </div>
        </Wrapper>
    )
}

export default SelectFilter
