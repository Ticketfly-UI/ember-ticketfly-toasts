import Ember from 'ember';

export default Ember.Controller.extend({
  toast: Ember.inject.service('tf-toast-service'),

  actions: {
    onClick() {
      this.get('toast').success();
    }
  }
});
