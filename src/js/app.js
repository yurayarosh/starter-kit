import $ from 'jquery';
// import '@babel/polyfill';
import './lib/polyfill';
import sayHello from './lib/sayHello';
import setTouch from './components/setHTMLClassNames';
import setLazy from './components/setLazy';

$(() => {
  sayHello();
  setTouch();
  setLazy();
});
