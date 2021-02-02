export const SWITCH_STATE = 'app/switch_state'
export const SET_FILTERS = 'app/set_filters'
export const CHANGE_PAGE = 'app/change_page'
export const ALL_COUNTRIES_REQUEST = 'app/all_countries_request'
export const SELECTED_COUNTRY_REQUEST = 'app/selected_country_request'
export const FETCH_COUNTRY_FAILURE = 'app/fetch_country_failure'
export const FETCH_COUNTRY_SUCCESS = 'app/fetch_country_success'

const initState = {
    allCountries: [],
    allCountriesLoading: false,
    allCountriesError: null,
    selectedConutry: '',
    selectedConutryError: null,
    selectedCountryLoading: false,
    darkMode: false,
    filterEject: false,
    regionFilter: 'Filter by Region',
    searchedCountry: '',
    currentPage: 1,
    itemsPerPage: 20,
}

const reducer = (state = initState, { type, payload }) =>{
    switch(type){
        case SWITCH_STATE:return{
            ...state, [payload]: !state[payload]
        }
        case SET_FILTERS:return{
            ...state, [payload.name]: payload.value
        }

        case CHANGE_PAGE:return{
            ...state, currentPage: payload
        }

        case FETCH_COUNTRY_SUCCESS:return{
            ...state,
            [payload.loadingState]: false,
            [payload.dataState]: payload.dataState==='allCountries' ? [...state.allCountries, ...payload.value] : payload.value,
            [payload.errorState]: null
        }
        case FETCH_COUNTRY_FAILURE:return{
            ...state,
            [payload.loadingState]: false,
            [payload.errorState]: payload
        }


        case SELECTED_COUNTRY_REQUEST:return{
            ...state, selectedCountryLoading: true
        }

        case ALL_COUNTRIES_REQUEST:return{
            ...state, allCountriesLoading: true
        }

        default: return state
    }
}

export const changePage = payload=>({type: CHANGE_PAGE, payload})

export const getSelectedCountry = payload=>({type: SELECTED_COUNTRY_REQUEST, payload})

export const getAllCountries = payload=>({type: ALL_COUNTRIES_REQUEST, payload})

export const switchState = payload=>({type: SWITCH_STATE, payload})

export const setFilters = payload=>({type: SET_FILTERS, payload})

export default reducer