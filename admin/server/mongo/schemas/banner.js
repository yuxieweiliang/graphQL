import mongoose, { Schema } from 'mongoose';
const BannerSchema = new Schema({
  id: Schema.Types.ObjectId,
  dates: {created: { type: Date, default: Date.now }},
  // 位置
  url: String,

  // 名字
  name: String,

});



export const Banner = mongoose.model('Banner', BannerSchema);

