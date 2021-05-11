const Profile = require('../models/Profile');
const errorHandler = require('../utils/errorHandler');

module.exports.editProfile = async function (req, res) {
  const profile = new Profile({
    image: req.body.image,
    aboutMe: req.body.aboutMe
  })
  // try {
  //   const edit = await Profile.findOneAndUpdate(
  //     {_id: req.params.id},
  //     {$set: req.body},
  //     {new: true}
  //   );
  //   res.status(200).json(edit);
  // } catch (e) {
  //     errorHandler(res, e);
  // }
}
