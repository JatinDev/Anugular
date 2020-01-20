// mongo db setup
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'MyApp1';

// Create a new MongoClient
const client = new MongoClient(url);

module.exports = {
    GetAllEmp: function (req, res) {
        client.connect(function (err) {
            assert.equal(null, err);
            const db = client.db(dbName);
            const collection = db.collection('employees');
            collection.find({}).toArray(function (err, docs) {
                assert.equal(err, null);
                console.log("Found the following records");
                res.send(docs)
            });
        });
        client.close();
    },

    GetEmp: function (req, res) {
        client.connect(function (err) {
            assert.equal(null, err);
            const db = client.db(dbName);
            const collection = db.collection('employees');
            collection.find({ _id: req.body._id }).toArray(function (err, docs) {
                assert.equal(err, null);
                console.log("Found the following records");
                res.send(docs)
            });
        });
        client.close();
    },

    InsertEmp: function (req, res) {
        client.connect(function (err) {
            assert.equal(null, err);
            const db = client.db(dbName);
            const collection = db.collection('employees');
            collection.insert([
                { name: 'Jatin Saini', desig: 'Engineer', phone: 8800249048, loc: 'HCL Noida 126' },
                { name: 'Khushi Singh', desig: 'Health Coordinator', phone: 9627584396, loc: 'HCL Noida 126' }
            ], (err, res2) => {
                if (err) res.send(err);
                else res.send('Employee Inserted');
            })
        });
        client.close();
    },

    DeleteEmp: function (req, res) {
        client.connect(function (err) {
            assert.equal(null, err);
            const db = client.db(dbName);
            const collection = db.collection('employees');
            collection.deleteOne({ id: req.body.id }, (err, res2) => {
                if (err) res.send(err);
                else res.send('Employee Removed');
            })
        });
        client.close();
    },

    UpdateEmp: function (req, res) {
        client.connect(function (err) {
            assert.equal(null, err);
            const db = client.db(dbName);
            const collection = db.collection('employees');
            collection.updateOne({ id: id }, { $set: { b: 1 } }, (err, res2) => {
                if (err) res.send(err);
                else res.send('Employee Removed');
            })
        });
        client.close();
    }
}