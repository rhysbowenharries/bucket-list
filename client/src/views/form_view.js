const PubSub = require('../helpers/pub_sub.js')

const FormView = function (form) {
  this.form = form
}

FormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt)
  })
};

FormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault()
  console.log(evt);
  const newListItem = this.createListItem(evt.target[0].value)
  PubSub.publish('FormView:list-submitted', newListItem)
  evt.target.reset()
};

FormView.prototype.createListItem = function (form) {
  console.log(form);
  const newListItem = {
    item: form
  }
  return newListItem

};




module.exports = FormView;
