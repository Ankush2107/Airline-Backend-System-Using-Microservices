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

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.error("Something went wrong at repository layer", error);
            throw {error};
        }
    }

    async getAllFlights() {
        try {
            const flight = await Flights.findAll();
            return flight;
        } catch (error) {
            console.error("Something went wrong at repository layer", error);
            throw {error};
        }
    }
}

module.exports = FlightRepository;