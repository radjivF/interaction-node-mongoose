Interaction MongoDB (2.2) with Node.js
======================================

How to use mongoDB with mongoose 

This is a Rest Api example, this is a global example how to use Mongoose in a real case. .

Every files can work independant.

Don't forget to install the package for the REST Api:
```
npm install
```


What is Mongoose?
================

Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
Mongoose provides a straight-forward, schema-based solution to modeling your application data and includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

Testing the API using cURL
==========================

If you want to test your API before using it in a client application, you can invoke your REST services straight from a browser address bar. For example, you could try:
```
http://localhost:3000/unicorns
```
You will only be able to test your GET services that way. A more versatile solution to test RESTful services is to use cURL, a command line utility for transferring data with URL syntax.

For example, using cURL, you can test the Wine Cellar API with the following commands:

Get all unicorns:
```
curl -i -X GET http://localhost:3000/unicorns
```
Get unicorn with _id value of 5069b47aa892630aae000007 (use a value that exists in your database):

```
curl -i -X GET http://localhost:3000/unicorns/5069b47aa892630aae000007
```
Delete unicorn with _id value of 5069b47aa892630aae000007:
```
curl -i -X DELETE http://localhost:3000/unicorns/5069b47aa892630aae000007
```
Add a new unicorn:
```
curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "charlie", "status": "happy"}' http://localhost:3000/unicorns
```
Modify unicorn with _id value of 5069b47aa892630aae000007:
```
curl -i -X PUT -H 'Content-Type: application/json' -d '{"name": "charlie", "status": "happy"}' http://localhost:3000/unicorns/5069b47aa892630aae000007
```
