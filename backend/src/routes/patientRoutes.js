const router = require('express').Router();
const patientController = require('../controllers/patientController');
const { patientValidation, updatePatientValidation } = require('../middleware/patientValidation');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');

// Dashboard and Profile Routes
router.get('/dashboard', auth, patientController.getDashboardData);
router.get('/me', auth, patientController.getMyProfile);


// Appointments Routes
router.get('/appointments', auth, patientController.getAppointments);
router.post('/appointments', auth, patientController.requestAppointment);
router.put('/appointments/:id/cancel', auth, patientController.cancelAppointment);

// Prescriptions Routes
router.get('/prescriptions', auth, patientController.getPrescriptions);
router.get('/prescriptions/:id', auth, patientController.getPrescriptionById);

// Bills Routes
router.get('/bills', auth, patientController.getBills);
router.get('/bills/:id', auth, patientController.getBillById);

// Doctors List Route
router.get('/doctors', auth, patientController.getDoctors);

// Patient Profile CRUD Routes
router.post('/', auth, patientValidation, validate, patientController.create);
router.get('/', auth, patientController.getAll);
router.get('/:id', auth, patientController.getById);
router.put('/:id', auth, updatePatientValidation, validate, patientController.update);
router.delete('/:id', auth, patientController.delete);

module.exports = router;