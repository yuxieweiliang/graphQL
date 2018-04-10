import mongoose from 'mongoose';
import './schemas'
// 连接数据库
mongoose.connect("mongodb://localhost/test");
let db = mongoose.connection;

db.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});
db.on("open", function () {
  console.log("------数据库连接成功！------");
});



export default db