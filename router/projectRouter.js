const express = require('express')

const router = express.Router();

const Projects = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
    Projects.get()
        .then( action => {
            res.status(200).json(action);
        })
        .catch( error => {
            console.log(error)
            res.status(500).json({ message: 'There was an error retreiving the list.'})
        })
})

router.get('/:id', (req, res) => {
    Projects.getProjectActions(req.params.id)
        .then( action => {
            res.status(200).json(action);
        })
        .catch( error => {
            console.log(error)
            res.status(500).json({ message: "Could not find actions of id."})
        })
})

router.post('/', (req, res) => {
    Projects.insert(req.body)
        .then( action => {
            res.status(201).json(action);
        })
        .catch( error => {
            console.log(error)
            res.status(500).json({ message: "Unable to add new project."})
        })
})

router.put('/:id', (req, res) => {
    Projects.update(req.params.id, req.body)
        .then( action => {
            res.status(201).json(action)
        })
        .catch( error => {
            console.log(error)
            res.status(500).json({ message: "Could not update."})
        })
})

router.delete('/:id', (req, res) => {
    Projects.remove(req.params.id)
        .then( action => {
            res.status(200).json(action);
        })
        .catch( error => {
            console.log(error)
            res.status(500).json({ message: "Was unable to remove from database."})
        })
})

module.exports = router;