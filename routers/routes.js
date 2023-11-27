const ex = require('express');
const cars = require('../models/model');
const router = ex.Router();

//Creating the routes

//Get all the cars
router.get("/", async (req,resp)=>{
try {
    const a = await cars.find()
    resp.json(a);
    
} catch (error) {
    resp.json(error)
}
})

//Get Single car
router.get("/:carId", async (req, resp) => {
    const carId = req.params.carId;
    try {
        const b = await cars.findById(carId);
        resp.json(b);
    } catch (error) {
        resp.json(error);
    }
});

//Create a new car
router.post("/",async (req,resp)=>{
    try {
        const newcar = await cars.create(req.body);
        resp.status(201).json(newcar)
    } catch (error) {
        resp.status(500).json({ error: "Internal Server Error" });
    }    
})

//Delete a car
router.delete("/:carId", async (req,resp)=>{
    try {
        await cars.deleteOne({"_id": req.params.carId});
        resp.status(200).json({
            message: "Deleted Successfully..!!"
        });
    } catch (error) {
        resp.status(500).json(error);
    }

})

//Update a Car
router.put("/:carId",async (req,resp)=>{
    const carId = req.params.carId
    try {
        const update = await cars.updateOne(
            {
                "_id": carId
            },
            req.body
        );
        resp.json(update)
        
    } catch (error) {
        resp.status(500).json(error)
    }
});

module.exports = router;