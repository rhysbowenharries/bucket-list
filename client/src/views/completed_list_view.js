const PubSub = require ('../helpers/pub_sub.js')

const CompletedListView = function (container) {
  this.container = container
}

CompletedListView.prototype.bindEvents = function () {
  PubSub.subscribe('Bucket-list:date-loaded', (evt) => {
    this.render(evt.detail)
  })
};

CompletedListView.prototype.render = function (listItems) {
  this.container.innerHTML = ''
  listItems.forEach((listItem) => this.renderIndividual(listItem))


}

CompletedListView.prototype.renderIndividual = function (listItem) {
  const listItemContainer = document.createElement('div')
  listItemContainer.id = 'wish-list'

  const wish = document.createElement('h3')
  wish.textContent = listItem.item
  listItemContainer.appendChild(wish)

  this.container.appendChild(listItemContainer)
};

 module.exports = CompletedListView;
