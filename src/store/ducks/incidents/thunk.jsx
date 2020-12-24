import { addDataRoads, searchDataIncidents, searchDataIncidentsByDate, searchDataIncidentsById } from '.';
import incidents from '../../../service/incidents';

const getDataIncidents = (page) => {
    return dispatch =>
      incidents
        .getIncidents(page)
        .then(data => {
            if(data !== null && data !== undefined){
                dispatch(addDataRoads(data));
                return true;
            }
            return false;
        }).catch(err => err);
};

const getDataIncidentsByDescription = (description) => {
    return dispatch =>
      incidents
        .getIncidentsByDescription(description)
        .then(data => {
            if(data !== null && data !== undefined){
                dispatch(searchDataIncidents(data));
                return true;
            }
            return false;
        }).catch(err => err);
};

const getDataIncidentsByDate = (startDate, endDate) => {
    return dispatch =>
      incidents
        .getIncidentsByDate(startDate, endDate)
        .then(data => {
            if(data !== null && data !== undefined){
                dispatch(searchDataIncidentsByDate(data));
                return true;
            }
            return false;
        }).catch(err => err);
};

const getDataIncidentsById = (id) => {
    return dispatch =>
      incidents
        .getIncidentsById(id)
        .then(data => {
            if(data !== null && data !== undefined){
                dispatch(searchDataIncidentsById(data));
                return true;
            }
            return false;
        }).catch(err => err);
};
  
export {getDataIncidents, getDataIncidentsByDescription, getDataIncidentsByDate, getDataIncidentsById};
  
