import {
  baseUrl
} from '../url/index'

import getModel from '../model/index'

export default function routes(app){
  // common
  app.post(baseUrl, (req, res) => {
    const {url} = req.db
    const {collectionName} = req.params
    getModel(url).insert(collectionName, {
      uid: req.user.uid,
      ...req.body
    })
    .then((data)=> res.json({
      code: 200,
      message: '插入成功',
      data
    }))
    .catch((err) => console.log(err))
  })

  app.get(`${baseUrl}/:id`, (req, res) => {
    const {url} = req.db
    const {id, collectionName} = req.params
    getModel(url)
    .findById(collectionName, id)
    .then((data) => res.json({
      code: 200,
      message: '获取成功',
      data
    }))
    .catch((err) => {
      console.log(error)
    })
  })

  app.get(baseUrl, (req, res) => {
    const {url, query, methods} = req.db
    const {collectionName} = req.params
    
    getModel(url).find(collectionName, {
      uid: req.user.uid, 
      ...query
    }, methods)
    .then((data) => res.json({
      code: 200,
      message: '获取成功',
      data
    }))
    .catch((err) => console.log(err))
  })

  app.put(`${baseUrl}/:_id`, (req, res) => {
    const {url} = req.db
    const {_id, collectionName} = req.params
    getModel(url)
    .updateById(collectionName, _id, {
      uid: req.user.uid,
      ...req.body
    })
    .then((data) => res.json({
      code: 200,
      message: '修改成功',
      data
    }))
    .catch((err) => console.log(error))
  })

  app.put(baseUrl, (req, res) => {
    const {url, query, methods} = req.db
    const {collectionName} = req.params
    getModel(url).update(collectionName, query, {
      uid: req.user.uid,
      ...req.body
    })
    .then((data) => res.json({
      code: 200,
      message: '修改成功',
      data
    }))
    .catch((err) => console.log(err))
  })

  app.delete(`${baseUrl}/:id`, (req, res) => {
    const {url} = req.db
    const {id, collectionName} = req.params
    getModel(url)
    .removeById(collectionName, id)
    .then((data) => res.json({
      code: 200,
      message: '删除成功',
      data
    }))
    .catch((err) => console.log(error))
  })

  app.delete(baseUrl, (req, res) => {
    const {url, query, methods} = req.db
    const {collectionName} = req.params
    getModel(url).remove(collectionName, query, req.body)
    .then((data) => res.json({
      code: 200,
      message: '删除成功',
      data
    }))
    .catch((err) => console.log(err))
  })

}