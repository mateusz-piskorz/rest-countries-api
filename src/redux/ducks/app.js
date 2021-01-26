export const SWITCH_STATE = 'app/switch_state'
export const SET_FILTERS = 'app/set_filters'
export const ALL_COUNTRIES_REQUEST = 'app/all_countries_request'
export const ALL_COUNTRIES_SUCCESS = 'app/all_countries_success'
export const ALL_COUNTRIES_FAILURE = 'app/all_countries_failure'


const initState = {
    allCountriesLoading: false,
    selectedCountryLoading: false,
    darkMode: false,
    filterEject: false,
    regionFilter: '',
    searchedCountry: '',
    allCountries: [],
    selectedConutry: '',
    allCountriesError: null,
    selectedConutryError: null,
}

const reducer = (state = initState, { type, payload }) =>{
    switch(type){
        case SWITCH_STATE:return{
            ...state, [payload]: !state[payload]
        }
        case SET_FILTERS:return{
            ...state, [payload.name]: payload.value
        }
        case ALL_COUNTRIES_REQUEST:return{
            ...state, allCountriesLoading: true
        }
        case ALL_COUNTRIES_SUCCESS:return{
            ...state,
            allCountriesLoading: false,
            allCountries: payload,
            allCountriesError: null
        }
        case ALL_COUNTRIES_FAILURE:return{
            ...state,
            allCountriesLoading: false,
            allCountriesError: payload
        }
        default: return state
    }
}

export const getAllCountries = ()=>({type: ALL_COUNTRIES_REQUEST,})

export const switchState = payload=>({type: SWITCH_STATE, payload})

export const setFilters = payload=>({type: SET_FILTERS, payload})

export default reducer