# Welcome to Flights Service

## Project setup
- clone the project on your local.
- Execute `npm install` on the same path as of your root directory of the downloaded project.
- Create a `.env` file in the root directory and add the following environment variable.
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the folloeing piece of json.
```
    {
        "development": {
            "username": <YOUR_DB_LOGIN_NAME>,
            "password": <YOUR_DB_PASSWORD>,
            "database": "Flight_Search_DB",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
    }

```    

```
- Once you've added your db config as listed above, go to the `src` folder from your terminal and execute `npx sequelize db:create` and then execute

`npx sequelize db:migrate`
```

## DB Design
 - Airplane Table 
 - Flight 
 - Airport
 - City

 - A flight belong to an airplanes but one airplane can be used in multiple flights.
 - A city has many airports but one airport belongs to a city.
 - One airportcan have many flights, but a flight belong to one airport.  


## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at 
    Relationship -> City has many airports and airport belong to a city (one to many).

```
    npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```

### for seeding data

```
    npx sequelize seed:generate --name add-airports
```