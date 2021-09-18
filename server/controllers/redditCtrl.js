module.exports = {

    getAll:  (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.allSubs()
        .then(subs => res.status(200).send(subs))
        .catch(err => {
            res.sendStatus(500).send(console.log(err))
        })
    },

    getOne: (req, res) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params

        dbInstance.oneSub(id)
        .then(sub => res.status(200).send(sub))
        .catch(err => {
            res.sendStatus(500).send(console.log(err))
        })
    }
}