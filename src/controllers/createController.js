const db = require("../database/models")
const { getFixtureByLeague } = require("../helpers/footballApi")

const createController = {
    newSession : async (req,res) => {
        const {id, name, year} = req.body

        const fixture = await getFixtureByLeague(id,year)
        if(fixture.errors.length > 0 || fixture.response.length === 0 ){
            res.status(200).json({
                errors: fixture.errors.length > 0 ? fixture.errors : 'no data for that league/season',
            })
        }
        // 1: creates league
        const newLeague = await db.League.create({id,year,name})
        
        // 2: creates session
        const newSession = await db.Session.create({idLeague:id})
        
        // 3: creates fixture
        res.status(200).json({fixtures:fixture.response})
    },

    newUsers: async (req,res) => {
        //comes with session id in params

        //1: creates users
        //2: creates users_sessions
        //3: creates scores
    }
}
module.exports = createController