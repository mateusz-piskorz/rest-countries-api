import React from 'react'
import styled from 'styled-components'
import SearchInput from './searchInput'
import SelectFilter from './selectFilter'

const Wrapper = styled.div`
    margin: auto;
    max-width: 1440px;
    margin-top: 50px;
    padding: 0px 5px;
    display: flex;
    flex-direction: column;
    & > form{
        margin-bottom: 50px;
    }
    ${p=>p.theme.media.desktop1}{
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }
    ${p=>p.theme.media.maxWidth}{
        padding: 0px;
    }
`


export default function Settings() {
    return (
        <Wrapper>
            <SearchInput />
            <SelectFilter />
        </Wrapper>
    )
}
