const axios = require('axios');

const { BookingRepository } = require('../repository/index');
const { FLIGHT_SERVICE_PATH } = require('../config/serverconfig');
const { ServiceError } = require('../utils/errors');

class BookingService {
    constructor() {
        this.bookingRepository = new BookingRepository();
    }; 

    async createBooking(data) {
        try {
            const flightId = data.flightId;
            const getFlightRequestUrl = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
            const response = await axios.get(getFlightRequestUrl);
            console.log("FROM BOOKING SERVICE", response.data.data);
            const flightData = response.data.data;
            let priceOfTheFlight = flightData.price;
            if(data.noOfSeats > flightData.totalSeats) {
                throw new ServiceError('Something went wrong in the booking process', 'Insufficient seats in flight')
            };

            // Calculating total cost of bookimg depending upon number of seats 
            const totalCost = priceOfTheFlight * data.noOfSeats;

            // Updating data by total cost
            const bookingPayload = { ...data, totalCost };
            const booking = await this.bookingRepository.create(bookingPayload);
            const updateFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightId}`;
            console.log(updateFlightRequestURL);

            // Updating totalSeats available in the flight
            await axios.patch(updateFlightRequestURL, { totalSeats: flightData.totalSeats - booking.noOfSeats });
            const finalBooking = await this.bookingRepository.update(booking.id, { status: "Booked"});
            return finalBooking;
        } catch (error) {
            if(error.name == 'RepositoryError' || error.name == 'ValidationError') {
                throw error;
            }
            throw new ServiceError();
        }
    }
}

module.exports = BookingService;