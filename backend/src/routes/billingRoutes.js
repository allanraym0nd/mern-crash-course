const router = require('express').Router();
const billingController = require('../controllers/billingController');
const { 
  invoiceValidation, 
  paymentValidation, 
  insuranceClaimValidation 
} = require('../middleware/billingValidation');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');

// Profile creation
router.post('/create', auth, billingController.createProfile);

// Invoice routes
router.post('/invoices/:patientId', auth, invoiceValidation, validate, billingController.createInvoice);
router.get('/invoices', auth, billingController.getInvoices);
router.get('/invoices/:patientId', auth, billingController.getPatientInvoices);
router.put('/invoices/:invoiceId/payment', auth, paymentValidation, validate, billingController.processPayment);

// Insurance claim routes
router.post('/insurance-claims', auth, insuranceClaimValidation, validate, billingController.submitInsuranceClaim);
router.get('/insurance-claims', auth, billingController.getInsuranceClaims);
router.get('/insurance-claims/:patientId', auth, billingController.getPatientInsuranceClaims);

// Expense routes
router.get('/expenses', auth, billingController.getExpenses);
router.post('/expenses', auth, billingController.trackExpenses);
// Payment routes
router.get('/payments', auth, billingController.getPayments);

// Report routes
router.get('/reports', auth, billingController.getFinancialReports);

// Patient routes
router.get('/patients/all', auth, billingController.getAllPatients);

module.exports = router;