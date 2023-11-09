const db = require('./db')

module.exports = (app) => {
    app.get('/', async (req, res) => {
        try {
            const result = await db.query('SELECT * FROM tbl_setor');
            res.json(result.rows);
        } catch(err) {
            console.log(err)
            res.status(500).send('Internal Server Error');
        }
    })
}