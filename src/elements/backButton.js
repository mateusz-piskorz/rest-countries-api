import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BackArrow } from '../asset/backArrow.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Wrapper = styled.button`
    cursor: pointer;
    border-radius: 10px;
    outline: none;
    border: none;
    ${p=>p.darkMode ? p.theme.darkModeCss : p.theme.whiteModeCss};
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,${p=>p.darkMode ? '.2' : '.07'});
    width: 140px;
    &:hover{
        opacity: .8;
    }
    & > a{
        padding: 10px 30px;
        text-decoration: none;
        color: ${p=>p.darkMode ? 'white' : p.theme.color3 };
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        & > p{
            font-size: 1rem;
        }
        & > svg{
            & > g{
                ${p=>p.darkMode && `
                & > path,
                & > line{
                    stroke: white;
                }
                
                `}
            }
        }
    }
`

export default function BackButton() {
    const darkMode = useSelector(state=>state.app.darkMode)
    return (
        <Wrapper darkMode={darkMode}>
            <Link to='/'>
                <BackArrow />
                <p>Back</p>
            </Link>
        </Wrapper>
    )
}
