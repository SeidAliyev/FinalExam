const express = require("express")
const mongoose = require("mongoose") // new

// Connect to MongoDB database
mongoose
	.connect("mongodb+srv://said:said12@cluster0.rpvry8o.mongodb.net/help", { useNewUrlParser: true })
	.then(() => {
		console.log("my db");
	})