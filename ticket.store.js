import Ticket from 'models/analytics/ticket.model';
import tableauService from 'services/tableau/tableau-auth.service';

const { getTableauUsers } = tableauService;

export default new Ticket({
  read: getTableauUsers,
});