//import $ from 'jquery';
//window.jQuery = $;
import style from './scss/main.scss';
import component from './assets/js/component';
//import Foundation from 'foundation-sites';

//import './lib/foundation-explicit-pieces';

//$(document).foundation();

function requireAll(r) {
    r.keys().forEach(r);
}

requireAll(require.context('./assets/sprite-images/', true, /\.svg$/));

component();