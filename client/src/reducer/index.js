import { 
    CHANGE_PAGE,
    FILTER_COUNTRIES, 
    GET_ACTIVITIES,
    GET_ALL_COUNTRIES, 
    GET_COUNTRIES, 
    GET_COUNTRY_ID, 
    GET_COUNTRY_NAME, 
    SWITCH_LOADING 
} from '../actions/index.js';

const initialState = {
    initialCountries: [],
    countryDetail: {},
    allCountries: [],
    activities: [],
    loading: true,
    currentPage: 1
};

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                initialCountries: action.payload
            }
        case GET_COUNTRY_NAME:
            return {
                ...state,
                initialCountries: action.payload
            }
        case GET_COUNTRY_ID:
            return {
                ...state,
                countryDetail: action.payload
            }
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        case FILTER_COUNTRIES:
            return {
                ...state,
                initialCountries: action.payload
            }
        case SWITCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state;
    }
}