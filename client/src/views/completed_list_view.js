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
  console.log(listItem);
  const listItemContainer = document.createElement('div')
  listItemContainer.id = 'wish-list'

  const wish = document.createElement('h3')
  wish.textContent = listItem.item
  listItemContainer.appendChild(wish)

  this.container.appendChild(listItemContainer)

  const button = document.createElement('button')
  button.classList.add('delete-btn')
  button.value = listItem._id

  button.addEventListener('click', (evt) =>{
    // console.log("completedlistView", evt);
    PubSub.publish('CompletedListView:listItem-delete-clicked', evt.target.value)
  })

  this.container.appendChild(button)
};





 module.exports = CompletedListView;
