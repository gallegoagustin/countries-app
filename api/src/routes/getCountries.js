const { Country } = require('../db');
const { Op } = require('sequelize');
const { loadCountriesToDb } = require('../utils/loadCountriesToDb');
const { dbParser } = require('../utils/dbParser');


module.exports = async(req, res) => {
    await loadCountriesToDb();
    
    let queryParam = req.query.name;

    if(queryParam) {

        const parsedQueryParam = dbParser(queryParam);
        
        let match = await Country.findAll({
            where: {
                name: {
                    [Op.substring]: queryParam
                }
            }
        })
        
        let match2 = await Country.findAll({
                where: {
                    name: {
                        [Op.substring]: parsedQueryParam
                    }
                }
        })

        match = match.concat(match2);

        if(!match.length) {
            return res.json([])
        } else {
            return res.json(match);
        }
    }

    const match = await Country.findAll();

    return res.json(match);
}