const { city } = require("../models/index");

class CityRepository {
    
    async createCity({ name }) {    // {name = "New Delhi"}
        try {
            const City = await city.create({ 
                name
            })
            return City;
        } catch (error) {
            console.error("Something went wrong at repository layer", error);
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
            return true;
        } catch (error) {
            console.error("Something went wrong at repository layer", error);
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            const City = await city.update(data, {
                where: {
                    id: cityId
                }
            })
            return City;
        } catch (error) {
            console.error("Something went wrong at repository layer", error);
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const City = await city.findByPk(cityId);
            return City;
        } catch (error) {
            console.error("Something went wrong at repository layer", error);
            throw {error};
        }
    }

}

module.exports = CityRepository;