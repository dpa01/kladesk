import express from "express";

const route = express.Router();

route.get("/", (req,res) => (
    res.send("Hello Arsya")
))

export default route