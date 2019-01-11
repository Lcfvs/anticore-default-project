import {anticore} from 'anticore'
import {one} from 'anticore/dom/query/one'
import {before} from 'anticore/dom/tree/before'

anticore.on('.default', function(element, next) {
  loaded && replace(element, one('main'))
  next()
})
