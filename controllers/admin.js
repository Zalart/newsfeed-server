const Publication = require('../models/publication');
const Category = require('../models/category');

exports.addPublication = (req, res) => {
    const { title, teaser, content, category, creatorId } = req.body;
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

exports.getCategories = (req, res) => {
    Category.findAll({
        attributes: ['id', 'title']
    })
        .then(result => {
            res.status(200).json({categories: result})
        })
        .catch(error => console.log(error))
}

exports.getCategory = (req,res) => {
    const categoryId = req.params.categoryId;
    Category.findByPk(categoryId)
        .then(result => {
            res.status(200).json({result})
        })
        .catch(error => console.log(error))
}

exports.addCategory = (req, res) => {
    const { title } = req.body;
    Category.create({
        title
    }) .then(() => {
        res.status(201).json({message: 'Category created'})
    })
        .catch(error => console.log(error))
}

exports.updateCategory = (req, res) => {
    const { title } = req.body;
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
