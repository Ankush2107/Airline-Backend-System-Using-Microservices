const { FlightRepository, AirplaneRepository } = require("../repository/index");
const  { compareTime }  = require("../utils/helper");
class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightsRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {error: 'Arrival time cannot be less than departure time'}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightsRepository.createFlight({
                ...data, totalSeats:  airplane.capacity 
            })
            return flight;
        } catch (error) {
            console.error("Something went wrong at service layer", error);
            throw {error};
        }
    }

    async getAllFlightData(data) {
        try {
            const flights = await this.flightsRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.error("Something went wrong at service layer", error);
            throw {error};
        }
    }
 
} 

module.exports = FlightService;


/**
 * flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price
 * totalSeats   -> airplane
*/