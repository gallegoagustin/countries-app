# COUNTRIES APP

![countries-home](https://user-images.githubusercontent.com/77341002/124470225-bc973080-dd71-11eb-8865-12b1aa78d335.png)


## About the App

This application was developed in order to improve my skills during Henry's bootcamp and applying most of technologies learned at it.

Main technologies used in this App were:

    Javascript as main language
    PostgreSQL and Sequelize for database modelling
    ExpressJS for server building
    ReactJS for front-end development
    CSS for styles definition

If you surf through the App you will be able to look for any country by name or just filtering by continent and activities or sorting by population. You can see more details about all the countries if you click at "see more" link within each card. You can also add as many activities as you want and they will be displayed at each country details sheet.

Don't forget to check out the mobile desing!

## How to use it locally

If you clone this repository you will get two folders: `api` and `client`, where are located back-end and front-end code. You must create a `.env` into `api` folder and provide the following information inside of it:

    DB_USER=PostgresUser
    DB_PASSWORD=PostgresPassword
    DB_HOST=localhost
    DB_NAME=countries
    PORT=3001

Where `PostgresUser` and `PostgresPassword` mean your personal information to connect to Postgres. `DB_NAME` and `PORT` can be modified in case it is needed.

In order to finish the set up you must create a Postgres DB named `countries` (or the same name you put into de env document), where all generated data will be located.

You can check it working at this [link](https://countries-app-sigma.vercel.app/).

Contact me if needed!

[LinkedIn](https://www.linkedin.com/in/agustin-gallego/)
