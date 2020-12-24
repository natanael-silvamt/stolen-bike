import { action } from 'typesafe-actions';

const LOAD_INCIDENTS_SUCCESS = '@incidents/LOAD_INCIDENTS_SUCCESS';
const LOAD_INCIDENTS_THUNK = '@incidents/LOAD_INCIDENTS_THUNK';
const SEARCH_INCIDENTS_SUCCESS = '@incidents/SEARCH_INCIDENTS_SUCCESS';
const SEARCH_INCIDENTS_BY_DATE = '@incidents/SEARCH_INCIDENTS_BY_DATE';
const SEARCH_INCIDENTS_BY_ID = '@incidents/SEARCH_INCIDENTS_BY_ID';

export const addDataToIncidents = (data) => action(LOAD_INCIDENTS_SUCCESS, { data });
export const addDataRoads = (data) => action(LOAD_INCIDENTS_THUNK, { data });
export const searchDataIncidents = (data) => action(SEARCH_INCIDENTS_SUCCESS, { data });
export const searchDataIncidentsByDate = (data) => action(SEARCH_INCIDENTS_BY_DATE, { data });
export const searchDataIncidentsById = (data) => action(SEARCH_INCIDENTS_BY_ID, { data });

const INITIALSTATE = {
    dataRoads: [],
    hasError: false,
    isLoading: true,
};

export const incidentsReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
      case LOAD_INCIDENTS_SUCCESS:
        return {
          ...state,
          data: action.payload.data,
          hasError: false,
          isLoading: false,
        };
      case LOAD_INCIDENTS_THUNK:
        return { ...state, dataRoads: action.payload.data, isLoading: false };
      case SEARCH_INCIDENTS_SUCCESS:
        return { ...state, dataRoads: action.payload.data.data, isLoading: false };
      case SEARCH_INCIDENTS_BY_DATE:
        return { ...state, dataRoads: action.payload.data.data, isLoading: false };
      case SEARCH_INCIDENTS_BY_ID:
        return { ...state, dataRoads: action.payload.data.data, isLoading: false };
      default:
        return state;
    }
};  
