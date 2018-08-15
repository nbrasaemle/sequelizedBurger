const express = require("express");
var router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObj = {
            burgers: data
        };
        console.log("OBJECT: ", hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body);
    console.log("hello post?");

    burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], 
    function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update({
        devoured: req.body.devoured
        }, condition, function(result) {
        if(result.changedRows ==0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
