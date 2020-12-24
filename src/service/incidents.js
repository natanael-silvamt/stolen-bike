import api from './services';

export default {
    async getIncidents(page) {
        return api.get(`/incidents?proximity=45.521728%2C-122.67326&proximity_square=100`).then((response) => response.data).catch((err) => err);
    },

    async getIncidentsByDescription(description) {
        return api.get(`/incidents?proximity=45.521728%2C-122.67326&proximity_square=100&query=${description}`);
    },

    async getIncidentsByDate(startDate, endDate) {
        return api.get(`/incidents?occurred_before=${startDate}&occurred_after=${endDate}&proximity=45.521728%2C-122.67326&proximity_square=100`);
    },

    async getIncidentsById(id) {
        return api.get(`/incidents/${id}`);
    }
}

