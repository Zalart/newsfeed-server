const Publication = require('../models/publication');
const Tag = require('../models/tag');
const Category = require('../models/category');

// publication CRUD
exports.addPublication = (req, res) => {
    const {title, teaser, content, category, creatorId} = req.body;
    Publication.create({
        title,
        teaser,
        content,
        category,
        creatorId,
    })
        .then(() => {
            res.status(201).json({message: 'Publication created'})
        })
        .catch(error => console.log(error))
}

exports.updatePublication = (req, res) => {
    const {title, date, teaser, content, active} = req.body;
    const publicationId = req.params.publicationId;
    Publication.update(
        {
            title,
            date,
            teaser,
            content,
            active
        },
        {
            where: {
                id: publicationId
            }
        })
        .then(result => {
            res.status(200).json({message: 'Publication updated'})
            console.log(result)
        })
        .catch(error => console.log(error))
}

exports.deletePublication = (req, res) => {
    const publicationId = req.params.publicationId;
    Publication.destroy({
        where: {
            id: publicationId
        }
    })
        .then(() => {
            res.status(200).json({message: 'Publication deleted'})
        })
        .catch(error => console.log(error))
}

// tag CRUD
exports.addTag = (req, res) => {
    const {title} = req.body;
    Tag.create({
        title
    }).then(() => {
        res.status(201).json({message: 'Tag created'})
    })
        .catch(error => console.log(error))
}

exports.updateTag = (req, res) => {
    const {title} = req.body;
    const tagId = req.params.tagId;
    Tag.update(
        {title: title},
        {
            where: {
                id: tagId
            }
        })
        .then(result => {
            res.status(200).json({message: 'Tag updated'})
            console.log(result)
        })
        .catch(error => console.log(error))
}

exports.deleteTag = (req, res) => {
    const tagId = req.params.tagId;
    Tag.destroy({
        where: {
            id: tagId
        }
    })
        .then(() => {
            res.status(200).json({message: 'Tag deleted'})
        })
        .catch(error => console.log(error))
}

// category CRUD
exports.addCategory = (req, res) => {
    const {title} = req.body;
    Category.create({
        title
    }).then(() => {
        res.status(201).json({message: 'Category created'})
    })
        .catch(error => console.log(error))
}

exports.updateCategory = (req, res) => {
    const {title} = req.body;
    const categoryId = req.params.categoryId;
    Category.update(
        {title: title},
        {
            where: {
                id: categoryId
            }
        })
        .then(result => {
            res.status(200).json({message: 'Category updated'})
            console.log(result)
        })
        .catch(error => console.log(error))
}

exports.deleteCategory = (req, res) => {
    const categoryId = req.params.categoryId;
    Category.destroy({
        where: {
            id: categoryId
        }
    })
        .then(() => {
            res.status(200).json({message: 'Category deleted'})
        })
        .catch(error => console.log(error))
}
