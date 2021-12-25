'use strict';
var User = require('../models/user');
const findMostRepeatedWord = require('../models/func');
var readTextFile = require('../models/func');
const user = require('../models/user');
const Users = require('../models/users');




class UsersController {
  static async mainSubject(req, res) {
    let u1 = new User('1', 'i love sweets');
    let u2 = new User('2', 'sweets are not good for your health');
    let u3 = new User('3', 'sweet isnt my thing any more');
    let u = new Users('');
    u.getMessages(u1);
    u.getMessages(u2);
    u.getMessages(u3);
    console.log("test1:  using users class");
    const Func = require('../models/func');
    const f = new Func();

    const rs = f.findMostRepeatedWord(u.dataBase.join(' '));
    res.send(rs);

  }
  static async mainSubject2(req, res) {
    const Func = require('../models/func');
    const f = new Func();
    console.log("test2: rice article");
    let txt = f.readTextFile('rice.txt');
    const rs = f.findMostRepeatedWord(txt);
    res.send(rs);
  }
  static async mainSubject3(req, res) {
    let u1 = new User('1', 'i love sweets');
    let u2 = new User('2', 'sweets are not good for your health');
    let u3 = new User('3', 'sweet isnt my thing any more');
    let u4 = new User('4', 'Omicron set to be dominant corona variant in Europe by mid-January');
    let u5 = new User('5', 'BREAKING: UK reports 88,376 new corona cases, d');
    let u6 = new User('6', 'An analysis of accounting data for all public and private German hospitals on a weekly basis from cw36/20 to cw36/21, shows a strong signal for Corona vaccine induce');
    let u7 = new User('7', '613 patients test positive for corona in Tamil Nadu today ');
    let u8 = new User('8', 'The risk of infection of the Corona to #OmicronVariant is increasing rapidly. ');
    let u9 = new User('9', 'corona isnt over ');
    let u10 = new User('10', 'Really... in the media wrestling ring.');
    const Func = require('../models/func');
    const f = new Func()
    const txt = f.readTextFile('usersData.txt');
    const rs = f.findMostRepeatedWord(txt);
    res.send(rs);
  }
  
  
}
module.exports = UsersController;

