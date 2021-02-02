import { get } from 'fe-common/services/data.service';

export default {
  getTicket() {
    return get('/analytics/trusted_ticket');
  },
  getTableauUsers() {
    return get('/analytics/tableau_users');
  },
};