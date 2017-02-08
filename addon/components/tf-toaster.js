import Ember from 'ember';
import layout from '../templates/components/tf-toaster';

export default Ember.Component.extend({
  layout,
  toast: Ember.inject.service('tf-toast-service'),

  actions: {
    onDismiss() {
      this.get('toast.messages').popObject();
    }
  }
});
