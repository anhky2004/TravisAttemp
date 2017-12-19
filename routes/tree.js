/**
 * Created by hoangdv on 0029, Jun, 29, 2017.
 */
let tree = require("../model/tree");

/*
 * GET /trees route to retrieve all the trees.
 */
let gettrees = (req, res) => {
    tree.find((err, trees) => {
        if (err) {
            res.send(err); // :D
            return;
        }
        res.send(trees);
    });
};

/*
 * POST /trees to save a new tree.
 */
let posttree = (req, res) => {
    let tree = req.body;
    tree.save(tree, (err, newtree) => {
        if(err) {
            res.send(err);
            return;
        }
        res.send({
            message: "tree successfully added!",
            tree: newtree
        });
    });
};

/*
 * GET /trees/:id route to retrieve a tree given its id.
 */
let gettree = (req, res) => {
    tree.findById(req.params.id, (err, tree) => {
        if(err) {
            res.send(err);
            return;
        }
        res.send({
            tree
        });
    })
};

/*
 * DELETE /trees/:id to delete a tree given its id.
 */
let deletetree = (req, res) => {
    tree.delete(req.params.id, (err, result) => {
        res.json({
            message: "tree successfully deleted!",
            result
        });
    })
};

/*
 * PUT /trees/:id to update a tree given its id
 */
let updatetree = (req, res) => {
    tree.update(req.params.id, req.body, (err, tree) => {
        if(err) {
            res.send(err);
            return;
        }
        res.send({
            message: "tree updated!",
            tree
        });
    })
};

//export all the functions
module.exports = {
    gettrees,
    posttree,
    gettree,
    deletetree,
    updatetree
};
