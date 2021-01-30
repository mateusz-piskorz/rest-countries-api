import React from 'react'
import BackButton from '../elements/backButton'
import styled from 'styled-components'
import CountryDetail from '../components/countryDetail'

const Wrapper = styled.div`
& > div{
    &:nth-child(1){
        margin auto;
        margin-top: 40px;
        max-width: 1440px;
        & > button{
            margin-left: 10px;
        }
    }
}    
${p=>p.theme.media.mobile1}{
    & > div{
        &:nth-child(1){
            margin-top: 70px;
            & > button{
                margin-left: 50px;
            }
        }
    }
}
`

export default function Country() {
    return (
        <Wrapper>
            <div>
                <BackButton />
            </div>
            <CountryDetail />
        </Wrapper>
    )
}
