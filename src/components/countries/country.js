import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Wrapper = styled.div`
    width: 280px;
    height: 350px;
    display: flex;
    flex-direction: column;
    & > a{
        width: 100%;
        height: 50%;
        & > img{
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    & > div{
        &:nth-child(2){
            ${p=>p.darkMode ? p.theme.darkModeCss : p.theme.whiteModeCss};
            box-shadow: 0px 0px 5px 5px rgba(0,0,0,${p=>p.darkMode ? '.2' : '.02'});
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
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
    const { flag, name, population, region, capital } = country
    const darkMode = useSelector(state=>state.app.darkMode)
    return (
        <Wrapper darkMode={darkMode}>
            <Link to={`/country/${name}`}>
                <img src={flag} alt="countryFlag"/>        
            </Link>
            <div>
                <h3>{name}</h3>
                <span>
                    <p>Population:</p>
                    <p>{population}</p>
                </span>
                <span>
                    <p>Region:</p>
                    <p>{region}</p>
                </span>
                <span>
                    <p>Capital:</p>
                    <p>{capital}</p>
                </span>
            </div> 
        </Wrapper>
    )
}
