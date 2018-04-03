import mongoose, { Schema } from 'mongoose';
const BannerSchema = new Schema({
  id: Schema.Types.ObjectId,
  dates: {created: Date},
  // 位置
  url: String,

  // 名字
  name: String,

});



export const User = mongoose.model('Banner', BannerSchema);

