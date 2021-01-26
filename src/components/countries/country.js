import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 280px;
    height: 350px;
    display: flex;
    flex-direction: column;
    & > div{
        &:nth-child(1){
            width: 100%;
            height: 50%;
            background-image: url(${p=>p.flag});
            background-repeat: no-repeat;
            background-size: cover;
        }
        &:nth-child(2){
            ${p=>p.darkMode ? p.theme.darkModeCss : p.theme.whiteModeCss};  
            padding: 25px;
            height: 50%;
            & > h3{
                margin-bottom: 15px;
            }
            & > span{
                display: flex;
                & > p{
                    &:nth-child(1){
                        margin-right: 15px;
                    }
                }
            }
        }
    }

`

export default function Country({country}) {
    return (
        <Wrapper flag={country.flag}>
            <div></div>        
            <div>
                <h3>Germany</h3>
                <span>
                    <p>Population:</p>
                    <p>81,234,221</p>
                </span>
                <span>
                    <p>Region:</p>
                    <p>Europe</p>
                </span>
                <span>
                    <p>Capital:</p>
                    <p>Berlin</p>
                </span>
            </div> 
        </Wrapper>
    )
}
