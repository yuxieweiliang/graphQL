import mongoose, { Schema } from 'mongoose';
const UserSchema = new Schema({

  id: {type: Schema.Types.ObjectId, ref: 'User'},

  dates: {created: Date},

  account: {
    username: String,
    password: String
  },

  // 包含
  introduce: String,
  // 电话
  phone: String,
  // 锁定
  locked: Boolean,
  // 名字
  name: String,
  // 昵称
  nickname: String,
  // 权限
  permissions: String,
  // 网站管理员
  site_admin: String,
});



export const User = mongoose.model('User', UserSchema);

