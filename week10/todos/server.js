/**
 * Created by cw on 2017-05-30.
 */
'use strict';

const express = require('express');
const mysql = require('mysql');

const app = express();

app.use('/assets', express.static('assets'));
app.use('/img', express.static('img'));

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todos'
});

dbConn.connect(function (err) {
    if (err) {
        console.log('Error to connecting to DB')
    } else {
        console.log('Connection established')
    }
});

const queryAllTodo = 'SELECT * FROM todos';
const queryDeleteTodo = 'DELETE FROM todos WHERE id = ';
const addNewTodo = "INSERT INTO todos VALUES (NULL, '";
const addNewTodoEnd = "', NULL;";

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.get('/todos', function (req, res) {
    dbConn.query(queryAllTodo, function (err, rows) {
        if (err) {
            console.log('ERROR in all todo query')
        } else {
            res.send(rows)
        }
    })
});

app.delete('/delete/:id', function (req, res) {
    let idToDelete = req.params.id;
    dbConn.query(queryDeleteTodo + idToDelete + ';', function (err, rows) {
        if (err) {
            console.log('ERROR in delete query')
        } else {
            res.send(rows)
        }
    })
});

app.get('/addTodo/:todoText', function (req, res) {
    let todoText = req.params.todoText;
    dbConn.query(addNewTodo + todoText + addNewTodoEnd);
    dbConn.query(queryAllTodo, function (err, rows) {
        if (err) {
            console.log('ERROR in all todo query')
        } else {
            res.send(rows)
        }
    })
});

app.listen(3000);