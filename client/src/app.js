const BucketListFormView = require('./views/form_view.js')
const BucketList = require('./models/bucket_list.js')
const CompletedListView = require('./views/completed_list_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const bucketListForm = document.querySelector('#bucket-list-form')
  const bucketListFormView = new BucketListFormView(bucketListForm)
  bucketListFormView.bindEvents()

  const bucketListContainer = document.querySelector("#bucket-list-container")
  const bucketListView = new CompletedListView(bucketListContainer)
  bucketListView.bindEvents()

  const url = 'http://localhost:3000/api/bucket'
  const bucketList = new BucketList(url)
  bucketList.bindEvents()
  bucketList.getData()



})
