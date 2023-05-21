const Publication = require("../models/publication");
const Tag = require("../models/tag");
const Category = require("../models/category");

// publication GETs
exports.getPublications = (req, res) => {
    Publication.findAll()
        .then(result => {
            res.status(200).json({publications: result})
        })
        .catch(error => console.log(error))
}

exports.getPublication = (req, res) => {
    const publicationId = req.params.publicationId;
    Publication.findByPk(publicationId)
        .then(result => {
            res.status(200).json({result})
        })
        .catch(error => console.log(error))
}

// tag GETs
exports.getTags = (req, res) => {
    Tag.findAll({
        attributes: ['id', 'title']
    })
        .then(result => {
            res.status(200).json({tags: result})
        })
        .catch(error => console.log(error))
}

exports.getTag = (req, res) => {
    const tagId = req.params.tagId;
    Tag.findByPk(tagId)
        .then(result => {
            res.status(200).json({result})
        })
        .catch(error => console.log(error))
}

// category GETs
exports.getCategories = (req, res) => {
    Category.findAll({
        attributes: ['id', 'title']
    })
        .then(result => {
            res.status(200).json({categories: result})
        })
        .catch(error => console.log(error))
}

exports.getCategory = (req, res) => {
    const categoryId = req.params.categoryId;
    Category.findByPk(categoryId)
        .then(result => {
            res.status(200).json({result})
        })
        .catch(error => console.log(error))
}
