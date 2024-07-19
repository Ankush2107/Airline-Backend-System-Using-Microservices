const { Flights } = require("../models/index");

class FlightRepository {
    async createFlight(data) {
        try {
            const flights = await Flights.create(data);
            return flights;
        } catch (error) {
            console.error("Something went wrong at repository layer", error);
            throw {error};
        }
    }
}

module.exports = FlightRepository;