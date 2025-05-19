import express from "express";
import { connectDB } from "./config/db.js";
import { addFood, listFood, removeFood } from "./controllers/foodController.js";
import cors from "cors";

//app config
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

// db connection
connectDB();

app.get("/api", (req, res) => {
    res.send("<h1>API is running...</h1>");
});

app.get("/api/foods/all", listFood);
app.post("/api/foods/add", addFood);
app.delete("/api/foods/remove/:id", removeFood);


app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});