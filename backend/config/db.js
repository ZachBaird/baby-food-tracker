const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch(err) {
    console.log(`${err}`.bgMagenta.underline);
    process.exit(1);
  }
};

module.exports = connectDb;
