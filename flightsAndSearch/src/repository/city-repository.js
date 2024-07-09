const { city } = require("../models/index");

class CityRepository {
    async createCity({ name }) {
        try {
            const City = await city.create({ name });
            return City;
        } catch (error) {
            console.error('Error creating city:', error);
            throw {error}; 
        }
    }

    async deleteCity(cityId) {
        try {
            await city.destroy({
                where: {
                    id: cityId
                }
            })
        } catch (error) {
            console.error('Error deleting city:', error);
            throw {error}; 
        }
    }
}

module.exports = CityRepository;