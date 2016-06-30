const boxcar = require('./')
const shortid = require('shortid')

const header = [
  {cssClass: 'test1', id: 'test1', editorType: 'select', name: 'test 1', options: [{value: 'test', name: 'test'}, {value: 'foo', name: 'bar'}]},
  {cssClass: 'test2', id: 'test2', editorType: 'checkbox', name: 'test 2'},
  {cssClass: 'test3', id: 'test3', editorType: 'text', name: 'test 3'},
  {cssClass: 'test4', id: 'test4', editorType: 'text', name: 'test 4'},
  {cssClass: 'test5', id: 'test5', editorType: 'text', name: 'test 5'},
  {cssClass: 'test6', id: 'test6', editorType: 'text', name: 'test 6'}
]

const data = [
  {id: shortid.generate(), test1: 'test', test2: false, test3: 'a', test4: 'friend', test5: 'her', test6: 'name'},
  {id: shortid.generate(), test1: 'foo', test2: true, test3: 'cigarettes', test4: 'and', test5: 'beer', test6: 'in el sob'}
]

boxcar(document.body, {columns: header, data: data})
