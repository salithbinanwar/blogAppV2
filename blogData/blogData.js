const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Blogdata = require('../Schemas/blogDataSchema');

// get data
router.get('/', async (req, res) => {
    try {
        const data = await Blogdata.find()
        res.status(200).json({
            data
        })
    } catch (err) {
        console.log(err);
    }
})

// post data
router.post('/', async (req, res) => {
    const newBlogdata = new Blogdata(req.body);
    console.log(newBlogdata)
    await newBlogdata.save((err) => {
        if (err) {
            console.log(err)
            res.status(500).json({
                error: 'there was a server side error'
            })
        } else {
            console.log(newBlogdata)
            res.status(200).json({
                message: 'data inserted successfully'
            })

        }
    })
})

// delete data by id 
router.delete('/:id', async (req, res) => {
    await Blogdata.deleteOne({
        _id: req.params.id
    }, (err) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                error: 'There was an server side error'
            })
        } else {
            res.status(200).json({
                message: 'Data deleted successfully'
            })
        }
    }
    )
})

// delete all 
router.delete('/allDelete', async (req, res) => {
    const allPosts = await Blogdata.deleteMany({

    },
        (err) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    error: 'there was an error deleting'
                })
            } else {
                res.status(200).json({
                    message: 'all deleted'
                })
            }
        })
})



// search string
// router.post('/search', async (req, res) => {
//     const title = req.body.title;
//     res.json({ title })
// })



// find by id
router.get("/:id", async (req, res) => {
    await Blogdata.find({
        _id: req.params.id
    }, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                error: 'there was an server side error'
            });
        } else {
            res.status(200).json({
                result: data,
                message: 'success'
            })
        }
    });
})


module.exports = router;