import React from 'react';
import Router from 'koa-router';
import ReactServer from 'react-dom/server';
import Home from '../src/home'
import Products from '../src/products';
//
const router = new Router();
const com = {
  css: [],
  js: [
    '/vendors.js',
    'jquery/dist/jquery.min.js',
    'zepto/zepto.min.js',
    'hammerjs/hammer.min.js',
    'frozenui/dist/js/frozen.js',
    'aui-master/script/aui-slide.js',
    'aui-master/script/aui-popup.js'
  ]
};


router.get('/', async function(ctx) {
  const domRender = ReactServer.renderToString(<Home number="fdsafdsa"/>);
  if(com.js.indexOf('/home.build.js') < 0) {
    com.js.push('/home.build.js');
  }
  await ctx.render('index', {
    css: ['/home.css'],
    script: com.js,
    json: JSON.stringify(domRender)
  })
});

router.get('/products', async function(ctx) {
  const domRender = ReactServer.renderToString(<Products number="fdsafdsa"/>);
  if(com.js.indexOf('/products.build.js') < 0) {
    com.js.push('/products.build.js');
  }
  await ctx.render('index', {
    css: ['/products.css'],
    script: com.js,
    json: JSON.stringify(domRender)
  })
});

router.get('/enterprise', async function(ctx) {
  const domRender = ReactServer.renderToString(<Products number="fdsafdsa"/>);
  if(com.js.indexOf('/enterprise.build.js') < 0) {
    com.js.push('/enterprise.build.js');
  }
  await ctx.render('index', {
    css: ['/enterprise.css'],
    script: com.js,
    json: JSON.stringify(domRender)
  })
});

export default router