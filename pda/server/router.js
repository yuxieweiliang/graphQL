import React from 'react';
import Router from 'koa-router';
import ReactServer from 'react-dom/server';
import Home from '../src/home'
import Products from '../src/products';
import Login from '../src/login';
import Register from '../src/register';
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

  console.log(com.js)
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

router.get('/login', async function(ctx) {
  const domRender = ReactServer.renderToString(<Login number="fdsafdsa"/>);
  if(com.js.indexOf('/login.build.js') < 0) {
    com.js.push('/login.build.js');
  }
  await ctx.render('index', {
    css: ['/login.css'],
    script: com.js,
    json: JSON.stringify(domRender)
  })
});

router.get('/register', async function(ctx) {
  const domRender = ReactServer.renderToString(<Register number="fdsafdsa"/>);
  if(com.js.indexOf('/register.build.js') < 0) {
    com.js.push('/register.build.js');
  }
  await ctx.render('index', {
    css: ['/register.css'],
    script: com.js,
    json: JSON.stringify(domRender)
  })
});

export default router