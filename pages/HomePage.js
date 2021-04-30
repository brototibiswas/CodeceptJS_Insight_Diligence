const { I } = inject();

module.exports = {

  createOrderBtn: 'Create Order',
  orderForm: '#orderDetailsForm',
  caseTableDashboard: '.ui-jqgrid-view',

  dashboardPresent() {
    I.waitForVisible(this.caseTableDashboard)
  }
}
