import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class extends Controller {
  @service router;

  @action
  refresh() {
    console.log('refresh');
    this.router.refresh();
  }
}
