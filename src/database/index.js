const mongoose = require("mongoose");

class MongoDB {
  constructor() {
    console.log(process.env.MONGO_URL);
    this.connection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  }

  close() {
    this.connection.close();
  }
}

module.exports = new MongoDB().connection;
