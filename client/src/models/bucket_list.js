const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')

const BucketList = function (url) {
    this.url = url
    this.request = new RequestHelper(this.url)
}

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:list-submitted', (evt) => {
    console.log(evt.detail);
    this.postListItem(evt.detail)
  })
};

BucketList.prototype.getData = function () {
  this.request.get()
    .then( (listItems) => {
      PubSub.publish('Bucket-list:date-loaded', listItems)
    })
    .catch(console.error)
};

BucketList.prototype.postListItem = function (listItem) {
  const request = new RequestHelper(this.url)
  console.log(listItem);
  request.post(listItem)
    .then((listItem) => {
      PubSub.publish('Bucket-list:date-loaded', listItem)
    })
};


module.exports = BucketList;
