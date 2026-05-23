export const topicContent = {
  'what-is-database': {
    title: 'What is a Database?',
    analogy: 'Think of a database like a military intelligence vault — structured, secured, and instantly retrievable. Every piece of data has a location, a purpose, and a chain of command.',
    description: 'A database is an organized collection of structured information or data, stored electronically. A Database Management System (DBMS) controls access, storage, and retrieval.',
    points: [
      'Stores data persistently on disk',
      'Allows fast querying and retrieval',
      'Enforces data integrity and constraints',
      'Supports concurrent multi-user access',
      'Provides backup and recovery mechanisms',
    ],
    sqlExample: `-- Create your first table
CREATE TABLE agents (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  rank TEXT,
  clearance_level INTEGER
);

INSERT INTO agents VALUES (1, 'Agent Zero', 'Commander', 5);
INSERT INTO agents VALUES (2, 'Agent Nova', 'Operative', 3);

SELECT * FROM agents;`,
    mongoExample: `// MongoDB collection
db.agents.insertMany([
  { id: 1, name: "Agent Zero", rank: "Commander", clearance: 5 },
  { id: 2, name: "Agent Nova", rank: "Operative", clearance: 3 }
]);

db.agents.find({});`,
    interview: [
      { q: 'What is the difference between a database and a DBMS?', a: 'A database is the actual data storage. A DBMS (like MySQL, PostgreSQL, MongoDB) is the software that manages, stores, and retrieves that data.' },
      { q: 'What are the types of databases?', a: 'Relational (SQL), Document (MongoDB), Key-Value (Redis), Column-family (Cassandra), Graph (Neo4j), Time-series (InfluxDB).' },
      { q: 'What is data integrity?', a: 'Data integrity ensures accuracy and consistency of data over its lifecycle using constraints, transactions, and validation rules.' },
    ],
    resources: {
      youtube: [
        {
                "title": "What is a Database? - freeCodeCamp",
                "url": "https://www.youtube.com/watch?v=FR4QIeZaPeM"
        }
],
      docs: [
        {
                "title": "Introduction to Databases - Oracle Docs",
                "url": "https://www.oracle.com/database/what-is-database/"
        }
],
      blogs: [
        {
                "title": "Understanding Databases - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/what-is-a-database/"
        }
]
    },
  },

  'sql-vs-nosql': {
    title: 'SQL vs NoSQL',
    analogy: 'SQL is like a rigid military grid — every unit has a fixed position. NoSQL is like a dynamic battlefield — units adapt to terrain in real time.',
    description: 'SQL databases use structured tables with fixed schemas. NoSQL databases use flexible data models like documents, key-value pairs, or graphs.',
    points: [
      'SQL: structured schema, ACID compliant, vertical scaling',
      'NoSQL: flexible schema, BASE model, horizontal scaling',
      'SQL: best for complex queries and relationships',
      'NoSQL: best for large-scale, unstructured, or rapidly changing data',
      'Both can coexist in modern architectures (polyglot persistence)',
    ],
    sqlExample: `-- SQL: Rigid structure
CREATE TABLE users (
  id INT PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT u.username, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.username;`,
    mongoExample: `// NoSQL: Flexible document
db.users.insertOne({
  username: "agent_zero",
  email: "zero@ops.io",
  profile: { bio: "Tactical specialist", skills: ["SQL", "MongoDB"] },
  orders: [{ id: 1, item: "Tactical Gear" }]
});

db.users.find({ "profile.skills": "SQL" });`,
    interview: [
      { q: 'When would you choose SQL over NoSQL?', a: 'Choose SQL when you need complex joins, strong consistency, and well-defined schemas — like financial systems or ERP.' },
      { q: 'What does BASE stand for?', a: 'Basically Available, Soft state, Eventually consistent — the NoSQL alternative to ACID.' },
      { q: 'Can you use both SQL and NoSQL in one application?', a: 'Yes — this is called polyglot persistence. Use SQL for transactional data and NoSQL for caching, sessions, or unstructured content.' },
    ],
    resources: {
      youtube: [
        {
                "title": "SQL vs NoSQL Explained - Fireship",
                "url": "https://www.youtube.com/watch?v=ZS_kXvOe90o"
        }
],
      docs: [
        {
                "title": "SQL and NoSQL Comparison - AWS Docs",
                "url": "https://aws.amazon.com/nosql/"
        }
],
      blogs: [
        {
                "title": "SQL vs NoSQL: The Ultimate Guide - Prisma",
                "url": "https://www.prisma.io/dataguide/types/relational/comparing-sql-and-nosql"
        }
]
    },
  },

  'tables-vs-collections': {
    title: 'Tables vs Collections',
    analogy: 'A SQL table is a structured data grid — like a military roster with fixed columns. A MongoDB collection is a dynamic intelligence file — each document can have different fields.',
    description: 'SQL organizes data in tables (rows + columns with fixed schema). MongoDB organizes data in collections (documents with flexible BSON/JSON structure).',
    points: [
      'Tables require predefined schema; collections do not',
      'Tables enforce data types per column; documents are flexible',
      'Both support indexing for fast lookups',
      'Collections can store nested objects and arrays natively',
      'Tables use foreign keys for relationships; documents can embed or reference',
    ],
    sqlExample: `CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2),
  category VARCHAR(50)
);

SELECT * FROM products WHERE category = 'Electronics';`,
    mongoExample: `db.products.insertOne({
  name: "Tactical Headset",
  price: 299.99,
  category: "Electronics",
  specs: { weight: "250g", connectivity: "Bluetooth 5.0" },
  tags: ["audio", "tactical", "wireless"]
});

db.products.find({ category: "Electronics" });`,
    interview: [
      { q: 'What is a schema in SQL?', a: 'A schema defines the structure of a table — column names, data types, constraints, and relationships.' },
      { q: 'What is a BSON document?', a: 'BSON (Binary JSON) is MongoDB\'s data format — it extends JSON with additional types like Date, ObjectId, and Binary.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Tables vs Collections - MongoDB",
                "url": "https://www.youtube.com/watch?v=Jm214v0zG0s"
        }
],
      docs: [
        {
                "title": "MongoDB SQL to MongoDB Mapping Docs",
                "url": "https://www.mongodb.com/docs/manual/reference/sql-comparison/"
        }
],
      blogs: [
        {
                "title": "Relational Tables vs Document Collections",
                "url": "https://www.mongodb.com/resources/compare/relational-vs-non-relational-databases"
        }
]
    },
  },

  'rows-vs-documents': {
    title: 'Rows vs Documents',
    analogy: 'A SQL row is a single line in a military report — every field must be filled. A MongoDB document is a mission briefing — it can contain nested intel, arrays, and optional fields.',
    description: 'SQL rows are flat records with a fixed set of typed columns. MongoDB documents are JSON-like objects that can contain nested data, arrays, and varying fields per document.',
    points: [
      'SQL rows: flat, typed, fixed columns per table',
      'MongoDB documents: nested, flexible, schema-free',
      'Documents can embed arrays and sub-documents',
      'Rows reference related data via foreign keys',
      'Documents can store related data inline (embedding)',
      'Document size limit: 16MB in MongoDB',
    ],
    sqlExample: `-- A flat SQL row
INSERT INTO orders (id, user_id, product, amount, status)
VALUES (1, 42, 'Tactical Drone', 1299.99, 'delivered');

-- Accessing related data requires JOIN
SELECT o.product, u.name
FROM orders o
JOIN users u ON o.user_id = u.id
WHERE o.id = 1;`,
    mongoExample: `// A rich MongoDB document
db.orders.insertOne({
  _id: 1,
  user: { id: 42, name: "Agent Zero", email: "zero@ops.io" },
  items: [
    { product: "Tactical Drone", qty: 1, price: 1299.99 },
    { product: "HUD Headset", qty: 2, price: 299.99 }
  ],
  status: "delivered",
  metadata: { source: "web", ip: "192.168.1.1" }
});

db.orders.findOne({ _id: 1 });`,
    interview: [
      { q: 'What is the maximum document size in MongoDB?', a: '16 MB. For larger data, use GridFS which splits files into chunks.' },
      { q: 'When should you embed vs reference in MongoDB?', a: 'Embed when data is always accessed together and doesn\'t change often. Reference when data is shared across documents or grows unboundedly.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Rows vs Documents in DB - Husayn Nasser",
                "url": "https://www.youtube.com/watch?v=e8g9f7N34Xk"
        }
],
      docs: [
        {
                "title": "MongoDB Document Model Manual",
                "url": "https://www.mongodb.com/docs/manual/core/document/"
        }
],
      blogs: [
        {
                "title": "Document Databases Overview - Couchbase Guide",
                "url": "https://www.couchbase.com/resources/what-is-a-document-database/"
        }
]
    },
  },

  'basic-sql': {
    title: 'Basic SQL',
    analogy: 'SQL commands are your tactical orders — SELECT retrieves intel, INSERT deploys new data, UPDATE modifies field positions, DELETE removes compromised records.',
    description: 'SQL (Structured Query Language) is the standard language for relational databases. Core commands: SELECT, INSERT, UPDATE, DELETE, CREATE, DROP.',
    points: [
      'SELECT: retrieve data from tables',
      'INSERT: add new records',
      'UPDATE: modify existing records',
      'DELETE: remove records',
      'WHERE: filter conditions',
      'ORDER BY: sort results',
      'LIMIT: restrict result count',
    ],
    sqlExample: `-- SELECT with conditions
SELECT name, price FROM products
WHERE price > 100
ORDER BY price DESC
LIMIT 5;

-- INSERT
INSERT INTO products (id, name, price, category)
VALUES (1, 'Tactical Drone', 1299.99, 'Electronics');

-- UPDATE
UPDATE products SET price = 999.99 WHERE id = 1;

-- DELETE
DELETE FROM products WHERE id = 1;`,
    mongoExample: `db.products.find({ price: { $gt: 100 } })
  .sort({ price: -1 })
  .limit(5);

db.products.insertOne({
  name: "Tactical Drone", price: 1299.99, category: "Electronics"
});

db.products.updateOne(
  { name: "Tactical Drone" },
  { $set: { price: 999.99 } }
);

db.products.deleteOne({ name: "Tactical Drone" });`,
    interview: [
      { q: 'What is the difference between WHERE and HAVING?', a: 'WHERE filters rows before grouping. HAVING filters groups after GROUP BY.' },
      { q: 'What is the order of SQL clause execution?', a: 'FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT' },
    ],
    resources: {
      youtube: [
        {
                "title": "SQL Basics in 1 Hour - Programming with Mosh",
                "url": "https://www.youtube.com/watch?v=7S_tz1z_5bA"
        }
],
      docs: [
        {
                "title": "PostgreSQL SELECT Statement",
                "url": "https://www.postgresql.org/docs/current/sql-select.html"
        }
],
      blogs: [
        {
                "title": "Interactive SQL Tutorial - W3Schools",
                "url": "https://www.w3schools.com/sql/"
        }
]
    },
  },

  'basic-mongodb': {
    title: 'Basic MongoDB',
    analogy: 'MongoDB is like a filing cabinet of JSON folders — each folder (collection) holds mission files (documents) that can have any structure you need.',
    description: 'MongoDB is a NoSQL document database. Data is stored as BSON documents in collections. Core operations: find, insertOne, updateOne, deleteOne.',
    points: [
      'db.collection.find() — query documents',
      'db.collection.insertOne() / insertMany() — add documents',
      'db.collection.updateOne() / updateMany() — modify documents',
      'db.collection.deleteOne() / deleteMany() — remove documents',
      'Operators: $gt, $lt, $eq, $in, $set, $inc, $push',
      'Every document gets an auto-generated _id field',
    ],
    sqlExample: `-- SQL equivalents
SELECT * FROM users WHERE age > 18;
INSERT INTO users (name, age) VALUES ('Agent X', 25);
UPDATE users SET age = 26 WHERE name = 'Agent X';
DELETE FROM users WHERE name = 'Agent X';`,
    mongoExample: `// Find with filter
db.users.find({ age: { $gt: 18 } });

// Insert
db.users.insertOne({ name: "Agent X", age: 25, active: true });

// Update with operators
db.users.updateOne(
  { name: "Agent X" },
  { $set: { age: 26 }, $push: { tags: "senior" } }
);

// Delete
db.users.deleteOne({ name: "Agent X" });

// Count
db.users.countDocuments({ active: true });`,
    interview: [
      { q: 'What is the _id field in MongoDB?', a: 'Every MongoDB document has a unique _id field. By default it is an ObjectId — a 12-byte BSON type encoding timestamp, machine ID, and sequence number.' },
      { q: 'What is the difference between updateOne and replaceOne?', a: 'updateOne modifies specific fields using operators like $set. replaceOne replaces the entire document except _id.' },
    ],
    resources: {
      youtube: [
        {
                "title": "MongoDB Crash Course - Traversy Media",
                "url": "https://www.youtube.com/watch?v=-56x56CmiME"
        }
],
      docs: [
        {
                "title": "MongoDB CRUD Operations Manual",
                "url": "https://www.mongodb.com/docs/manual/crud/"
        }
],
      blogs: [
        {
                "title": "MongoDB Query Guide - GeeksforGeeks Article",
                "url": "https://www.geeksforgeeks.org/mongodb-query-document/"
        }
]
    },
  },

  'sql-languages': {
    title: 'SQL Languages (DDL/DML/DCL)',
    analogy: 'SQL is divided into command categories like military divisions — DDL builds the infrastructure, DML handles field operations, DCL controls access clearance.',
    description: 'SQL is categorized into sublanguages: DDL (structure), DML (data), DCL (permissions), TCL (transactions).',
    points: [
      'DDL (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE',
      'DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE',
      'DCL (Data Control Language): GRANT, REVOKE',
      'TCL (Transaction Control Language): BEGIN, COMMIT, ROLLBACK, SAVEPOINT',
      'DDL changes are auto-committed in most databases',
      'DML changes can be rolled back within a transaction',
    ],
    sqlExample: `-- DDL: Define structure
CREATE TABLE missions (
  id INT PRIMARY KEY,
  code VARCHAR(20) UNIQUE,
  status VARCHAR(20) DEFAULT 'active'
);
ALTER TABLE missions ADD COLUMN priority INT;
DROP TABLE missions;

-- DML: Manipulate data
INSERT INTO missions VALUES (1, 'ALPHA-7', 'active', 1);
UPDATE missions SET status = 'complete' WHERE id = 1;
DELETE FROM missions WHERE status = 'archived';

-- DCL: Control access
GRANT SELECT ON missions TO analyst_role;
REVOKE DELETE ON missions FROM analyst_role;

-- TCL: Manage transactions
BEGIN;
  UPDATE missions SET status = 'active' WHERE id = 2;
COMMIT;`,
    mongoExample: `// MongoDB doesn't have DDL/DCL in the same way
// Collections are created implicitly on first insert

// Create collection explicitly
db.createCollection("missions", {
  validator: { $jsonSchema: {
    required: ["code", "status"],
    properties: {
      code: { bsonType: "string" },
      status: { enum: ["active", "complete", "archived"] }
    }
  }}
});

// Drop collection
db.missions.drop();

// Create index (DDL equivalent)
db.missions.createIndex({ code: 1 }, { unique: true });`,
    interview: [
      { q: 'What is the difference between DROP and TRUNCATE?', a: 'DROP removes the table and its structure entirely. TRUNCATE removes all rows but keeps the table structure. TRUNCATE is faster and cannot be rolled back in most databases.' },
      { q: 'What is the difference between DELETE and TRUNCATE?', a: 'DELETE removes rows one by one and can be rolled back. TRUNCATE removes all rows at once, is faster, and resets auto-increment counters.' },
    ],
    resources: {
      youtube: [
        {
                "title": "DDL vs DML vs DCL vs TCL - Gate Smashers",
                "url": "https://www.youtube.com/watch?v=WcoP0vLpA6s"
        }
],
      docs: [
        {
                "title": "SQL Commands Categories - PostgreSQL Docs",
                "url": "https://www.postgresql.org/docs/current/sql-commands.html"
        }
],
      blogs: [
        {
                "title": "SQL Sublanguages Explained - GeeksforGeeks Article",
                "url": "https://www.geeksforgeeks.org/sql-ddl-dml-dcl-tcl-commands/"
        }
]
    },
  },

  'sql-joins': {
    title: 'SQL Joins',
    analogy: 'Joins are like merging two intelligence reports — INNER JOIN finds matching agents in both files, LEFT JOIN keeps all agents from the primary file even without a match.',
    description: 'SQL Joins combine rows from two or more tables based on a related column. Types: INNER, LEFT, RIGHT, FULL OUTER, CROSS, SELF.',
    points: [
      'INNER JOIN: only matching rows from both tables',
      'LEFT JOIN: all rows from left + matching from right (NULLs for no match)',
      'RIGHT JOIN: all rows from right + matching from left',
      'FULL OUTER JOIN: all rows from both tables',
      'CROSS JOIN: cartesian product of both tables',
      'SELF JOIN: join a table with itself',
    ],
    sqlExample: `-- INNER JOIN
SELECT u.name, o.product_id, o.amount
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- LEFT JOIN (include users with no orders)
SELECT u.name, COUNT(o.id) as total_orders
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.name;

-- SELF JOIN (find users in same city)
SELECT a.name, b.name, a.city
FROM users a
JOIN users b ON a.city = b.city AND a.id != b.id;`,
    mongoExample: `// MongoDB $lookup (equivalent to JOIN)
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "_id",
      as: "user_info"
    }
  },
  { $unwind: "$user_info" },
  { $project: { "user_info.name": 1, product_id: 1, amount: 1 } }
]);`,
    interview: [
      { q: 'What is the difference between INNER JOIN and LEFT JOIN?', a: 'INNER JOIN returns only matching rows. LEFT JOIN returns all rows from the left table, with NULLs for non-matching right rows.' },
      { q: 'What is a self join?', a: 'A self join joins a table to itself — useful for hierarchical data like employee-manager relationships.' },
    ],
    resources: {
      youtube: [
        {
                "title": "SQL Joins Explained - freeCodeCamp",
                "url": "https://www.youtube.com/watch?v=9yeEl15Xe1k"
        }
],
      docs: [
        {
                "title": "PostgreSQL Joins Documentation",
                "url": "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN"
        }
],
      blogs: [
        {
                "title": "Visual Guide to SQL Joins - Coding Horror Blog",
                "url": "https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/"
        }
]
    },
  },

  'group-by': {
    title: 'GROUP BY & Aggregates',
    analogy: 'GROUP BY is like sorting your intelligence reports by mission type — then counting, averaging, or summing within each group.',
    description: 'GROUP BY groups rows sharing a value, then aggregate functions (COUNT, SUM, AVG, MAX, MIN) compute statistics per group.',
    points: [
      'GROUP BY collapses multiple rows into one per group',
      'COUNT(*) counts rows in each group',
      'SUM() totals a numeric column',
      'AVG() computes the mean',
      'HAVING filters groups (like WHERE but post-grouping)',
      'Can group by multiple columns',
    ],
    sqlExample: `-- Sales by category
SELECT category, COUNT(*) as total_products, AVG(price) as avg_price
FROM products
GROUP BY category
HAVING COUNT(*) > 1
ORDER BY avg_price DESC;

-- Orders per user
SELECT user_id, COUNT(*) as orders, SUM(amount) as revenue
FROM orders
GROUP BY user_id
ORDER BY revenue DESC;`,
    mongoExample: `db.orders.aggregate([
  {
    $group: {
      _id: "$user_id",
      total: { $sum: "$amount" },
      count: { $sum: 1 },
      avg_amount: { $avg: "$amount" }
    }
  },
  { $sort: { total: -1 } }
]);`,
    interview: [
      { q: 'Can you use aggregate functions without GROUP BY?', a: 'Yes — they apply to the entire result set. SELECT COUNT(*) FROM orders returns total row count.' },
      { q: 'What is the difference between COUNT(*) and COUNT(column)?', a: 'COUNT(*) counts all rows including NULLs. COUNT(column) counts only non-NULL values in that column.' },
    ],
    resources: {
      youtube: [
        {
                "title": "SQL GROUP BY & Aggregates - TechTFQ",
                "url": "https://www.youtube.com/watch?v=Nidk2c4YqL0"
        }
],
      docs: [
        {
                "title": "PostgreSQL GROUP BY Clause",
                "url": "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-GROUP"
        }
],
      blogs: [
        {
                "title": "Understanding SQL Aggregations - GeeksforGeeks Article",
                "url": "https://www.geeksforgeeks.org/sql-group-by/"
        }
]
    },
  },

  'subqueries': {
    title: 'Subqueries',
    analogy: 'A subquery is like a recon mission inside a main operation — gather intel first, then use it to execute the primary objective.',
    description: 'A subquery is a query nested inside another query. It can appear in SELECT, FROM, or WHERE clauses. Correlated subqueries reference the outer query.',
    points: [
      'Scalar subquery: returns a single value',
      'Row subquery: returns a single row',
      'Table subquery: returns a result set (used in FROM)',
      'Correlated subquery: references outer query columns',
      'EXISTS / NOT EXISTS: check if subquery returns rows',
      'IN / NOT IN: check if value is in subquery result',
    ],
    sqlExample: `-- Scalar subquery in WHERE
SELECT name, price FROM products
WHERE price > (SELECT AVG(price) FROM products);

-- Subquery in FROM (derived table)
SELECT dept, avg_salary FROM (
  SELECT department as dept, AVG(salary) as avg_salary
  FROM employees
  GROUP BY department
) AS dept_stats
WHERE avg_salary > 50000;

-- Correlated subquery
SELECT u.name FROM users u
WHERE EXISTS (
  SELECT 1 FROM orders o
  WHERE o.user_id = u.id AND o.amount > 500
);`,
    mongoExample: `// MongoDB uses $lookup and pipeline stages instead
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "user_id",
      as: "orders"
    }
  },
  {
    $match: {
      "orders": { $elemMatch: { amount: { $gt: 500 } } }
    }
  },
  { $project: { name: 1 } }
]);`,
    interview: [
      { q: 'What is a correlated subquery?', a: 'A correlated subquery references columns from the outer query. It executes once per row of the outer query, making it potentially slow on large datasets.' },
      { q: 'When should you use EXISTS vs IN?', a: 'EXISTS is faster when the subquery returns many rows (stops at first match). IN is better for small, static lists. EXISTS handles NULLs more predictably.' },
    ],
    resources: {
      youtube: [
        {
                "title": "SQL Subqueries Tutorial - TechTFQ",
                "url": "https://www.youtube.com/watch?v=nOItI0v6p50"
        }
],
      docs: [
        {
                "title": "PostgreSQL Subquery Expressions",
                "url": "https://www.postgresql.org/docs/current/functions-subquery.html"
        }
],
      blogs: [
        {
                "title": "Mastering SQL Subqueries - Prisma Dataguide",
                "url": "https://www.prisma.io/dataguide/queries/sql-subqueries"
        }
]
    },
  },

  'mongodb-crud': {
    title: 'MongoDB CRUD',
    analogy: 'CRUD is the four fundamental operations of any data system — Create deploys new intel, Read retrieves it, Update modifies the record, Delete purges it.',
    description: 'MongoDB CRUD operations: insertOne/insertMany, find/findOne, updateOne/updateMany, deleteOne/deleteMany. Each supports rich filter and update operators.',
    points: [
      'Create: insertOne(), insertMany()',
      'Read: find(), findOne(), countDocuments()',
      'Update: updateOne(), updateMany(), replaceOne()',
      'Delete: deleteOne(), deleteMany()',
      'Update operators: $set, $inc, $push, $pull, $unset',
      'Query operators: $gt, $lt, $in, $nin, $exists, $regex',
    ],
    sqlExample: `-- CREATE
INSERT INTO users (name, city) VALUES ('Agent X', 'New York');

-- READ
SELECT * FROM users WHERE city = 'New York';

-- UPDATE
UPDATE users SET city = 'Boston' WHERE name = 'Agent X';

-- DELETE
DELETE FROM users WHERE name = 'Agent X';`,
    mongoExample: `// CREATE
db.users.insertOne({ name: "Agent X", city: "New York", score: 100 });
db.users.insertMany([
  { name: "Agent Y", city: "Boston" },
  { name: "Agent Z", city: "Chicago" }
]);

// READ
db.users.find({ city: "New York" });
db.users.findOne({ name: "Agent X" });

// UPDATE
db.users.updateOne(
  { name: "Agent X" },
  { $set: { city: "Boston" }, $inc: { score: 10 } }
);

// DELETE
db.users.deleteOne({ name: "Agent X" });
db.users.deleteMany({ score: { $lt: 50 } });`,
    interview: [
      { q: 'What is upsert in MongoDB?', a: 'Upsert is update + insert. If no document matches the filter, a new document is created. Use { upsert: true } option in updateOne/updateMany.' },
      { q: 'What does $inc do?', a: '$inc increments a field by a specified value. If the field doesn\'t exist, it creates it. Useful for counters and scores.' },
    ],
    resources: {
      youtube: [
        {
                "title": "MongoDB CRUD Operations Tutorial",
                "url": "https://www.youtube.com/watch?v=FwYsObCluHw"
        }
],
      docs: [
        {
                "title": "MongoDB CRUD Specification",
                "url": "https://www.mongodb.com/docs/manual/crud/"
        }
],
      blogs: [
        {
                "title": "Descriptive Guide to MongoDB CRUD - W3Schools",
                "url": "https://www.w3schools.com/mongodb/mongodb_crud.php"
        }
]
    },
  },

  'mongodb-queries': {
    title: 'MongoDB Queries',
    analogy: 'MongoDB query operators are like tactical filters — $gt scans for high-value targets, $in matches a list of suspects, $regex hunts by pattern.',
    description: 'MongoDB provides rich query operators for filtering, comparison, logical operations, array queries, and element checks.',
    points: [
      'Comparison: $eq, $ne, $gt, $gte, $lt, $lte',
      'Logical: $and, $or, $not, $nor',
      'Array: $in, $nin, $all, $elemMatch, $size',
      'Element: $exists, $type',
      'Evaluation: $regex, $where, $expr',
      'Projection: include/exclude fields in results',
      'Cursor methods: sort(), limit(), skip()',
    ],
    sqlExample: `-- Comparison operators
SELECT * FROM products WHERE price BETWEEN 100 AND 500;
SELECT * FROM products WHERE category IN ('Electronics', 'Apparel');
SELECT * FROM users WHERE name LIKE 'Agent%';

-- Logical operators
SELECT * FROM products
WHERE price > 200 AND category = 'Electronics';

SELECT * FROM orders
WHERE status = 'delivered' OR amount > 1000;`,
    mongoExample: `// Comparison
db.products.find({ price: { $gte: 100, $lte: 500 } });
db.products.find({ category: { $in: ["Electronics", "Apparel"] } });

// Logical
db.products.find({
  $and: [{ price: { $gt: 200 } }, { category: "Electronics" }]
});

// Array queries
db.products.find({ tags: { $all: ["tactical", "audio"] } });
db.products.find({ tags: { $size: 3 } });

// Regex
db.users.find({ name: { $regex: "^Agent", $options: "i" } });

// Projection (include only name and price)
db.products.find({}, { name: 1, price: 1, _id: 0 });

// Sort, limit, skip
db.products.find().sort({ price: -1 }).limit(3).skip(1);`,
    interview: [
      { q: 'What is the difference between $in and $all?', a: '$in matches documents where the field equals any value in the array. $all matches documents where an array field contains all specified values.' },
      { q: 'How do you query nested documents in MongoDB?', a: 'Use dot notation: db.users.find({ "address.city": "New York" }). For arrays of objects, use $elemMatch.' },
    ],
    resources: {
      youtube: [
        {
                "title": "MongoDB Query Operators - Traversy Media",
                "url": "https://www.youtube.com/watch?v=GFY2pSsnf6M"
        }
],
      docs: [
        {
                "title": "MongoDB Query Operators Reference",
                "url": "https://www.mongodb.com/docs/manual/reference/operator/query/"
        }
],
      blogs: [
        {
                "title": "MongoDB Filtering Operators - GeeksforGeeks Article",
                "url": "https://www.geeksforgeeks.org/mongodb-query-operators/"
        }
]
    },
  },

  'indexing': {
    title: 'Indexing',
    analogy: 'An index is like a book\'s table of contents — instead of scanning every page, you jump directly to the right section. Without it, the database reads every row.',
    description: 'Indexes are data structures that speed up data retrieval. They store sorted column values with pointers to rows. Trade-off: faster reads, slower writes, more storage.',
    points: [
      'B-tree index: default, good for range queries and equality',
      'Hash index: fast equality lookups, no range support',
      'Composite index: multiple columns, order matters',
      'Unique index: enforces uniqueness constraint',
      'Full-text index: for text search operations',
      'Covering index: index contains all columns needed by query',
      'Index selectivity: high cardinality = better index performance',
    ],
    sqlExample: `-- Create indexes
CREATE INDEX idx_users_city ON users(city);
CREATE UNIQUE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_date ON orders(user_id, order_date);

-- Check if index is used (EXPLAIN)
EXPLAIN SELECT * FROM users WHERE city = 'New York';

-- Drop index
DROP INDEX idx_users_city ON users;

-- Composite index usage
-- This query uses the composite index:
SELECT * FROM orders WHERE user_id = 1 AND order_date > '2023-01-01';
-- This does NOT use it (skips first column):
SELECT * FROM orders WHERE order_date > '2023-01-01';`,
    mongoExample: `// Create indexes
db.users.createIndex({ city: 1 });
db.users.createIndex({ email: 1 }, { unique: true });
db.orders.createIndex({ user_id: 1, order_date: -1 });

// Text index for search
db.products.createIndex({ name: "text", description: "text" });
db.products.find({ $text: { $search: "tactical drone" } });

// View indexes
db.users.getIndexes();

// Explain query plan
db.users.find({ city: "New York" }).explain("executionStats");

// Drop index
db.users.dropIndex({ city: 1 });`,
    interview: [
      { q: 'What is a covering index?', a: 'A covering index contains all columns needed by a query, so the database can answer the query from the index alone without accessing the table.' },
      { q: 'When should you NOT create an index?', a: 'Avoid indexes on: small tables, low-cardinality columns (e.g., boolean), columns rarely used in WHERE/JOIN, and tables with very heavy write operations.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Database Indexing Explained - Husayn Nasser",
                "url": "https://www.youtube.com/watch?v=fsG1XZOBKC0"
        }
],
      docs: [
        {
                "title": "PostgreSQL Indexes Reference",
                "url": "https://www.postgresql.org/docs/current/indexes.html"
        }
],
      blogs: [
        {
                "title": "How Indexes Work in Databases - Prisma Guide",
                "url": "https://www.prisma.io/dataguide/types/relational/what-are-database-indexes"
        }
]
    },
  },

  'query-optimization': {
    title: 'Query Optimization',
    analogy: 'Query optimization is like planning a military route — you don\'t take the longest path. You analyze the terrain (execution plan), use shortcuts (indexes), and avoid unnecessary detours.',
    description: 'Query optimization improves database performance by rewriting queries, using indexes, and analyzing execution plans to minimize resource usage.',
    points: [
      'Use EXPLAIN / EXPLAIN ANALYZE to view execution plans',
      'Add indexes on WHERE, JOIN, and ORDER BY columns',
      'Avoid SELECT * — only fetch needed columns',
      'Rewrite correlated subqueries as JOINs',
      'Use LIMIT to restrict result sets',
      'Avoid functions on indexed columns in WHERE clause',
      'Use query caching for repeated identical queries',
    ],
    sqlExample: `-- Bad: full table scan
SELECT * FROM orders WHERE YEAR(order_date) = 2023;

-- Good: index-friendly range query
SELECT * FROM orders
WHERE order_date >= '2023-01-01' AND order_date < '2024-01-01';

-- Bad: correlated subquery (runs once per row)
SELECT name FROM users u
WHERE (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) > 2;

-- Good: JOIN equivalent
SELECT u.name, COUNT(o.id) as order_count
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.name
HAVING COUNT(o.id) > 2;

-- Check execution plan
EXPLAIN SELECT * FROM users WHERE city = 'New York';`,
    mongoExample: `// Use explain to analyze
db.orders.find({ user_id: 1 }).explain("executionStats");

// Create compound index for common query pattern
db.orders.createIndex({ user_id: 1, status: 1, amount: -1 });

// Use projection to limit data transfer
db.users.find({ city: "New York" }, { name: 1, email: 1, _id: 0 });

// Use $match early in aggregation pipeline
db.orders.aggregate([
  { $match: { status: "delivered" } },  // filter first
  { $group: { _id: "$user_id", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } }
]);`,
    interview: [
      { q: 'What is an execution plan?', a: 'An execution plan shows how the database engine will execute a query — which indexes it uses, join methods, estimated rows. Use EXPLAIN or EXPLAIN ANALYZE to view it.' },
      { q: 'Why should you avoid functions on indexed columns in WHERE?', a: 'Functions like YEAR(date) or LOWER(name) prevent the database from using the index, causing a full table scan. Use range conditions instead.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Database Query Optimization - Husayn Nasser",
                "url": "https://www.youtube.com/watch?v=Kz69Y8w8j9g"
        }
],
      docs: [
        {
                "title": "PostgreSQL Performance Tuning Guide",
                "url": "https://wiki.postgresql.org/wiki/Performance_Optimization"
        }
],
      blogs: [
        {
                "title": "SQL Query Optimization Best Practices - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/sql-query-optimization/"
        }
]
    },
  },

  'transactions': {
    title: 'Transactions',
    analogy: 'A transaction is like a military operation — either the entire mission succeeds (COMMIT) or everything rolls back to the original state (ROLLBACK). No partial victories.',
    description: 'A transaction is a sequence of operations treated as a single unit. It either fully completes or fully reverts, ensuring data consistency.',
    points: [
      'BEGIN/START TRANSACTION: starts a transaction block',
      'COMMIT: permanently saves all changes',
      'ROLLBACK: reverts all changes since BEGIN',
      'SAVEPOINT: creates a partial rollback point',
      'Transactions prevent partial updates in concurrent systems',
      'Isolation levels control visibility between concurrent transactions',
    ],
    sqlExample: `-- Bank transfer transaction
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 500
WHERE account_id = 1;

UPDATE accounts SET balance = balance + 500
WHERE account_id = 2;

COMMIT;

-- With savepoint
BEGIN;
SAVEPOINT before_update;
UPDATE products SET stock = stock - 1 WHERE id = 5;
-- ROLLBACK TO before_update;  -- if needed
COMMIT;`,
    mongoExample: `// MongoDB multi-document transaction
const session = db.getMongo().startSession();
session.startTransaction();

try {
  db.accounts.updateOne(
    { _id: 1 }, { $inc: { balance: -500 } }, { session }
  );
  db.accounts.updateOne(
    { _id: 2 }, { $inc: { balance: 500 } }, { session }
  );
  session.commitTransaction();
} catch (e) {
  session.abortTransaction();
}`,
    interview: [
      { q: 'What is a deadlock?', a: 'A deadlock occurs when two transactions each hold a lock the other needs, causing both to wait indefinitely. DBMSs detect and resolve deadlocks by rolling back one transaction.' },
      { q: 'What are transaction isolation levels?', a: 'READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE. Higher isolation = fewer anomalies but lower concurrency.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Database Transactions & Concurrency - Husayn Nasser",
                "url": "https://www.youtube.com/watch?v=pomxJOFleNk"
        }
],
      docs: [
        {
                "title": "PostgreSQL Transactions and Locking",
                "url": "https://www.postgresql.org/docs/current/tutorial-transactions.html"
        }
],
      blogs: [
        {
                "title": "What is a Database Transaction? - Prisma Guide",
                "url": "https://www.prisma.io/dataguide/concepts/database-transactions"
        }
]
    },
  },

  'acid-vs-base': {
    title: 'ACID vs BASE',
    analogy: 'ACID is a strict military protocol — every order is confirmed, logged, and irreversible. BASE is a guerrilla network — fast, adaptive, eventually synchronized.',
    description: 'ACID (SQL) guarantees strict consistency. BASE (NoSQL) trades consistency for availability and performance.',
    points: [
      'ACID: Atomicity, Consistency, Isolation, Durability',
      'BASE: Basically Available, Soft state, Eventually consistent',
      'ACID: used in banking, healthcare, financial systems',
      'BASE: used in social media, caching, analytics',
      'CAP theorem explains the trade-off between consistency and availability',
    ],
    sqlExample: `-- ACID example: atomic transfer
BEGIN;
  UPDATE wallets SET balance = balance - 100 WHERE user_id = 1;
  UPDATE wallets SET balance = balance + 100 WHERE user_id = 2;
  INSERT INTO transactions (from_id, to_id, amount) VALUES (1, 2, 100);
COMMIT;
-- Either ALL three succeed or NONE do`,
    mongoExample: `// BASE: eventual consistency example
// Write to primary (immediately available)
db.posts.insertOne({ title: "New Post", likes: 0 });

// Reads from replica may lag slightly
// but will eventually be consistent
db.posts.find({ title: "New Post" });
// This is "eventually consistent" — BASE model`,
    interview: [
      { q: 'What does Atomicity mean in ACID?', a: 'Atomicity means a transaction is all-or-nothing. If any part fails, the entire transaction is rolled back.' },
      { q: 'What is eventual consistency?', a: 'In distributed systems, eventual consistency means all nodes will eventually have the same data, but may temporarily differ.' },
    ],
    resources: {
      youtube: [
        {
                "title": "ACID vs BASE Explained - Fireship",
                "url": "https://www.youtube.com/watch?v=yPf5GudnEeo"
        }
],
      docs: [
        {
                "title": "CAP Theorem and ACID/BASE - IBM",
                "url": "https://www.ibm.com/topics/cap-theorem"
        }
],
      blogs: [
        {
                "title": "ACID vs BASE Consistency Models - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/difference-between-acid-and-base-properties-in-dbms/"
        }
]
    },
  },

  'mongodb-aggregation': {
    title: 'MongoDB Aggregation',
    analogy: 'The aggregation pipeline is like a military intelligence processing chain — raw data enters, passes through filtering stations, gets grouped and analyzed, and exits as actionable intel.',
    description: 'MongoDB aggregation pipeline processes documents through sequential stages. Each stage transforms the data and passes results to the next stage.',
    points: [
      '$match: filter documents (like WHERE)',
      '$group: aggregate by field (like GROUP BY)',
      '$sort: order results',
      '$project: reshape documents (include/exclude/rename fields)',
      '$lookup: join with another collection',
      '$unwind: flatten array fields into separate documents',
      '$limit / $skip: pagination',
      '$addFields: add computed fields',
    ],
    sqlExample: `-- SQL equivalent of aggregation pipeline
SELECT
  u.name,
  COUNT(o.id) as order_count,
  SUM(o.amount) as total_spent,
  AVG(o.amount) as avg_order
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.status = 'delivered'
GROUP BY u.name
HAVING COUNT(o.id) > 1
ORDER BY total_spent DESC
LIMIT 5;`,
    mongoExample: `db.orders.aggregate([
  // Stage 1: Filter
  { $match: { status: "delivered" } },

  // Stage 2: Group
  {
    $group: {
      _id: "$user_id",
      order_count: { $sum: 1 },
      total_spent: { $sum: "$amount" },
      avg_order: { $avg: "$amount" }
    }
  },

  // Stage 3: Filter groups
  { $match: { order_count: { $gt: 1 } } },

  // Stage 4: Sort
  { $sort: { total_spent: -1 } },

  // Stage 5: Limit
  { $limit: 5 },

  // Stage 6: Lookup user details
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "_id",
      as: "user"
    }
  }
]);`,
    interview: [
      { q: 'What is the difference between $match and $filter?', a: '$match is a pipeline stage that filters documents. $filter is an array operator used inside $project to filter array elements.' },
      { q: 'Why should $match come early in the pipeline?', a: 'Placing $match early reduces the number of documents processed by subsequent stages, improving performance. It can also use indexes.' },
    ],
    resources: {
      youtube: [
        {
                "title": "MongoDB Aggregation Pipeline - freeCodeCamp",
                "url": "https://www.youtube.com/watch?v=Kk6Er0c7srU"
        }
],
      docs: [
        {
                "title": "MongoDB Aggregation Stage Reference",
                "url": "https://www.mongodb.com/docs/manual/aggregation/"
        }
],
      blogs: [
        {
                "title": "Complete Guide to MongoDB Aggregations - W3Schools",
                "url": "https://www.w3schools.com/mongodb/mongodb_aggregations.php"
        }
]
    },
  },

  'scaling-systems': {
    title: 'Scaling Systems',
    analogy: 'Scaling is like expanding a military base — vertical scaling adds more firepower to one base, horizontal scaling deploys multiple bases across the battlefield.',
    description: 'Database scaling handles growing data and traffic. Vertical scaling adds resources to one server. Horizontal scaling distributes across multiple servers.',
    points: [
      'Vertical scaling: more CPU, RAM, SSD on one server',
      'Horizontal scaling: add more servers (sharding, replication)',
      'Read replicas: distribute read traffic across copies',
      'Sharding: partition data across multiple nodes by shard key',
      'Caching layer: Redis/Memcached to reduce DB load',
      'Connection pooling: reuse database connections',
      'Load balancing: distribute queries across replicas',
    ],
    sqlExample: `-- Read replica routing (application level)
-- Write to primary
INSERT INTO orders (user_id, amount) VALUES (1, 299.99);

-- Read from replica
SELECT * FROM orders WHERE user_id = 1;

-- Partitioning (PostgreSQL example)
CREATE TABLE orders_2023 PARTITION OF orders
FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');

-- Analyze query distribution
EXPLAIN SELECT * FROM orders WHERE order_date = '2023-06-01';`,
    mongoExample: `// MongoDB sharding setup concept
// Enable sharding on database
sh.enableSharding("ecommerce");

// Shard collection by user_id (hash-based)
sh.shardCollection("ecommerce.orders", { user_id: "hashed" });

// Replica set read preference
db.orders.find({ status: "delivered" }).readPref("secondaryPreferred");

// Check shard distribution
db.orders.getShardDistribution();`,
    interview: [
      { q: 'What is the difference between sharding and replication?', a: 'Replication copies the same data to multiple nodes for high availability. Sharding splits data across nodes for horizontal scaling of storage and throughput.' },
      { q: 'What is a shard key?', a: 'A shard key determines how data is distributed across shards. A good shard key has high cardinality, even distribution, and aligns with common query patterns.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Sharding & Replication Explained - ByteByteGo",
                "url": "https://www.youtube.com/watch?v=mQGg5S3cswc"
        }
],
      docs: [
        {
                "title": "MongoDB Sharding Documentation",
                "url": "https://www.mongodb.com/docs/manual/sharding/"
        }
],
      blogs: [
        {
                "title": "Scaling Databases: Replication vs Sharding - Prisma",
                "url": "https://www.prisma.io/dataguide/scaling/database-scaling-strategies"
        }
]
    },
  },

  'window-functions': {
    title: 'Window Functions',
    analogy: 'Window functions are like a tactical scope — you see the full battlefield but analyze a specific window of targets without collapsing the view.',
    description: 'Window functions perform calculations across a set of rows related to the current row, without collapsing them like GROUP BY.',
    points: [
      'OVER() clause defines the window',
      'PARTITION BY: divides rows into groups',
      'ORDER BY: orders rows within the window',
      'ROW_NUMBER(): sequential row number',
      'RANK() / DENSE_RANK(): ranking with/without gaps',
      'LAG() / LEAD(): access previous/next row values',
      'SUM() OVER(): running totals',
    ],
    sqlExample: `SELECT
  name, category, price,
  RANK() OVER (PARTITION BY category ORDER BY price DESC) as price_rank,
  ROW_NUMBER() OVER (ORDER BY price DESC) as global_rank,
  AVG(price) OVER (PARTITION BY category) as category_avg,
  SUM(price) OVER (ORDER BY id ROWS UNBOUNDED PRECEDING) as running_total
FROM products;`,
    mongoExample: `db.products.aggregate([
  {
    $setWindowFields: {
      partitionBy: "$category",
      sortBy: { price: -1 },
      output: {
        priceRank: { $rank: {} },
        categoryAvg: {
          $avg: "$price",
          window: { documents: ["unbounded", "unbounded"] }
        }
      }
    }
  }
]);`,
    interview: [
      { q: 'What is the difference between RANK() and DENSE_RANK()?', a: 'RANK() leaves gaps after ties (1,1,3). DENSE_RANK() does not leave gaps (1,1,2).' },
      { q: 'Can window functions be used in WHERE clause?', a: 'No — window functions are evaluated after WHERE. Use a subquery or CTE to filter on window function results.' },
    ],
    resources: {
      youtube: [
        {
                "title": "SQL Window Functions Tutorial - TechTFQ",
                "url": "https://www.youtube.com/watch?v=Ww71knvhQ-s"
        }
],
      docs: [
        {
                "title": "PostgreSQL Window Functions Manual",
                "url": "https://www.postgresql.org/docs/current/tutorial-window.html"
        }
],
      blogs: [
        {
                "title": "Mastering SQL Window Functions - GeeksforGeeks Article",
                "url": "https://www.geeksforgeeks.org/sql-window-functions/"
        }
]
    },
  },

  'views': {
    title: 'Views',
    analogy: 'A view is like a classified briefing document — it shows a curated subset of data without revealing the underlying raw intelligence files.',
    description: 'A view is a virtual table based on a SELECT query. It simplifies complex queries, provides security by restricting column access, and presents data in a specific format.',
    points: [
      'Views are virtual tables — no data is stored',
      'Simplify complex queries by encapsulating them',
      'Restrict access to sensitive columns',
      'Materialized views store results physically for performance',
      'Updatable views allow INSERT/UPDATE/DELETE in some cases',
      'Views can be used in queries like regular tables',
    ],
    sqlExample: `-- Create a view
CREATE VIEW user_order_summary AS
SELECT
  u.name,
  u.city,
  COUNT(o.id) as total_orders,
  SUM(o.amount) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.name, u.city;

-- Query the view
SELECT * FROM user_order_summary WHERE total_spent > 500;

-- Materialized view (PostgreSQL)
CREATE MATERIALIZED VIEW monthly_revenue AS
SELECT strftime('%Y-%m', order_date) as month, SUM(amount) as revenue
FROM orders GROUP BY month;

-- Drop view
DROP VIEW user_order_summary;`,
    mongoExample: `// MongoDB doesn't have views in the same way
// Use $merge to create materialized collections
db.orders.aggregate([
  {
    $group: {
      _id: "$user_id",
      total_orders: { $sum: 1 },
      total_spent: { $sum: "$amount" }
    }
  },
  { $merge: { into: "user_order_summary", whenMatched: "replace" } }
]);

// Query the materialized collection
db.user_order_summary.find({ total_spent: { $gt: 500 } });`,
    interview: [
      { q: 'What is the difference between a view and a materialized view?', a: 'A view is virtual — it runs the query each time. A materialized view stores the result physically and must be refreshed. Materialized views are faster for complex queries.' },
      { q: 'Can you always update data through a view?', a: 'Not always. A view is updatable only if it maps directly to one table, has no GROUP BY, DISTINCT, aggregates, or UNION.' },
    ],
    resources: {
      youtube: [
        {
                "title": "SQL Views Explained - kudvenkat",
                "url": "https://www.youtube.com/watch?v=q6g4hT_W9H4"
        }
],
      docs: [
        {
                "title": "PostgreSQL CREATE VIEW Manual",
                "url": "https://www.postgresql.org/docs/current/sql-createview.html"
        }
],
      blogs: [
        {
                "title": "Working with SQL Views - GeeksforGeeks Article",
                "url": "https://www.geeksforgeeks.org/sql-views/"
        }
]
    },
  },

  'stored-procedures': {
    title: 'Stored Procedures',
    analogy: 'A stored procedure is like a pre-programmed tactical protocol — define the mission steps once, then execute them with a single command whenever needed.',
    description: 'A stored procedure is a precompiled set of SQL statements stored in the database. It accepts parameters, contains logic, and can be reused across applications.',
    points: [
      'Precompiled — faster execution than ad-hoc queries',
      'Accepts IN, OUT, and INOUT parameters',
      'Can contain IF/ELSE, loops, and error handling',
      'Reduces network traffic — one call executes multiple statements',
      'Centralizes business logic in the database',
      'Can be called from applications, triggers, or other procedures',
    ],
    sqlExample: `-- Create stored procedure
CREATE PROCEDURE GetUserOrders(IN userId INT)
BEGIN
  SELECT o.id, p.name, o.amount, o.status
  FROM orders o
  JOIN products p ON o.product_id = p.id
  WHERE o.user_id = userId
  ORDER BY o.order_date DESC;
END;

-- Call procedure
CALL GetUserOrders(1);

-- Procedure with output parameter
CREATE PROCEDURE GetOrderTotal(
  IN userId INT,
  OUT total DECIMAL(10,2)
)
BEGIN
  SELECT SUM(amount) INTO total
  FROM orders WHERE user_id = userId;
END;

CALL GetOrderTotal(1, @total);
SELECT @total;`,
    mongoExample: `// MongoDB uses JavaScript functions or application code
// No native stored procedures, but you can use:

// 1. Aggregation pipeline (reusable)
function getUserOrders(userId) {
  return db.orders.aggregate([
    { $match: { user_id: userId } },
    {
      $lookup: {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "product"
      }
    },
    { $sort: { order_date: -1 } }
  ]);
}

// 2. Atlas Functions (serverless)
// exports = function(userId) {
//   return context.services.get("mongodb-atlas")
//     .db("mydb").collection("orders").find({ user_id: userId });
// }`,
    interview: [
      { q: 'What are the advantages of stored procedures?', a: 'Precompiled (faster), reduced network traffic, centralized logic, security (grant EXECUTE without table access), reusability.' },
      { q: 'What is the difference between a stored procedure and a function?', a: 'Functions must return a value and can be used in SELECT. Procedures don\'t need to return a value and are called with CALL. Procedures can have side effects; functions typically cannot.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Stored Procedures & Functions - TechTFQ",
                "url": "https://www.youtube.com/watch?v=Yf5-S7X0wG8"
        }
],
      docs: [
        {
                "title": "PostgreSQL User-Defined Procedures Docs",
                "url": "https://www.postgresql.org/docs/current/sql-createprocedure.html"
        }
],
      blogs: [
        {
                "title": "SQL Stored Procedures Guide - W3Schools Article",
                "url": "https://www.w3schools.com/sql/sql_stored_procedures.asp"
        }
]
    },
  },

  'triggers': {
    title: 'Triggers',
    analogy: 'A trigger is like an automated alarm system — when a specific event occurs (INSERT, UPDATE, DELETE), it automatically fires a response without manual intervention.',
    description: 'A trigger is a stored procedure that automatically executes in response to data modification events on a table. Used for auditing, validation, and cascading changes.',
    points: [
      'BEFORE trigger: runs before the DML operation',
      'AFTER trigger: runs after the DML operation',
      'INSTEAD OF trigger: replaces the DML operation (views)',
      'Row-level trigger: fires once per affected row',
      'Statement-level trigger: fires once per SQL statement',
      'Access OLD and NEW row values within trigger body',
      'Use cases: audit logs, data validation, cascading updates',
    ],
    sqlExample: `-- Audit log trigger
CREATE TABLE order_audit (
  id INTEGER PRIMARY KEY,
  order_id INT,
  action TEXT,
  changed_at TEXT,
  old_status TEXT,
  new_status TEXT
);

CREATE TRIGGER log_order_changes
AFTER UPDATE ON orders
FOR EACH ROW
BEGIN
  INSERT INTO order_audit (order_id, action, changed_at, old_status, new_status)
  VALUES (NEW.id, 'UPDATE', datetime('now'), OLD.status, NEW.status);
END;

-- Validation trigger
CREATE TRIGGER check_stock
BEFORE INSERT ON orders
FOR EACH ROW
BEGIN
  SELECT CASE
    WHEN (SELECT stock FROM products WHERE id = NEW.product_id) < 1
    THEN RAISE(ABORT, 'Insufficient stock')
  END;
END;`,
    mongoExample: `// MongoDB doesn't have native triggers
// Use Change Streams for real-time event handling

const changeStream = db.orders.watch([
  { $match: { operationType: { $in: ["insert", "update", "delete"] } } }
]);

changeStream.on("change", (change) => {
  if (change.operationType === "update") {
    // Log the change
    db.order_audit.insertOne({
      order_id: change.documentKey._id,
      action: "UPDATE",
      changed_at: new Date(),
      updated_fields: change.updateDescription.updatedFields
    });
  }
});`,
    interview: [
      { q: 'What is the difference between BEFORE and AFTER triggers?', a: 'BEFORE triggers run before the DML operation — useful for validation and modifying NEW values. AFTER triggers run after — useful for audit logs and cascading changes.' },
      { q: 'What are the risks of using triggers?', a: 'Triggers can cause hidden side effects, make debugging difficult, create cascading trigger chains, and impact performance if not carefully designed.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Database Triggers Tutorial - kudvenkat",
                "url": "https://www.youtube.com/watch?v=2t2Lp2D5Vco"
        }
],
      docs: [
        {
                "title": "PostgreSQL Trigger Creation Docs",
                "url": "https://www.postgresql.org/docs/current/sql-createtrigger.html"
        }
],
      blogs: [
        {
                "title": "Understanding Database Triggers - GeeksforGeeks Article",
                "url": "https://www.geeksforgeeks.org/sql-trigger-student-database/"
        }
]
    },
  },

  'constraints': {
    title: 'Constraints (PK, FK, UNIQUE)',
    analogy: 'Constraints are like military regulations — they enforce rules on data to prevent invalid entries, duplicate records, and broken relationships.',
    description: 'Constraints enforce rules on data in tables. They ensure data integrity at the database level, preventing invalid data from being inserted or updated.',
    points: [
      'PRIMARY KEY: unique identifier, NOT NULL, one per table',
      'FOREIGN KEY: references PK of another table, enforces referential integrity',
      'UNIQUE: ensures all values in a column are distinct',
      'NOT NULL: prevents NULL values in a column',
      'CHECK: validates data against a condition',
      'DEFAULT: provides a default value when none is specified',
      'ON DELETE CASCADE / SET NULL: defines FK behavior on parent delete',
    ],
    sqlExample: `CREATE TABLE users (
  id INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  age INT CHECK (age >= 18),
  status VARCHAR(20) DEFAULT 'active'
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT NOT NULL,
  amount DECIMAL(10,2) CHECK (amount > 0),
  FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- Add constraint to existing table
ALTER TABLE products
ADD CONSTRAINT chk_price CHECK (price > 0);

-- View constraints
SELECT * FROM information_schema.table_constraints
WHERE table_name = 'orders';`,
    mongoExample: `// MongoDB schema validation (JSON Schema)
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email", "age"],
      properties: {
        email: {
          bsonType: "string",
          pattern: "^.+@.+$",
          description: "must be a valid email"
        },
        age: {
          bsonType: "int",
          minimum: 18,
          description: "must be >= 18"
        },
        status: {
          enum: ["active", "inactive"],
          description: "must be active or inactive"
        }
      }
    }
  },
  validationAction: "error"
});`,
    interview: [
      { q: 'What is referential integrity?', a: 'Referential integrity ensures that a foreign key value always refers to an existing primary key. It prevents orphaned records and maintains consistent relationships.' },
      { q: 'What is the difference between UNIQUE and PRIMARY KEY?', a: 'A table can have multiple UNIQUE constraints but only one PRIMARY KEY. PRIMARY KEY columns cannot be NULL; UNIQUE columns can have one NULL value.' },
    ],
    resources: {
      youtube: [
        {
                "title": "SQL Constraints & Keys - freeCodeCamp",
                "url": "https://www.youtube.com/watch?v=O135-eO4exs"
        }
],
      docs: [
        {
                "title": "PostgreSQL Data Constraints Reference Docs",
                "url": "https://www.postgresql.org/docs/current/ddl-constraints.html"
        }
],
      blogs: [
        {
                "title": "SQL Constraints Overview - W3Schools Article",
                "url": "https://www.w3schools.com/sql/sql_constraints.asp"
        }
]
    },
  },

  'normalization': {
    title: 'Normalization',
    analogy: 'Normalization is like organizing a military base — each unit has one role, no duplication, and everything references a central command structure.',
    description: 'Normalization organizes database tables to reduce redundancy and improve data integrity through Normal Forms (1NF, 2NF, 3NF, BCNF).',
    points: [
      '1NF: atomic values, no repeating groups, unique rows',
      '2NF: 1NF + no partial dependencies on composite key',
      '3NF: 2NF + no transitive dependencies',
      'BCNF: stricter version of 3NF — every determinant is a candidate key',
      'Denormalization: intentional redundancy for read performance',
      'Higher normal forms reduce anomalies: insert, update, delete',
    ],
    sqlExample: `-- Unnormalized (bad): repeating groups
-- orders: id, customer_name, customer_email, product1, product2

-- 1NF: atomic values, one product per row
CREATE TABLE orders (
  id INT PRIMARY KEY,
  customer_id INT,
  product_id INT,
  quantity INT
);

-- 2NF: separate customer data (no partial dependency)
CREATE TABLE customers (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

-- 3NF: no transitive dependency
-- zip_code → city (transitive: order → zip → city)
CREATE TABLE zip_codes (
  zip VARCHAR(10) PRIMARY KEY,
  city VARCHAR(100),
  state VARCHAR(50)
);`,
    mongoExample: `// MongoDB: denormalized (embedded) for performance
db.orders.insertOne({
  _id: 1,
  customer: { name: "Agent Zero", email: "zero@ops.io" },
  items: [
    { product: "Drone", qty: 1, price: 1299 },
    { product: "Headset", qty: 2, price: 299 }
  ]
});
// Trade-off: faster reads, but customer data duplicated`,
    interview: [
      { q: 'What is a transitive dependency?', a: 'When column A → B → C (C depends on B which depends on A). 3NF removes these by separating B and C into their own table.' },
      { q: 'When would you denormalize?', a: 'When read performance is critical and data rarely changes — like analytics dashboards or reporting systems.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Database Normalization 1NF/2NF/3NF - Gate Smashers",
                "url": "https://www.youtube.com/watch?v=5gr1O0f2q3A"
        }
],
      docs: [
        {
                "title": "Database Normalization Rules - Microsoft Docs",
                "url": "https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description"
        }
],
      blogs: [
        {
                "title": "Database Normalization Guide - GeeksforGeeks Article",
                "url": "https://www.geeksforgeeks.org/dbms-normalization-1nf-2nf-3nf-bcnf/"
        }
]
    },
  },

  'schema-design': {
    title: 'MongoDB Schema Design',
    analogy: 'Schema design in MongoDB is like designing a mission briefing format — you decide what information goes in one document vs what gets referenced from another file.',
    description: 'MongoDB schema design focuses on access patterns rather than normalization. The key decision is embedding vs referencing based on how data is queried.',
    points: [
      'Design for your query patterns, not for normalization',
      'Embed when data is always accessed together',
      'Reference when data is shared or grows unboundedly',
      'One-to-one: embed in same document',
      'One-to-many: embed array (if bounded) or reference',
      'Many-to-many: reference with arrays of IDs',
      'Avoid unbounded arrays — they can exceed 16MB limit',
    ],
    sqlExample: `-- SQL: normalized schema
CREATE TABLE users (id INT PRIMARY KEY, name TEXT, email TEXT);
CREATE TABLE addresses (
  id INT PRIMARY KEY,
  user_id INT REFERENCES users(id),
  street TEXT, city TEXT, zip TEXT
);
CREATE TABLE user_roles (
  user_id INT REFERENCES users(id),
  role_id INT REFERENCES roles(id)
);`,
    mongoExample: `// One-to-one: embed
db.users.insertOne({
  _id: 1,
  name: "Agent Zero",
  address: { street: "123 Ops Lane", city: "New York", zip: "10001" }
});

// One-to-many (bounded): embed array
db.users.insertOne({
  _id: 2,
  name: "Agent Nova",
  phones: ["+1-555-0100", "+1-555-0101"]
});

// One-to-many (unbounded): reference
db.orders.insertOne({ _id: 1, user_id: 2, amount: 299.99 });

// Many-to-many: array of references
db.users.insertOne({
  _id: 3,
  name: "Agent X",
  role_ids: [101, 102, 103]
});`,
    interview: [
      { q: 'What is the 16MB document limit in MongoDB?', a: 'Each MongoDB document cannot exceed 16MB. For large data like files, use GridFS which splits data into 255KB chunks stored in separate collections.' },
      { q: 'What is the bucket pattern in MongoDB?', a: 'The bucket pattern groups related time-series data into documents (buckets) to reduce document count and improve query performance for IoT or analytics data.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Database Schema Design & Relationships - Mosh",
                "url": "https://www.youtube.com/watch?v=Kz69Y8w8j9g"
        }
],
      docs: [
        {
                "title": "PostgreSQL Schema Documentation Manual",
                "url": "https://www.postgresql.org/docs/current/ddl-schemas.html"
        }
],
      blogs: [
        {
                "title": "Relational Database Schema Design Best Practices - Prisma",
                "url": "https://www.prisma.io/dataguide/postgresql/schema-design-postgresql"
        }
]
    },
  },

  'embedding-referencing': {
    title: 'Embedding vs Referencing',
    analogy: 'Embedding is like including the full mission briefing in one envelope — everything in one place. Referencing is like keeping files in separate folders and linking them by ID.',
    description: 'The core MongoDB design decision: embed related data in one document for fast reads, or reference it in separate collections for flexibility and normalization.',
    points: [
      'Embedding: faster reads, data duplication, 16MB limit',
      'Referencing: normalized, flexible, requires $lookup (slower)',
      'Embed: one-to-one, one-to-few, data accessed together',
      'Reference: one-to-many (large), many-to-many, shared data',
      'Hybrid: embed summary, reference full document',
      'Consider write frequency — embedded data is harder to update across documents',
    ],
    sqlExample: `-- SQL always uses referencing (normalization)
-- Products table
CREATE TABLE products (id INT PRIMARY KEY, name TEXT, price REAL);

-- Orders reference products
CREATE TABLE order_items (
  order_id INT, product_id INT, qty INT,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Must JOIN to get full data
SELECT o.id, p.name, oi.qty
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id;`,
    mongoExample: `// EMBEDDING: order contains product snapshot
db.orders.insertOne({
  _id: 1,
  user_id: 42,
  items: [
    { product_id: 1, name: "Tactical Drone", price: 1299.99, qty: 1 },
    { product_id: 2, name: "HUD Headset", price: 299.99, qty: 2 }
  ]
});
// Pro: one query gets everything
// Con: if product price changes, old orders still show old price

// REFERENCING: order stores only product IDs
db.orders.insertOne({
  _id: 2,
  user_id: 42,
  items: [
    { product_id: 1, qty: 1 },
    { product_id: 2, qty: 2 }
  ]
});
// Pro: always gets current product data
// Con: requires $lookup join`,
    interview: [
      { q: 'What is data duplication in MongoDB and when is it acceptable?', a: 'Data duplication means storing the same data in multiple documents. It\'s acceptable when the duplicated data rarely changes and read performance is critical.' },
      { q: 'What is the extended reference pattern?', a: 'Store a reference ID plus a few frequently-accessed fields from the referenced document. Reduces $lookup calls while keeping data mostly normalized.' },
    ],
    resources: {
      youtube: [
        {
                "title": "MongoDB Data Modeling: Embedding vs Referencing",
                "url": "https://www.youtube.com/watch?v=leNCfU5SYR8"
        }
],
      docs: [
        {
                "title": "MongoDB Model Relationships Docs Manual",
                "url": "https://www.mongodb.com/docs/manual/core/data-modeling-introduction/"
        }
],
      blogs: [
        {
                "title": "Embedding vs Referencing in MongoDB - GeeksforGeeks Article",
                "url": "https://www.geeksforgeeks.org/embedding-vs-referencing-in-mongodb/"
        }
]
    },
  },

  'indexing-deep': {
    title: 'Indexing (Deep Dive)',
    analogy: 'Deep indexing is like building a multi-level intelligence network — compound indexes cover multiple search criteria, partial indexes target specific subsets, and TTL indexes auto-expire old data.',
    description: 'Advanced indexing covers compound indexes, partial indexes, sparse indexes, TTL indexes, text indexes, and index strategies for optimal query performance.',
    points: [
      'Compound index: multiple fields, order matters (ESR rule)',
      'Partial index: index only documents matching a filter',
      'Sparse index: only indexes documents where field exists',
      'TTL index: automatically deletes documents after expiry',
      'Text index: full-text search across string fields',
      'Wildcard index: indexes all fields in a document',
      'ESR rule: Equality → Sort → Range for compound index order',
    ],
    sqlExample: `-- Compound index (order matters!)
CREATE INDEX idx_orders_user_status ON orders(user_id, status);
-- Supports: WHERE user_id = 1
-- Supports: WHERE user_id = 1 AND status = 'delivered'
-- Does NOT support: WHERE status = 'delivered' alone

-- Partial index (only active users)
CREATE INDEX idx_active_users ON users(email)
WHERE status = 'active';

-- Covering index (all needed columns in index)
CREATE INDEX idx_covering ON orders(user_id, status, amount);
-- Query can be answered from index alone:
SELECT status, amount FROM orders WHERE user_id = 1;`,
    mongoExample: `// Compound index (ESR rule: Equality, Sort, Range)
db.orders.createIndex({ user_id: 1, status: 1, amount: -1 });

// Partial index (only delivered orders)
db.orders.createIndex(
  { user_id: 1 },
  { partialFilterExpression: { status: "delivered" } }
);

// Sparse index (only docs with email field)
db.users.createIndex({ email: 1 }, { sparse: true });

// TTL index (auto-delete after 24 hours)
db.sessions.createIndex(
  { created_at: 1 },
  { expireAfterSeconds: 86400 }
);

// Text index
db.products.createIndex({ name: "text", description: "text" });
db.products.find({ $text: { $search: "tactical drone" } });

// Wildcard index
db.products.createIndex({ "specs.$**": 1 });`,
    interview: [
      { q: 'What is the ESR rule for compound indexes?', a: 'Equality fields first, then Sort fields, then Range fields. This ordering maximizes index usage across different query patterns.' },
      { q: 'What is index intersection?', a: 'Some databases can combine multiple single-field indexes to answer a query. However, a well-designed compound index is usually more efficient.' },
    ],
    resources: {
      youtube: [
        {
                "title": "B-Trees & Database Indexing Deep Dive",
                "url": "https://www.youtube.com/watch?v=aZjYr87r1b8"
        }
],
      docs: [
        {
                "title": "MongoDB Indexing Deep Dive Manual Guide",
                "url": "https://www.mongodb.com/docs/manual/indexes/"
        }
],
      blogs: [
        {
                "title": "Database Indexes Under the Hood - PlanetScale Blog",
                "url": "https://planetscale.com/blog/how-does-database-indexing-work"
        }
]
    },
  },

  'performance-tuning': {
    title: 'Performance Tuning',
    analogy: 'Performance tuning is like optimizing a military supply chain — identify bottlenecks, eliminate waste, cache frequently needed resources, and streamline the critical path.',
    description: 'Database performance tuning involves query optimization, indexing strategies, connection pooling, caching, and hardware/configuration tuning.',
    points: [
      'Profile slow queries using slow query logs',
      'Use EXPLAIN / explain() to analyze execution plans',
      'Add indexes on high-cardinality filter/join columns',
      'Implement connection pooling to reduce connection overhead',
      'Use caching (Redis) for frequently read, rarely changed data',
      'Partition large tables to improve query performance',
      'Monitor: CPU, memory, disk I/O, query latency',
    ],
    sqlExample: `-- Enable slow query log (MySQL)
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 1;

-- Analyze query
EXPLAIN ANALYZE
SELECT u.name, SUM(o.amount)
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.status = 'delivered'
GROUP BY u.name;

-- Check table statistics
ANALYZE TABLE orders;

-- Optimize table
OPTIMIZE TABLE orders;

-- Check index usage
SELECT * FROM sys.schema_unused_indexes;`,
    mongoExample: `// Enable profiler
db.setProfilingLevel(1, { slowms: 100 });

// View slow queries
db.system.profile.find().sort({ ts: -1 }).limit(5);

// Analyze query
db.orders.find({ status: "delivered" })
  .explain("executionStats");

// Check index stats
db.orders.aggregate([{ $indexStats: {} }]);

// Compact collection (reclaim space)
db.runCommand({ compact: "orders" });

// Monitor current operations
db.currentOp({ active: true, secs_running: { $gt: 5 } });`,
    interview: [
      { q: 'What is the N+1 query problem?', a: 'N+1 occurs when fetching N records then making 1 additional query per record. Solution: use JOINs or eager loading to fetch all data in one query.' },
      { q: 'What is connection pooling?', a: 'Connection pooling maintains a cache of database connections that can be reused. It reduces the overhead of creating new connections for each request.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Database Tuning & Explain Plan - Husayn Nasser",
                "url": "https://www.youtube.com/watch?v=pomxJOFleNk"
        }
],
      docs: [
        {
                "title": "PostgreSQL Explain Documentation Manual",
                "url": "https://www.postgresql.org/docs/current/sql-explain.html"
        }
],
      blogs: [
        {
                "title": "Database Performance Tuning Best Practices - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/database-tuning-in-dbms/"
        }
]
    },
  },

  'cap-theorem': {
    title: 'CAP Theorem',
    analogy: 'CAP Theorem is the impossible triangle of distributed systems — like a three-way alliance where only two parties can fully cooperate at any time.',
    description: 'CAP Theorem states that a distributed system can only guarantee 2 of 3 properties: Consistency, Availability, and Partition Tolerance.',
    points: [
      'Consistency: every read gets the most recent write',
      'Availability: every request gets a response (not necessarily latest)',
      'Partition Tolerance: system works despite network splits',
      'CA systems: traditional SQL (single node)',
      'CP systems: MongoDB, HBase (consistent but may be unavailable)',
      'AP systems: Cassandra, DynamoDB (available but eventually consistent)',
      'PACELC extends CAP: even without partitions, latency vs consistency trade-off',
    ],
    sqlExample: `-- CP System example: PostgreSQL
-- Strong consistency: read-after-write guaranteed
BEGIN;
  UPDATE inventory SET stock = stock - 1 WHERE product_id = 5;
COMMIT;

-- If network partition occurs, system may become unavailable
-- rather than serve stale data`,
    mongoExample: `// MongoDB can be tuned for CP or AP behavior

// CP: write with majority concern
db.inventory.updateOne(
  { product_id: 5 },
  { $inc: { stock: -1 } },
  { writeConcern: { w: "majority" } }
);

// AP: read from secondary (may be slightly stale)
db.inventory.findOne(
  { product_id: 5 },
  { readPreference: "secondaryPreferred" }
);`,
    interview: [
      { q: 'Why can\'t we have all three CAP properties?', a: 'During a network partition, you must choose: either reject requests (sacrifice Availability) or serve potentially stale data (sacrifice Consistency).' },
      { q: 'Is CAP theorem still relevant?', a: 'Yes, but PACELC extends it — even without partitions, there\'s a latency vs consistency trade-off.' },
    ],
    resources: {
      youtube: [
        {
                "title": "CAP Theorem Simplified - Gaurav Sen",
                "url": "https://www.youtube.com/watch?v=k-Yaq8AH194"
        }
],
      docs: [
        {
                "title": "CAP Theorem Definition - IBM Topics Reference",
                "url": "https://www.ibm.com/topics/cap-theorem"
        }
],
      blogs: [
        {
                "title": "Understanding CAP Theorem in Distributed Databases - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/the-cap-theorem-in-dbms/"
        }
]
    },
  },

  'data-modeling': {
    title: 'Data Modeling',
    analogy: 'Data modeling is like designing a city\'s infrastructure — you plan roads (relationships), buildings (tables/collections), and utilities (indexes) before construction begins.',
    description: 'Data modeling defines how data is structured, stored, and related. It involves conceptual, logical, and physical design phases.',
    points: [
      'Conceptual model: entities and relationships (ER diagram)',
      'Logical model: tables, columns, data types, constraints',
      'Physical model: indexes, partitions, storage optimization',
      'Entity-Relationship (ER) diagrams visualize data structure',
      'Cardinality: one-to-one, one-to-many, many-to-many',
      'Normalization vs denormalization trade-offs',
      'Consider read/write patterns before finalizing design',
    ],
    sqlExample: `-- ER Diagram → SQL Tables
-- Entities: User, Product, Order
-- Relationships: User places Order, Order contains Product

CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INT DEFAULT 0
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
  order_id INT REFERENCES orders(id),
  product_id INT REFERENCES products(id),
  quantity INT NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (order_id, product_id)
);`,
    mongoExample: `// MongoDB data model for e-commerce
// Optimized for: "get order with all details"

db.orders.insertOne({
  _id: "ORD-001",
  user: {
    id: 1,
    name: "Agent Zero",
    email: "zero@ops.io"
  },
  items: [
    {
      product_id: 1,
      name: "Tactical Drone",
      price: 1299.99,
      qty: 1
    }
  ],
  total: 1299.99,
  status: "delivered",
  created_at: new Date()
});`,
    interview: [
      { q: 'What is an ER diagram?', a: 'An Entity-Relationship diagram visually represents entities (tables), their attributes (columns), and relationships (foreign keys) in a database.' },
      { q: 'What is cardinality in data modeling?', a: 'Cardinality describes the numerical relationship between entities: one-to-one (1:1), one-to-many (1:N), or many-to-many (M:N).' },
    ],
    resources: {
      youtube: [
        {
                "title": "Data Modeling 101 - freeCodeCamp",
                "url": "https://www.youtube.com/watch?v=yPf5GudnEeo"
        }
],
      docs: [
        {
                "title": "MongoDB Data Modeling Specifications Manual",
                "url": "https://www.mongodb.com/docs/manual/core/data-model-design/"
        }
],
      blogs: [
        {
                "title": "A Complete Guide to Database Data Modeling - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/data-modeling-in-dbms/"
        }
]
    },
  },

  'real-world-arch': {
    title: 'Real-World Architecture',
    analogy: 'Real-world database architecture is like a military command network — multiple specialized units (databases) working together, each optimized for its mission.',
    description: 'Production systems use multiple database types together (polyglot persistence), with caching layers, message queues, and read replicas for scale and resilience.',
    points: [
      'Polyglot persistence: use the right database for each use case',
      'Read replicas: scale read traffic horizontally',
      'Caching layer (Redis): reduce database load for hot data',
      'Message queues (Kafka): decouple writes and async processing',
      'CQRS: separate read and write models',
      'Event sourcing: store events, derive state',
      'Database per service: microservices pattern',
    ],
    sqlExample: `-- CQRS: separate read/write models
-- Write model (normalized, ACID)
INSERT INTO orders (user_id, product_id, amount) VALUES (1, 5, 299.99);

-- Read model (denormalized, fast)
-- Maintained by triggers or event handlers
INSERT INTO order_read_model
  (order_id, user_name, product_name, amount, status)
VALUES (1, 'Agent Zero', 'HUD Headset', 299.99, 'pending');

-- Read from optimized view
SELECT * FROM order_read_model WHERE user_name = 'Agent Zero';`,
    mongoExample: `// Polyglot persistence example:
// MongoDB: user profiles and product catalog
db.products.find({ category: "Electronics" });

// Redis (conceptual): session cache
// SET session:user:1 '{"name":"Agent Zero","role":"admin"}' EX 3600

// MongoDB: order history
db.orders.find({ user_id: 1 }).sort({ created_at: -1 });

// Elasticsearch (conceptual): full-text search
// GET /products/_search { "query": { "match": { "name": "tactical" } } }

// Architecture pattern:
// Client → Load Balancer → App Servers
//   → Redis (cache) → MongoDB (primary)
//   → Read Replicas (analytics queries)
//   → Kafka (event streaming) → Data Warehouse`,
    interview: [
      { q: 'What is CQRS?', a: 'Command Query Responsibility Segregation separates read and write operations into different models. Writes go to a normalized store; reads come from a denormalized, optimized read model.' },
      { q: 'What is polyglot persistence?', a: 'Using multiple database technologies in one application, each chosen for its strengths — e.g., PostgreSQL for transactions, Redis for caching, MongoDB for documents, Elasticsearch for search.' },
    ],
    resources: {
      youtube: [
        {
                "title": "How WhatsApp/Netflix Scaled Databases - ByteByteGo",
                "url": "https://www.youtube.com/watch?v=mQGg5S3cswc"
        }
],
      docs: [
        {
                "title": "AWS Distributed Database Systems Docs Manual",
                "url": "https://aws.amazon.com/rds/features/multi-az/"
        }
],
      blogs: [
        {
                "title": "Real World Database Architectures Case Studies - Prisma",
                "url": "https://www.prisma.io/dataguide/scaling/database-scaling-strategies"
        }
]
    },
  },
};
