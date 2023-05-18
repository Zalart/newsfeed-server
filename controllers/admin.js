const Publication = require('../models/publication');

exports.addPublication = (req, res, next) => {
    const { title, teaser, content, category, creatorId } = req.body;
    Publication.create({
        title,
        teaser,
        content,
        category,
        creatorId,
    })
        .then(result => {
            res.status(201).json({message: 'Created successfully'})
        })
        .catch(error => console.log(error))
}
