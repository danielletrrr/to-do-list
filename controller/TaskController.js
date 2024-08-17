const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
    try {
        const tasksList = await Task.find();
        return res.render("index", { tasksList, task: null, taskToDelete: null });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const createTask = async (req, res) => {
    const task = req.body;

    if (!task) {
        return res.redirect("/");
    }

    try {
        await Task.create(task);
        return res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const getById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        const tasksList = await Task.find();
        res.render("index", { task, taskToDelete: null, tasksList });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const confirmDelete = async (req, res) => {
    try {
        const taskToDelete = await Task.findById(req.params.id);
        const tasksList = await Task.find();
        res.render("index", { taskToDelete, task: null, tasksList });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const updateOneTask = async (req, res) => {
    try {
        const task = req.body;
        await Task.updateOne({ _id: req.params.id }, task);
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const deleteOneTask = async (req, res) => {
    try {
        await Task.deleteOne({ _id: req.params.id });
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getById,
    confirmDelete,
    updateOneTask,
    deleteOneTask,
};
