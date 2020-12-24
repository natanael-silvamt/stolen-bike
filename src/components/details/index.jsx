import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Error from '../error';
import { getDataIncidentsById } from '../../store/ducks/incidents/thunk';
import './index.css';

export default (props) => {
    const [id] = useState(props.id);
    const dispatch = useDispatch();
    const store = useSelector(state => state.incidentsReducer);

    useEffect(() => {
        async function loadDetails() {
            try {
                dispatch(getDataIncidentsById(id));
            } catch(e){
                return (
                    <Error />
                );
            }
        }
        loadDetails();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    var incident = store.dataRoads.incident;
    
    return (
        <div className={`loading ${id ? 'hidden' : ''}`}>
            <div>
                <h2>{incident !== undefined ? incident.title : ""}</h2>
                <h4>{incident !== undefined ? incident.address : ""}</h4>
            </div>
            <div className="map_details">
                <h3>Mapa não funcionou por causa da api do google que é paga.</h3>
            </div>
            <div>
                <h2>Description Of Incident</h2>
                <h4>{incident !== undefined ? incident.description : ""}</h4>
            </div>
        </div>
    );
};
