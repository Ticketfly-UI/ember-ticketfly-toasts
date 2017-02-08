import Ember from 'ember';

export default Ember.Service.extend({
  // this will have all the info: action, message, which toast is active, etc.
  messages: Ember.A([
  ]),

  success() {
    this.get('messages').pushObject({message: 'Success!'});
  },

  failure() {
    this.get('messages').pushObject({message: 'Failed to save.'});
  }
});
