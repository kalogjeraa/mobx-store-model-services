import { action, computed, observable, toJS } from 'mobx';
import { some } from 'lodash';

import userStore from 'stores/user.store';
import { TABLEAU_STATE as STATE } from 'containers/analytic/constants';

const { AUTHENTICATED, UNAUTHENTICATED } = STATE;

export default class Ticket {
  @observable users = [];

  constructor(config = {}) {
    this.read = config.read;
  }

  fetch() {
    return this.getDataAsync()
      .then((resolved = []) => this.handleChange(resolved))
      .catch(error => Promise.reject(error));
  }

  async getDataAsync() {
    const response = await this.read();
    return Promise.resolve(response);
  }

  handleChange(resolved = []) {
    if (resolved) this.set(resolved);
    return Promise.resolve();
  }

  @computed get permission() {
    const { users } = toJS(this);
    const { userId: thisUser } = userStore;
    return (some(users, ['userId', thisUser]))
      ? AUTHENTICATED : UNAUTHENTICATED;
  }

  @action set(users = []) {
    return this.users.replace(users);
  }
}
