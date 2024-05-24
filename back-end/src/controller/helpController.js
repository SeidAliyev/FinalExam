const express = require("express")
const Help = require("../models/helpModels") // new
const router = express.Router()

// Get all posts
const getAllHelp = async (req, res) => {
	const posts = await Help.find()
	res.send(posts)
}
const postHelp = async (req, res) => {
	const post = new Help({
		title: req.body.title,
		content: req.body.content,
		image: req.body.image,
	})
	await post.save()
	res.send(post)
}
const getHelpById = async (req, res) => {
	try {
		const post = await Help.findOne({ _id: req.params.id })
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
}
const deleteHelp = async (req, res) => {
	try {
		await Help.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
}

module.exports = {getAllHelp,postHelp,getHelpById,deleteHelp}