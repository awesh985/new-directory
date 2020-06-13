const express = require('express');
const joi = require("joi");

const router = express.Router();

router.get('/',(req,res)=>{res.send("hello world")});
const courses =[{id:1, name:"course1"},
{id:2, name:"course2"},
{id:3, name: "course3"}];

router.get("/api/courses", (req, res) =>{res.send(courses);});

router.get("/api/courses/:id", (req, res) =>{
	const course =courses.find(c => c.id === parseInt(req.params.id));
if (!course) res.status(404).send("the course with the given id was not found "); res.send(course);});

router.get("/api/post/:year/:month",(req,res) =>{res.send(req.params.year)});





router.post("/api/courses", (req, res) => {
	const schema = {
		name: joi.string().min(3).required()
	};
	const result = joi.validate(req.body,schema);
	if(result.error){res.status(400).send(result.error.details[0].message); return;}
	
	const course = {
	id: courses.length + 1, 
	name: req.body.name 
};
courses.push(course); res.send(course);
});





router.put("/api/courses/:id", (req , res) => {
const course =courses.find(c => c.id === parseInt(req.params.id));
if (!course) res.status(404).send("the course with the given id was not found "); res.send(course);

const schema = {
name: joi.string().min(3).required()};
const result = joi.validate(req.body,schema);
if(result.error){res.status(400).send(result.error.details[0].message); return;}
course.name = req.body.name;
res.send(course);
});



router.delete("/api/courses/:id",(req,res) =>{
const course =courses.find(c => c.id === parseInt(req.params.id));
if (!course) res.status(404).send("the course with the given id was not found "); res.send(course);
courses.index = courses. indexOf(course);
courses.splice(index , 1);
res.send(course);});

module.exports = router;
