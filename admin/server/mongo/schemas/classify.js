import mongoose, { Schema } from 'mongoose';

const ClassifySchema = new Schema({
  // author: {id: Schema.Types.ObjectId, ref: 'user'},
  // 名字
  name:   String,
  id: Schema.Types.ObjectId,
  // 时间
  dates:   {
    // 创建
    created: { type: Date, default: Date.now },
    // 发布
    update: String
  },
  // 相关
  description: String,

});


export const Classify = mongoose.model('classifySchema', ClassifySchema);
