import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { getSelectedCountry } from '../../redux/ducks/app'
import { useParams } from 'react-router-dom'

const Wrapper = styled.div`
& > h1{
    margin: auto;
}
    color: ${p=>p.darkMode ? 'white' : p.theme.color3};
    margin: auto;
    margin-top: 50px;
    padding-bottom: 50px;
    max-width: 400px;
    & > img{
        width: 100%;
        max-width: 400px;
    }
    & > div{
        margin-top: 30px;
        padding-left: 20px;
        & > div{
            //first two blocks
            &:nth-child(2){
                & > div{
                    & > span{
                        margin: 5px 0px;
                        display: flex;
                        & > span{
                            font-size: 1.1rem;
                            margin-right: 15px;
                            font-weight: 600;                            
                        }
                        & > p{
                            font-size: 1.1rem;
                            opacity: .8;
                            margin: 0px 5px;
                        }
                    }
                    &:nth-child(1){
                        margin: 35px 0px;
                    }
                }
            }
            //last block
            &:nth-child(3){
                margin-top: 40px;
                & > p{
                    font-weight: 600;
                    font-size: 1.2rem;
                    margin-bottom: 15px;
                }
                & > div{
                    display: flex;
                    flex-wrap: wrap;
                    & > span{
                        border-radius: 3px;
                        margin: 5px 5px;
                        padding: 5px 10px;
                        ${p=>p.darkMode ? p.theme.darkModeCss : p.theme.whiteModeCss};
                        box-shadow: 0px 0px 5px 5px rgba(0,0,0,${p=>p.darkMode ? '.2' : '.05'});
                    }
                }
            }
        }
    }
    ${p=>p.theme.media.desktop1}{
        margin-top: 100px;
        max-width: 1440px;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        & > img{
            width: 45%;
            max-width: 600px;
        }
        & > div{
            margin-top: 0px;
            width: 45%;
        }
    }
    ${p=>p.theme.media.desktop2}{
        & > div{
            & > div{
                //first two blocks
                &:nth-child(2){
                    display: flex;
                    padding-top: 40px;
                    justify-content: space-between;
                    & > div{
                        &:nth-child(1){
                            margin: 0px;
                        }
                    }
                }
                //last blocks
                &:nth-child(3){
                    display: flex;
                    align-items: center;
                    & > p{
                        margin: 0px;
                        margin-right: 45px;
                    }
                }
            }
        }
    }
`

export default function CountryDetail() {
    const dispatch = useDispatch()
    const darkMode = useSelector(state=>state.app.darkMode)
    const info = useSelector(state=>state.app.selectedConutry)
    const loading = useSelector(state=>state.app.selectedCountryLoading)
    const error = useSelector(state=>state.app.selectedConutryError)
    const {countryIdName} = useParams()
    useEffect(()=>{
        dispatch(getSelectedCountry({case:'selectedCountry', parameters:countryIdName}))
    }, [countryIdName, dispatch])

    const { name, nativeName, population, region, subregion, capital, currencies, topLevelDomain, languages, flag } = info
    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }else if(error){
        return(
            <h1>Error</h1>
        )
    }else{
        return (
            <Wrapper darkMode={darkMode}>
                <img alt="flag" src={flag} />
                <div>
                    <h1>{name}</h1>
                    <div>
                        <div>
                            <span>
                                <span>Native Name:</span>
                                <p>{nativeName}</p>
                            </span>
                            <span>
                                <span>Population:</span>
                                <p>{population}</p>
                            </span>
                            <span>
                                <span>Region:</span>
                                <p>{region}</p>
                            </span>
                            <span>
                                <span>Sub Region:</span>
                                <p>{subregion}</p>
                            </span>
                            <span>
                                <span>Capital:</span>
                                <p>{capital}</p>
                            </span>
                        </div>
                        
                        <div>
                            <span>
                                <span>Top Level Domain:</span>
                                {topLevelDomain && topLevelDomain.map((e,index)=><p key={index}>{e}</p>)}
                            </span>
                            <span>
                                <span>Currencies:</span>
                                {currencies && currencies.map((e,index)=><p key={index}>{e.name}</p>)}
                            </span>
                            <span>
                                <span>Languages:</span>
                                {languages && languages.map((e,index)=><p key={index}>{e.name}</p>)}
                            </span>
                        </div> 
                    </div>
                    <div>
                        <p>Border Countries:</p>
                        <div>
                            <span>France</span>
                            <span>Germany</span>
                            <span>Netherlands</span>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
