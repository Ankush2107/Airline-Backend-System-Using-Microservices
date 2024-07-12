const { city } = require("../models/index");

class CityRepository {
    
    async createCity({ name }) {    // {name = "New Delhi"}
        try {
            const city = await city.create({ 
                name
            })
            return city;
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
            const city = await city.update(data, {
                where: {
                    id: cityId
                }
            })
            return city;
        } catch (error) {
            console.error("Something went wrong at repository layer", error);
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await city.findByPk(cityId);
            return city;
        } catch (error) {
            console.error("Something went wrong at repository layer", error);
            throw {error};
        }
    }

}

module.exports = CityRepository;