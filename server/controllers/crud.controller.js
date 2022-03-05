const User = require('../models/crud');

const crudCtrl = {};

crudCtrl.getUsers =async (req, res) => {
   const users = await User.find();
   res.json(users);
  
}

crudCtrl.createUser= async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({
        'status': 'Usuario guardado'
    })

}

crudCtrl.getUser= async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);

}

crudCtrl.editUser= async (req, res) => {
    const { id } = req.params;
    const user ={
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary

    };
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({status: 'Usuerio actualizado'})
}
crudCtrl.deleteUser= function(){
    
}
module.exports = crudCtrl;