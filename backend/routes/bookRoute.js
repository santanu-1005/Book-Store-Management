const express = require('express');
const bookItem = require('../models/bookModel');

const router = express.Router();

router.get('/', async(req, res)=>{
    try{
        const data = await bookItem.find();
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
});

router.post('/', async(req, res)=>{
    try{
        const data = req.body
        const newBook = new bookItem(data);
        const saveBook = await newBook.save();
        console.log('Data Saved');
        res.status(200).json(saveBook);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }
});

router.get('/:id', async(req, res)=>{
    try{
        const bookId = req.params.id;
        const data = await bookItem.findById(bookId);
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
});

router.put('/:id', async (req, res)=>{
    try{
        const bookId = req.params.id;
        const updateBookData = req.body;
        
        const response = await bookItem.findByIdAndUpdate(bookId, updateBookData, {
            new: true,
            numValidators: true,
        });

        if(!response){
            return res.status(404).json({error: 'person not found'});
        }

        console.log('Data Updated');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});      
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const bookId = req.params.id;
        const response = await bookItem.findByIdAndDelete(bookId);

        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }

        console.log('Data Deleted');
        res.status(200).json({message: "Book Deleted Successfully"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }
});

module.exports = router;