(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _word = require('./word');
},{"./word":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var storage = {
    addWord: function addWord(name, translation) {
        Object.defineProperty(this, name, {
            value: new Word(name, translation),
            configurable: true,
            writable: true
        });
    },
    removeWord: function removeWord(name) {
        delete storage[name];
    }
};

var Word = exports.Word = function Word(name, translation) {
    _classCallCheck(this, Word);

    this.name = name;
    this.translation = translation;
    this.time = Date.now();
};

storage.addWord('table', 'Стіл');
storage.addWord('house', 'будинок');
console.log(storage);
storage.removeWord('house');

console.log(storage);
},{}]},{},[1]);
