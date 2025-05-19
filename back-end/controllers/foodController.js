import fs from 'fs';
import foodModel from "../models/foodModel.js";

// add food item - POST
const addFood = async (req, res) => {

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image,
    });

    try {
        await food.save();
        res.json({
            success: true,
            message: "Food Added",
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error adding Food",
        })
    }
}

// all food list  - GET
const listFood = async (req, res) => {

    try {
        const foods = await foodModel.find({})
        res.json({
            success: true,
            data: foods,
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        })
    }
}

// remove food item - DELETE
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }

    await foodModel.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error deleting food" });
  }
}

export { addFood, listFood, removeFood };