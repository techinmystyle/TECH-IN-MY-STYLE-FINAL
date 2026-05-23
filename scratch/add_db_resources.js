const fs = require('fs');
const path = require('path');

const resourcesMap = {
  'what-is-database': {
    youtube: [{ title: 'What is a Database? - freeCodeCamp', url: 'https://www.youtube.com/watch?v=FR4QIeZaPeM' }],
    docs: [{ title: 'Introduction to Databases - Oracle Docs', url: 'https://www.oracle.com/database/what-is-database/' }],
    blogs: [{ title: 'Understanding Databases - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/what-is-a-database/' }]
  },
  'sql-vs-nosql': {
    youtube: [{ title: 'SQL vs NoSQL Explained - Fireship', url: 'https://www.youtube.com/watch?v=ZS_kXvOe90o' }],
    docs: [{ title: 'SQL and NoSQL Comparison - AWS Docs', url: 'https://aws.amazon.com/nosql/' }],
    blogs: [{ title: 'SQL vs NoSQL: The Ultimate Guide - Prisma', url: 'https://www.prisma.io/dataguide/types/relational/comparing-sql-and-nosql' }]
  },
  'tables-vs-collections': {
    youtube: [{ title: 'Tables vs Collections - MongoDB', url: 'https://www.youtube.com/watch?v=Jm214v0zG0s' }],
    docs: [{ title: 'MongoDB SQL to MongoDB Mapping Docs', url: 'https://www.mongodb.com/docs/manual/reference/sql-comparison/' }],
    blogs: [{ title: 'Relational Tables vs Document Collections', url: 'https://www.mongodb.com/resources/compare/relational-vs-non-relational-databases' }]
  },
  'rows-vs-documents': {
    youtube: [{ title: 'Rows vs Documents in DB - Husayn Nasser', url: 'https://www.youtube.com/watch?v=e8g9f7N34Xk' }],
    docs: [{ title: 'MongoDB Document Model Manual', url: 'https://www.mongodb.com/docs/manual/core/document/' }],
    blogs: [{ title: 'Document Databases Overview - Couchbase Guide', url: 'https://www.couchbase.com/resources/what-is-a-document-database/' }]
  },
  'basic-sql': {
    youtube: [{ title: 'SQL Basics in 1 Hour - Programming with Mosh', url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA' }],
    docs: [{ title: 'PostgreSQL SELECT Statement', url: 'https://www.postgresql.org/docs/current/sql-select.html' }],
    blogs: [{ title: 'Interactive SQL Tutorial - W3Schools', url: 'https://www.w3schools.com/sql/' }]
  },
  'basic-mongodb': {
    youtube: [{ title: 'MongoDB Crash Course - Traversy Media', url: 'https://www.youtube.com/watch?v=-56x56CmiME' }],
    docs: [{ title: 'MongoDB CRUD Operations Manual', url: 'https://www.mongodb.com/docs/manual/crud/' }],
    blogs: [{ title: 'MongoDB Query Guide - GeeksforGeeks Article', url: 'https://www.geeksforgeeks.org/mongodb-query-document/' }]
  },
  'sql-languages': {
    youtube: [{ title: 'DDL vs DML vs DCL vs TCL - Gate Smashers', url: 'https://www.youtube.com/watch?v=WcoP0vLpA6s' }],
    docs: [{ title: 'SQL Commands Categories - PostgreSQL Docs', url: 'https://www.postgresql.org/docs/current/sql-commands.html' }],
    blogs: [{ title: 'SQL Sublanguages Explained - GeeksforGeeks Article', url: 'https://www.geeksforgeeks.org/sql-ddl-dml-dcl-tcl-commands/' }]
  },
  'sql-joins': {
    youtube: [{ title: 'SQL Joins Explained - freeCodeCamp', url: 'https://www.youtube.com/watch?v=9yeEl15Xe1k' }],
    docs: [{ title: 'PostgreSQL Joins Documentation', url: 'https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN' }],
    blogs: [{ title: 'Visual Guide to SQL Joins - Coding Horror Blog', url: 'https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/' }]
  },
  'group-by': {
    youtube: [{ title: 'SQL GROUP BY & Aggregates - TechTFQ', url: 'https://www.youtube.com/watch?v=Nidk2c4YqL0' }],
    docs: [{ title: 'PostgreSQL GROUP BY Clause', url: 'https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-GROUP' }],
    blogs: [{ title: 'Understanding SQL Aggregations - GeeksforGeeks Article', url: 'https://www.geeksforgeeks.org/sql-group-by/' }]
  },
  'subqueries': {
    youtube: [{ title: 'SQL Subqueries Tutorial - TechTFQ', url: 'https://www.youtube.com/watch?v=nOItI0v6p50' }],
    docs: [{ title: 'PostgreSQL Subquery Expressions', url: 'https://www.postgresql.org/docs/current/functions-subquery.html' }],
    blogs: [{ title: 'Mastering SQL Subqueries - Prisma Dataguide', url: 'https://www.prisma.io/dataguide/queries/sql-subqueries' }]
  },
  'mongodb-crud': {
    youtube: [{ title: 'MongoDB CRUD Operations Tutorial', url: 'https://www.youtube.com/watch?v=FwYsObCluHw' }],
    docs: [{ title: 'MongoDB CRUD Specification', url: 'https://www.mongodb.com/docs/manual/crud/' }],
    blogs: [{ title: 'Descriptive Guide to MongoDB CRUD - W3Schools', url: 'https://www.w3schools.com/mongodb/mongodb_crud.php' }]
  },
  'mongodb-queries': {
    youtube: [{ title: 'MongoDB Query Operators - Traversy Media', url: 'https://www.youtube.com/watch?v=GFY2pSsnf6M' }],
    docs: [{ title: 'MongoDB Query Operators Reference', url: 'https://www.mongodb.com/docs/manual/reference/operator/query/' }],
    blogs: [{ title: 'MongoDB Filtering Operators - GeeksforGeeks Article', url: 'https://www.geeksforgeeks.org/mongodb-query-operators/' }]
  },
  'indexing': {
    youtube: [{ title: 'Database Indexing Explained - Husayn Nasser', url: 'https://www.youtube.com/watch?v=fsG1XZOBKC0' }],
    docs: [{ title: 'PostgreSQL Indexes Reference', url: 'https://www.postgresql.org/docs/current/indexes.html' }],
    blogs: [{ title: 'How Indexes Work in Databases - Prisma Guide', url: 'https://www.prisma.io/dataguide/types/relational/what-are-database-indexes' }]
  },
  'query-optimization': {
    youtube: [{ title: 'Database Query Optimization - Husayn Nasser', url: 'https://www.youtube.com/watch?v=Kz69Y8w8j9g' }],
    docs: [{ title: 'PostgreSQL Performance Tuning Guide', url: 'https://wiki.postgresql.org/wiki/Performance_Optimization' }],
    blogs: [{ title: 'SQL Query Optimization Best Practices - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/sql-query-optimization/' }]
  },
  'transactions': {
    youtube: [{ title: 'Database Transactions & Concurrency - Husayn Nasser', url: 'https://www.youtube.com/watch?v=pomxJOFleNk' }],
    docs: [{ title: 'PostgreSQL Transactions and Locking', url: 'https://www.postgresql.org/docs/current/tutorial-transactions.html' }],
    blogs: [{ title: 'What is a Database Transaction? - Prisma Guide', url: 'https://www.prisma.io/dataguide/concepts/database-transactions' }]
  },
  'acid-vs-base': {
    youtube: [{ title: 'ACID vs BASE Explained - Fireship', url: 'https://www.youtube.com/watch?v=yPf5GudnEeo' }],
    docs: [{ title: 'CAP Theorem and ACID/BASE - IBM', url: 'https://www.ibm.com/topics/cap-theorem' }],
    blogs: [{ title: 'ACID vs BASE Consistency Models - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/difference-between-acid-and-base-properties-in-dbms/' }]
  },
  'mongodb-aggregation': {
    youtube: [{ title: 'MongoDB Aggregation Pipeline - freeCodeCamp', url: 'https://www.youtube.com/watch?v=Kk6Er0c7srU' }],
    docs: [{ title: 'MongoDB Aggregation Stage Reference', url: 'https://www.mongodb.com/docs/manual/aggregation/' }],
    blogs: [{ title: 'Complete Guide to MongoDB Aggregations - W3Schools', url: 'https://www.w3schools.com/mongodb/mongodb_aggregations.php' }]
  },
  'scaling-systems': {
    youtube: [{ title: 'Sharding & Replication Explained - ByteByteGo', url: 'https://www.youtube.com/watch?v=mQGg5S3cswc' }],
    docs: [{ title: 'MongoDB Sharding Documentation', url: 'https://www.mongodb.com/docs/manual/sharding/' }],
    blogs: [{ title: 'Scaling Databases: Replication vs Sharding - Prisma', url: 'https://www.prisma.io/dataguide/scaling/database-scaling-strategies' }]
  },
  'window-functions': {
    youtube: [{ title: 'SQL Window Functions Tutorial - TechTFQ', url: 'https://www.youtube.com/watch?v=Ww71knvhQ-s' }],
    docs: [{ title: 'PostgreSQL Window Functions Manual', url: 'https://www.postgresql.org/docs/current/tutorial-window.html' }],
    blogs: [{ title: 'Mastering SQL Window Functions - GeeksforGeeks Article', url: 'https://www.geeksforgeeks.org/sql-window-functions/' }]
  },
  'views': {
    youtube: [{ title: 'SQL Views Explained - kudvenkat', url: 'https://www.youtube.com/watch?v=q6g4hT_W9H4' }],
    docs: [{ title: 'PostgreSQL CREATE VIEW Manual', url: 'https://www.postgresql.org/docs/current/sql-createview.html' }],
    blogs: [{ title: 'Working with SQL Views - GeeksforGeeks Article', url: 'https://www.geeksforgeeks.org/sql-views/' }]
  },
  'stored-procedures': {
    youtube: [{ title: 'Stored Procedures & Functions - TechTFQ', url: 'https://www.youtube.com/watch?v=Yf5-S7X0wG8' }],
    docs: [{ title: 'PostgreSQL User-Defined Procedures Docs', url: 'https://www.postgresql.org/docs/current/sql-createprocedure.html' }],
    blogs: [{ title: 'SQL Stored Procedures Guide - W3Schools Article', url: 'https://www.w3schools.com/sql/sql_stored_procedures.asp' }]
  },
  'triggers': {
    youtube: [{ title: 'Database Triggers Tutorial - kudvenkat', url: 'https://www.youtube.com/watch?v=2t2Lp2D5Vco' }],
    docs: [{ title: 'PostgreSQL Trigger Creation Docs', url: 'https://www.postgresql.org/docs/current/sql-createtrigger.html' }],
    blogs: [{ title: 'Understanding Database Triggers - GeeksforGeeks Article', url: 'https://www.geeksforgeeks.org/sql-trigger-student-database/' }]
  },
  'constraints': {
    youtube: [{ title: 'SQL Constraints & Keys - freeCodeCamp', url: 'https://www.youtube.com/watch?v=O135-eO4exs' }],
    docs: [{ title: 'PostgreSQL Data Constraints Reference Docs', url: 'https://www.postgresql.org/docs/current/ddl-constraints.html' }],
    blogs: [{ title: 'SQL Constraints Overview - W3Schools Article', url: 'https://www.w3schools.com/sql/sql_constraints.asp' }]
  },
  'normalization': {
    youtube: [{ title: 'Database Normalization 1NF/2NF/3NF - Gate Smashers', url: 'https://www.youtube.com/watch?v=5gr1O0f2q3A' }],
    docs: [{ title: 'Database Normalization Rules - Microsoft Docs', url: 'https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description' }],
    blogs: [{ title: 'Database Normalization Guide - GeeksforGeeks Article', url: 'https://www.geeksforgeeks.org/dbms-normalization-1nf-2nf-3nf-bcnf/' }]
  },
  'schema-design': {
    youtube: [{ title: 'Database Schema Design & Relationships - Mosh', url: 'https://www.youtube.com/watch?v=Kz69Y8w8j9g' }],
    docs: [{ title: 'PostgreSQL Schema Documentation Manual', url: 'https://www.postgresql.org/docs/current/ddl-schemas.html' }],
    blogs: [{ title: 'Relational Database Schema Design Best Practices - Prisma', url: 'https://www.prisma.io/dataguide/postgresql/schema-design-postgresql' }]
  },
  'embedding-referencing': {
    youtube: [{ title: 'MongoDB Data Modeling: Embedding vs Referencing', url: 'https://www.youtube.com/watch?v=leNCfU5SYR8' }],
    docs: [{ title: 'MongoDB Model Relationships Docs Manual', url: 'https://www.mongodb.com/docs/manual/core/data-modeling-introduction/' }],
    blogs: [{ title: 'Embedding vs Referencing in MongoDB - GeeksforGeeks Article', url: 'https://www.geeksforgeeks.org/embedding-vs-referencing-in-mongodb/' }]
  },
  'indexing-deep': {
    youtube: [{ title: 'B-Trees & Database Indexing Deep Dive', url: 'https://www.youtube.com/watch?v=aZjYr87r1b8' }],
    docs: [{ title: 'MongoDB Indexing Deep Dive Manual Guide', url: 'https://www.mongodb.com/docs/manual/indexes/' }],
    blogs: [{ title: 'Database Indexes Under the Hood - PlanetScale Blog', url: 'https://planetscale.com/blog/how-does-database-indexing-work' }]
  },
  'performance-tuning': {
    youtube: [{ title: 'Database Tuning & Explain Plan - Husayn Nasser', url: 'https://www.youtube.com/watch?v=pomxJOFleNk' }],
    docs: [{ title: 'PostgreSQL Explain Documentation Manual', url: 'https://www.postgresql.org/docs/current/sql-explain.html' }],
    blogs: [{ title: 'Database Performance Tuning Best Practices - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/database-tuning-in-dbms/' }]
  },
  'cap-theorem': {
    youtube: [{ title: 'CAP Theorem Simplified - Gaurav Sen', url: 'https://www.youtube.com/watch?v=k-Yaq8AH194' }],
    docs: [{ title: 'CAP Theorem Definition - IBM Topics Reference', url: 'https://www.ibm.com/topics/cap-theorem' }],
    blogs: [{ title: 'Understanding CAP Theorem in Distributed Databases - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/the-cap-theorem-in-dbms/' }]
  },
  'data-modeling': {
    youtube: [{ title: 'Data Modeling 101 - freeCodeCamp', url: 'https://www.youtube.com/watch?v=yPf5GudnEeo' }],
    docs: [{ title: 'MongoDB Data Modeling Specifications Manual', url: 'https://www.mongodb.com/docs/manual/core/data-model-design/' }],
    blogs: [{ title: 'A Complete Guide to Database Data Modeling - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/data-modeling-in-dbms/' }]
  },
  'real-world-arch': {
    youtube: [{ title: 'How WhatsApp/Netflix Scaled Databases - ByteByteGo', url: 'https://www.youtube.com/watch?v=mQGg5S3cswc' }],
    docs: [{ title: 'AWS Distributed Database Systems Docs Manual', url: 'https://aws.amazon.com/rds/features/multi-az/' }],
    blogs: [{ title: 'Real World Database Architectures Case Studies - Prisma', url: 'https://www.prisma.io/dataguide/scaling/database-scaling-strategies' }]
  }
};

const filePath = path.join(__dirname, '..', 'client', 'src', 'modules', 'database-course', 'data', 'topicContent.js');
let content = fs.readFileSync(filePath, 'utf8');

// For each key in resourcesMap, let's find the closing interview section:
// interview: [
//   ...
// ]
// We will replace it with:
// interview: [
//   ...
// ],
// resources: { ... }

// Let's split content into topic blocks. We know that each topic is structured like:
// 'topic-key': {
//   ...
//   interview: [
//     ...
//   ],
// },

for (const [key, res] of Object.entries(resourcesMap)) {
  // Let's find: 'key': {
  const keyIdx = content.indexOf(`'${key}': {`);
  if (keyIdx === -1) {
    console.error(`Could not find key ${key}`);
    continue;
  }
  
  // Find the interview array and the closing `],` of this topic.
  // Since each topic block is separated by empty lines or follows another, we can search from keyIdx onwards.
  const sub = content.substring(keyIdx);
  const interviewIdx = sub.indexOf('interview: [');
  if (interviewIdx === -1) {
    console.error(`Could not find interview array for key ${key}`);
    continue;
  }
  
  // Find the closing `]` of the interview array that is followed by `\n  }` or `\n},` or similar.
  // We can scan brackets starting from interviewIdx.
  let bracketCount = 0;
  let closedIdx = -1;
  for (let i = interviewIdx; i < sub.length; i++) {
    if (sub[i] === '[') {
      bracketCount++;
    } else if (sub[i] === ']') {
      bracketCount--;
      if (bracketCount === 0) {
        closedIdx = i;
        break;
      }
    }
  }
  
  if (closedIdx === -1) {
    console.error(`Could not find closing bracket for key ${key}`);
    continue;
  }
  
  // Now, we want to insert the resources block.
  // We insert it right after the closing `]` of the interview array.
  // For example, if it is `],`, we change it to `],\n    resources: ...`
  const beforeInsert = sub.substring(0, closedIdx + 1);
  const afterInsert = sub.substring(closedIdx + 1);
  
  const resourcesStr = `,\n    resources: {\n      youtube: ${JSON.stringify(res.youtube, null, 8)},\n      docs: ${JSON.stringify(res.docs, null, 8)},\n      blogs: ${JSON.stringify(res.blogs, null, 8)}\n    }`;
  
  const newSub = beforeInsert + resourcesStr + afterInsert;
  
  // Replace sub in original content
  content = content.substring(0, keyIdx) + newSub;
  console.log(`Successfully added resources to ${key}`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Finished updating topicContent.js!');
