const TestModel = require("../schema/test");

// get all results
const getResults = async (req, res) => {
  try {
    res.send({ message: "get all result " });
  } catch (error) {
    res.send(error);
  }
};

// get particular result based on id
const getResult = async (req, res) => {
  try {
    const reqId = req.params.id;
    const query = {
      id: reqId,
    };

    const result = await TestModel.find(query);

    res.send({ message: "particular item get " });
  } catch (error) {
    console.log(error);
  }
};

// add item in database
const addItem = async (req, res) => {
  try {
    const data = { ...req.body };
    const newItem = await TestModel.create(data);

    res.send({ message: "add book in db " });
  } catch (error) {
    res.send({ error });
    console.log(error);
  }
};

// update data in database
const updateItem = async (req, res) => {
  try {
    const reqId = req.params.id;
    const data = req.body;
    const query = {
      id: reqId,
    };

    res.send({ message: "update book route " });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { getResults, getResult, addItem, updateItem };
