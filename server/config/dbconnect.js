const { default: mongoose } = require("mongoose");
const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOODB_URI);
    if (conn.connection.readyState === 1)
      console.log("SUCCESSFULLY");
    else console.log("DB CONNECTING");
  } catch (e) {
    console.log("DB CONNECT FAIL");
    throw new Error(e);
  }
};
module.exports = dbConnect;
