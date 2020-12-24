import React, { useState, useEffect } from 'react';
import { Input, Space, DatePicker, Button, List } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {getDataIncidents, getDataIncidentsByDescription, getDataIncidentsByDate} from '../../store/ducks/incidents/thunk';
import { Link } from "react-router-dom";
import Loading from '../loading';
import Error from '../error';

import './index.css';
import 'antd/dist/antd.css';

const { Search } = Input;
const { RangePicker } = DatePicker;

const SearchComponent = () =>  {
    const [load, setLoad] = useState(true);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const dispatch = useDispatch();
    const store = useSelector(state => state.incidentsReducer);

    useEffect(() => {
        async function loadData() {
            try {
                dispatch(getDataIncidents(page)).then(response =>
                    response !== false ? setLoad(false) : setLoad(true),
            );
            } catch (e) {
                return (
                    <Error />
                );
            }
        }
        loadData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleSearchInputChanges = event => {
        setSearchText(event.target.value);
    }

    const resetInputField = () => {
        setSearchText("");
    }

    const jsDateToEpoch = (value) => {
        let date = new Date(value);
        return (date.getTime() - date.getMilliseconds()) / 1000;
    }

    const handleOnChangeDatePick = (dates, dateStrings) => {
        setStartDate(jsDateToEpoch(dateStrings[0]));
        setEndDate(jsDateToEpoch(dateStrings[1]));
    }

    const onSearchByDate = () => {
        async function loadDataByDate() {
            setLoad(true);
            try {
                dispatch(getDataIncidentsByDate(startDate, endDate)).then(response =>
                    response !== false ? setLoad(false) : setLoad(true));
            } catch(e) {
                return (
                    <Error />
                );
            }
        }
        loadDataByDate();
    }

    const onSearch = (value) => {
        async function loadDataByDescription() {
            setLoad(true);            
            try {
                dispatch(getDataIncidentsByDescription(value)).then(response =>
                    response !== false ? setLoad(false) : setLoad(true));
                resetInputField();
            } catch(e) {
                return (
                    <Error />
                );
            }
        }
        loadDataByDescription();
    }

    return (
        <div>
            <div className="header_search">
                <Search
                    className="input-search"
                    placeholder="Search case descriptions"
                    onChange={handleSearchInputChanges}
                    value={searchText}
                    onSearch={onSearch} enterButton
                />

                <Space direction="vertical" size={12}>
                    <RangePicker 
                        showTime
                        onChange={handleOnChangeDatePick}
                    />
                </Space>

                <Button 
                    className="button_search_date"
                    onClick={onSearchByDate}>Search by Date</Button>
                <div className="result_search__total">
                    <h2>Total: {store.dataRoads.incidents !== undefined ? store.dataRoads.incidents.length : 0}</h2>
                </div>
            </div>
            {load ? (
                <Loading visible={load} />
            ) : (
                <div className="result_search">
                    <div className="result_search__list">
                        <List
                            itemLayout="horizontal"
                            dataSource={store.dataRoads.incidents}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<img src={item.media.image_url} alt="" />}
                                        title={<Link to={`/details/${item.id}`}>{item.title}</Link>}
                                        description={item.description}
                                    />
                                </List.Item>
                            )}
                            pagination={{
                                onChange: page => {
                                    setPage(page);
                                },
                                pageSize: 10
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchComponent;
