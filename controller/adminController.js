const Murid = require('../models/murid')
const mongoose = require('mongoose')
// class adminController(){}
exports.index = (req,res) => {
	res.render("index")	
}

exports.dataMurid = async (req,res) => {
	const data = await Murid.find();
	res.render('data_murid', {
		data
	})
	console.log(data)
}

exports.addMurid = async (req,res) =>{
	res.render('add_murid')
}

exports.saveMurid = async (req, res) => {
	const murid = new Murid(req.body);
	await murid.save();
	res.redirect('/data-murid');
}

exports.editMurid = async(req,res) => {
	const data = await Murid.findById(req.params.id);
	res.render('edit_murid', {
		data
	})
}

exports.updateMurid = async(req,res) => {
	const { id } = req.params;
	await Murid.update({_id: id}, req.body);
  	res.redirect('/data-murid');
}

exports.deleteMurid = async(req,res) => {
	let { id } = req.params;
  	await Murid.remove({_id: id});
  	res.redirect('/data-murid');
}

exports.login = (req,res) => {
	let message =  "";
	res.render("login",{ message : message })
}

exports.proses = async(req,res) => {
	// let data = req.body
	// console.log(data)
	// res.send(data)

	let { username, password } = req.body;

	await User.findOne({
	  username: username,
	  password: password
	}, (err, doc) => {
	  if (err) {
		res.status(500)
		res.json({
		  'status': 500,
		  'message': err,
		})
	  }
  
	  if (doc == null) {
		res.status(404)
		res.json({
		  'status': 404,
		  'message': 'User not found',
		})
	  } else {
		
	  }
  
	}).lean()
}

exports.listMurid = async (req,res) => {
	const data = await Murid.find();
	res.send(JSON.stringify({"status": 200, "error": null, "response": data}));
}

exports.detailMurid = async (req,res) => {
	const data = await Murid.findById(req.params.id);
	res.send(JSON.stringify({"status": 200, "error": null, "response": data}));
}

exports.tambahMurid = async (req, res) => {
	const murid = new Murid(req.body);
	const status = await murid.save();
	res.send(JSON.stringify({"status": 200, "error": null, "response": status}));
}

exports.ubahMurid = async(req,res) => {
	const { id } = req.params;
	const status = await Murid.update({_id: id}, req.body);
	res.send(JSON.stringify({"status": 200, "error": null, "response": status}));
}

exports.hapusMurid = async(req,res) => {
	let { id } = req.params;
	const status = await Murid.remove({_id: id});
	res.send(JSON.stringify({"status": 200, "error": null, "response": status}));
}