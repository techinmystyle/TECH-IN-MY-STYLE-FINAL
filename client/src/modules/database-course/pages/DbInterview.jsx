import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faDatabase, faLeaf, faBolt, faShieldAlt, faFilter } from '@fortawesome/free-solid-svg-icons';
import DbFooter from '../components/DbFooter';

const categories = [
  {
    id: 'sql-basics',
    label: 'SQL Fundamentals',
    icon: faDatabase,
    color: '#00f0ff',
    questions: [
      { q: 'What is the difference between WHERE and HAVING?', a: 'WHERE filters rows before grouping. HAVING filters groups after GROUP BY. You cannot use aggregate functions in WHERE.' },
      { q: 'What is the order of SQL clause execution?', a: 'FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT/OFFSET' },
      { q: 'What is a PRIMARY KEY?', a: 'A PRIMARY KEY uniquely identifies each row in a table. It cannot be NULL and must be unique. A table can have only one primary key.' },
      { q: 'What is a FOREIGN KEY?', a: 'A FOREIGN KEY is a column that references the PRIMARY KEY of another table, enforcing referential integrity between tables.' },
      { q: 'What is the difference between CHAR and VARCHAR?', a: 'CHAR is fixed-length — always uses the defined space. VARCHAR is variable-length — uses only as much space as needed. CHAR is faster for fixed-size data.' },
      { q: 'What is a NULL value in SQL?', a: 'NULL represents missing or unknown data. It is not zero or empty string. Use IS NULL / IS NOT NULL to check for NULLs.' },
      { q: 'What is the difference between UNION and UNION ALL?', a: 'UNION removes duplicate rows. UNION ALL keeps all rows including duplicates. UNION ALL is faster since it skips deduplication.' },
      { q: 'What is a subquery?', a: 'A subquery is a query nested inside another query. It can appear in SELECT, FROM, or WHERE clauses. Correlated subqueries reference the outer query.' },
    ],
  },
  {
    id: 'sql-advanced',
    label: 'SQL Advanced',
    icon: faBolt,
    color: '#ff9f1c',
    questions: [
      { q: 'What are window functions?', a: 'Window functions perform calculations across a set of rows related to the current row without collapsing them. They use OVER() with optional PARTITION BY and ORDER BY.' },
      { q: 'What is the difference between RANK() and DENSE_RANK()?', a: 'RANK() leaves gaps after ties (1,1,3). DENSE_RANK() does not leave gaps (1,1,2). ROW_NUMBER() always assigns unique sequential numbers.' },
      { q: 'What is a CTE (Common Table Expression)?', a: 'A CTE is a temporary named result set defined with WITH clause. It improves readability and can be recursive for hierarchical data.' },
      { q: 'What is normalization?', a: 'Normalization organizes tables to reduce redundancy. 1NF: atomic values. 2NF: no partial dependencies. 3NF: no transitive dependencies. BCNF: every determinant is a candidate key.' },
      { q: 'What is an index and how does it work?', a: 'An index is a data structure (usually B-tree) that speeds up data retrieval. It stores sorted column values with pointers to rows. Trade-off: faster reads, slower writes.' },
      { q: 'What is a stored procedure?', a: 'A stored procedure is a precompiled set of SQL statements stored in the database. It can accept parameters, contain logic, and be reused. Reduces network traffic.' },
      { q: 'What is a trigger?', a: 'A trigger is a stored procedure that automatically executes in response to INSERT, UPDATE, or DELETE events on a table. Used for auditing, validation, or cascading changes.' },
      { q: 'What is query optimization?', a: 'Query optimization involves rewriting queries and using indexes to reduce execution time. Key techniques: use indexes, avoid SELECT *, use JOINs instead of subqueries, analyze execution plans.' },
    ],
  },
  {
    id: 'mongodb',
    label: 'MongoDB',
    icon: faLeaf,
    color: '#39ff14',
    questions: [
      { q: 'What is MongoDB?', a: 'MongoDB is a NoSQL document database that stores data as BSON (Binary JSON) documents. It is schema-flexible, horizontally scalable, and supports rich queries.' },
      { q: 'What is the difference between embedded documents and references?', a: 'Embedded documents store related data in a single document (denormalized) — fast reads, data duplication. References store related data in separate collections (normalized) — avoids duplication, requires $lookup.' },
      { q: 'What is the aggregation pipeline?', a: 'The aggregation pipeline processes documents through stages: $match (filter), $group (aggregate), $sort, $project (reshape), $lookup (join), $unwind (flatten arrays).' },
      { q: 'What is an index in MongoDB?', a: 'MongoDB indexes use B-tree structure. Types: single field, compound, multikey (arrays), text, geospatial, hashed. Use explain() to analyze query performance.' },
      { q: 'What is the difference between find() and aggregate()?', a: 'find() is for simple queries with filter and projection. aggregate() is for complex data transformations using a pipeline of stages — grouping, joining, reshaping.' },
      { q: 'What is a replica set?', a: 'A replica set is a group of MongoDB instances that maintain the same data. One primary receives writes; secondaries replicate data. Provides high availability and automatic failover.' },
      { q: 'What is sharding in MongoDB?', a: 'Sharding distributes data across multiple machines (shards) using a shard key. It enables horizontal scaling for large datasets. Each shard is a replica set.' },
      { q: 'What is the $lookup stage?', a: '$lookup performs a left outer join between collections. It matches documents from a foreign collection and adds them as an array field. Equivalent to SQL LEFT JOIN.' },
    ],
  },
  {
    id: 'concepts',
    label: 'Core Concepts',
    icon: faShieldAlt,
    color: '#ff4444',
    questions: [
      { q: 'What is ACID?', a: 'Atomicity: all-or-nothing. Consistency: data remains valid. Isolation: concurrent transactions don\'t interfere. Durability: committed data persists even after crashes.' },
      { q: 'What is the CAP theorem?', a: 'A distributed system can only guarantee 2 of 3: Consistency (every read gets latest write), Availability (every request gets a response), Partition Tolerance (works despite network splits).' },
      { q: 'What is the difference between horizontal and vertical scaling?', a: 'Vertical scaling: add more CPU/RAM to one server. Horizontal scaling: add more servers. Horizontal is preferred for distributed systems; vertical has hardware limits.' },
      { q: 'What is a transaction?', a: 'A transaction is a sequence of operations treated as a single unit. It either fully commits or fully rolls back, ensuring data consistency.' },
      { q: 'What is eventual consistency?', a: 'In distributed systems, eventual consistency means all nodes will eventually have the same data, but may temporarily differ. Used in AP systems like Cassandra and DynamoDB.' },
      { q: 'What is data modeling?', a: 'Data modeling is the process of defining how data is stored, organized, and related. It involves choosing between normalized (SQL) or denormalized (NoSQL) structures based on access patterns.' },
      { q: 'What is a deadlock?', a: 'A deadlock occurs when two transactions each hold a lock the other needs, causing both to wait indefinitely. DBMSs detect and resolve deadlocks by rolling back one transaction.' },
      { q: 'What is connection pooling?', a: 'Connection pooling maintains a cache of database connections that can be reused. It reduces the overhead of creating new connections for each request, improving performance.' },
    ],
  },
  {
    id: 'performance',
    label: 'Performance',
    icon: faFilter,
    color: '#a855f7',
    questions: [
      { q: 'How do you optimize a slow SQL query?', a: '1. Check execution plan (EXPLAIN). 2. Add indexes on WHERE/JOIN columns. 3. Avoid SELECT *. 4. Rewrite subqueries as JOINs. 5. Use query caching. 6. Partition large tables.' },
      { q: 'What is an execution plan?', a: 'An execution plan shows how the database engine will execute a query — which indexes it uses, join methods, estimated rows. Use EXPLAIN or EXPLAIN ANALYZE to view it.' },
      { q: 'When should you NOT use an index?', a: 'Avoid indexes on: small tables (full scan is faster), columns with low cardinality (e.g., boolean), columns rarely used in WHERE/JOIN, tables with heavy write operations.' },
      { q: 'What is query caching?', a: 'Query caching stores the result of a query so identical queries return cached results. Useful for read-heavy workloads. Invalidated when underlying data changes.' },
      { q: 'What is database partitioning?', a: 'Partitioning divides a large table into smaller pieces. Horizontal partitioning (sharding): splits rows. Vertical partitioning: splits columns. Improves query performance on large datasets.' },
      { q: 'What is the N+1 query problem?', a: 'N+1 occurs when fetching N records then making 1 additional query per record. Solution: use JOINs or eager loading to fetch all data in one query.' },
    ],
  },
];

function AccordionItem({ item, color, isOpen, onToggle }) {
  return (
    <div style={{ border: `1px solid ${isOpen ? color + '50' : 'var(--border-dim)'}`, marginBottom: 4, background: isOpen ? `${color}08` : 'var(--bg-2)', transition: 'all 0.2s', borderLeft: isOpen ? `3px solid ${color}` : '3px solid transparent' }}>
      <button onClick={onToggle} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '0.9rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', textAlign: 'left' }}>
        <span style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: isOpen ? color : 'var(--text-primary)' }}>{item.q}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ color: color, fontSize: '0.75rem', flexShrink: 0 }}>
          <FontAwesomeIcon icon={faChevronDown} />
        </motion.span>
      </button>
      <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }} style={{ overflow: 'hidden' }}>
        <div style={{ padding: '0 1rem 0.9rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, borderTop: `1px solid ${color}20` }}>
          <div style={{ paddingTop: '0.75rem' }}>{item.a}</div>
        </div>
      </motion.div>
    </div>
  );
}

export default function DbInterview() {
  const [activeCategory, setActiveCategory] = useState('sql-basics');
  const [openIdx, setOpenIdx] = useState(null);
  const [search, setSearch] = useState('');

  const cat = categories.find(c => c.id === activeCategory);
  const filtered = cat?.questions.filter(q =>
    !search || q.q.toLowerCase().includes(search.toLowerCase()) || q.a.toLowerCase().includes(search.toLowerCase())
  ) || [];

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '2rem' }}>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '2rem' }}>
        <p className="section-label">Intelligence Briefing</p>
        <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 900, letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          INTERVIEW <span className="rog-glow-text">INTEL</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Master the questions. Dominate the interview.</p>
      </motion.div>

      {/* Search */}
      <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
        <input
          value={search}
          onChange={e => { setSearch(e.target.value); setOpenIdx(null); }}
          placeholder="Search questions..."
          style={{
            width: '100%', background: 'var(--bg-2)', border: '1px solid var(--border-mid)',
            borderLeft: '3px solid var(--rog-green)',
            color: 'var(--text-primary)', fontFamily: 'Barlow, sans-serif', fontSize: '0.95rem',
            padding: '0.7rem 1rem', outline: 'none', transition: 'border-color 0.2s',
          }}
        />
      </div>

      {/* Category tabs */}
      <div style={{ display: 'flex', gap: '1px', flexWrap: 'wrap', marginBottom: '1.5rem', background: 'var(--border-dim)' }}>
        {categories.map(c => (
          <button key={c.id} onClick={() => { setActiveCategory(c.id); setOpenIdx(null); setSearch(''); }}
            style={{
              padding: '0.55rem 1.1rem', cursor: 'pointer',
              fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.78rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase', border: 'none',
              background: activeCategory === c.id ? `${c.color}15` : 'var(--bg-2)',
              color: activeCategory === c.id ? c.color : 'var(--text-secondary)',
              borderBottom: activeCategory === c.id ? `2px solid ${c.color}` : '2px solid transparent',
              transition: 'all 0.15s',
            }}>
            <FontAwesomeIcon icon={c.icon} style={{ marginRight: '0.4rem' }} />
            {c.label}
          </button>
        ))}
      </div>

      {/* Questions */}
      <motion.div key={activeCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FontAwesomeIcon icon={cat?.icon} style={{ color: cat?.color, fontSize: '1rem' }} />
            <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.85rem', fontWeight: 800, color: cat?.color, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{cat?.label}</span>
          </div>
          <span style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.72rem', color: 'var(--text-dim)' }}>{filtered.length} QUESTIONS</span>
        </div>

        {filtered.length === 0 && (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)', background: 'var(--bg-2)', border: '1px solid var(--border-dim)' }}>
            No questions match your search.
          </div>
        )}

        {filtered.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }}>
            <AccordionItem
              item={item}
              color={cat?.color || 'var(--rog-green)'}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1px', background: 'var(--border-dim)' }}>
        {categories.map(c => (
          <div key={c.id} style={{ padding: '1rem', textAlign: 'center', background: 'var(--bg-2)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: c.color, opacity: 0.6 }} />
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.8rem', fontWeight: 900, color: c.color, textShadow: `0 0 10px ${c.color}60` }}>{c.questions.length}</div>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '0.2rem' }}>{c.label}</div>
          </div>
        ))}
      </div>
      <DbFooter />
    </div>
  );
}
