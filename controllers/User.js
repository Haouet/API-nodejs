const User = require('../models/user');

// Get all users
exports.getAllUsers = async(req,res,next) =>{
    try{   
        await User.find({}).then((result) => {
            res.send(result);
             });
        } catch(err) {
    
            console.log(err);
        }
       next();
};
// Add user
exports.addUser = async(req,res,next) =>{
   
    var user = new User({
        age: req.body.age,
        name: req.body.name,
        email : req.body.email
             
       
    });
    await user.save().then(data => {
          return res.status(201).json({ success: true, msg: 'Successful created new Person', data:data });  //creation successfull
        }).catch(err => {
          return res.status(403).json({ err: err });
        });
        next();
}
//delete User
exports.deleteUser = (req, res, next) => {
    User.findOneAndDelete({_id: req.params.id }).then(
    () => {
      res.status(201).json({
        message: 'User Deleted !'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );

}

// update User updateUser
exports.updateUser = (req, res, next) => {
  
    let user = new User({
        age: req.body.age,
        name: req.body.name,
        email : req.body.email
    });
    
    User.updateOne({ _id: req.params.id }, req.body).then(
        (newPerson) => {
            res.status(201).json({
                message: 'User updated successfully!',
                person: newPerson
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
  };
  