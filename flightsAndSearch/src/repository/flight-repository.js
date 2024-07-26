const { Flights } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {
  
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    // if (data.minPrice && data.minPrice) {
    //   Object.assign(filter, {
    //     [Op.and]: [
    //       { price: { [Op.lte]: data.maxPrice } },
    //       { price: { [Op.gte]: data.minPrice } },
    //     ],
    //   });
    // }
    let priceFilter = [];
    
    if(data.minPrice) {
        // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
        priceFilter.push({price: {[Op.gte]: data.minPrice}});
    }
    if(data.maxPrice) {
        // Object.assign(filter, {price: {[Op.lte]: data.maxPrice }});
        priceFilter.push({price: {[Op.lte]: data.maxPrice}});
    }
    Object.assign(filter, {[Op.and]: priceFilter});
    // Object.assign(filter, {
    //   [Op.and]: [{ price: { [Op.lte]: 7000 } }, { price: { [Op.gte]: 4000 } }],
    // });
    console.log(filter);
    return filter;
  }

  async createFlight(data) {
    try {
      const flights = await Flights.create(data);
      return flights;
    } catch (error) {
      console.error("Something went wrong at repository layer", error);
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.error("Something went wrong at repository layer", error);
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      const flightObject = this.#createFilter(filter);
      const flight = await Flights.findAll({
        where: flightObject,
      });
      return flight;
    } catch (error) {
      console.error("Something went wrong at repository layer", error);
      throw { error };
    }
  }
}

module.exports = FlightRepository;
