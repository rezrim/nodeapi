const adminController = require('../controller/adminController')
const middleware = require('../middleware/middleware')
const Dilo = require('../models/dilo')

module.exports = app => {
	app.get('/', adminController.index)
	app.get('/data-murid', adminController.dataMurid)
	app.get('/add-murid', adminController.addMurid)
	app.post('/save-murid', adminController.saveMurid)
	app.get('/edit-murid/:id', adminController.editMurid)
	app.post('/update-murid/:id', adminController.updateMurid)
	app.get('/delete-murid/:id', adminController.deleteMurid)
    app.get('/login', adminController.login)
	app.post('/proses', middleware.validate_user, adminController.proses)
	
	//==========================Start API Murid===================================================
	app.get('/api/murid', adminController.listMurid)
	app.get('/api/murid/:id', adminController.detailMurid)
	app.post('/api/murid/', adminController.tambahMurid)
	app.put('/api/murid/:id', adminController.ubahMurid)
	app.delete('/api/murid/:id', adminController.hapusMurid)
	//==========================End API Murid=====================================================
	app.get('/api/flashsale', adminController.flashsale)
}