import React from 'react'
import styled from 'styled-components'
import { ReactComponent as MoonIco } from '../../asset/moonIco.svg'
import { useSelector, useDispatch } from 'react-redux'
import { switchState } from '../../redux/ducks/app'

const Wrapper = styled.header`
${p=>p.darkMode ? p.theme.darkModeCss : p.theme.whiteModeCss};
box-shadow: 0px 0px 5px 5px rgba(0,0,0,${p=>p.darkMode ? '.2' : '.02'});
& > div{
        margin: auto;
        max-width: 1440px;
        height: 80px;
        padding: 0px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > h1{
            font-size: 1rem;
        }
        & > div{
            cursor: pointer;
            display: flex;
            align-items: center;
            &:hover{
                opacity: .8;
            }
            & > svg{
                margin-right: 15px;
                width: 15px;
                & > path{
                    ${p=>p.darkMode && `
                    fill: white;
                    stroke: white
                    `}
                }
            }
            & > p{
                font-size: .9rem;
            }
        }
    }
    ${p=>p.theme.media.desktop1}{
        & > div{
            padding: 0px 45px;
            & > h1{
                font-size: 1.5rem;
            }
            & > div{
                & > svg{
                    width: 18px;
                }
                & > p{
                    font-size: 1.2rem;
                }
            }
        }
    }
    ${p=>p.theme.media.maxWidth}{
        & > div{
            padding: 0px;
        }
    }
`

export default function Header() {
    const darkMode = useSelector(state=>state.app.darkMode)
    const dispatch = useDispatch()
    return (
        <Wrapper darkMode={darkMode}>
            <div>
                <h1>Where in the world?</h1>
                <div onClick={()=>dispatch(switchState('darkMode'))}>
                    <MoonIco />
                    <p>Dark Mode</p>
                </div>
            </div>
        </Wrapper>
    )
}
