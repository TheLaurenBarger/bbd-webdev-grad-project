var Connection = require('tedious').Connection;
var Request = require('tedious').Request;


/*
server: bbd-learning-grad.database.windows.net
db: bbd-learning
username: grads
password: zC0KY*^0hZ
*/
// Create connection to database
var config =
{
    authentication: {
        options: {
            userName: 'grads',
            password: 'zC0KY*^0hZ'
        },
        type: 'default'
    },
    server: 'bbd-learning-grad.database.windows.net',
    options:
    {
        database: 'bbd-learning',
        encrypt: true
    }
}
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err)
    {
        if (err)
        {
            console.log(err)
        }
        else
        {
            queryDatabase()
        }
    }
);

function queryDatabase()
{
    console.log('Reading rows from the Table...');

    // Read all rows from table
    var request = new Request(
        "Select Name FROM dbo.Courses ",
        function(err, rowCount, rows)
        {
            console.log(rowCount + ' row(s) returned');
            process.exit();
        }
    );

    request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);
}
