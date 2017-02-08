# Ember Ticketfly Toasts

This Ember addon provides the **toasts** and **toast outlet** components and the **toast service** of the Ticketfly UI library.

## Usage

#### Toast Component

The toast component renders a single toast on the page. Pass `type` and/or `message` attributes, and `onDismiss` or `onClick` actions to configure the **toast category**. You will rarely, if ever, use the `tf-toast` component, but would use the `tf-toast-service` instead.

**Template:**
```hbs
{{!-- Inline form --}}
{{tf-toast type='positive' message="Positive alert message." onClick=(action "myAction")}}

{{!--Block form--}}
{{#tf-toast type='neutral'}}Neutral alert message.{{/tf-toast}}
```

**Resulting HTML:**
```html
<div class="tf-toast tf-toast--positive">Positive alert message.</div>

<div class="tf-toast tf-toast--neutral">Neutral alert message.</div>
```

#### Toast Outlet
```hbs
{{#each flashMessages.queue as |flash|}}
  {{#flash-message flash=flash as |component flash| }}
    <div>{{flash.message}}<i class="tf-x"></i></div>
  {{/flash-message}}
{{/each}}
```
