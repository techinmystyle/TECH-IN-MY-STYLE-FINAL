const fs = require('fs');
const path = require('path');

const resourcesMap = {
  'arrays': {
    youtube: [
      { title: 'Static & Dynamic Arrays - WilliamFiset', url: 'https://www.youtube.com/watch?v=1d9IQRE8Loo' },
      { title: 'Arrays & Hashing Playlist - NeetCode', url: 'https://www.youtube.com/watch?v=KLlXCFG5TnA&list=PLot-Xpkr5xuh737C5L4ptT67Wpo9Zg5_F' }
    ],
    docs: [
      { title: 'Python List Implementation Details', url: 'https://docs.python.org/3/tutorial/datastructures.html' },
      { title: 'Java Array Documentation - Oracle', url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html' }
    ],
    blogs: [
      { title: 'Descriptive Introduction to Arrays - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/what-is-array/' },
      { title: 'LeetCode Arrays Explore Card', url: 'https://leetcode.com/explore/learn/card/fun-with-arrays/' }
    ]
  },
  'strings': {
    youtube: [
      { title: 'String Algorithms Overview - Abdul Bari', url: 'https://www.youtube.com/watch?v=V5hZOwSh108' },
      { title: 'LeetCode String Patterns - NeetCode', url: 'https://www.youtube.com/watch?v=KLlXCFG5TnA' }
    ],
    docs: [
      { title: 'Java String API Docs - Oracle', url: 'https://docs.oracle.com/javase/8/docs/api/java/lang/String.html' },
      { title: 'MDN String Reference - Mozilla', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String' }
    ],
    blogs: [
      { title: 'String Data Structure Guides - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/string-data-structure/' },
      { title: 'Pattern Matching Algorithms Explained - Programiz', url: 'https://www.programiz.com/dsa/naive-string-matching-algorithm' }
    ]
  },
  'recursion': {
    youtube: [
      { title: 'Recursion Demystified - Reducible', url: 'https://www.youtube.com/watch?v=ngCos392W4w' },
      { title: 'Recursion & Backtracking - Aditya Verma', url: 'https://www.youtube.com/watch?v=kHi1DUhp9KP' }
    ],
    docs: [
      { title: 'Recursion in Algorithms - Princeton CS', url: 'https://introcs.cs.princeton.edu/java/23recursion/' },
      { title: 'Python Recursion Limits & Customization', url: 'https://docs.python.org/3/library/sys.html#sys.setrecursionlimit' }
    ],
    blogs: [
      { title: 'How Recursion Works: A Visual Guide - freeCodeCamp', url: 'https://www.freecodecamp.org/news/how-recursion-works-explained-with-diagrams/' },
      { title: 'Recursive Algorithms Guide - Khan Academy', url: 'https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion' }
    ]
  },
  'sorting': {
    youtube: [
      { title: 'Merge Sort in 2 Minutes - Michael Sambol', url: 'https://www.youtube.com/watch?v=4VqmGXwpLqc' },
      { title: 'Quick Sort Algorithm Tutorial - Abdul Bari', url: 'https://www.youtube.com/watch?v=7h1s2SojIRw' }
    ],
    docs: [
      { title: 'Python Sorting HOWTO Guide', url: 'https://docs.python.org/3/howto/sorting.html' },
      { title: 'Java Arrays.sort() Specification', url: 'https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#sort-int:A-' }
    ],
    blogs: [
      { title: 'Visual Guide to Sorting Algorithms - Visualgo', url: 'https://visualgo.net/en/sorting' },
      { title: 'Analysis of Sorting Algorithms - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/sorting-algorithms/' }
    ]
  },
  'binary-search': {
    youtube: [
      { title: 'Binary Search Tutorial - Errichto', url: 'https://www.youtube.com/watch?v=GU7D9We2xEc' },
      { title: 'Binary Search Playlist & Tips - NeetCode', url: 'https://www.youtube.com/watch?v=s4DPM8ct1Ls' }
    ],
    docs: [
      { title: 'Python bisect Module Documentation', url: 'https://docs.python.org/3/library/bisect.html' },
      { title: 'C++ std::binary_search Reference', url: 'https://en.cppreference.com/w/cpp/algorithm/binary_search' }
    ],
    blogs: [
      { title: 'Binary Search 101 Guide - LeetCode Discuss', url: 'https://leetcode.com/discuss/general-discussion/786126/binary-search-101' },
      { title: 'Detailed Guide to Binary Search - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/binary-search/' }
    ]
  },
  'two-pointer': {
    youtube: [
      { title: 'Two Pointers Concept - NeetCode', url: 'https://www.youtube.com/watch?v=cHP8LjQD5b4' },
      { title: 'Two Pointer Technique Crash Course - Nick White', url: 'https://www.youtube.com/watch?v=2wB1UCkD48o' }
    ],
    docs: [
      { title: 'LeetCode Two Pointers Explore Card', url: 'https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/' }
    ],
    blogs: [
      { title: 'Two Pointer Technique Overview - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/two-pointers-technique/' },
      { title: 'Mastering the Two-Pointer Pattern - Medium Article', url: 'https://hackernoon.com/two-pointer-technique-solving-array-problems-with-ease' }
    ]
  },
  'prefix-sum': {
    youtube: [
      { title: 'Prefix Sum Array & Range Queries - Luv', url: 'https://www.youtube.com/watch?v=4jY56s1skDU' },
      { title: 'Prefix Sum Problems Deep Dive - NeetCode', url: 'https://www.youtube.com/watch?v=2pndA151yvM' }
    ],
    docs: [
      { title: 'Subarray Sum Equals K Reference - LeetCode', url: 'https://leetcode.com/problems/subarray-sum-equals-k/' }
    ],
    blogs: [
      { title: 'Prefix Sum Array Tutorial - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/prefix-sum-array-implementation-and-applications/' },
      { title: 'Prefix Sums Tutorial with Visuals - Codeforces', url: 'https://codeforces.com/blog/entry/78216' }
    ]
  },
  'linked-list': {
    youtube: [
      { title: 'Singly & Doubly Linked Lists - WilliamFiset', url: 'https://www.youtube.com/watch?v=58YAxp9WAek' },
      { title: 'Linked List Interview Prep - NeetCode', url: 'https://www.youtube.com/watch?v=G0_I-ZF0S38' }
    ],
    docs: [
      { title: 'Java LinkedList API Reference - Oracle', url: 'https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html' }
    ],
    blogs: [
      { title: 'Linked List Data Structure - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/data-structures/linked-list/' },
      { title: 'Linked List Conceptual Guide - tutorialspoint', url: 'https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm' }
    ]
  },
  'stacks': {
    youtube: [
      { title: 'Stack Data Structure Tutorial - WilliamFiset', url: 'https://www.youtube.com/watch?v=F1F2weyP95s' },
      { title: 'Stack Playlist & LeetCode - NeetCode', url: 'https://www.youtube.com/watch?v=lUe2nIr4n8g' }
    ],
    docs: [
      { title: 'C++ std::stack Reference Docs', url: 'https://en.cppreference.com/w/cpp/container/stack' },
      { title: 'Java Stack API Reference - Oracle', url: 'https://docs.oracle.com/javase/8/docs/api/java/util/Stack.html' }
    ],
    blogs: [
      { title: 'Stack Data Structure In-Depth - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/stack-data-structure/' },
      { title: 'Stack Implementation Guide - Programiz', url: 'https://www.programiz.com/dsa/stack' }
    ]
  },
  'queues': {
    youtube: [
      { title: 'Queue Data Structure Explained - WilliamFiset', url: 'https://www.youtube.com/watch?v=jtKM7I9Z1Zk' },
      { title: 'Queue Design & Operations - NeetCode', url: 'https://www.youtube.com/watch?v=mDCi1AnMDd0' }
    ],
    docs: [
      { title: 'Python collections.deque Class Docs', url: 'https://docs.python.org/3/library/collections.html#collections.deque' },
      { title: 'Java Queue Interface - Oracle Docs', url: 'https://docs.oracle.com/javase/8/docs/api/java/util/Queue.html' }
    ],
    blogs: [
      { title: 'Queue Data Structure and Operations - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/queue-data-structure/' },
      { title: 'Queues and Deques Overview - Programiz', url: 'https://www.programiz.com/dsa/queue' }
    ]
  },
  'hashing': {
    youtube: [
      { title: 'Hashing Techniques & Collisions - Abdul Bari', url: 'https://www.youtube.com/watch?v=mFY0J5IvNy4' },
      { title: 'Hash Table Design & Problems - NeetCode', url: 'https://www.youtube.com/watch?v=UaCy54AdNyA' }
    ],
    docs: [
      { title: 'Java HashMap Internals - Oracle Docs', url: 'https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html' },
      { title: 'Python dict Hash Table Details', url: 'https://docs.python.org/3/c-api/dict.html' }
    ],
    blogs: [
      { title: 'Hashing Data Structure Tutorial - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/hashing-data-structure/' },
      { title: 'Hash Tables Explore Card - LeetCode Explore', url: 'https://leetcode.com/explore/learn/card/hash-table/' }
    ]
  },
  'heaps': {
    youtube: [
      { title: 'Binary Heaps & Heap Sort - Abdul Bari', url: 'https://www.youtube.com/watch?v=H5kA3yqObOM' },
      { title: 'Binary Heap Priority Queue - WilliamFiset', url: 'https://www.youtube.com/watch?v=t0Cq6tVNRBA' }
    ],
    docs: [
      { title: 'Python heapq Module Documentation', url: 'https://docs.python.org/3/library/heapq.html' },
      { title: 'Java PriorityQueue API Docs - Oracle', url: 'https://docs.oracle.com/javase/8/docs/api/java/util/PriorityQueue.html' }
    ],
    blogs: [
      { title: 'Binary Heap In-Depth Guide - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/binary-heap/' },
      { title: 'Heaps and Priority Queues - Programiz', url: 'https://www.programiz.com/dsa/heap-data-structure' }
    ]
  },
  'sliding-window': {
    youtube: [
      { title: 'Sliding Window Playlist - Aditya Verma', url: 'https://www.youtube.com/watch?v=EHCGAJxPk3Y&list=PL_z_8CaSLPWeM8OTgIpHdy7F5wCSz7EbA' },
      { title: 'Sliding Window Concept & LeetCode - NeetCode', url: 'https://www.youtube.com/watch?v=s5eC0Ff5nJg' }
    ],
    docs: [
      { title: 'LeetCode Sliding Window Patterns Card', url: 'https://leetcode.com/explore/learn/card/sliding-window/' }
    ],
    blogs: [
      { title: 'Sliding Window Technique Explained - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/window-sliding-technique/' },
      { title: 'Mastering the Sliding Window Pattern - Medium Guide', url: 'https://medium.com/tech-life-prog/sliding-window-algorithm-pattern-dec37a9d0f41' }
    ]
  },
  'bit-manipulation': {
    youtube: [
      { title: 'Bit Manipulation Tutorial - Errichto', url: 'https://www.youtube.com/watch?v=NLKQEOgBAnw' },
      { title: 'Bit Manipulation Playlist - NeetCode', url: 'https://www.youtube.com/watch?v=KLlXCFG5TnA&list=PLot-Xpkr5xuhsMC3V0Cy0t436814S4323' }
    ],
    docs: [
      { title: 'Python Bitwise Operations Reference Docs', url: 'https://docs.python.org/3/reference/expressions.html#binary-bitwise-operations' }
    ],
    blogs: [
      { title: 'Bit Manipulation Algorithms - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/bit-manipulation-important-tactics/' },
      { title: 'Bits & Binary Manipulations - HackerEarth', url: 'https://www.hackerearth.com/practice/basic-programming/bit-manipulation/basics-of-bit-manipulation/tutorial/' }
    ]
  },
  'trees': {
    youtube: [
      { title: 'Binary Trees & Traversals - WilliamFiset', url: 'https://www.youtube.com/watch?v=PrU0052oUOk' },
      { title: 'Tree Data Structures Playlist - NeetCode', url: 'https://www.youtube.com/watch?v=ihj4IQGZSAg' }
    ],
    docs: [
      { title: 'Java TreeMap API Documentation - Oracle', url: 'https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html' },
      { title: 'C++ std::map Reference Manual', url: 'https://en.cppreference.com/w/cpp/container/map' }
    ],
    blogs: [
      { title: 'Binary Tree Data Structure Guides - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
      { title: 'Tree Visualizations & Algorithms - VisuAlgo', url: 'https://visualgo.net/en/bst' }
    ]
  },
  'graphs': {
    youtube: [
      { title: 'Graph Theory & Algorithms - WilliamFiset', url: 'https://www.youtube.com/watch?v=09_LlHjoEiY' },
      { title: 'Graph Algorithms Prep Playlist - NeetCode', url: 'https://www.youtube.com/watch?v=gXgEDyodO38' }
    ],
    docs: [
      { title: 'Boost Graph Library (BGL) - C++ Reference', url: 'https://www.boost.org/doc/libs/release/libs/graph/doc/' }
    ],
    blogs: [
      { title: 'Graph Representations & Traversals - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
      { title: 'Interactive Graph Traversals - Khan Academy', url: 'https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs' }
    ]
  },
  'dp': {
    youtube: [
      { title: 'Dynamic Programming Introduction - Abdul Bari', url: 'https://www.youtube.com/watch?v=5CGyA0m1yPQ' },
      { title: 'Dynamic Programming Playlist - NeetCode', url: 'https://www.youtube.com/watch?v=73r3KWi1dBk&list=PLot-Xpkr5xuHPnnMpCisbhyH_7GslzpxR' }
    ],
    docs: [
      { title: 'Dynamic Programming Course - MIT OpenCourseWare', url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/lecture-notes/' }
    ],
    blogs: [
      { title: 'Introduction to Dynamic Programming - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/dynamic-programming/' },
      { title: 'Dynamic Programming Study Guide - LeetCode Discuss', url: 'https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns' }
    ]
  },
  'backtracking': {
    youtube: [
      { title: 'Backtracking Algorithms - Abdul Bari', url: 'https://www.youtube.com/watch?v=DKCtRlhJm9o' },
      { title: 'Backtracking Prep Playlist - NeetCode', url: 'https://www.youtube.com/watch?v=pfiQ_y1MowA&list=PLot-Xpkr5xuHn-15r407U41t4gK7_SUsS' }
    ],
    docs: [
      { title: 'Backtracking Explanations - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/backtracking-algorithms/' }
    ],
    blogs: [
      { title: 'Backtracking Explained with Diagrams - freeCodeCamp', url: 'https://www.freecodecamp.org/news/backtracking-algorithms-explained-with-examples/' },
      { title: 'LeetCode Backtracking Study Guide', url: 'https://leetcode.com/discuss/general-discussion/112032/backtracking-template' }
    ]
  },
  'tries': {
    youtube: [
      { title: 'Trie Data Structure & Insertion - WilliamFiset', url: 'https://www.youtube.com/watch?v=TykR-7Q6T7s' },
      { title: 'Trie Playlist & Problems - NeetCode', url: 'https://www.youtube.com/watch?v=oobqoCJl500' }
    ],
    docs: [
      { title: 'Trie Implementation Reference - LeetCode Learn', url: 'https://leetcode.com/explore/learn/card/trie/' }
    ],
    blogs: [
      { title: 'Trie Data Structure In-Depth - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/trie-insert-and-search/' },
      { title: 'Tries and Autocomplete Applications - HackerEarth', url: 'https://www.hackerearth.com/practice/data-structures/advanced-data-structures/trie/tutorial/' }
    ]
  },
  'greedy': {
    youtube: [
      { title: 'Greedy Algorithms Tutorial - Abdul Bari', url: 'https://www.youtube.com/watch?v=ARvQurGDgXk' },
      { title: 'Greedy Interview Playlist - NeetCode', url: 'https://www.youtube.com/watch?v=H9n-c4U16mQ&list=PLot-Xpkr5xuh8T_PDrh4z9D5bJ84jL0zE' }
    ],
    docs: [
      { title: 'Greedy Algorithms Overview - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/greedy-algorithms/' }
    ],
    blogs: [
      { title: 'Greedy Approach & Fractional Knapsack - tutorialspoint', url: 'https://www.tutorialspoint.com/data_structures_algorithms/greedy_algorithms.htm' },
      { title: 'Greedy Algorithms Basics - HackerEarth', url: 'https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/tutorial/' }
    ]
  },
  'union-find': {
    youtube: [
      { title: 'Union Find / Disjoint Set Kruskal - WilliamFiset', url: 'https://www.youtube.com/watch?v=Ib9F8_W93iM' },
      { title: 'Union Find / Disjoint Set Tutorial - NeetCode', url: 'https://www.youtube.com/watch?v=ayW5B2W9hQM' }
    ],
    docs: [
      { title: 'Disjoint-Set (Union Find) Algorithms - Princeton CS', url: 'https://algs4.cs.princeton.edu/15uf/' }
    ],
    blogs: [
      { title: 'Disjoint Set Data Structure Overview - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/disjoint-set-data-structure-union-find-algorithm/' },
      { title: 'Disjoint Set / Union Find Explore Card - LeetCode', url: 'https://leetcode.com/explore/learn/card/graph/618/disjoint-set/' }
    ]
  },
  'dijkstra': {
    youtube: [
      { title: "Dijkstra's Shortest Path Algorithm - Abdul Bari", url: 'https://www.youtube.com/watch?v=XB4MIexjvY0' },
      { title: "Dijkstra's Single Source Shortest Path - WilliamFiset", url: 'https://www.youtube.com/watch?v=pSqmAO-m7Lk' }
    ],
    docs: [
      { title: 'NetworkX Dijkstra Pathfinding - Python Reference', url: 'https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.shortest_paths.weighted.dijkstra_path.html' }
    ],
    blogs: [
      { title: "Dijkstra's Shortest Path Algorithm - GeeksforGeeks", url: 'https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/' },
      { title: "Dijkstra's Pathfinding Visual Guide - freeCodeCamp", url: 'https://www.freecodecamp.org/news/dijkstras-shortest-path-algorithm-visual-introduction/' }
    ]
  }
};

const filePath = path.join(__dirname, '..', 'client', 'src', 'modules', 'dsa-course', 'data', 'dsaTopics.js');
let content = fs.readFileSync(filePath, 'utf8');

for (const [key, res] of Object.entries(resourcesMap)) {
  // Let's find: key: {
  // Since some keys like linked-list have hyphens, let's search for both:
  // key: {  OR  'key': {
  let keyIdx = content.indexOf(`'${key}': {`);
  if (keyIdx === -1) {
    keyIdx = content.indexOf(`${key}: {`);
  }
  
  if (keyIdx === -1) {
    console.error(`Could not find key ${key}`);
    continue;
  }
  
  // Find the interview array and the closing `],` of this topic.
  const sub = content.substring(keyIdx);
  const interviewIdx = sub.indexOf('interview: [');
  if (interviewIdx === -1) {
    console.error(`Could not find interview array for key ${key}`);
    continue;
  }
  
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
  
  const beforeInsert = sub.substring(0, closedIdx + 1);
  const afterInsert = sub.substring(closedIdx + 1);
  
  const resourcesStr = `,\n    resources: {\n      youtube: ${JSON.stringify(res.youtube, null, 8)},\n      docs: ${JSON.stringify(res.docs, null, 8)},\n      blogs: ${JSON.stringify(res.blogs, null, 8)}\n    }`;
  
  const newSub = beforeInsert + resourcesStr + afterInsert;
  
  content = content.substring(0, keyIdx) + newSub;
  console.log(`Successfully added resources to DSA topic: ${key}`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Finished updating dsaTopics.js!');
