var node = require('../bin/www');
var request = require('supertest');
jasmine.getEnv().addReporter(new jasmine.ConsoleReporter(console.log));
var _ = require('lodash');
var users = [
  { id: '1', name: 'Illya Klymov', phone: '+380504020799', role: 'Administrator' },
  { id: '2', name: 'Ivanov Ivan', phone: '+380670000002', role: 'Student', strikes: 1 },
  { id: '3', name: 'Petrov Petr', phone: '+380670000001', role: 'Support', location: 'Kiev' }
];
var usersPath = '/api/users';
var refreshAdminsPath = '/refreshAdmins';
var usersList = users;
var roles = ['Student', 'Support', 'Administrator'];
var postStudent = {
  name: 'Some Name',
  phone: '111',
  strikes: 0
};
var putStudent = {
  name: 'Aaaaaaaa',
  phone: '12341234'
};
var postStudentRole = {
  name: 'Some Name',
  phone: '111',
  role: ''
};
var postStudentRoleStudent = {
  name: 'Some Name',
  phone: '111',
  role: roles[0]
};
var postSupport = {
  name: 'Some Name Sup',
  phone: '222',
  role: roles[1],
  location: 'Odessa'
};
var postAdmin = {
  name: 'Some Name Admin',
  phone: '333',
  role: roles[2]
};
var postIncorrect = {
  name: 'Some Name Incorr',
  phone: '444',
  role: 'Incorrect'
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateID(usersArray) {
  var arrayID = [];
  var i;
  for (i = 0; i < usersArray.length; i++) {
    arrayID.push(+usersArray[i].id);
  }
  var max = Math.max.apply(Math, arrayID);
  return ++max;
};

describe('A - positive POST-PUT-DELETE student', function() {
  var newUserID;
  var newUserGet;

  it('1 - POST STUDENT', function (done) {
    request(node)
        .post(usersPath)
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(postStudent))
        .end(function (err, res) {
          expect(res.statusCode).toEqual(200);
          expect(res.headers['content-type']).toBeDefined();
          expect(res.headers['content-type']).toEqual('application/json');
          expect(res.body.id).toBeDefined();
          expect(res.body.id).toMatch(/\d+/);
          newUserID = res.body.id;
          done();
        });
    request(node)
        .get(usersPath)
        .set('Content-Type', 'application/json')
        .end(function (err, res) {
          expect(res.statusCode).toEqual(200);
          expect(res.body).toBeDefined();
          _.result(_.find(res.body, function (chr) {
            if (chr.id === newUserID) {
              newUserGet = chr;
            }
          }), 'id');
          expect(newUserID).toEqual(newUserGet.id);
          expect(newUserGet.role).toEqual(roles[0]);
          expect(newUserGet.name).toEqual(postStudent.name);
          expect(newUserGet.phone).toEqual(postStudent.phone);
          done();
        });
  });

  it('2 - PUT STUDENT', function (done) {
    var newUserGet2;
    newUserGet.name = putStudent.name;
    newUserGet.phone = putStudent.phone;
    request(node)
        .put(usersPath + '/' + newUserID)
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(newUserGet))
        .end(function (err, res) {
          expect(res.statusCode).toEqual(204 || 200);
          expect(res.headers['content-type']).toBeDefined();
          expect(res.headers['content-type']).toEqual('application/json');
          done();
        });
    request(node)
        .get(usersPath)
        .set('Content-Type', 'application/json')
        .end(function (err, res) {
          expect(res.statusCode).toEqual(200);
          expect(res.body).toBeDefined();
          _.result(_.find(res.body, function (chr) {
            if (chr.id === newUserID) {
              newUserGet2 = chr;
            }
          }), 'id');
          expect(newUserGet2.name).toEqual(newUserGet.name);
          expect(newUserGet2.phone).toEqual(newUserGet.phone);
          expect(newUserGet2.role).toEqual(roles[0]);
          done();
        });
  });

  it('3 - DELETE STUDENT', function (done) {
    var newUserGet3;
    request(node)
        .delete(usersPath + '/' + newUserID)
        .set('Content-Type', 'application/json')
        .end(function (err, res) {
          expect(res.statusCode).toEqual(204);
          expect(res.headers['content-type']).toBeDefined();
          expect(res.headers['content-type']).toEqual('application/json');
          done();
        });
    request(node)
        .get(usersPath)
        .set('Content-Type', 'application/json')
        .end(function (err, res) {
          expect(res.statusCode).toEqual(200);
          expect(res.body).toBeDefined();
          _.result(_.find(res.body, function (chr) {
            if (chr.id === newUserID) {
              newUserGet3 = chr;
            } else {
              newUserGet3 = undefined;
            }
          }), 'id');
          expect(newUserGet3).toBeUndefined();
          done();
        });
  });
});
