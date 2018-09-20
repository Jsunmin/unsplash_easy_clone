const mongoose = require('mongoose');
const dbUrl = 'mongodb://student:JNytCZanZaDEcTxMZyM2wsaF@ds161312.mlab.com:61312/codesplash';

module.exports = () => {
  mongoose.connect(dbUrl)
    .then(() => {console.log('mDB connected!!')})
    .catch(err => {console.error(err)});
};
