const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { devId } = req.params;
        const { user } = req.headers;

        const loggetDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({ error: 'Dev not exists!'});
        }

        loggetDev.dislikes.push(targetDev._id);

        await loggetDev.save();

        return res.json(loggetDev);
    },
}