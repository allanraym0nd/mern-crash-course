import api from './axios';

const billingService = {
  // Test route
  test: async () => {
    try {
      const response = await api.get('/billing');
      console.log('Test response:', response);
      return response.data;
    } catch (error) {
      console.error('Test error:', error.response || error);
      throw error;
    }
  },

  // Profile management
  createProfile: async (profileData) => {
    try {
      const response = await api.post('/billing/create', profileData);
      return response.data;
    } catch (error) {
      console.error('Error creating profile:', error);
      throw error;
    }
  },

  // Invoice management
  getInvoices: async () => {
    try {
      const response = await api.get('/billing/invoices');
      return response.data;
    } catch (error) {
      console.error('Error fetching invoices:', error);
      throw error;
    }
  },

  getPatientInvoices: async (patientId) => {
    try {
      const response = await api.get(`/billing/invoices/${patientId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching patient invoices:', error);
      throw error;
    }
  },

  createInvoice: async (patientId, invoiceData) => {
    try {
      const response = await api.post(`/billing/invoices/${patientId}`, invoiceData);
      return response.data;
    } catch (error) {
      console.error('Error creating invoice:', error);
      throw error;
    }
  },

  // Payment processing
  processPayment: async (invoiceId, paymentData) => {
    try {
      const response = await api.put(`/billing/invoices/${invoiceId}/payment`, paymentData);
      return response.data;
    } catch (error) {
      console.error('Error processing payment:', error);
      throw error;
    }
  },

  getPayments: async () => {
    try {
      const response = await api.get('/billing/payments');
      return response.data;
    } catch (error) {
      console.error('Error fetching payments:', error);
      throw error;
    }
  },

  // Expense tracking
  trackExpense: async (expenseData) => {
    try {
      const response = await api.post('/billing/expenses', expenseData);
      return response.data;
    } catch (error) {
      console.error('Error tracking expense:', error);
      throw error;
    }
  },

  // Insurance claims
  submitInsuranceClaim: async (patientId, claimData) => {
    try {
      const response = await api.post(`/billing/insurance-claims/${patientId}`, claimData);
      return response.data;
    } catch (error) {
      console.error('Error submitting insurance claim:', error);
      throw error;
    }
  },

  // Financial reports
  getFinancialReports: async () => {
    try {
      const response = await api.get('/billing/reports');
      return response.data;
    } catch (error) {
      console.error('Error getting financial reports:', error);
      throw error;
    }
  }
};

export default billingService;