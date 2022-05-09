const express = require('express');
const router = express.Router();
const { Todo, User, User_todo } = require('../db/models')


router.get("/:id", async (req, res) => {
    let todos;
    const userId = req.params.id;
    try {
      todos = await Todo.findAll({
        include: {
          model: User,
          as: 'Users',
          where: {
            id: userId
          }
        },
        raw: true,
        order: [
          ['createdAt', 'DESC']
        ]
      });
    } catch (error) {
      console.log(error);
    }
    res.status(200).send({ todos });
  });

  router.post("/:id", async (req, res) => {
    const userId = req.params.id;
    const { title } = req.body;
    let elem;
    try {
      elem = await Todo.create({ title, done: false });
      await User_todo.create({ user_id: userId, todo_id: elem.id });
    } catch (error) {
      console.log(error);
    }
    res.status(200).json({ elem });
  });


  router.delete("/:id", async (req, res) => {
    try {
      await Todo.destroy({ where: { id: req.params.id } });
    } catch (error) {
      return res.json({
        isDeleteSuccessful: false,
        errorMessage: "failed to delete record from database",
      });
    }
    return res.status(200).json({ isDeleteSuccessful: true, id: req.params.id });
});

router.put("/:id", async (req, res) => {
    try {
      const item = await Todo.findOne({
        where: {
          id: req.params.id
        },
        raw: true
      });
      await Todo.update(
        { done: !item.done },
        {
          where: {
            id: req.params.id,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    res.status(200).json({ id: req.params.id });
  });
  
  module.exports = router;