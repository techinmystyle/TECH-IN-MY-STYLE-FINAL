export const realms = [
  { id: 'arrays', name: 'Arrays Realm', icon: 'sword', color: '#c9a96e', glow: 'rgba(201,169,110,0.25)', description: 'The foundation of all data.', level: 'Beginner', path: '/dsa-course/topic/arrays' },
  { id: 'sorting', name: 'Sorting Realm', icon: 'sort', color: '#ffd700', glow: 'rgba(255,215,0,0.25)', description: 'Order from chaos.', level: 'Beginner', path: '/dsa-course/topic/sorting' },
  { id: 'binary-search', name: 'Binary Search Realm', icon: 'search', color: '#00d4ff', glow: 'rgba(0,212,255,0.25)', description: 'Find in O(log n).', level: 'Beginner', path: '/dsa-course/topic/binary-search' },
  { id: 'two-pointer', name: 'Two Pointer Realm', icon: 'twoptr', color: '#ff9f43', glow: 'rgba(255,159,67,0.25)', description: 'Two indices, one pass.', level: 'Beginner', path: '/dsa-course/topic/two-pointer' },
  { id: 'prefix-sum', name: 'Prefix Sum Realm', icon: 'prefix', color: '#a29bfe', glow: 'rgba(162,155,254,0.25)', description: 'Precompute range queries.', level: 'Beginner', path: '/dsa-course/topic/prefix-sum' },
  { id: 'linked-list', name: 'Linked List Realm', icon: 'chain', color: '#e8001c', glow: 'rgba(232,0,28,0.25)', description: 'Chains of nodes.', level: 'Intermediate', path: '/dsa-course/topic/linked-list' },
  { id: 'stacks', name: 'Stack Realm', icon: 'tower', color: '#ff6b2b', glow: 'rgba(255,107,43,0.25)', description: 'Last in, first out.', level: 'Intermediate', path: '/dsa-course/topic/stacks' },
  { id: 'hashing', name: 'Hashing Realm', icon: 'hash', color: '#ff9500', glow: 'rgba(255,149,0,0.25)', description: 'O(1) lookup magic.', level: 'Intermediate', path: '/dsa-course/topic/hashing' },
  { id: 'heaps', name: 'Heap Realm', icon: 'heap', color: '#ff6b9d', glow: 'rgba(255,107,157,0.25)', description: 'Always access the extreme.', level: 'Intermediate', path: '/dsa-course/topic/heaps' },
  { id: 'sliding-window', name: 'Sliding Window Realm', icon: 'window', color: '#fd79a8', glow: 'rgba(253,121,168,0.25)', description: 'A moving frame for subarrays.', level: 'Intermediate', path: '/dsa-course/topic/sliding-window' },
  { id: 'bit-manipulation', name: 'Bit Realm', icon: 'bit', color: '#43e97b', glow: 'rgba(67,233,123,0.25)', description: 'Binary magic.', level: 'Intermediate', path: '/dsa-course/topic/bit-manipulation' },
  { id: 'trees', name: 'Tree Realm', icon: 'tree', color: '#3aff8a', glow: 'rgba(58,255,138,0.25)', description: 'Hierarchical structures.', level: 'Advanced', path: '/dsa-course/topic/trees' },
  { id: 'graphs', name: 'Graph Realm', icon: 'web', color: '#8a6aff', glow: 'rgba(138,106,255,0.25)', description: 'Nodes and edges.', level: 'Advanced', path: '/dsa-course/topic/graphs' },
  { id: 'dp', name: 'DP Realm', icon: 'brain', color: '#ff3aaa', glow: 'rgba(255,58,170,0.25)', description: 'Memoize and conquer.', level: 'Advanced', path: '/dsa-course/topic/dp' },
  { id: 'backtracking', name: 'Backtracking Realm', icon: 'back', color: '#a8ff78', glow: 'rgba(168,255,120,0.25)', description: 'Explore all paths.', level: 'Advanced', path: '/dsa-course/topic/backtracking' },
  { id: 'tries', name: 'Trie Realm', icon: 'trie', color: '#78ffd6', glow: 'rgba(120,255,214,0.25)', description: 'Prefix trees.', level: 'Advanced', path: '/dsa-course/topic/tries' },
  { id: 'greedy', name: 'Greedy Realm', icon: 'greedy', color: '#f7971e', glow: 'rgba(247,151,30,0.25)', description: 'Local optimal choices.', level: 'Advanced', path: '/dsa-course/topic/greedy' },
  { id: 'union-find', name: 'Union-Find Realm', icon: 'union', color: '#e17055', glow: 'rgba(225,112,85,0.25)', description: 'Track connected components.', level: 'Advanced', path: '/dsa-course/topic/union-find' },
  { id: 'dijkstra', name: 'Dijkstra Realm', icon: 'dijkstra', color: '#74b9ff', glow: 'rgba(116,185,255,0.25)', description: 'Shortest path in weighted graphs.', level: 'Advanced', path: '/dsa-course/topic/dijkstra' },
];

export const REALM_ICONS = {
  sword: '\u2694\uFE0F', chain: '\uD83D\uDD17', tree: '\uD83C\uDF33',
  web: '\uD83D\uDD78\uFE0F', tower: '\uD83D\uDDFC', brain: '\uD83E\uDDE0',
  sort: '\uD83D\uDD04', search: '\uD83D\uDD0D', hash: '#\uFE0F\u20E3',
  heap: '\uD83C\uDFD4\uFE0F', back: '\u267B\uFE0F', trie: '\uD83C\uDF10',
  greedy: '\u26A1', bit: '\u2699\uFE0F', twoptr: '\uD83D\uDC46',
  prefix: '\u03A3', window: '\uD83D\uDDD4\uFE0F', union: '\uD83D\uDD17',
  dijkstra: '\uD83D\uDDFA\uFE0F',
};

export const learningPath = [
  {
    tier: 'Beginner', color: '#c9a96e',
    topics: [
      { id: 'arrays', name: 'Arrays', path: '/dsa-course/topic/arrays' },
      { id: 'strings', name: 'Strings', path: '/dsa-course/topic/strings' },
      { id: 'recursion', name: 'Recursion', path: '/dsa-course/topic/recursion' },
      { id: 'sorting', name: 'Sorting', path: '/dsa-course/topic/sorting' },
      { id: 'binary-search', name: 'Binary Search', path: '/dsa-course/topic/binary-search' },
      { id: 'two-pointer', name: 'Two Pointers', path: '/dsa-course/topic/two-pointer' },
      { id: 'prefix-sum', name: 'Prefix Sum', path: '/dsa-course/topic/prefix-sum' },
    ],
  },
  {
    tier: 'Intermediate', color: '#e8001c',
    topics: [
      { id: 'linked-list', name: 'Linked Lists', path: '/dsa-course/topic/linked-list' },
      { id: 'stacks', name: 'Stacks', path: '/dsa-course/topic/stacks' },
      { id: 'queues', name: 'Queues', path: '/dsa-course/topic/queues' },
      { id: 'hashing', name: 'Hashing', path: '/dsa-course/topic/hashing' },
      { id: 'heaps', name: 'Heaps', path: '/dsa-course/topic/heaps' },
      { id: 'sliding-window', name: 'Sliding Window', path: '/dsa-course/topic/sliding-window' },
      { id: 'bit-manipulation', name: 'Bit Manipulation', path: '/dsa-course/topic/bit-manipulation' },
    ],
  },
  {
    tier: 'Advanced', color: '#8a6aff',
    topics: [
      { id: 'trees', name: 'Trees', path: '/dsa-course/topic/trees' },
      { id: 'graphs', name: 'Graphs', path: '/dsa-course/topic/graphs' },
      { id: 'dp', name: 'Dynamic Programming', path: '/dsa-course/topic/dp' },
      { id: 'backtracking', name: 'Backtracking', path: '/dsa-course/topic/backtracking' },
      { id: 'tries', name: 'Tries', path: '/dsa-course/topic/tries' },
      { id: 'greedy', name: 'Greedy', path: '/dsa-course/topic/greedy' },
      { id: 'union-find', name: 'Union-Find', path: '/dsa-course/topic/union-find' },
      { id: 'dijkstra', name: 'Dijkstra', path: '/dsa-course/topic/dijkstra' },
    ],
  },
];

export const topicsData = {

  arrays: {
    id: 'arrays', name: 'Arrays', realm: 'Arrays Realm', level: 'Beginner', icon: '\u2694\uFE0F',
    tagline: 'The Blade of Indexed Power',
    persona: 'TAKE YOUR HEART - and index it.',
    intuition: 'Imagine a row of ancient stone tablets, each engraved with a number and a position. You can reach any tablet instantly - no searching, just point and read. Like a Phantom Thief who knows exactly which safe holds the treasure.',
    analogy: 'Think of a parking lot with numbered slots. You know your car is in slot 7. Arrays work the same way: O(1) access by index. No traversal. No guessing. Pure precision.',
    description: [
      'An array is a contiguous block of memory storing elements of the same type.',
      'Elements are accessed via zero-based indices in O(1) time - the fastest possible access.',
      'Insertion/deletion at arbitrary positions costs O(n) due to shifting all subsequent elements.',
      'Arrays are the backbone of most other data structures - stacks, queues, heaps all use them.',
      'Dynamic arrays double in capacity when full - amortized O(1) append.',
    ],
    keyTakeaway: 'Arrays give you O(1) random access at the cost of O(n) insertion/deletion. Master this tradeoff.',
    visualization: 'array',
    complexity: { Access: 'O(1)', Search: 'O(n)', Insert: 'O(n)', Delete: 'O(n)', Space: 'O(n)' },
    codes: {
      python: 'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n - 1):\n        for j in range(n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\ndef two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []\n\nprint(bubble_sort([64, 34, 25, 12, 22, 11, 90]))\nprint(two_sum([2, 7, 11, 15], 9))',
      java: 'public class Arrays {\n    public static void bubbleSort(int[] arr) {\n        int n = arr.length;\n        for (int i = 0; i < n - 1; i++)\n            for (int j = 0; j < n - i - 1; j++)\n                if (arr[j] > arr[j + 1]) {\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                }\n    }\n    public static int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int c = target - nums[i];\n            if (map.containsKey(c)) return new int[]{map.get(c), i};\n            map.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}',
      c: '#include <stdio.h>\nvoid bubbleSort(int arr[], int n) {\n    for (int i = 0; i < n-1; i++)\n        for (int j = 0; j < n-i-1; j++)\n            if (arr[j] > arr[j+1]) {\n                int t = arr[j]; arr[j] = arr[j+1]; arr[j+1] = t;\n            }\n}\nint maxSubarray(int arr[], int n) {\n    int maxSum = arr[0], curr = arr[0];\n    for (int i = 1; i < n; i++) {\n        curr = curr + arr[i] > arr[i] ? curr + arr[i] : arr[i];\n        if (curr > maxSum) maxSum = curr;\n    }\n    return maxSum;\n}',
    },
    interview: [
      { q: 'What is the time complexity of accessing an element in an array?', a: 'O(1) - constant time. Arrays store elements in contiguous memory, so any element is accessed directly via its index.' },
      { q: 'Why is insertion at the beginning of an array O(n)?', a: 'All existing elements must shift one position right to make room. With n elements, that is n shifts.' },
      { q: 'What is the difference between a static and dynamic array?', a: 'Static arrays have fixed size at compile time. Dynamic arrays resize by doubling capacity when full, giving amortized O(1) append.' },
      { q: 'How would you find two numbers that sum to a target?', a: 'Use a hash map: for each element, check if (target - element) exists in the map. O(n) time, O(n) space.' },
      { q: "What is Kadane's Algorithm?", a: 'An O(n) algorithm to find the maximum subarray sum. Track current sum and global max - if current sum goes negative, reset it.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Static & Dynamic Arrays - WilliamFiset",
                "url": "https://www.youtube.com/watch?v=1d9IQRE8Loo"
        },
        {
                "title": "Arrays & Hashing Playlist - NeetCode",
                "url": "https://www.youtube.com/watch?v=KLlXCFG5TnA&list=PLot-Xpkr5xuh737C5L4ptT67Wpo9Zg5_F"
        }
],
      docs: [
        {
                "title": "Python List Implementation Details",
                "url": "https://docs.python.org/3/tutorial/datastructures.html"
        },
        {
                "title": "Java Array Documentation - Oracle",
                "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html"
        }
],
      blogs: [
        {
                "title": "Descriptive Introduction to Arrays - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/what-is-array/"
        },
        {
                "title": "LeetCode Arrays Explore Card",
                "url": "https://leetcode.com/explore/learn/card/fun-with-arrays/"
        }
]
    },
  },

  strings: {
    id: 'strings', name: 'Strings', realm: 'Arrays Realm', level: 'Beginner', icon: '\uD83D\uDCDC',
    tagline: 'The Scroll of Character Sequences',
    persona: 'Every word is a weapon. Every character, a clue.',
    intuition: 'A string is just an array of characters - but with its own universe of algorithms. Palindromes, anagrams, pattern matching. Every cipher, every message - all strings.',
    analogy: 'Think of a string as a necklace of beads. Each bead is a character. You can read it forward, backward, find patterns. Strings are immutable in most languages.',
    description: [
      'A string is a sequence of characters stored contiguously in memory.',
      'In most languages, strings are immutable - operations create new strings.',
      'String comparison is O(n) - each character must be checked.',
      'Common operations: reverse, palindrome check, anagram detection, substring search.',
      'The KMP algorithm finds patterns in O(n+m) - far better than naive O(n*m).',
    ],
    keyTakeaway: 'Strings are character arrays with rich algorithms. Master two-pointer and sliding window techniques.',
    visualization: 'string',
    complexity: { Access: 'O(1)', Search: 'O(n)', Insert: 'O(n)', Delete: 'O(n)', Space: 'O(n)' },
    codes: {
      python: 'def is_palindrome(s):\n    s = s.lower().replace(" ", "")\n    return s == s[::-1]\n\nfrom collections import Counter\ndef is_anagram(s, t):\n    return Counter(s) == Counter(t)\n\ndef length_of_longest_substring(s):\n    seen = {}\n    left = max_len = 0\n    for right, char in enumerate(s):\n        if char in seen and seen[char] >= left:\n            left = seen[char] + 1\n        seen[char] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len\n\nprint(is_palindrome("racecar"))  # True\nprint(length_of_longest_substring("abcabcbb"))  # 3',
      java: 'public class Strings {\n    public static boolean isPalindrome(String s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r)\n            if (s.charAt(l++) != s.charAt(r--)) return false;\n        return true;\n    }\n    public static int lengthOfLongestSubstring(String s) {\n        Map<Character, Integer> map = new HashMap<>();\n        int max = 0, left = 0;\n        for (int right = 0; right < s.length(); right++) {\n            char c = s.charAt(right);\n            if (map.containsKey(c) && map.get(c) >= left)\n                left = map.get(c) + 1;\n            map.put(c, right);\n            max = Math.max(max, right - left + 1);\n        }\n        return max;\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\nvoid reverse(char* s) {\n    int l = 0, r = strlen(s) - 1;\n    while (l < r) { char t = s[l]; s[l] = s[r]; s[r] = t; l++; r--; }\n}\nint isPalindrome(char* s) {\n    int l = 0, r = strlen(s) - 1;\n    while (l < r) if (s[l++] != s[r--]) return 0;\n    return 1;\n}',
    },
    interview: [
      { q: 'How do you check if a string is a palindrome?', a: 'Use two pointers - one at start, one at end. Move them inward, comparing characters. O(n) time, O(1) space.' },
      { q: 'How do you find the longest substring without repeating characters?', a: 'Sliding window with a hash map. Expand right pointer, track last seen index of each char. When a repeat is found, move left pointer past the previous occurrence. O(n) time.' },
      { q: 'What is the difference between == and .equals() for strings in Java?', a: '== compares references. .equals() compares actual character content. Always use .equals() for string value comparison in Java.' },
      { q: 'How do you check if two strings are anagrams?', a: 'Sort both strings and compare O(n log n). Or use a frequency count hash map O(n) time, O(1) space for fixed alphabet.' },
    ],
    resources: {
      youtube: [
        {
                "title": "String Algorithms Overview - Abdul Bari",
                "url": "https://www.youtube.com/watch?v=V5hZOwSh108"
        },
        {
                "title": "LeetCode String Patterns - NeetCode",
                "url": "https://www.youtube.com/watch?v=KLlXCFG5TnA"
        }
],
      docs: [
        {
                "title": "Java String API Docs - Oracle",
                "url": "https://docs.oracle.com/javase/8/docs/api/java/lang/String.html"
        },
        {
                "title": "MDN String Reference - Mozilla",
                "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
        }
],
      blogs: [
        {
                "title": "String Data Structure Guides - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/string-data-structure/"
        },
        {
                "title": "Pattern Matching Algorithms Explained - Programiz",
                "url": "https://www.programiz.com/dsa/naive-string-matching-algorithm"
        }
]
    },
  },

  recursion: {
    id: 'recursion', name: 'Recursion', realm: 'Arrays Realm', level: 'Beginner', icon: '\uD83C\uDF00',
    tagline: 'The Mirror That Calls Itself',
    persona: 'To understand recursion, you must first understand recursion.',
    intuition: 'Recursion is a function that calls itself with a smaller version of the same problem. Like a Phantom Thief entering a Palace - each floor is a smaller version of the same challenge. You solve the smallest floor first (base case), then build up.',
    analogy: 'Russian nesting dolls. Open one doll, find a smaller one inside. Keep opening until you find the smallest - that is your base case. Then you close them back up - that is the return phase.',
    description: [
      'Recursion solves a problem by breaking it into smaller instances of the same problem.',
      'Every recursive function needs a base case - the condition that stops the recursion.',
      'The call stack stores each function call - deep recursion can cause stack overflow.',
      'Tail recursion can be optimized by compilers to avoid stack buildup.',
      'Many problems (trees, graphs, divide and conquer) are naturally recursive.',
    ],
    keyTakeaway: 'Recursion = base case + recursive case. Always identify what gets smaller each call.',
    visualization: 'recursion',
    complexity: { Access: 'Varies', Search: 'Varies', Insert: 'Varies', Delete: 'Varies', Space: 'O(n) stack' },
    codes: {
      python: 'def factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n - 1)\n\nfrom functools import lru_cache\n@lru_cache(maxsize=None)\ndef fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)\n\ndef binary_search(arr, target, lo, hi):\n    if lo > hi: return -1\n    mid = (lo + hi) // 2\n    if arr[mid] == target: return mid\n    if arr[mid] < target: return binary_search(arr, target, mid+1, hi)\n    return binary_search(arr, target, lo, mid-1)\n\nprint(factorial(5))  # 120\nprint(fib(10))       # 55',
      java: 'public class Recursion {\n    public static long factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n    public static long fib(int n) {\n        if (n <= 1) return n;\n        return fib(n-1) + fib(n-2);\n    }\n    public static void hanoi(int n, char from, char to, char aux) {\n        if (n == 1) { System.out.println("Move 1: " + from + "->" + to); return; }\n        hanoi(n-1, from, aux, to);\n        System.out.println("Move " + n + ": " + from + "->" + to);\n        hanoi(n-1, aux, to, from);\n    }\n}',
      c: '#include <stdio.h>\nlong factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\nlong power(long base, int exp) {\n    if (exp == 0) return 1;\n    if (exp % 2 == 0) { long h = power(base, exp/2); return h * h; }\n    return base * power(base, exp-1);\n}\nvoid hanoi(int n, char from, char to, char aux) {\n    if (n == 1) { printf("Move 1: %c->%c\\n", from, to); return; }\n    hanoi(n-1, from, aux, to);\n    printf("Move %d: %c->%c\\n", n, from, to);\n    hanoi(n-1, aux, to, from);\n}',
    },
    interview: [
      { q: 'What is the difference between recursion and iteration?', a: 'Recursion uses the call stack implicitly; iteration uses explicit loops. Recursion is often cleaner for tree/graph problems but risks stack overflow.' },
      { q: 'What is memoization and why does it matter for recursion?', a: 'Memoization caches results of expensive function calls. Naive Fibonacci is O(2^n); with memoization it becomes O(n).' },
      { q: 'What is tail recursion?', a: 'A recursive call where the recursive call is the last operation. Some compilers optimize this into iteration (tail call optimization), preventing stack overflow.' },
      { q: 'How do you convert a recursive solution to iterative?', a: 'Use an explicit stack data structure to simulate the call stack. Push the initial state, then loop: pop state, process it, push new states.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Recursion Demystified - Reducible",
                "url": "https://www.youtube.com/watch?v=ngCos392W4w"
        },
        {
                "title": "Recursion & Backtracking - Aditya Verma",
                "url": "https://www.youtube.com/watch?v=kHi1DUhp9KP"
        }
],
      docs: [
        {
                "title": "Recursion in Algorithms - Princeton CS",
                "url": "https://introcs.cs.princeton.edu/java/23recursion/"
        },
        {
                "title": "Python Recursion Limits & Customization",
                "url": "https://docs.python.org/3/library/sys.html#sys.setrecursionlimit"
        }
],
      blogs: [
        {
                "title": "How Recursion Works: A Visual Guide - freeCodeCamp",
                "url": "https://www.freecodecamp.org/news/how-recursion-works-explained-with-diagrams/"
        },
        {
                "title": "Recursive Algorithms Guide - Khan Academy",
                "url": "https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion"
        }
]
    },
  },


  sorting: {
    id: 'sorting', name: 'Sorting Algorithms', realm: 'Sorting Realm', level: 'Beginner', icon: '\uD83D\uDD04',
    tagline: 'Order from Chaos',
    persona: 'The Phantom Thieves always sort their targets by priority.',
    intuition: 'Sorting is the act of arranging data in order. It unlocks binary search, simplifies problems, and is the foundation of efficient algorithms. Every comparison-based sort has a lower bound of O(n log n).',
    analogy: 'Sorting a hand of playing cards. Insertion sort: pick each card and insert it in the right place. Merge sort: split the deck in half, sort each half, merge them. Quick sort: pick a pivot card, put smaller cards left, larger right.',
    description: [
      'Bubble Sort: O(n^2) - compare adjacent pairs, bubble largest to end. Simple but slow.',
      'Selection Sort: O(n^2) - find minimum, place at front. Fewer swaps than bubble.',
      'Insertion Sort: O(n^2) worst, O(n) best - great for nearly sorted data.',
      'Merge Sort: O(n log n) always - divide and conquer, stable sort, needs O(n) space.',
      'Quick Sort: O(n log n) average, O(n^2) worst - in-place, fastest in practice with good pivot.',
      'Heap Sort: O(n log n) always - in-place, uses heap property. Not stable.',
      'Counting/Radix Sort: O(n) - non-comparison sorts for integers in a range.',
    ],
    keyTakeaway: 'Merge Sort for guaranteed O(n log n). Quick Sort for average-case speed. Know when to use each.',
    visualization: 'sorting',
    complexity: { Bubble: 'O(n^2)', Merge: 'O(n log n)', Quick: 'O(n log n)', Heap: 'O(n log n)', Space: 'O(n)/O(1)' },
    codes: {
      python: 'def merge_sort(arr):\n    if len(arr) <= 1: return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i]); i += 1\n        else:\n            result.append(right[j]); j += 1\n    return result + left[i:] + right[j:]\n\ndef quick_sort(arr, lo=0, hi=None):\n    if hi is None: hi = len(arr) - 1\n    if lo < hi:\n        pivot = partition(arr, lo, hi)\n        quick_sort(arr, lo, pivot - 1)\n        quick_sort(arr, pivot + 1, hi)\n\ndef partition(arr, lo, hi):\n    pivot = arr[hi]\n    i = lo - 1\n    for j in range(lo, hi):\n        if arr[j] <= pivot:\n            i += 1\n            arr[i], arr[j] = arr[j], arr[i]\n    arr[i+1], arr[hi] = arr[hi], arr[i+1]\n    return i + 1',
      java: 'public class Sorting {\n    public static void mergeSort(int[] arr, int l, int r) {\n        if (l >= r) return;\n        int mid = (l + r) / 2;\n        mergeSort(arr, l, mid);\n        mergeSort(arr, mid + 1, r);\n        merge(arr, l, mid, r);\n    }\n    static void merge(int[] arr, int l, int m, int r) {\n        int[] left = Arrays.copyOfRange(arr, l, m + 1);\n        int[] right = Arrays.copyOfRange(arr, m + 1, r + 1);\n        int i = 0, j = 0, k = l;\n        while (i < left.length && j < right.length)\n            arr[k++] = left[i] <= right[j] ? left[i++] : right[j++];\n        while (i < left.length) arr[k++] = left[i++];\n        while (j < right.length) arr[k++] = right[j++];\n    }\n    public static void quickSort(int[] arr, int lo, int hi) {\n        if (lo < hi) {\n            int p = partition(arr, lo, hi);\n            quickSort(arr, lo, p - 1);\n            quickSort(arr, p + 1, hi);\n        }\n    }\n    static int partition(int[] arr, int lo, int hi) {\n        int pivot = arr[hi], i = lo - 1;\n        for (int j = lo; j < hi; j++)\n            if (arr[j] <= pivot) { i++; int t = arr[i]; arr[i] = arr[j]; arr[j] = t; }\n        int t = arr[i+1]; arr[i+1] = arr[hi]; arr[hi] = t;\n        return i + 1;\n    }\n}',
      c: '#include <stdio.h>\nvoid merge(int arr[], int l, int m, int r) {\n    int n1 = m-l+1, n2 = r-m;\n    int L[n1], R[n2];\n    for (int i=0;i<n1;i++) L[i]=arr[l+i];\n    for (int j=0;j<n2;j++) R[j]=arr[m+1+j];\n    int i=0,j=0,k=l;\n    while(i<n1&&j<n2) arr[k++]=L[i]<=R[j]?L[i++]:R[j++];\n    while(i<n1) arr[k++]=L[i++];\n    while(j<n2) arr[k++]=R[j++];\n}\nvoid mergeSort(int arr[], int l, int r) {\n    if(l<r){int m=(l+r)/2;mergeSort(arr,l,m);mergeSort(arr,m+1,r);merge(arr,l,m,r);}\n}',
    },
    interview: [
      { q: 'What is the difference between Merge Sort and Quick Sort?', a: 'Merge Sort: O(n log n) always, stable, needs O(n) extra space. Quick Sort: O(n log n) average but O(n^2) worst case, in-place, not stable. Quick Sort is faster in practice due to cache efficiency.' },
      { q: 'When would you use Insertion Sort over Merge Sort?', a: 'Insertion Sort is O(n) for nearly sorted data and has low overhead. Use it for small arrays (< 20 elements) or as the base case in hybrid sorts like Timsort (Python) and Introsort (C++ STL).' },
      { q: 'What is a stable sort and why does it matter?', a: 'A stable sort preserves the relative order of equal elements. Merge Sort and Insertion Sort are stable. Quick Sort and Heap Sort are not. Stability matters when sorting objects by multiple keys.' },
      { q: 'What is the lower bound for comparison-based sorting?', a: 'O(n log n). Proven via decision tree argument - any comparison-based sort needs at least log2(n!) comparisons, which is Theta(n log n) by Stirling approximation.' },
      { q: 'How does Counting Sort achieve O(n)?', a: 'Counting Sort is non-comparison based. It counts occurrences of each value, then reconstructs the sorted array. Works only for integers in a known range [0, k]. Time: O(n + k), Space: O(k).' },
    ],
    resources: {
      youtube: [
        {
                "title": "Merge Sort in 2 Minutes - Michael Sambol",
                "url": "https://www.youtube.com/watch?v=4VqmGXwpLqc"
        },
        {
                "title": "Quick Sort Algorithm Tutorial - Abdul Bari",
                "url": "https://www.youtube.com/watch?v=7h1s2SojIRw"
        }
],
      docs: [
        {
                "title": "Python Sorting HOWTO Guide",
                "url": "https://docs.python.org/3/howto/sorting.html"
        },
        {
                "title": "Java Arrays.sort() Specification",
                "url": "https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#sort-int:A-"
        }
],
      blogs: [
        {
                "title": "Visual Guide to Sorting Algorithms - Visualgo",
                "url": "https://visualgo.net/en/sorting"
        },
        {
                "title": "Analysis of Sorting Algorithms - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/sorting-algorithms/"
        }
]
    },
  },

  'binary-search': {
    id: 'binary-search', name: 'Binary Search', realm: 'Binary Search Realm', level: 'Beginner', icon: '\uD83D\uDD0D',
    tagline: 'Divide and Conquer the Search Space',
    persona: 'A Phantom Thief never searches blindly. They cut the problem in half.',
    intuition: 'Binary search is the art of elimination. You have a sorted array and a target. Instead of checking every element, you check the middle. If the target is smaller, eliminate the right half. If larger, eliminate the left. Each step halves the search space - O(log n).',
    analogy: 'Guessing a number between 1 and 1000. You guess 500. Too high? Now guess 250. Too low? Guess 375. Each guess eliminates half the possibilities. That is binary search.',
    description: [
      'Binary search requires a SORTED array - this is the prerequisite.',
      'Each iteration eliminates half the search space: O(log n) time.',
      'Three pointers: lo (left bound), hi (right bound), mid = (lo+hi)//2.',
      'If arr[mid] == target: found. If arr[mid] < target: lo = mid+1. Else: hi = mid-1.',
      'Binary search extends beyond arrays: search on answer space, rotated arrays, first/last occurrence.',
    ],
    keyTakeaway: 'Binary search is O(log n). Master the template: lo, hi, mid. Know when to use lo <= hi vs lo < hi.',
    visualization: 'binary-search',
    complexity: { Access: 'O(log n)', Search: 'O(log n)', Insert: 'N/A', Delete: 'N/A', Space: 'O(1)' },
    codes: {
      python: 'def binary_search(arr, target):\n    lo, hi = 0, len(arr) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1\n\ndef first_occurrence(arr, target):\n    lo, hi, result = 0, len(arr) - 1, -1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if arr[mid] == target:\n            result = mid\n            hi = mid - 1\n        elif arr[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return result\n\ndef search_rotated(arr, target):\n    lo, hi = 0, len(arr) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if arr[mid] == target: return mid\n        if arr[lo] <= arr[mid]:\n            if arr[lo] <= target < arr[mid]: hi = mid - 1\n            else: lo = mid + 1\n        else:\n            if arr[mid] < target <= arr[hi]: lo = mid + 1\n            else: hi = mid - 1\n    return -1',
      java: 'public class BinarySearch {\n    public static int search(int[] arr, int target) {\n        int lo = 0, hi = arr.length - 1;\n        while (lo <= hi) {\n            int mid = lo + (hi - lo) / 2;\n            if (arr[mid] == target) return mid;\n            else if (arr[mid] < target) lo = mid + 1;\n            else hi = mid - 1;\n        }\n        return -1;\n    }\n    public static int lowerBound(int[] arr, int target) {\n        int lo = 0, hi = arr.length;\n        while (lo < hi) {\n            int mid = (lo + hi) / 2;\n            if (arr[mid] < target) lo = mid + 1;\n            else hi = mid;\n        }\n        return lo;\n    }\n}',
      c: '#include <stdio.h>\nint binarySearch(int arr[], int n, int target) {\n    int lo = 0, hi = n - 1;\n    while (lo <= hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] < target) lo = mid + 1;\n        else hi = mid - 1;\n    }\n    return -1;\n}',
    },
    interview: [
      { q: 'Why do we use mid = lo + (hi - lo) / 2 instead of (lo + hi) / 2?', a: 'To prevent integer overflow. If lo and hi are both large integers, lo + hi can overflow. lo + (hi - lo) / 2 is mathematically equivalent but safe.' },
      { q: 'How do you find the first and last occurrence of a target in a sorted array?', a: 'For first: when arr[mid] == target, save mid and set hi = mid - 1 to keep searching left. For last: save mid and set lo = mid + 1 to keep searching right. Both are O(log n).' },
      { q: 'How do you search in a rotated sorted array?', a: 'At each step, one half is always sorted. Check which half is sorted, then determine if target falls in that range. If yes, search that half; otherwise search the other. O(log n).' },
      { q: 'What is binary search on the answer space?', a: 'Instead of searching for a value in an array, you binary search on the answer itself. Example: find minimum capacity to ship packages in D days. The answer lies in [max_weight, sum_weights]. Check feasibility at each mid.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Binary Search Tutorial - Errichto",
                "url": "https://www.youtube.com/watch?v=GU7D9We2xEc"
        },
        {
                "title": "Binary Search Playlist & Tips - NeetCode",
                "url": "https://www.youtube.com/watch?v=s4DPM8ct1Ls"
        }
],
      docs: [
        {
                "title": "Python bisect Module Documentation",
                "url": "https://docs.python.org/3/library/bisect.html"
        },
        {
                "title": "C++ std::binary_search Reference",
                "url": "https://en.cppreference.com/w/cpp/algorithm/binary_search"
        }
],
      blogs: [
        {
                "title": "Binary Search 101 Guide - LeetCode Discuss",
                "url": "https://leetcode.com/discuss/general-discussion/786126/binary-search-101"
        },
        {
                "title": "Detailed Guide to Binary Search - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/binary-search/"
        }
]
    },
  },

  'two-pointer': {
    id: 'two-pointer', name: 'Two Pointers', realm: 'Two Pointer Realm', level: 'Beginner', icon: '\uD83D\uDC46',
    tagline: 'Two Indices, One Pass - Elegant O(n) Solutions',
    persona: 'Two Phantom Thieves working from both ends of the Palace.',
    intuition: 'Two pointers is a technique where you use two indices that move through an array, usually from opposite ends or at different speeds. It converts O(n^2) brute force solutions into O(n). Classic for sorted arrays, palindromes, and pair problems.',
    analogy: 'Two people walking toward each other on a bridge. They start at opposite ends and walk until they meet. Together they cover the whole bridge in half the time. That is two pointers - two indices converging on the answer.',
    description: [
      'Two pointers: use two indices (left and right) that move based on conditions.',
      'Opposite direction: start at both ends, move inward. Used for pair sum, palindrome check.',
      'Same direction (fast/slow): one pointer moves faster. Used for cycle detection, finding middle.',
      'Sorted array prerequisite: most two-pointer problems require sorted input.',
      'Reduces O(n^2) nested loop solutions to O(n) single pass.',
    ],
    keyTakeaway: 'Two pointers eliminates nested loops. If you see a sorted array + pair/triplet problem, think two pointers.',
    visualization: 'two-pointer',
    complexity: { Time: 'O(n)', Space: 'O(1)', Sorting: 'O(n log n)', Typical: 'O(n) after sort' },
    codes: {
      python: 'def two_sum_sorted(numbers, target):\n    left, right = 0, len(numbers) - 1\n    while left < right:\n        s = numbers[left] + numbers[right]\n        if s == target: return [left+1, right+1]\n        elif s < target: left += 1\n        else: right -= 1\n    return []\n\ndef max_area(height):\n    left, right = 0, len(height) - 1\n    max_water = 0\n    while left < right:\n        water = min(height[left], height[right]) * (right - left)\n        max_water = max(max_water, water)\n        if height[left] < height[right]: left += 1\n        else: right -= 1\n    return max_water\n\ndef three_sum(nums):\n    nums.sort()\n    result = []\n    for i in range(len(nums) - 2):\n        if i > 0 and nums[i] == nums[i-1]: continue\n        left, right = i+1, len(nums)-1\n        while left < right:\n            s = nums[i] + nums[left] + nums[right]\n            if s == 0:\n                result.append([nums[i], nums[left], nums[right]])\n                left += 1; right -= 1\n            elif s < 0: left += 1\n            else: right -= 1\n    return result',
      java: 'public class TwoPointers {\n    public static int[] twoSumSorted(int[] nums, int target) {\n        int left = 0, right = nums.length - 1;\n        while (left < right) {\n            int sum = nums[left] + nums[right];\n            if (sum == target) return new int[]{left+1, right+1};\n            else if (sum < target) left++;\n            else right--;\n        }\n        return new int[]{};\n    }\n    public static int maxArea(int[] height) {\n        int left = 0, right = height.length - 1, max = 0;\n        while (left < right) {\n            max = Math.max(max, Math.min(height[left], height[right]) * (right - left));\n            if (height[left] < height[right]) left++;\n            else right--;\n        }\n        return max;\n    }\n}',
      c: '#include <stdio.h>\nvoid twoSumSorted(int nums[], int n, int target) {\n    int left = 0, right = n - 1;\n    while (left < right) {\n        int sum = nums[left] + nums[right];\n        if (sum == target) { printf("[%d, %d]", left+1, right+1); return; }\n        else if (sum < target) left++;\n        else right--;\n    }\n}',
    },
    interview: [
      { q: 'When should you use two pointers instead of a hash map?', a: 'Use two pointers when the array is sorted and you need O(1) space. Use hash map when the array is unsorted and you can afford O(n) space. Two pointers: O(n) time O(1) space. Hash map: O(n) time O(n) space.' },
      { q: 'How do you solve the Container With Most Water problem?', a: 'Start with left=0, right=n-1. Area = min(height[left], height[right]) * (right-left). Move the pointer with smaller height inward. O(n) time.' },
      { q: 'How do you find all triplets that sum to zero?', a: 'Sort the array. For each element nums[i], use two pointers on the remaining subarray. Skip duplicates. O(n^2) time, O(1) extra space.' },
      { q: 'What is the fast/slow pointer technique?', a: "Floyd's cycle detection. Slow moves 1 step, fast moves 2. If they meet, there is a cycle. Also used to find the middle of a linked list." },
    ],
    resources: {
      youtube: [
        {
                "title": "Two Pointers Concept - NeetCode",
                "url": "https://www.youtube.com/watch?v=cHP8LjQD5b4"
        },
        {
                "title": "Two Pointer Technique Crash Course - Nick White",
                "url": "https://www.youtube.com/watch?v=2wB1UCkD48o"
        }
],
      docs: [
        {
                "title": "LeetCode Two Pointers Explore Card",
                "url": "https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/"
        }
],
      blogs: [
        {
                "title": "Two Pointer Technique Overview - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/two-pointers-technique/"
        },
        {
                "title": "Mastering the Two-Pointer Pattern - Medium Article",
                "url": "https://hackernoon.com/two-pointer-technique-solving-array-problems-with-ease"
        }
]
    },
  },

  'prefix-sum': {
    id: 'prefix-sum', name: 'Prefix Sum', realm: 'Prefix Sum Realm', level: 'Beginner', icon: '\u03A3',
    tagline: 'Precompute Once, Query in O(1)',
    persona: 'The Phantom Thieves map every room before the heist. No surprises.',
    intuition: 'Prefix sum precomputes cumulative sums so any range sum query can be answered in O(1). Instead of summing elements from i to j every time (O(n) per query), you build a prefix array once (O(n)) and answer any query instantly.',
    analogy: 'Odometer in a car. It tracks total distance driven. To find distance between two cities, subtract the odometer reading at city A from city B. You never re-drive the route. That is prefix sum.',
    description: [
      'prefix[i] = arr[0] + arr[1] + ... + arr[i]. Build in O(n).',
      'Range sum query [l, r] = prefix[r] - prefix[l-1]. Answer in O(1).',
      '2D prefix sum extends this to matrices for rectangle sum queries.',
      'Difference array: inverse of prefix sum. Apply range updates in O(1), query in O(n).',
      'Used in: subarray sum equals k, number of subarrays with given sum, equilibrium index.',
    ],
    keyTakeaway: 'Prefix sum trades O(n) preprocessing for O(1) range queries. Essential for competitive programming.',
    visualization: 'prefix-sum',
    complexity: { Build: 'O(n)', Query: 'O(1)', Space: 'O(n)', Update: 'O(n) rebuild' },
    codes: {
      python: 'def build_prefix(arr):\n    prefix = [0] * (len(arr) + 1)\n    for i, val in enumerate(arr):\n        prefix[i+1] = prefix[i] + val\n    return prefix\n\ndef range_sum(prefix, l, r):\n    return prefix[r+1] - prefix[l]\n\nfrom collections import defaultdict\ndef subarray_sum_k(nums, k):\n    count = 0\n    prefix = 0\n    seen = defaultdict(int)\n    seen[0] = 1\n    for num in nums:\n        prefix += num\n        count += seen[prefix - k]\n        seen[prefix] += 1\n    return count\n\narr = [1, 2, 3, 4, 5]\nprefix = build_prefix(arr)\nprint(range_sum(prefix, 1, 3))  # 2+3+4 = 9',
      java: 'public class PrefixSum {\n    public static int[] buildPrefix(int[] arr) {\n        int[] prefix = new int[arr.length + 1];\n        for (int i = 0; i < arr.length; i++)\n            prefix[i+1] = prefix[i] + arr[i];\n        return prefix;\n    }\n    public static int rangeSum(int[] prefix, int l, int r) {\n        return prefix[r+1] - prefix[l];\n    }\n    public static int subarraySumK(int[] nums, int k) {\n        Map<Integer, Integer> map = new HashMap<>();\n        map.put(0, 1);\n        int count = 0, sum = 0;\n        for (int num : nums) {\n            sum += num;\n            count += map.getOrDefault(sum - k, 0);\n            map.merge(sum, 1, Integer::sum);\n        }\n        return count;\n    }\n}',
      c: '#include <stdio.h>\nvoid buildPrefix(int arr[], int prefix[], int n) {\n    prefix[0] = 0;\n    for (int i = 0; i < n; i++) prefix[i+1] = prefix[i] + arr[i];\n}\nint rangeSum(int prefix[], int l, int r) { return prefix[r+1] - prefix[l]; }',
    },
    interview: [
      { q: 'How do you find the number of subarrays with sum equal to k?', a: 'Use prefix sum + hash map. For each index, compute running sum. Check if (sum - k) exists in the map. If yes, add its count to result. O(n) time, O(n) space.' },
      { q: 'What is a 2D prefix sum and how do you compute rectangle sums?', a: 'prefix[i][j] = sum of all elements in rectangle from (0,0) to (i,j). Rectangle sum from (r1,c1) to (r2,c2) = prefix[r2][c2] - prefix[r1-1][c2] - prefix[r2][c1-1] + prefix[r1-1][c1-1]. O(1) query.' },
      { q: 'What is a difference array and when do you use it?', a: 'Difference array allows O(1) range updates. diff[l] += val, diff[r+1] -= val. After all updates, take prefix sum to get final array. Use when you have many range update operations.' },
      { q: 'How do you find the equilibrium index of an array?', a: 'Equilibrium index: left sum equals right sum. Compute total sum. Iterate: if left_sum == total - left_sum - arr[i], found it. Update left_sum += arr[i]. O(n) time, O(1) space.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Prefix Sum Array & Range Queries - Luv",
                "url": "https://www.youtube.com/watch?v=4jY56s1skDU"
        },
        {
                "title": "Prefix Sum Problems Deep Dive - NeetCode",
                "url": "https://www.youtube.com/watch?v=2pndA151yvM"
        }
],
      docs: [
        {
                "title": "Subarray Sum Equals K Reference - LeetCode",
                "url": "https://leetcode.com/problems/subarray-sum-equals-k/"
        }
],
      blogs: [
        {
                "title": "Prefix Sum Array Tutorial - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/prefix-sum-array-implementation-and-applications/"
        },
        {
                "title": "Prefix Sums Tutorial with Visuals - Codeforces",
                "url": "https://codeforces.com/blog/entry/78216"
        }
]
    },
  },


  'linked-list': {
    id: 'linked-list', name: 'Linked Lists', realm: 'Linked List Realm', level: 'Intermediate', icon: '\uD83D\uDD17',
    tagline: 'The Chain of Dynamic Memory',
    persona: 'Each node holds a secret. Follow the chain.',
    intuition: 'Picture a treasure hunt where each clue tells you where the next clue is hidden. You cannot jump to clue 5 directly - you must follow the chain. That is a linked list: sequential access, but infinitely flexible in size.',
    analogy: 'Train carriages - each carriage knows only about the next one. You can add or remove carriages anywhere without rebuilding the whole train. Arrays are a fixed-seat bus; linked lists are a modular train.',
    description: [
      'A linked list is a sequence of nodes, each containing data and a pointer to the next node.',
      'No contiguous memory required - nodes can be scattered anywhere in memory.',
      'O(1) insertion/deletion at head; O(n) at arbitrary positions (must traverse first).',
      'O(n) access time - must traverse from head to reach any element.',
      'Doubly linked lists add a prev pointer - enabling O(1) deletion given a node reference.',
    ],
    keyTakeaway: "Linked lists excel at dynamic insertion/deletion but sacrifice random access. Know Floyd's cycle detection.",
    visualization: 'linkedlist',
    complexity: { Access: 'O(n)', Search: 'O(n)', Insert: 'O(1)*', Delete: 'O(1)*', Space: 'O(n)' },
    codes: {
      python: 'class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\nclass LinkedList:\n    def __init__(self):\n        self.head = None\n\n    def insert_front(self, data):\n        node = Node(data)\n        node.next = self.head\n        self.head = node\n\n    def reverse(self):\n        prev, curr = None, self.head\n        while curr:\n            nxt = curr.next\n            curr.next = prev\n            prev = curr\n            curr = nxt\n        self.head = prev\n\n    def has_cycle(self):\n        slow = fast = self.head\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n            if slow == fast: return True\n        return False',
      java: 'public class LinkedList {\n    static class Node { int data; Node next; Node(int d) { data = d; } }\n    Node head;\n    void insertFront(int data) { Node n = new Node(data); n.next = head; head = n; }\n    void reverse() {\n        Node prev = null, curr = head;\n        while (curr != null) { Node next = curr.next; curr.next = prev; prev = curr; curr = next; }\n        head = prev;\n    }\n    boolean hasCycle() {\n        Node slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next; fast = fast.next.next;\n            if (slow == fast) return true;\n        }\n        return false;\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\ntypedef struct Node { int data; struct Node* next; } Node;\nNode* newNode(int d) { Node* n = malloc(sizeof(Node)); n->data = d; n->next = NULL; return n; }\nNode* reverse(Node* head) {\n    Node* prev = NULL, *curr = head;\n    while (curr) { Node* nxt = curr->next; curr->next = prev; prev = curr; curr = nxt; }\n    return prev;\n}\nint hasCycle(Node* head) {\n    Node* slow = head, *fast = head;\n    while (fast && fast->next) {\n        slow = slow->next; fast = fast->next->next;\n        if (slow == fast) return 1;\n    }\n    return 0;\n}',
    },
    interview: [
      { q: 'What is the difference between an array and a linked list?', a: 'Arrays: O(1) access, O(n) insert/delete, contiguous memory. Linked lists: O(n) access, O(1) insert/delete at head, scattered memory. Choose based on your dominant operation.' },
      { q: 'How do you detect a cycle in a linked list?', a: "Floyd's Cycle Detection: slow pointer moves 1 step, fast moves 2. If they meet, there is a cycle. O(n) time, O(1) space." },
      { q: 'How do you reverse a linked list?', a: 'Three pointers: prev=null, curr=head, next. Each step: save next=curr.next, set curr.next=prev, advance prev=curr, curr=next. When curr is null, prev is the new head. O(n) time, O(1) space.' },
      { q: 'How do you find the middle of a linked list?', a: 'Slow/fast pointer technique. Slow moves 1 step, fast moves 2. When fast reaches end, slow is at the middle. O(n) time, O(1) space.' },
      { q: 'What is an LRU Cache and how do you implement it?', a: 'Least Recently Used cache. Use a doubly linked list + hash map. O(1) get and put. The list maintains order of use; the map gives O(1) node access.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Singly & Doubly Linked Lists - WilliamFiset",
                "url": "https://www.youtube.com/watch?v=58YAxp9WAek"
        },
        {
                "title": "Linked List Interview Prep - NeetCode",
                "url": "https://www.youtube.com/watch?v=G0_I-ZF0S38"
        }
],
      docs: [
        {
                "title": "Java LinkedList API Reference - Oracle",
                "url": "https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html"
        }
],
      blogs: [
        {
                "title": "Linked List Data Structure - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/data-structures/linked-list/"
        },
        {
                "title": "Linked List Conceptual Guide - tutorialspoint",
                "url": "https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm"
        }
]
    },
  },

  stacks: {
    id: 'stacks', name: 'Stacks', realm: 'Stack Realm', level: 'Intermediate', icon: '\uD83D\uDDFC',
    tagline: 'The Tower of Last-In-First-Out',
    persona: 'The last secret placed is the first revealed.',
    intuition: "A stack is like a pile of Phantom Thief calling cards. You place them one on top of another. When you need one, you take from the top - the last one placed. LIFO: Last In, First Out. Your browser's back button is a stack.",
    analogy: 'A stack of plates at a buffet. You add plates to the top, take from the top. You cannot grab a plate from the middle without removing those above it first.',
    description: [
      'A stack is a linear data structure following LIFO - Last In, First Out.',
      'Core operations: push (add to top), pop (remove from top), peek (view top) - all O(1).',
      'Implemented using arrays or linked lists.',
      'Used for: function call stack, undo/redo, expression evaluation, DFS, backtracking.',
      'Monotonic stacks solve "next greater element" problems in O(n).',
    ],
    keyTakeaway: 'Stacks are O(1) push/pop. Master monotonic stacks for array problems involving "next greater/smaller".',
    visualization: 'stack',
    complexity: { Access: 'O(n)', Search: 'O(n)', Insert: 'O(1)', Delete: 'O(1)', Space: 'O(n)' },
    codes: {
      python: 'class Stack:\n    def __init__(self): self._data = []\n    def push(self, val): self._data.append(val)\n    def pop(self): return self._data.pop() if self._data else None\n    def peek(self): return self._data[-1] if self._data else None\n\ndef is_valid(s):\n    stack = []\n    pairs = {")": "(", "}": "{", "]": "["}\n    for ch in s:\n        if ch in "({[": stack.append(ch)\n        elif ch in pairs:\n            if not stack or stack[-1] != pairs[ch]: return False\n            stack.pop()\n    return len(stack) == 0\n\ndef next_greater(nums):\n    result = [-1] * len(nums)\n    stack = []\n    for i, num in enumerate(nums):\n        while stack and nums[stack[-1]] < num:\n            result[stack.pop()] = num\n        stack.append(i)\n    return result',
      java: 'import java.util.Stack;\npublic class Stacks {\n    public static boolean isValid(String s) {\n        Stack<Character> stack = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (c=="("||c=="{"||c=="[") stack.push(c);\n            else {\n                if (stack.isEmpty()) return false;\n                char top = stack.pop();\n                if (c==")"&&top!="(") return false;\n                if (c=="}"&&top!="{") return false;\n                if (c=="]"&&top!="[") return false;\n            }\n        }\n        return stack.isEmpty();\n    }\n    public static int[] nextGreater(int[] nums) {\n        int[] result = new int[nums.length];\n        java.util.Arrays.fill(result, -1);\n        Stack<Integer> stack = new Stack<>();\n        for (int i = 0; i < nums.length; i++) {\n            while (!stack.isEmpty() && nums[stack.peek()] < nums[i])\n                result[stack.pop()] = nums[i];\n            stack.push(i);\n        }\n        return result;\n    }\n}',
      c: '#include <stdio.h>\n#define MAX 100\ntypedef struct { int data[MAX]; int top; } Stack;\nvoid init(Stack* s) { s->top = -1; }\nvoid push(Stack* s, int v) { s->data[++s->top] = v; }\nint pop(Stack* s) { return s->data[s->top--]; }\nint isEmpty(Stack* s) { return s->top == -1; }',
    },
    interview: [
      { q: 'What is a monotonic stack and when do you use it?', a: 'A stack that maintains elements in monotonically increasing or decreasing order. Used for "next greater element", "largest rectangle in histogram". Processes each element at most twice - O(n).' },
      { q: 'How do you implement a queue using two stacks?', a: 'Use stack1 for enqueue (push), stack2 for dequeue. When dequeuing, if stack2 is empty, pour all of stack1 into stack2 (reversing order). Amortized O(1) per operation.' },
      { q: 'How do you evaluate a postfix expression using a stack?', a: 'Scan left to right. If operand, push. If operator, pop two operands, apply operator, push result. Final stack top is the answer. O(n) time.' },
      { q: 'What is the min stack problem?', a: 'Design a stack that supports push, pop, and getMin in O(1). Solution: maintain a parallel min-stack. When pushing x, also push min(x, current_min) to the min-stack.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Stack Data Structure Tutorial - WilliamFiset",
                "url": "https://www.youtube.com/watch?v=F1F2weyP95s"
        },
        {
                "title": "Stack Playlist & LeetCode - NeetCode",
                "url": "https://www.youtube.com/watch?v=lUe2nIr4n8g"
        }
],
      docs: [
        {
                "title": "C++ std::stack Reference Docs",
                "url": "https://en.cppreference.com/w/cpp/container/stack"
        },
        {
                "title": "Java Stack API Reference - Oracle",
                "url": "https://docs.oracle.com/javase/8/docs/api/java/util/Stack.html"
        }
],
      blogs: [
        {
                "title": "Stack Data Structure In-Depth - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/stack-data-structure/"
        },
        {
                "title": "Stack Implementation Guide - Programiz",
                "url": "https://www.programiz.com/dsa/stack"
        }
]
    },
  },

  queues: {
    id: 'queues', name: 'Queues', realm: 'Stack Realm', level: 'Intermediate', icon: '\uD83D\uDE82',
    tagline: 'The Line of First-Come-First-Served',
    persona: 'Order is power. First in, first out.',
    intuition: 'A queue is a line of people waiting. The first person in line is the first to be served. FIFO: First In, First Out. BFS uses a queue. Task schedulers use queues. Message queues power distributed systems.',
    analogy: 'A ticket counter queue. People join at the back, leave from the front. No cutting in line. The order of arrival determines the order of service.',
    description: [
      'A queue is a linear data structure following FIFO - First In, First Out.',
      'Core operations: enqueue (add to rear), dequeue (remove from front) - both O(1).',
      'Implemented using arrays (circular buffer) or linked lists.',
      'Deque (double-ended queue) supports O(1) operations at both ends.',
      'Priority Queue (heap) serves elements by priority, not arrival order.',
    ],
    keyTakeaway: 'Queues power BFS. Deques power sliding window maximum. Priority queues power Dijkstra and scheduling.',
    visualization: 'queue',
    complexity: { Access: 'O(n)', Search: 'O(n)', Insert: 'O(1)', Delete: 'O(1)', Space: 'O(n)' },
    codes: {
      python: 'from collections import deque\nqueue = deque()\nqueue.append(1); queue.append(2); queue.append(3)\nprint(queue.popleft())  # 1\n\ndef bfs(graph, start):\n    visited = set([start])\n    queue = deque([start])\n    order = []\n    while queue:\n        node = queue.popleft()\n        order.append(node)\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                queue.append(neighbor)\n    return order\n\ndef max_sliding_window(nums, k):\n    dq, result = deque(), []\n    for i, num in enumerate(nums):\n        while dq and nums[dq[-1]] < num: dq.pop()\n        dq.append(i)\n        if dq[0] == i - k: dq.popleft()\n        if i >= k - 1: result.append(nums[dq[0]])\n    return result',
      java: 'import java.util.*;\npublic class Queues {\n    public static List<Integer> bfs(Map<Integer, List<Integer>> graph, int start) {\n        List<Integer> order = new ArrayList<>();\n        Set<Integer> visited = new HashSet<>();\n        Queue<Integer> queue = new LinkedList<>();\n        queue.offer(start); visited.add(start);\n        while (!queue.isEmpty()) {\n            int node = queue.poll(); order.add(node);\n            for (int n : graph.getOrDefault(node, new ArrayList<>()))\n                if (!visited.contains(n)) { visited.add(n); queue.offer(n); }\n        }\n        return order;\n    }\n    public static int kthLargest(int[] nums, int k) {\n        PriorityQueue<Integer> pq = new PriorityQueue<>();\n        for (int num : nums) { pq.offer(num); if (pq.size() > k) pq.poll(); }\n        return pq.peek();\n    }\n}',
      c: '#include <stdio.h>\n#define MAX 100\ntypedef struct { int data[MAX]; int front, rear, size; } Queue;\nvoid init(Queue* q) { q->front = q->rear = q->size = 0; }\nvoid enqueue(Queue* q, int v) { q->data[q->rear++ % MAX] = v; q->size++; }\nint dequeue(Queue* q) { q->size--; return q->data[q->front++ % MAX]; }\nint isEmpty(Queue* q) { return q->size == 0; }',
    },
    interview: [
      { q: 'What is the difference between a stack and a queue?', a: 'Stack is LIFO (Last In First Out) - like a pile of plates. Queue is FIFO (First In First Out) - like a line of people. Stack uses push/pop; queue uses enqueue/dequeue.' },
      { q: 'How do you implement a stack using two queues?', a: 'For push: enqueue to q2, then move all of q1 to q2, then swap q1 and q2. This makes push O(n) but pop O(1).' },
      { q: 'What is a circular queue and why is it useful?', a: 'A queue implemented with a fixed-size array where the rear wraps around to the front. Avoids wasted space from dequeuing. Uses modulo arithmetic: rear = (rear + 1) % capacity.' },
      { q: 'When would you use a priority queue over a regular queue?', a: "When elements have different priorities and higher-priority items should be processed first. Examples: Dijkstra shortest path, A* search, task scheduling, Huffman coding." },
    ],
    resources: {
      youtube: [
        {
                "title": "Queue Data Structure Explained - WilliamFiset",
                "url": "https://www.youtube.com/watch?v=jtKM7I9Z1Zk"
        },
        {
                "title": "Queue Design & Operations - NeetCode",
                "url": "https://www.youtube.com/watch?v=mDCi1AnMDd0"
        }
],
      docs: [
        {
                "title": "Python collections.deque Class Docs",
                "url": "https://docs.python.org/3/library/collections.html#collections.deque"
        },
        {
                "title": "Java Queue Interface - Oracle Docs",
                "url": "https://docs.oracle.com/javase/8/docs/api/java/util/Queue.html"
        }
],
      blogs: [
        {
                "title": "Queue Data Structure and Operations - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/queue-data-structure/"
        },
        {
                "title": "Queues and Deques Overview - Programiz",
                "url": "https://www.programiz.com/dsa/queue"
        }
]
    },
  },


  hashing: {
    id: 'hashing', name: 'Hashing', realm: 'Hashing Realm', level: 'Intermediate', icon: '#\uFE0F\u20E3',
    tagline: 'O(1) Lookup - The Magic of Hash Functions',
    persona: 'The Phantom Thieves always know exactly where to find what they need.',
    intuition: 'A hash table is a direct-address table with a twist. Instead of using the key directly as an index, you run it through a hash function that maps it to a bucket. The magic: O(1) average lookup, insert, and delete.',
    analogy: 'A library with a smart librarian. You give them a book title, they instantly tell you the shelf number using a formula. Two books might map to the same shelf (collision) - they handle it by chaining books together on that shelf.',
    description: [
      'A hash function maps keys to indices (buckets) in an array.',
      'Collision handling: Chaining (linked list per bucket) or Open Addressing (probe for next empty slot).',
      'Load factor = n/m (items/buckets). Keep it below 0.7 for good performance.',
      'Average O(1) for insert, lookup, delete. Worst case O(n) with many collisions.',
      'Python dict, Java HashMap, C++ unordered_map are all hash tables.',
    ],
    keyTakeaway: 'Hash maps give O(1) average operations. Use them to trade space for time in almost any problem.',
    visualization: 'hashing',
    complexity: { Insert: 'O(1) avg', Lookup: 'O(1) avg', Delete: 'O(1) avg', Worst: 'O(n)', Space: 'O(n)' },
    codes: {
      python: 'freq = {}\narr = [1, 2, 3, 2, 1, 3, 3]\nfor num in arr:\n    freq[num] = freq.get(num, 0) + 1\n\ndef two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []\n\nfrom collections import defaultdict\ndef group_anagrams(strs):\n    groups = defaultdict(list)\n    for s in strs:\n        key = tuple(sorted(s))\n        groups[key].append(s)\n    return list(groups.values())\n\ndef longest_consecutive(nums):\n    num_set = set(nums)\n    best = 0\n    for n in num_set:\n        if n - 1 not in num_set:\n            curr, length = n, 1\n            while curr + 1 in num_set:\n                curr += 1; length += 1\n            best = max(best, length)\n    return best',
      java: 'import java.util.*;\npublic class Hashing {\n    public static int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement))\n                return new int[]{map.get(complement), i};\n            map.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n    public static Map<Integer, Integer> frequency(int[] arr) {\n        Map<Integer, Integer> freq = new HashMap<>();\n        for (int n : arr) freq.merge(n, 1, Integer::sum);\n        return freq;\n    }\n}',
      c: '#include <stdio.h>\n#define SIZE 100\ntypedef struct { int key; int val; int used; } Entry;\nEntry table[SIZE];\nint hash(int key) { return ((key % SIZE) + SIZE) % SIZE; }\nvoid insert(int key, int val) {\n    int h = hash(key);\n    while (table[h].used && table[h].key != key) h = (h + 1) % SIZE;\n    table[h] = (Entry){key, val, 1};\n}\nint lookup(int key) {\n    int h = hash(key);\n    while (table[h].used) {\n        if (table[h].key == key) return table[h].val;\n        h = (h + 1) % SIZE;\n    }\n    return -1;\n}',
    },
    interview: [
      { q: 'What is a hash collision and how is it handled?', a: 'A collision occurs when two keys hash to the same bucket. Two main strategies: (1) Chaining - each bucket holds a linked list of entries. (2) Open Addressing - probe for the next empty slot.' },
      { q: 'What is the load factor and why does it matter?', a: 'Load factor = number of entries / number of buckets. As it increases, collision probability rises. Most implementations resize (rehash) when load factor exceeds 0.7-0.75, doubling the table size.' },
      { q: 'How would you design a hash function for strings?', a: 'Polynomial rolling hash: h = sum(s[i] * p^i) % m, where p is a prime (31 or 37) and m is a large prime. This distributes strings uniformly. Java uses this approach in String.hashCode().' },
      { q: 'What is the difference between HashMap and HashSet?', a: 'HashMap stores key-value pairs. HashSet stores only keys (implemented as a HashMap with dummy values). Both offer O(1) average operations.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Hashing Techniques & Collisions - Abdul Bari",
                "url": "https://www.youtube.com/watch?v=mFY0J5IvNy4"
        },
        {
                "title": "Hash Table Design & Problems - NeetCode",
                "url": "https://www.youtube.com/watch?v=UaCy54AdNyA"
        }
],
      docs: [
        {
                "title": "Java HashMap Internals - Oracle Docs",
                "url": "https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html"
        },
        {
                "title": "Python dict Hash Table Details",
                "url": "https://docs.python.org/3/c-api/dict.html"
        }
],
      blogs: [
        {
                "title": "Hashing Data Structure Tutorial - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/hashing-data-structure/"
        },
        {
                "title": "Hash Tables Explore Card - LeetCode Explore",
                "url": "https://leetcode.com/explore/learn/card/hash-table/"
        }
]
    },
  },

  heaps: {
    id: 'heaps', name: 'Heaps', realm: 'Heap Realm', level: 'Intermediate', icon: '\uD83C\uDFD4\uFE0F',
    tagline: 'Always Access the Extreme',
    persona: 'The Phantom Thieves always know who the most dangerous target is.',
    intuition: 'A heap is a complete binary tree with one rule: every parent is greater than (max-heap) or less than (min-heap) its children. This gives you O(1) access to the maximum or minimum, and O(log n) insert and delete.',
    analogy: 'A hospital emergency room. Patients are triaged by severity. The most critical patient is always seen first (root of max-heap). New patients are added and sorted by priority.',
    description: [
      'A heap is a complete binary tree stored as an array. Parent of i is at (i-1)//2, children at 2i+1 and 2i+2.',
      'Max-heap: every parent >= children. Min-heap: every parent <= children.',
      'Insert: add at end, heapify up. Extract: swap root with last, remove last, heapify down.',
      'Build heap from array: O(n) - more efficient than n insertions.',
      'Heap Sort: build max-heap, repeatedly extract max. O(n log n), in-place.',
    ],
    keyTakeaway: 'Heaps give O(1) peek at min/max and O(log n) insert/extract. Use for top-K, scheduling, Dijkstra.',
    visualization: 'heap',
    complexity: { Peek: 'O(1)', Insert: 'O(log n)', Extract: 'O(log n)', Build: 'O(n)', Space: 'O(n)' },
    codes: {
      python: 'import heapq\n\nheap = []\nheapq.heappush(heap, 5)\nheapq.heappush(heap, 1)\nheapq.heappush(heap, 3)\nprint(heapq.heappop(heap))  # 1 (minimum)\n\nmax_heap = []\nfor val in [5, 1, 3, 8, 2]:\n    heapq.heappush(max_heap, -val)\nprint(-heapq.heappop(max_heap))  # 8 (maximum)\n\ndef top_k_largest(nums, k):\n    return heapq.nlargest(k, nums)\n\ndef kth_largest(nums, k):\n    heap = nums[:k]\n    heapq.heapify(heap)\n    for num in nums[k:]:\n        if num > heap[0]:\n            heapq.heapreplace(heap, num)\n    return heap[0]',
      java: 'import java.util.PriorityQueue;\npublic class Heaps {\n    public static int kthLargest(int[] nums, int k) {\n        PriorityQueue<Integer> pq = new PriorityQueue<>();\n        for (int num : nums) {\n            pq.offer(num);\n            if (pq.size() > k) pq.poll();\n        }\n        return pq.peek();\n    }\n    public static void heapSort(int[] arr) {\n        int n = arr.length;\n        for (int i = n/2-1; i >= 0; i--) heapify(arr, n, i);\n        for (int i = n-1; i > 0; i--) {\n            int t = arr[0]; arr[0] = arr[i]; arr[i] = t;\n            heapify(arr, i, 0);\n        }\n    }\n    static void heapify(int[] arr, int n, int i) {\n        int largest = i, l = 2*i+1, r = 2*i+2;\n        if (l < n && arr[l] > arr[largest]) largest = l;\n        if (r < n && arr[r] > arr[largest]) largest = r;\n        if (largest != i) {\n            int t = arr[i]; arr[i] = arr[largest]; arr[largest] = t;\n            heapify(arr, n, largest);\n        }\n    }\n}',
      c: '#include <stdio.h>\n#define MAX 100\nint heap[MAX], size = 0;\nvoid push(int val) {\n    heap[size] = val;\n    int i = size++;\n    while (i > 0 && heap[(i-1)/2] < heap[i]) {\n        int t = heap[i]; heap[i] = heap[(i-1)/2]; heap[(i-1)/2] = t;\n        i = (i-1)/2;\n    }\n}\nint pop() {\n    int max = heap[0];\n    heap[0] = heap[--size];\n    int i = 0;\n    while (1) {\n        int l=2*i+1, r=2*i+2, m=i;\n        if(l<size&&heap[l]>heap[m]) m=l;\n        if(r<size&&heap[r]>heap[m]) m=r;\n        if(m==i) break;\n        int t=heap[i]; heap[i]=heap[m]; heap[m]=t; i=m;\n    }\n    return max;\n}',
    },
    interview: [
      { q: 'What is the difference between a heap and a BST?', a: 'Heap: O(1) min/max access, O(log n) insert/delete, no ordered traversal. BST: O(log n) search/insert/delete, supports ordered traversal. Use heap for priority queue, BST for ordered data with search.' },
      { q: 'How do you find the Kth largest element efficiently?', a: 'Use a min-heap of size K. Iterate through the array: if element > heap top, replace top. After processing all elements, heap top is the Kth largest. O(n log k) time, O(k) space.' },
      { q: 'Why is building a heap O(n) and not O(n log n)?', a: 'When heapifying from the bottom up, most nodes are near the leaves and require few swaps. The total work is sum of heights = O(n). This is tighter than the naive O(n log n) of inserting n elements one by one.' },
      { q: 'What is a priority queue and how is it different from a regular queue?', a: 'A priority queue serves elements by priority, not arrival order. Implemented with a heap. Regular queue is FIFO. Priority queue is used in Dijkstra, A*, task scheduling, Huffman coding.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Binary Heaps & Heap Sort - Abdul Bari",
                "url": "https://www.youtube.com/watch?v=H5kA3yqObOM"
        },
        {
                "title": "Binary Heap Priority Queue - WilliamFiset",
                "url": "https://www.youtube.com/watch?v=t0Cq6tVNRBA"
        }
],
      docs: [
        {
                "title": "Python heapq Module Documentation",
                "url": "https://docs.python.org/3/library/heapq.html"
        },
        {
                "title": "Java PriorityQueue API Docs - Oracle",
                "url": "https://docs.oracle.com/javase/8/docs/api/java/util/PriorityQueue.html"
        }
],
      blogs: [
        {
                "title": "Binary Heap In-Depth Guide - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/binary-heap/"
        },
        {
                "title": "Heaps and Priority Queues - Programiz",
                "url": "https://www.programiz.com/dsa/heap-data-structure"
        }
]
    },
  },

  'sliding-window': {
    id: 'sliding-window', name: 'Sliding Window', realm: 'Sliding Window Realm', level: 'Intermediate', icon: '\uD83D\uDDD4\uFE0F',
    tagline: 'A Moving Frame That Solves Subarray Problems',
    persona: 'The Phantom Thieves scan the Palace through a moving window of vision.',
    intuition: 'Sliding window maintains a window (subarray) that expands and contracts as it slides through the array. Instead of recomputing the window from scratch each time, you add the new element and remove the old one. O(n) instead of O(n^2).',
    analogy: 'A train window. As the train moves, new scenery enters from the right and old scenery leaves from the left. You never stop the train to look back - you just track what is currently visible. That is sliding window.',
    description: [
      'Fixed window: window size k is constant. Slide by adding right element, removing left element.',
      'Variable window: expand right until condition violated, then shrink from left.',
      'Use when: maximum/minimum subarray of size k, longest substring with constraint, minimum window substring.',
      'Key insight: avoid recomputing the entire window - just update incrementally.',
      'Often combined with hash maps to track character/element frequencies in the window.',
    ],
    keyTakeaway: 'Sliding window converts O(n*k) to O(n). Recognize it when you see subarray/substring with a size or constraint.',
    visualization: 'sliding-window',
    complexity: { Time: 'O(n)', Space: 'O(1) to O(k)', Fixed: 'O(n)', Variable: 'O(n)' },
    codes: {
      python: 'def max_sum_k(arr, k):\n    window_sum = sum(arr[:k])\n    max_sum = window_sum\n    for i in range(k, len(arr)):\n        window_sum += arr[i] - arr[i-k]\n        max_sum = max(max_sum, window_sum)\n    return max_sum\n\ndef length_of_longest_substring(s):\n    char_index = {}\n    left = max_len = 0\n    for right, ch in enumerate(s):\n        if ch in char_index and char_index[ch] >= left:\n            left = char_index[ch] + 1\n        char_index[ch] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len\n\nfrom collections import Counter\ndef min_window(s, t):\n    need = Counter(t)\n    missing = len(t)\n    left = start = end = 0\n    for right, ch in enumerate(s, 1):\n        if need[ch] > 0: missing -= 1\n        need[ch] -= 1\n        if missing == 0:\n            while need[s[left]] < 0: need[s[left]] += 1; left += 1\n            if not end or right - left < end - start: start, end = left, right\n            need[s[left]] += 1; missing += 1; left += 1\n    return s[start:end]',
      java: 'public class SlidingWindow {\n    public static int maxSumK(int[] arr, int k) {\n        int sum = 0;\n        for (int i = 0; i < k; i++) sum += arr[i];\n        int max = sum;\n        for (int i = k; i < arr.length; i++) {\n            sum += arr[i] - arr[i-k];\n            max = Math.max(max, sum);\n        }\n        return max;\n    }\n    public static int lengthOfLongestSubstring(String s) {\n        Map<Character, Integer> map = new HashMap<>();\n        int max = 0, left = 0;\n        for (int right = 0; right < s.length(); right++) {\n            char c = s.charAt(right);\n            if (map.containsKey(c) && map.get(c) >= left) left = map.get(c) + 1;\n            map.put(c, right);\n            max = Math.max(max, right - left + 1);\n        }\n        return max;\n    }\n}',
      c: '#include <stdio.h>\nint maxSumK(int arr[], int n, int k) {\n    int sum = 0, max;\n    for (int i = 0; i < k; i++) sum += arr[i];\n    max = sum;\n    for (int i = k; i < n; i++) {\n        sum += arr[i] - arr[i-k];\n        if (sum > max) max = sum;\n    }\n    return max;\n}',
    },
    interview: [
      { q: 'What is the difference between fixed and variable sliding window?', a: 'Fixed window: size k is constant, slide by adding right and removing left element. Variable window: expand right until constraint violated, then shrink from left. Variable window is used for longest/shortest subarray problems.' },
      { q: 'How do you find the longest substring with at most k distinct characters?', a: 'Variable window with a frequency map. Expand right, add character to map. When distinct chars > k, shrink from left (decrement freq, remove if 0). Track max window size. O(n) time.' },
      { q: 'How do you find the maximum of each window of size k?', a: 'Use a monotonic deque. Maintain indices of useful elements in decreasing order. For each new element, remove smaller elements from back. Remove elements outside window from front. Front is always the max. O(n) time.' },
      { q: 'When does sliding window NOT work?', a: 'When the window condition is not monotonic - shrinking the window does not necessarily fix the violation. Also does not work when you need non-contiguous subarrays (use DP instead).' },
    ],
    resources: {
      youtube: [
        {
                "title": "Sliding Window Playlist - Aditya Verma",
                "url": "https://www.youtube.com/watch?v=EHCGAJxPk3Y&list=PL_z_8CaSLPWeM8OTgIpHdy7F5wCSz7EbA"
        },
        {
                "title": "Sliding Window Concept & LeetCode - NeetCode",
                "url": "https://www.youtube.com/watch?v=s5eC0Ff5nJg"
        }
],
      docs: [
        {
                "title": "LeetCode Sliding Window Patterns Card",
                "url": "https://leetcode.com/explore/learn/card/sliding-window/"
        }
],
      blogs: [
        {
                "title": "Sliding Window Technique Explained - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/window-sliding-technique/"
        },
        {
                "title": "Mastering the Sliding Window Pattern - Medium Guide",
                "url": "https://medium.com/tech-life-prog/sliding-window-algorithm-pattern-dec37a9d0f41"
        }
]
    },
  },

  'bit-manipulation': {
    id: 'bit-manipulation', name: 'Bit Manipulation', realm: 'Bit Realm', level: 'Intermediate', icon: '\u2699\uFE0F',
    tagline: 'Binary Magic - Manipulate at the Bit Level',
    persona: 'The Phantom Thieves operate in binary - 0 means hidden, 1 means revealed.',
    intuition: 'Every integer is stored as bits. Bit manipulation lets you operate directly on those bits - faster than arithmetic, no extra space. XOR to find unique elements, AND to check bits, shifts to multiply or divide by powers of 2.',
    analogy: 'A row of light switches (bits). AND is both must be on. OR is at least one on. XOR is exactly one on. Shift left doubles the value. These operations happen in a single CPU instruction.',
    description: [
      'AND (&): 1 only if both bits are 1. Used for masking, checking if bit is set.',
      'OR (|): 1 if either bit is 1. Used for setting bits.',
      'XOR (^): 1 if bits differ. Used for toggling, finding unique elements, swapping without temp.',
      'NOT (~): flip all bits. ~n = -(n+1) in two complement representation.',
      'Left shift (<<): multiply by 2^k. Right shift (>>): divide by 2^k. Both are O(1).',
    ],
    keyTakeaway: 'XOR is the most powerful bit trick. n & (n-1) removes lowest set bit. n & (-n) isolates lowest set bit.',
    visualization: 'bit',
    complexity: { 'All ops': 'O(1)', 'Count bits': 'O(log n)', 'Brian Kernighan': 'O(set bits)', Space: 'O(1)' },
    codes: {
      python: 'def is_set(n, k): return (n >> k) & 1\ndef set_bit(n, k): return n | (1 << k)\ndef clear_bit(n, k): return n & ~(1 << k)\ndef toggle_bit(n, k): return n ^ (1 << k)\n\ndef count_bits(n):\n    count = 0\n    while n:\n        n &= n - 1\n        count += 1\n    return count\n\ndef single_number(nums):\n    result = 0\n    for n in nums: result ^= n\n    return result\n\ndef is_power_of_2(n): return n > 0 and (n & (n-1)) == 0\n\ndef all_subsets(arr):\n    n = len(arr)\n    return [[arr[i] for i in range(n) if mask & (1 << i)] for mask in range(1 << n)]',
      java: 'public class BitManipulation {\n    public static boolean isSet(int n, int k) { return (n >> k & 1) == 1; }\n    public static int setBit(int n, int k) { return n | (1 << k); }\n    public static int clearBit(int n, int k) { return n & ~(1 << k); }\n    public static int countBits(int n) {\n        int count = 0;\n        while (n != 0) { n &= n - 1; count++; }\n        return count;\n    }\n    public static int singleNumber(int[] nums) {\n        int result = 0;\n        for (int n : nums) result ^= n;\n        return result;\n    }\n    public static boolean isPowerOf2(int n) { return n > 0 && (n & (n-1)) == 0; }\n}',
      c: 'int isSet(int n, int k) { return (n >> k) & 1; }\nint setBit(int n, int k) { return n | (1 << k); }\nint clearBit(int n, int k) { return n & ~(1 << k); }\nint countBits(int n) { int c=0; while(n){n&=n-1;c++;} return c; }\nint singleNumber(int arr[], int n) { int r=0; for(int i=0;i<n;i++) r^=arr[i]; return r; }\nint isPowerOf2(int n) { return n > 0 && (n & (n-1)) == 0; }',
    },
    interview: [
      { q: 'How do you find the single non-duplicate in an array where every other element appears twice?', a: 'XOR all elements. Pairs cancel out (a ^ a = 0) and 0 ^ x = x. The result is the unique element. O(n) time, O(1) space.' },
      { q: 'How do you check if a number is a power of 2?', a: 'n > 0 && (n & (n-1)) == 0. Powers of 2 have exactly one set bit. n-1 flips all bits below that bit. AND gives 0 only for powers of 2.' },
      { q: 'What does n & (n-1) do?', a: 'It removes the lowest set bit of n. Example: n=12 (1100), n-1=11 (1011), n&(n-1)=8 (1000). Used to count set bits and check powers of 2.' },
      { q: 'How do you generate all subsets using bit manipulation?', a: 'For n elements, iterate mask from 0 to 2^n - 1. For each mask, bit i being set means element i is in the subset. This generates all 2^n subsets in O(2^n * n) time.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Bit Manipulation Tutorial - Errichto",
                "url": "https://www.youtube.com/watch?v=NLKQEOgBAnw"
        },
        {
                "title": "Bit Manipulation Playlist - NeetCode",
                "url": "https://www.youtube.com/watch?v=KLlXCFG5TnA&list=PLot-Xpkr5xuhsMC3V0Cy0t436814S4323"
        }
],
      docs: [
        {
                "title": "Python Bitwise Operations Reference Docs",
                "url": "https://docs.python.org/3/reference/expressions.html#binary-bitwise-operations"
        }
],
      blogs: [
        {
                "title": "Bit Manipulation Algorithms - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/bit-manipulation-important-tactics/"
        },
        {
                "title": "Bits & Binary Manipulations - HackerEarth",
                "url": "https://www.hackerearth.com/practice/basic-programming/bit-manipulation/basics-of-bit-manipulation/tutorial/"
        }
]
    },
  },


  trees: {
    id: 'trees', name: 'Trees', realm: 'Tree Realm', level: 'Advanced', icon: '\uD83C\uDF33',
    tagline: 'The Hierarchy of Infinite Branches',
    persona: 'Every root holds a kingdom. Every leaf, a secret.',
    intuition: 'A tree is a hierarchical structure - one root, branching into children, each child branching further. File systems, HTML DOM, organization charts - all trees. The Phantom Thieves Palace has floors - each floor branches into rooms.',
    analogy: 'A family tree. One ancestor at the top, children below, grandchildren below them. Each person (node) knows their children but not their cousins. The root has no parent; leaves have no children.',
    description: [
      'A tree is a connected acyclic graph with one root node.',
      'Binary trees have at most 2 children per node (left and right).',
      'BST property: left subtree values < node < right subtree values.',
      'Tree traversals: Inorder (LNR), Preorder (NLR), Postorder (LRN), Level-order (BFS).',
      'Balanced BSTs (AVL, Red-Black) guarantee O(log n) operations.',
    ],
    keyTakeaway: 'Master the 4 traversals and BST operations. Most tree problems are solved recursively.',
    visualization: 'tree',
    complexity: { Access: 'O(log n)', Search: 'O(log n)', Insert: 'O(log n)', Delete: 'O(log n)', Space: 'O(n)' },
    codes: {
      python: 'class TreeNode:\n    def __init__(self, val=0):\n        self.val = val\n        self.left = self.right = None\n\ndef inorder(root):\n    if not root: return []\n    return inorder(root.left) + [root.val] + inorder(root.right)\n\ndef max_depth(root):\n    if not root: return 0\n    return 1 + max(max_depth(root.left), max_depth(root.right))\n\nfrom collections import deque\ndef level_order(root):\n    if not root: return []\n    result, queue = [], deque([root])\n    while queue:\n        level = []\n        for _ in range(len(queue)):\n            node = queue.popleft()\n            level.append(node.val)\n            if node.left: queue.append(node.left)\n            if node.right: queue.append(node.right)\n        result.append(level)\n    return result\n\ndef is_valid_bst(root, lo=float("-inf"), hi=float("inf")):\n    if not root: return True\n    if root.val <= lo or root.val >= hi: return False\n    return is_valid_bst(root.left, lo, root.val) and is_valid_bst(root.right, root.val, hi)',
      java: 'public class Trees {\n    static class TreeNode { int val; TreeNode left, right; TreeNode(int v) { val = v; } }\n    public static List<Integer> inorder(TreeNode root) {\n        List<Integer> result = new ArrayList<>();\n        inorderHelper(root, result); return result;\n    }\n    private static void inorderHelper(TreeNode node, List<Integer> result) {\n        if (node == null) return;\n        inorderHelper(node.left, result);\n        result.add(node.val);\n        inorderHelper(node.right, result);\n    }\n    public static int maxDepth(TreeNode root) {\n        if (root == null) return 0;\n        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n    }\n    public static TreeNode lca(TreeNode root, TreeNode p, TreeNode q) {\n        if (root == null || root == p || root == q) return root;\n        TreeNode left = lca(root.left, p, q);\n        TreeNode right = lca(root.right, p, q);\n        return left != null && right != null ? root : (left != null ? left : right);\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\ntypedef struct Node { int val; struct Node *left, *right; } Node;\nNode* newNode(int v) { Node* n = malloc(sizeof(Node)); n->val = v; n->left = n->right = NULL; return n; }\nvoid inorder(Node* root) {\n    if (!root) return;\n    inorder(root->left); printf("%d ", root->val); inorder(root->right);\n}\nint maxDepth(Node* root) {\n    if (!root) return 0;\n    int l = maxDepth(root->left), r = maxDepth(root->right);\n    return 1 + (l > r ? l : r);\n}\nNode* insert(Node* root, int val) {\n    if (!root) return newNode(val);\n    if (val < root->val) root->left = insert(root->left, val);\n    else root->right = insert(root->right, val);\n    return root;\n}',
    },
    interview: [
      { q: 'What is the difference between a tree and a graph?', a: 'A tree is a connected acyclic graph with exactly n-1 edges for n nodes. Every tree is a graph, but not every graph is a tree. Trees have a root; graphs may have cycles.' },
      { q: 'What are the four tree traversals?', a: 'Inorder (Left-Node-Right): gives sorted order for BST. Preorder (Node-Left-Right): used for copying/serializing. Postorder (Left-Right-Node): used for deletion. Level-order (BFS): processes level by level.' },
      { q: 'What is the height of a balanced BST with n nodes?', a: 'O(log n). A balanced BST halves the search space at each level. An unbalanced BST (like a sorted array inserted sequentially) degrades to O(n) height.' },
      { q: 'How do you find the Lowest Common Ancestor of two nodes?', a: 'Recursively: if root is null or equals p or q, return root. Recurse left and right. If both return non-null, root is the LCA. Otherwise return whichever is non-null. O(n) time.' },
      { q: 'What is a segment tree and when do you use it?', a: 'A tree for range queries (sum, min, max) with O(log n) query and update. Build in O(n). Used when you need both point updates and range queries on an array.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Binary Trees & Traversals - WilliamFiset",
                "url": "https://www.youtube.com/watch?v=PrU0052oUOk"
        },
        {
                "title": "Tree Data Structures Playlist - NeetCode",
                "url": "https://www.youtube.com/watch?v=ihj4IQGZSAg"
        }
],
      docs: [
        {
                "title": "Java TreeMap API Documentation - Oracle",
                "url": "https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html"
        },
        {
                "title": "C++ std::map Reference Manual",
                "url": "https://en.cppreference.com/w/cpp/container/map"
        }
],
      blogs: [
        {
                "title": "Binary Tree Data Structure Guides - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/binary-tree-data-structure/"
        },
        {
                "title": "Tree Visualizations & Algorithms - VisuAlgo",
                "url": "https://visualgo.net/en/bst"
        }
]
    },
  },

  graphs: {
    id: 'graphs', name: 'Graphs', realm: 'Graph Realm', level: 'Advanced', icon: '\uD83D\uDD78\uFE0F',
    tagline: 'The Web of All Connections',
    persona: 'Every connection is a path. Every path, a possibility.',
    intuition: 'Graphs model relationships. Social networks, maps, the internet - all are graphs. Nodes (vertices) connected by edges. The Phantom Thieves navigate a Palace like a graph - rooms are nodes, doors are edges. Find the shortest path to the treasure.',
    analogy: 'A city map. Intersections are nodes, roads are edges. Some roads are one-way (directed). Some have tolls (weighted). Finding the fastest route is Dijkstra. Checking if all areas are reachable is connectivity.',
    description: [
      'A graph G = (V, E) consists of vertices V and edges E connecting them.',
      'Directed graphs have one-way edges; undirected have two-way.',
      'Weighted graphs assign costs to edges - used in shortest path algorithms.',
      'Representations: adjacency matrix O(V^2) space, adjacency list O(V+E) space.',
      'Key algorithms: BFS (shortest path unweighted), DFS (cycle detection, topological sort), Dijkstra (weighted shortest path).',
    ],
    keyTakeaway: 'BFS for shortest path (unweighted). Dijkstra for weighted. DFS for cycle detection and topological sort.',
    visualization: 'graph',
    complexity: { Access: 'O(1)', Search: 'O(V+E)', Insert: 'O(1)', Delete: 'O(V+E)', Space: 'O(V+E)' },
    codes: {
      python: 'from collections import deque, defaultdict\nimport heapq\n\ndef bfs(graph, start, end):\n    queue = deque([(start, [start])])\n    visited = {start}\n    while queue:\n        node, path = queue.popleft()\n        if node == end: return path\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                queue.append((neighbor, path + [neighbor]))\n    return None\n\ndef dijkstra(graph, start):\n    dist = defaultdict(lambda: float("inf"))\n    dist[start] = 0\n    heap = [(0, start)]\n    while heap:\n        d, node = heapq.heappop(heap)\n        if d > dist[node]: continue\n        for neighbor, weight in graph[node]:\n            new_dist = dist[node] + weight\n            if new_dist < dist[neighbor]:\n                dist[neighbor] = new_dist\n                heapq.heappush(heap, (new_dist, neighbor))\n    return dict(dist)\n\ndef topo_sort(graph):\n    visited, stack = set(), []\n    def dfs(node):\n        visited.add(node)\n        for neighbor in graph[node]:\n            if neighbor not in visited: dfs(neighbor)\n        stack.append(node)\n    for node in graph:\n        if node not in visited: dfs(node)\n    return stack[::-1]',
      java: 'import java.util.*;\npublic class Graphs {\n    public static boolean hasCycle(Map<Integer, List<Integer>> graph) {\n        Set<Integer> visited = new HashSet<>(), recStack = new HashSet<>();\n        for (int node : graph.keySet())\n            if (dfs(graph, node, visited, recStack)) return true;\n        return false;\n    }\n    private static boolean dfs(Map<Integer, List<Integer>> g, int node, Set<Integer> vis, Set<Integer> rec) {\n        if (rec.contains(node)) return true;\n        if (vis.contains(node)) return false;\n        vis.add(node); rec.add(node);\n        for (int n : g.getOrDefault(node, new ArrayList<>()))\n            if (dfs(g, n, vis, rec)) return true;\n        rec.remove(node); return false;\n    }\n}',
      c: '#include <stdio.h>\n#define V 6\nint graph[V][V];\nvoid bfs(int start) {\n    int visited[V] = {0};\n    int queue[V], front = 0, rear = 0;\n    visited[start] = 1; queue[rear++] = start;\n    while (front < rear) {\n        int node = queue[front++]; printf("%d ", node);\n        for (int i = 0; i < V; i++)\n            if (graph[node][i] && !visited[i]) { visited[i] = 1; queue[rear++] = i; }\n    }\n}\nvoid dfs(int node, int visited[]) {\n    visited[node] = 1; printf("%d ", node);\n    for (int i = 0; i < V; i++)\n        if (graph[node][i] && !visited[i]) dfs(i, visited);\n}',
    },
    interview: [
      { q: 'What is the difference between BFS and DFS?', a: 'BFS uses a queue, explores level by level, finds shortest path in unweighted graphs. DFS uses a stack (or recursion), explores as deep as possible first, used for cycle detection, topological sort, connected components.' },
      { q: 'How does Dijkstra algorithm work?', a: 'Greedy shortest path for weighted graphs with non-negative edges. Use a min-heap. Start with distance 0 for source, infinity for others. Repeatedly extract minimum distance node, relax its neighbors. O((V+E) log V) with a heap.' },
      { q: 'What is topological sorting?', a: "Linear ordering of vertices in a DAG such that for every edge u->v, u comes before v. Used for task scheduling, build systems, course prerequisites. Implemented via DFS or Kahn's algorithm (BFS with in-degree)." },
      { q: 'How do you detect a cycle in a directed graph?', a: "DFS with a recursion stack. Mark nodes as visited and in-recursion-stack. If you visit a node already in the recursion stack, there is a cycle. O(V+E) time." },
      { q: 'What is Union-Find and when do you use it?', a: "A data structure for tracking connected components. Supports union (merge two sets) and find (which set does a node belong to) in near O(1) with path compression and union by rank. Used for Kruskal MST." },
    ],
    resources: {
      youtube: [
        {
                "title": "Graph Theory & Algorithms - WilliamFiset",
                "url": "https://www.youtube.com/watch?v=09_LlHjoEiY"
        },
        {
                "title": "Graph Algorithms Prep Playlist - NeetCode",
                "url": "https://www.youtube.com/watch?v=gXgEDyodO38"
        }
],
      docs: [
        {
                "title": "Boost Graph Library (BGL) - C++ Reference",
                "url": "https://www.boost.org/doc/libs/release/libs/graph/doc/"
        }
],
      blogs: [
        {
                "title": "Graph Representations & Traversals - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"
        },
        {
                "title": "Interactive Graph Traversals - Khan Academy",
                "url": "https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs"
        }
]
    },
  },

  dp: {
    id: 'dp', name: 'Dynamic Programming', realm: 'DP Realm', level: 'Advanced', icon: '\uD83E\uDDE0',
    tagline: 'Remember the Past. Conquer the Future.',
    persona: 'Every subproblem solved is a stepping stone to the final heist.',
    intuition: 'Dynamic Programming is recursion with memory. Instead of solving the same subproblem a thousand times, you solve it once and remember the answer. Like a Phantom Thief who maps every room of the Palace - never entering the same room twice.',
    analogy: 'Climbing stairs. To reach step n, you came from step n-1 or n-2. The number of ways to reach step n = ways(n-1) + ways(n-2). You only need to compute each step once. That is DP.',
    description: [
      'DP solves problems by breaking them into overlapping subproblems and storing results.',
      'Two approaches: top-down (memoization) and bottom-up (tabulation).',
      'Optimal substructure: optimal solution contains optimal solutions to subproblems.',
      'Overlapping subproblems: same subproblems are solved multiple times in naive recursion.',
      'Classic problems: Fibonacci, Knapsack, Longest Common Subsequence, Coin Change, Edit Distance.',
    ],
    keyTakeaway: 'DP = recursion + memoization. Identify the state, the transition, and the base case.',
    visualization: 'dp',
    complexity: { Access: 'O(1)', Search: 'O(n)', Insert: 'O(n)', Delete: 'O(n)', Space: 'O(n)' },
    codes: {
      python: 'def fib(n):\n    dp = [0] * (n + 1)\n    dp[1] = 1\n    for i in range(2, n + 1):\n        dp[i] = dp[i-1] + dp[i-2]\n    return dp[n]\n\ndef coin_change(coins, amount):\n    dp = [float("inf")] * (amount + 1)\n    dp[0] = 0\n    for i in range(1, amount + 1):\n        for coin in coins:\n            if coin <= i:\n                dp[i] = min(dp[i], dp[i - coin] + 1)\n    return dp[amount] if dp[amount] != float("inf") else -1\n\ndef lcs(s1, s2):\n    m, n = len(s1), len(s2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1] + 1\n            else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    return dp[m][n]\n\nprint(coin_change([1, 5, 10, 25], 36))\nprint(lcs("ABCBDAB", "BDCAB"))',
      java: 'public class DP {\n    public static int coinChange(int[] coins, int amount) {\n        int[] dp = new int[amount + 1];\n        java.util.Arrays.fill(dp, amount + 1);\n        dp[0] = 0;\n        for (int i = 1; i <= amount; i++)\n            for (int coin : coins)\n                if (coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n    public static int knapsack(int[] weights, int[] values, int capacity) {\n        int n = weights.length;\n        int[][] dp = new int[n + 1][capacity + 1];\n        for (int i = 1; i <= n; i++)\n            for (int w = 0; w <= capacity; w++) {\n                dp[i][w] = dp[i-1][w];\n                if (weights[i-1] <= w)\n                    dp[i][w] = Math.max(dp[i][w], dp[i-1][w-weights[i-1]] + values[i-1]);\n            }\n        return dp[n][capacity];\n    }\n}',
      c: '#include <stdio.h>\nint coinChange(int coins[], int n, int amount) {\n    int dp[1001];\n    for (int i = 0; i <= amount; i++) dp[i] = amount + 1;\n    dp[0] = 0;\n    for (int i = 1; i <= amount; i++)\n        for (int j = 0; j < n; j++)\n            if (coins[j] <= i && dp[i - coins[j]] + 1 < dp[i])\n                dp[i] = dp[i - coins[j]] + 1;\n    return dp[amount] > amount ? -1 : dp[amount];\n}',
    },
    interview: [
      { q: 'What is the difference between memoization and tabulation?', a: 'Memoization is top-down: start with the original problem, recurse, cache results. Tabulation is bottom-up: start from base cases, fill a table iteratively. Both are O(n) for Fibonacci. Tabulation avoids recursion stack overhead.' },
      { q: 'How do you identify if a problem can be solved with DP?', a: 'Two signals: (1) Optimal substructure - optimal solution uses optimal solutions to subproblems. (2) Overlapping subproblems - same subproblems appear multiple times. If both are present, DP applies.' },
      { q: 'Explain the Coin Change problem and its DP solution.', a: 'Given coins and an amount, find minimum coins to make the amount. State: dp[i] = min coins for amount i. Transition: dp[i] = min(dp[i], dp[i-coin]+1) for each coin. Base: dp[0]=0. O(amount * coins) time.' },
      { q: 'What is the Longest Increasing Subsequence problem?', a: 'Find the length of the longest strictly increasing subsequence. O(n^2) DP: dp[i] = max(dp[j]+1) for all j<i where nums[j]<nums[i]. O(n log n) solution uses patience sorting with binary search.' },
      { q: 'What is the 0/1 Knapsack problem?', a: 'Given items with weights and values, maximize value within a weight capacity. Each item can be taken (1) or not (0). 2D DP: dp[i][w] = max value using first i items with capacity w. O(n*W) time and space.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Dynamic Programming Introduction - Abdul Bari",
                "url": "https://www.youtube.com/watch?v=5CGyA0m1yPQ"
        },
        {
                "title": "Dynamic Programming Playlist - NeetCode",
                "url": "https://www.youtube.com/watch?v=73r3KWi1dBk&list=PLot-Xpkr5xuHPnnMpCisbhyH_7GslzpxR"
        }
],
      docs: [
        {
                "title": "Dynamic Programming Course - MIT OpenCourseWare",
                "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/lecture-notes/"
        }
],
      blogs: [
        {
                "title": "Introduction to Dynamic Programming - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/dynamic-programming/"
        },
        {
                "title": "Dynamic Programming Study Guide - LeetCode Discuss",
                "url": "https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns"
        }
]
    },
  },
  arrays: {
    id: 'arrays', name: 'Arrays', realm: 'Arrays Realm', level: 'Beginner', icon: '\u2694\uFE0F',
    tagline: 'The Blade of Indexed Power',
    persona: 'TAKE YOUR HEART - and index it.',
    intuition: 'Imagine a row of ancient stone tablets, each engraved with a number and a position. You can reach any tablet instantly - no searching, just point and read. Like a Phantom Thief who knows exactly which safe holds the treasure.',
    analogy: 'Think of a parking lot with numbered slots. You know your car is in slot 7. Arrays work the same way: O(1) access by index. No traversal. No guessing. Pure precision.',
    description: ['An array is a contiguous block of memory storing elements of the same type.', 'Elements are accessed via zero-based indices in O(1) time.', 'Insertion/deletion at arbitrary positions costs O(n) due to shifting.', 'Arrays are the backbone of most other data structures.', 'Dynamic arrays double in capacity when full - amortized O(1) append.'],
    keyTakeaway: 'Arrays give you O(1) random access at the cost of O(n) insertion/deletion.',
    visualization: 'array',
    complexity: { Access: 'O(1)', Search: 'O(n)', Insert: 'O(n)', Delete: 'O(n)', Space: 'O(n)' },
    codes: {
      python: 'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n - 1):\n        for j in range(n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\ndef two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []\n\nprint(bubble_sort([64, 34, 25, 12, 22, 11, 90]))',
      java: 'public class Arrays {\n    public static void bubbleSort(int[] arr) {\n        int n = arr.length;\n        for (int i = 0; i < n - 1; i++)\n            for (int j = 0; j < n - i - 1; j++)\n                if (arr[j] > arr[j + 1]) {\n                    int temp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = temp;\n                }\n    }\n    public static int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int c = target - nums[i];\n            if (map.containsKey(c)) return new int[]{map.get(c), i};\n            map.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}',
      c: '#include <stdio.h>\nvoid bubbleSort(int arr[], int n) {\n    for (int i = 0; i < n-1; i++)\n        for (int j = 0; j < n-i-1; j++)\n            if (arr[j] > arr[j+1]) { int t=arr[j]; arr[j]=arr[j+1]; arr[j+1]=t; }\n}\nint maxSubarray(int arr[], int n) {\n    int maxSum = arr[0], curr = arr[0];\n    for (int i = 1; i < n; i++) {\n        curr = curr + arr[i] > arr[i] ? curr + arr[i] : arr[i];\n        if (curr > maxSum) maxSum = curr;\n    }\n    return maxSum;\n}',
    },
    interview: [
      { q: 'What is the time complexity of accessing an element in an array?', a: 'O(1) - constant time. Arrays store elements in contiguous memory, so any element is accessed directly via its index.' },
      { q: 'Why is insertion at the beginning of an array O(n)?', a: 'All existing elements must shift one position right to make room. With n elements, that is n shifts.' },
      { q: 'What is the difference between a static and dynamic array?', a: 'Static arrays have fixed size at compile time. Dynamic arrays resize by doubling capacity when full, giving amortized O(1) append.' },
      { q: 'How would you find two numbers that sum to a target?', a: 'Use a hash map: for each element, check if (target - element) exists in the map. O(n) time, O(n) space.' },
      { q: "What is Kadane's Algorithm?", a: 'An O(n) algorithm to find the maximum subarray sum. Track current sum and global max - if current sum goes negative, reset it.' },
    ],
  },
  strings: {
    id: 'strings', name: 'Strings', realm: 'Arrays Realm', level: 'Beginner', icon: '\uD83D\uDCDC',
    tagline: 'The Scroll of Character Sequences',
    persona: 'Every word is a weapon. Every character, a clue.',
    intuition: 'A string is just an array of characters - but with its own universe of algorithms. Palindromes, anagrams, pattern matching. Every cipher, every message - all strings.',
    analogy: 'Think of a string as a necklace of beads. Each bead is a character. You can read it forward, backward, find patterns. Strings are immutable in most languages.',
    description: ['A string is a sequence of characters stored contiguously in memory.', 'In most languages, strings are immutable - operations create new strings.', 'String comparison is O(n) - each character must be checked.', 'Common operations: reverse, palindrome check, anagram detection, substring search.', 'The KMP algorithm finds patterns in O(n+m) - far better than naive O(n*m).'],
    keyTakeaway: 'Strings are character arrays with rich algorithms. Master two-pointer and sliding window techniques.',
    visualization: 'string',
    complexity: { Access: 'O(1)', Search: 'O(n)', Insert: 'O(n)', Delete: 'O(n)', Space: 'O(n)' },
    codes: {
      python: 'def is_palindrome(s):\n    s = s.lower().replace(" ", "")\n    return s == s[::-1]\n\nfrom collections import Counter\ndef is_anagram(s, t):\n    return Counter(s) == Counter(t)\n\ndef length_of_longest_substring(s):\n    seen = {}\n    left = max_len = 0\n    for right, char in enumerate(s):\n        if char in seen and seen[char] >= left:\n            left = seen[char] + 1\n        seen[char] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len',
      java: 'public class Strings {\n    public static boolean isPalindrome(String s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) if (s.charAt(l++) != s.charAt(r--)) return false;\n        return true;\n    }\n    public static int lengthOfLongestSubstring(String s) {\n        Map<Character, Integer> map = new HashMap<>();\n        int max = 0, left = 0;\n        for (int right = 0; right < s.length(); right++) {\n            char c = s.charAt(right);\n            if (map.containsKey(c) && map.get(c) >= left) left = map.get(c) + 1;\n            map.put(c, right);\n            max = Math.max(max, right - left + 1);\n        }\n        return max;\n    }\n}',
      c: '#include <string.h>\nvoid reverse(char* s) {\n    int l = 0, r = strlen(s) - 1;\n    while (l < r) { char t = s[l]; s[l] = s[r]; s[r] = t; l++; r--; }\n}\nint isPalindrome(char* s) {\n    int l = 0, r = strlen(s) - 1;\n    while (l < r) if (s[l++] != s[r--]) return 0;\n    return 1;\n}',
    },
    interview: [
      { q: 'How do you check if a string is a palindrome?', a: 'Use two pointers - one at start, one at end. Move them inward, comparing characters. O(n) time, O(1) space.' },
      { q: 'How do you find the longest substring without repeating characters?', a: 'Sliding window with a hash map. Expand right pointer, track last seen index of each char. When a repeat is found, move left pointer past the previous occurrence. O(n) time.' },
      { q: 'What is the difference between == and .equals() for strings in Java?', a: '== compares references. .equals() compares actual character content. Always use .equals() for string value comparison in Java.' },
      { q: 'How do you check if two strings are anagrams?', a: 'Sort both strings and compare O(n log n). Or use a frequency count hash map O(n) time, O(1) space for fixed alphabet.' },
    ],
  },
  recursion: {
    id: 'recursion', name: 'Recursion', realm: 'Arrays Realm', level: 'Beginner', icon: '\uD83C\uDF00',
    tagline: 'The Mirror That Calls Itself',
    persona: 'To understand recursion, you must first understand recursion.',
    intuition: 'Recursion is a function that calls itself with a smaller version of the same problem. Like a Phantom Thief entering a Palace - each floor is a smaller version of the same challenge. You solve the smallest floor first (base case), then build up.',
    analogy: 'Russian nesting dolls. Open one doll, find a smaller one inside. Keep opening until you find the smallest - that is your base case. Then you close them back up - that is the return phase.',
    description: ['Recursion solves a problem by breaking it into smaller instances of the same problem.', 'Every recursive function needs a base case - the condition that stops the recursion.', 'The call stack stores each function call - deep recursion can cause stack overflow.', 'Tail recursion can be optimized by compilers to avoid stack buildup.', 'Many problems (trees, graphs, divide and conquer) are naturally recursive.'],
    keyTakeaway: 'Recursion = base case + recursive case. Always identify what gets smaller each call.',
    visualization: 'recursion',
    complexity: { Access: 'Varies', Search: 'Varies', Insert: 'Varies', Delete: 'Varies', Space: 'O(n) stack' },
    codes: {
      python: 'def factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n - 1)\n\nfrom functools import lru_cache\n@lru_cache(maxsize=None)\ndef fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)\n\nprint(factorial(5))  # 120\nprint(fib(10))       # 55',
      java: 'public class Recursion {\n    public static long factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n    public static long fib(int n) {\n        if (n <= 1) return n;\n        return fib(n-1) + fib(n-2);\n    }\n    public static void hanoi(int n, char from, char to, char aux) {\n        if (n == 1) { System.out.println("Move 1: " + from + "->" + to); return; }\n        hanoi(n-1, from, aux, to);\n        System.out.println("Move " + n + ": " + from + "->" + to);\n        hanoi(n-1, aux, to, from);\n    }\n}',
      c: 'long factorial(int n) { if (n <= 1) return 1; return n * factorial(n - 1); }\nlong power(long base, int exp) {\n    if (exp == 0) return 1;\n    if (exp % 2 == 0) { long h = power(base, exp/2); return h * h; }\n    return base * power(base, exp-1);\n}',
    },
    interview: [
      { q: 'What is the difference between recursion and iteration?', a: 'Recursion uses the call stack implicitly; iteration uses explicit loops. Recursion is often cleaner for tree/graph problems but risks stack overflow.' },
      { q: 'What is memoization and why does it matter for recursion?', a: 'Memoization caches results of expensive function calls. Naive Fibonacci is O(2^n); with memoization it becomes O(n).' },
      { q: 'What is tail recursion?', a: 'A recursive call where the recursive call is the last operation. Some compilers optimize this into iteration (tail call optimization), preventing stack overflow.' },
      { q: 'How do you convert a recursive solution to iterative?', a: 'Use an explicit stack data structure to simulate the call stack. Push the initial state, then loop: pop state, process it, push new states.' },
    ],
  },
  sorting: {
    id: 'sorting', name: 'Sorting Algorithms', realm: 'Sorting Realm', level: 'Beginner', icon: '\uD83D\uDD04',
    tagline: 'Order from Chaos',
    persona: 'The Phantom Thieves always sort their targets by priority.',
    intuition: 'Sorting is the act of arranging data in order. It unlocks binary search, simplifies problems, and is the foundation of efficient algorithms. Every comparison-based sort has a lower bound of O(n log n).',
    analogy: 'Sorting a hand of playing cards. Insertion sort: pick each card and insert it in the right place. Merge sort: split the deck in half, sort each half, merge them. Quick sort: pick a pivot card, put smaller cards left, larger right.',
    description: ['Bubble Sort: O(n^2) - compare adjacent pairs, bubble largest to end. Simple but slow.', 'Selection Sort: O(n^2) - find minimum, place at front. Fewer swaps than bubble.', 'Insertion Sort: O(n^2) worst, O(n) best - great for nearly sorted data.', 'Merge Sort: O(n log n) always - divide and conquer, stable sort, needs O(n) space.', 'Quick Sort: O(n log n) average, O(n^2) worst - in-place, fastest in practice with good pivot.', 'Heap Sort: O(n log n) always - in-place, uses heap property. Not stable.', 'Counting/Radix Sort: O(n) - non-comparison sorts for integers in a range.'],
    keyTakeaway: 'Merge Sort for guaranteed O(n log n). Quick Sort for average-case speed. Know when to use each.',
    visualization: 'sorting',
    complexity: { Bubble: 'O(n^2)', Merge: 'O(n log n)', Quick: 'O(n log n)', Heap: 'O(n log n)', Space: 'O(n)/O(1)' },
    codes: {
      python: 'def merge_sort(arr):\n    if len(arr) <= 1: return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]: result.append(left[i]); i += 1\n        else: result.append(right[j]); j += 1\n    return result + left[i:] + right[j:]\n\ndef quick_sort(arr, lo=0, hi=None):\n    if hi is None: hi = len(arr) - 1\n    if lo < hi:\n        pivot = partition(arr, lo, hi)\n        quick_sort(arr, lo, pivot - 1)\n        quick_sort(arr, pivot + 1, hi)\n\ndef partition(arr, lo, hi):\n    pivot = arr[hi]; i = lo - 1\n    for j in range(lo, hi):\n        if arr[j] <= pivot: i += 1; arr[i], arr[j] = arr[j], arr[i]\n    arr[i+1], arr[hi] = arr[hi], arr[i+1]\n    return i + 1',
      java: 'public class Sorting {\n    public static void mergeSort(int[] arr, int l, int r) {\n        if (l >= r) return;\n        int mid = (l + r) / 2;\n        mergeSort(arr, l, mid); mergeSort(arr, mid + 1, r);\n        int[] left = Arrays.copyOfRange(arr, l, mid + 1);\n        int[] right = Arrays.copyOfRange(arr, mid + 1, r + 1);\n        int i = 0, j = 0, k = l;\n        while (i < left.length && j < right.length)\n            arr[k++] = left[i] <= right[j] ? left[i++] : right[j++];\n        while (i < left.length) arr[k++] = left[i++];\n        while (j < right.length) arr[k++] = right[j++];\n    }\n    public static void quickSort(int[] arr, int lo, int hi) {\n        if (lo < hi) { int p = partition(arr, lo, hi); quickSort(arr, lo, p-1); quickSort(arr, p+1, hi); }\n    }\n    static int partition(int[] arr, int lo, int hi) {\n        int pivot = arr[hi], i = lo - 1;\n        for (int j = lo; j < hi; j++) if (arr[j] <= pivot) { i++; int t=arr[i]; arr[i]=arr[j]; arr[j]=t; }\n        int t=arr[i+1]; arr[i+1]=arr[hi]; arr[hi]=t; return i + 1;\n    }\n}',
      c: 'void merge(int arr[], int l, int m, int r) {\n    int n1=m-l+1, n2=r-m, L[n1], R[n2];\n    for(int i=0;i<n1;i++) L[i]=arr[l+i];\n    for(int j=0;j<n2;j++) R[j]=arr[m+1+j];\n    int i=0,j=0,k=l;\n    while(i<n1&&j<n2) arr[k++]=L[i]<=R[j]?L[i++]:R[j++];\n    while(i<n1) arr[k++]=L[i++];\n    while(j<n2) arr[k++]=R[j++];\n}\nvoid mergeSort(int arr[], int l, int r) {\n    if(l<r){int m=(l+r)/2;mergeSort(arr,l,m);mergeSort(arr,m+1,r);merge(arr,l,m,r);}\n}',
    },
    interview: [
      { q: 'What is the difference between Merge Sort and Quick Sort?', a: 'Merge Sort: O(n log n) always, stable, needs O(n) extra space. Quick Sort: O(n log n) average but O(n^2) worst case, in-place, not stable. Quick Sort is faster in practice due to cache efficiency.' },
      { q: 'When would you use Insertion Sort over Merge Sort?', a: 'Insertion Sort is O(n) for nearly sorted data and has low overhead. Use it for small arrays (< 20 elements) or as the base case in hybrid sorts like Timsort (Python) and Introsort (C++ STL).' },
      { q: 'What is a stable sort and why does it matter?', a: 'A stable sort preserves the relative order of equal elements. Merge Sort and Insertion Sort are stable. Quick Sort and Heap Sort are not. Stability matters when sorting objects by multiple keys.' },
      { q: 'What is the lower bound for comparison-based sorting?', a: 'O(n log n). Proven via decision tree argument - any comparison-based sort needs at least log2(n!) comparisons, which is Theta(n log n) by Stirling approximation.' },
      { q: 'How does Counting Sort achieve O(n)?', a: 'Counting Sort is non-comparison based. It counts occurrences of each value, then reconstructs the sorted array. Works only for integers in a known range [0, k]. Time: O(n + k), Space: O(k).' },
    ],
  },
  'binary-search': {
    id: 'binary-search', name: 'Binary Search', realm: 'Binary Search Realm', level: 'Beginner', icon: '\uD83D\uDD0D',
    tagline: 'Divide and Conquer the Search Space',
    persona: 'A Phantom Thief never searches blindly. They cut the problem in half.',
    intuition: 'Binary search is the art of elimination. You have a sorted array and a target. Instead of checking every element, you check the middle. If the target is smaller, eliminate the right half. If larger, eliminate the left. Each step halves the search space - O(log n).',
    analogy: 'Guessing a number between 1 and 1000. You guess 500. Too high? Now guess 250. Too low? Guess 375. Each guess eliminates half the possibilities. That is binary search.',
    description: ['Binary search requires a SORTED array - this is the prerequisite.', 'Each iteration eliminates half the search space: O(log n) time.', 'Three pointers: lo (left bound), hi (right bound), mid = (lo+hi)//2.', 'If arr[mid] == target: found. If arr[mid] < target: lo = mid+1. Else: hi = mid-1.', 'Binary search extends beyond arrays: search on answer space, rotated arrays, first/last occurrence.'],
    keyTakeaway: 'Binary search is O(log n). Master the template: lo, hi, mid. Know when to use lo <= hi vs lo < hi.',
    visualization: 'binary-search',
    complexity: { Access: 'O(log n)', Search: 'O(log n)', Insert: 'N/A', Delete: 'N/A', Space: 'O(1)' },
    codes: {
      python: 'def binary_search(arr, target):\n    lo, hi = 0, len(arr) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: lo = mid + 1\n        else: hi = mid - 1\n    return -1\n\ndef first_occurrence(arr, target):\n    lo, hi, result = 0, len(arr) - 1, -1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if arr[mid] == target: result = mid; hi = mid - 1\n        elif arr[mid] < target: lo = mid + 1\n        else: hi = mid - 1\n    return result',
      java: 'public class BinarySearch {\n    public static int search(int[] arr, int target) {\n        int lo = 0, hi = arr.length - 1;\n        while (lo <= hi) {\n            int mid = lo + (hi - lo) / 2;\n            if (arr[mid] == target) return mid;\n            else if (arr[mid] < target) lo = mid + 1;\n            else hi = mid - 1;\n        }\n        return -1;\n    }\n    public static int lowerBound(int[] arr, int target) {\n        int lo = 0, hi = arr.length;\n        while (lo < hi) { int mid = (lo + hi) / 2; if (arr[mid] < target) lo = mid + 1; else hi = mid; }\n        return lo;\n    }\n}',
      c: 'int binarySearch(int arr[], int n, int target) {\n    int lo = 0, hi = n - 1;\n    while (lo <= hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] < target) lo = mid + 1;\n        else hi = mid - 1;\n    }\n    return -1;\n}',
    },
    interview: [
      { q: 'Why do we use mid = lo + (hi - lo) / 2 instead of (lo + hi) / 2?', a: 'To prevent integer overflow. If lo and hi are both large integers, lo + hi can overflow. lo + (hi - lo) / 2 is mathematically equivalent but safe.' },
      { q: 'How do you find the first and last occurrence of a target in a sorted array?', a: 'For first: when arr[mid] == target, save mid and set hi = mid - 1 to keep searching left. For last: save mid and set lo = mid + 1 to keep searching right. Both are O(log n).' },
      { q: 'How do you search in a rotated sorted array?', a: 'At each step, one half is always sorted. Check which half is sorted, then determine if target falls in that range. If yes, search that half; otherwise search the other. O(log n).' },
      { q: 'What is binary search on the answer space?', a: 'Instead of searching for a value in an array, you binary search on the answer itself. Example: find minimum capacity to ship packages in D days. The answer lies in [max_weight, sum_weights]. Check feasibility at each mid.' },
    ],
  },
  'two-pointer': {
    id: 'two-pointer', name: 'Two Pointers', realm: 'Two Pointer Realm', level: 'Beginner', icon: '\uD83D\uDC46',
    tagline: 'Two Indices, One Pass - Elegant O(n) Solutions',
    persona: 'Two Phantom Thieves working from both ends of the Palace.',
    intuition: 'Two pointers is a technique where you use two indices that move through an array, usually from opposite ends or at different speeds. It converts O(n^2) brute force solutions into O(n). Classic for sorted arrays, palindromes, and pair problems.',
    analogy: 'Two people walking toward each other on a bridge. They start at opposite ends and walk until they meet. Together they cover the whole bridge in half the time. That is two pointers - two indices converging on the answer.',
    description: ['Two pointers: use two indices (left and right) that move based on conditions.', 'Opposite direction: start at both ends, move inward. Used for pair sum, palindrome check.', 'Same direction (fast/slow): one pointer moves faster. Used for cycle detection, finding middle.', 'Sorted array prerequisite: most two-pointer problems require sorted input.', 'Reduces O(n^2) nested loop solutions to O(n) single pass.'],
    keyTakeaway: 'Two pointers eliminates nested loops. If you see a sorted array + pair/triplet problem, think two pointers.',
    visualization: 'two-pointer',
    complexity: { Time: 'O(n)', Space: 'O(1)', Sorting: 'O(n log n)', Typical: 'O(n) after sort' },
    codes: {
      python: 'def two_sum_sorted(numbers, target):\n    left, right = 0, len(numbers) - 1\n    while left < right:\n        s = numbers[left] + numbers[right]\n        if s == target: return [left+1, right+1]\n        elif s < target: left += 1\n        else: right -= 1\n    return []\n\ndef max_area(height):\n    left, right = 0, len(height) - 1\n    max_water = 0\n    while left < right:\n        water = min(height[left], height[right]) * (right - left)\n        max_water = max(max_water, water)\n        if height[left] < height[right]: left += 1\n        else: right -= 1\n    return max_water\n\ndef three_sum(nums):\n    nums.sort(); result = []\n    for i in range(len(nums) - 2):\n        if i > 0 and nums[i] == nums[i-1]: continue\n        left, right = i+1, len(nums)-1\n        while left < right:\n            s = nums[i] + nums[left] + nums[right]\n            if s == 0: result.append([nums[i], nums[left], nums[right]]); left += 1; right -= 1\n            elif s < 0: left += 1\n            else: right -= 1\n    return result',
      java: 'public class TwoPointers {\n    public static int[] twoSumSorted(int[] nums, int target) {\n        int left = 0, right = nums.length - 1;\n        while (left < right) {\n            int sum = nums[left] + nums[right];\n            if (sum == target) return new int[]{left+1, right+1};\n            else if (sum < target) left++;\n            else right--;\n        }\n        return new int[]{};\n    }\n    public static int maxArea(int[] height) {\n        int left = 0, right = height.length - 1, max = 0;\n        while (left < right) {\n            max = Math.max(max, Math.min(height[left], height[right]) * (right - left));\n            if (height[left] < height[right]) left++; else right--;\n        }\n        return max;\n    }\n}',
      c: 'void twoSumSorted(int nums[], int n, int target) {\n    int left = 0, right = n - 1;\n    while (left < right) {\n        int sum = nums[left] + nums[right];\n        if (sum == target) { printf("[%d, %d]", left+1, right+1); return; }\n        else if (sum < target) left++;\n        else right--;\n    }\n}',
    },
    interview: [
      { q: 'When should you use two pointers instead of a hash map?', a: 'Use two pointers when the array is sorted and you need O(1) space. Use hash map when the array is unsorted and you can afford O(n) space. Two pointers: O(n) time O(1) space. Hash map: O(n) time O(n) space.' },
      { q: 'How do you solve the Container With Most Water problem?', a: 'Start with left=0, right=n-1. Area = min(height[left], height[right]) * (right-left). Move the pointer with smaller height inward. O(n) time.' },
      { q: 'How do you find all triplets that sum to zero?', a: 'Sort the array. For each element nums[i], use two pointers on the remaining subarray. Skip duplicates. O(n^2) time, O(1) extra space.' },
      { q: 'What is the fast/slow pointer technique?', a: "Floyd's cycle detection. Slow moves 1 step, fast moves 2. If they meet, there is a cycle. Also used to find the middle of a linked list." },
    ],
  },
  'prefix-sum': {
    id: 'prefix-sum', name: 'Prefix Sum', realm: 'Prefix Sum Realm', level: 'Beginner', icon: '\u03A3',
    tagline: 'Precompute Once, Query in O(1)',
    persona: 'The Phantom Thieves map every room before the heist. No surprises.',
    intuition: 'Prefix sum precomputes cumulative sums so any range sum query can be answered in O(1). Instead of summing elements from i to j every time (O(n) per query), you build a prefix array once (O(n)) and answer any query instantly.',
    analogy: 'Odometer in a car. It tracks total distance driven. To find distance between two cities, subtract the odometer reading at city A from city B. You never re-drive the route. That is prefix sum.',
    description: ['prefix[i] = arr[0] + arr[1] + ... + arr[i]. Build in O(n).', 'Range sum query [l, r] = prefix[r] - prefix[l-1]. Answer in O(1).', '2D prefix sum extends this to matrices for rectangle sum queries.', 'Difference array: inverse of prefix sum. Apply range updates in O(1), query in O(n).', 'Used in: subarray sum equals k, number of subarrays with given sum, equilibrium index.'],
    keyTakeaway: 'Prefix sum trades O(n) preprocessing for O(1) range queries. Essential for competitive programming.',
    visualization: 'prefix-sum',
    complexity: { Build: 'O(n)', Query: 'O(1)', Space: 'O(n)', Update: 'O(n) rebuild' },
    codes: {
      python: 'def build_prefix(arr):\n    prefix = [0] * (len(arr) + 1)\n    for i, val in enumerate(arr):\n        prefix[i+1] = prefix[i] + val\n    return prefix\n\ndef range_sum(prefix, l, r):\n    return prefix[r+1] - prefix[l]\n\nfrom collections import defaultdict\ndef subarray_sum_k(nums, k):\n    count = 0; prefix = 0\n    seen = defaultdict(int); seen[0] = 1\n    for num in nums:\n        prefix += num\n        count += seen[prefix - k]\n        seen[prefix] += 1\n    return count\n\narr = [1, 2, 3, 4, 5]\nprefix = build_prefix(arr)\nprint(range_sum(prefix, 1, 3))  # 9',
      java: 'public class PrefixSum {\n    public static int[] buildPrefix(int[] arr) {\n        int[] prefix = new int[arr.length + 1];\n        for (int i = 0; i < arr.length; i++) prefix[i+1] = prefix[i] + arr[i];\n        return prefix;\n    }\n    public static int rangeSum(int[] prefix, int l, int r) { return prefix[r+1] - prefix[l]; }\n    public static int subarraySumK(int[] nums, int k) {\n        Map<Integer, Integer> map = new HashMap<>();\n        map.put(0, 1); int count = 0, sum = 0;\n        for (int num : nums) { sum += num; count += map.getOrDefault(sum - k, 0); map.merge(sum, 1, Integer::sum); }\n        return count;\n    }\n}',
      c: 'void buildPrefix(int arr[], int prefix[], int n) {\n    prefix[0] = 0;\n    for (int i = 0; i < n; i++) prefix[i+1] = prefix[i] + arr[i];\n}\nint rangeSum(int prefix[], int l, int r) { return prefix[r+1] - prefix[l]; }',
    },
    interview: [
      { q: 'How do you find the number of subarrays with sum equal to k?', a: 'Use prefix sum + hash map. For each index, compute running sum. Check if (sum - k) exists in the map. If yes, add its count to result. O(n) time, O(n) space.' },
      { q: 'What is a 2D prefix sum and how do you compute rectangle sums?', a: 'prefix[i][j] = sum of all elements in rectangle from (0,0) to (i,j). Rectangle sum from (r1,c1) to (r2,c2) = prefix[r2][c2] - prefix[r1-1][c2] - prefix[r2][c1-1] + prefix[r1-1][c1-1]. O(1) query.' },
      { q: 'What is a difference array and when do you use it?', a: 'Difference array allows O(1) range updates. diff[l] += val, diff[r+1] -= val. After all updates, take prefix sum to get final array. Use when you have many range update operations.' },
      { q: 'How do you find the equilibrium index of an array?', a: 'Equilibrium index: left sum equals right sum. Compute total sum. Iterate: if left_sum == total - left_sum - arr[i], found it. Update left_sum += arr[i]. O(n) time, O(1) space.' },
    ],
  },
  'linked-list': {
    id: 'linked-list', name: 'Linked Lists', realm: 'Linked List Realm', level: 'Intermediate', icon: '\uD83D\uDD17',
    tagline: 'The Chain of Dynamic Memory',
    persona: 'Each node holds a secret. Follow the chain.',
    intuition: 'Picture a treasure hunt where each clue tells you where the next clue is hidden. You cannot jump to clue 5 directly - you must follow the chain. That is a linked list: sequential access, but infinitely flexible in size.',
    analogy: 'Train carriages - each carriage knows only about the next one. You can add or remove carriages anywhere without rebuilding the whole train. Arrays are a fixed-seat bus; linked lists are a modular train.',
    description: ['A linked list is a sequence of nodes, each containing data and a pointer to the next node.', 'No contiguous memory required - nodes can be scattered anywhere in memory.', 'O(1) insertion/deletion at head; O(n) at arbitrary positions (must traverse first).', 'O(n) access time - must traverse from head to reach any element.', 'Doubly linked lists add a prev pointer - enabling O(1) deletion given a node reference.'],
    keyTakeaway: "Linked lists excel at dynamic insertion/deletion but sacrifice random access. Know Floyd's cycle detection.",
    visualization: 'linkedlist',
    complexity: { Access: 'O(n)', Search: 'O(n)', Insert: 'O(1)*', Delete: 'O(1)*', Space: 'O(n)' },
    codes: {
      python: 'class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\nclass LinkedList:\n    def __init__(self): self.head = None\n    def insert_front(self, data):\n        node = Node(data); node.next = self.head; self.head = node\n    def reverse(self):\n        prev, curr = None, self.head\n        while curr: nxt = curr.next; curr.next = prev; prev = curr; curr = nxt\n        self.head = prev\n    def has_cycle(self):\n        slow = fast = self.head\n        while fast and fast.next:\n            slow = slow.next; fast = fast.next.next\n            if slow == fast: return True\n        return False',
      java: 'public class LinkedList {\n    static class Node { int data; Node next; Node(int d) { data = d; } }\n    Node head;\n    void insertFront(int data) { Node n = new Node(data); n.next = head; head = n; }\n    void reverse() {\n        Node prev = null, curr = head;\n        while (curr != null) { Node next = curr.next; curr.next = prev; prev = curr; curr = next; }\n        head = prev;\n    }\n    boolean hasCycle() {\n        Node slow = head, fast = head;\n        while (fast != null && fast.next != null) { slow = slow.next; fast = fast.next.next; if (slow == fast) return true; }\n        return false;\n    }\n}',
      c: 'typedef struct Node { int data; struct Node* next; } Node;\nNode* newNode(int d) { Node* n = malloc(sizeof(Node)); n->data = d; n->next = NULL; return n; }\nNode* reverse(Node* head) {\n    Node* prev = NULL, *curr = head;\n    while (curr) { Node* nxt = curr->next; curr->next = prev; prev = curr; curr = nxt; }\n    return prev;\n}\nint hasCycle(Node* head) {\n    Node* slow = head, *fast = head;\n    while (fast && fast->next) { slow = slow->next; fast = fast->next->next; if (slow == fast) return 1; }\n    return 0;\n}',
    },
    interview: [
      { q: 'What is the difference between an array and a linked list?', a: 'Arrays: O(1) access, O(n) insert/delete, contiguous memory. Linked lists: O(n) access, O(1) insert/delete at head, scattered memory. Choose based on your dominant operation.' },
      { q: 'How do you detect a cycle in a linked list?', a: "Floyd's Cycle Detection: slow pointer moves 1 step, fast moves 2. If they meet, there is a cycle. O(n) time, O(1) space." },
      { q: 'How do you reverse a linked list?', a: 'Three pointers: prev=null, curr=head, next. Each step: save next=curr.next, set curr.next=prev, advance prev=curr, curr=next. When curr is null, prev is the new head. O(n) time, O(1) space.' },
      { q: 'How do you find the middle of a linked list?', a: 'Slow/fast pointer technique. Slow moves 1 step, fast moves 2. When fast reaches end, slow is at the middle. O(n) time, O(1) space.' },
      { q: 'What is an LRU Cache and how do you implement it?', a: 'Least Recently Used cache. Use a doubly linked list + hash map. O(1) get and put. The list maintains order of use; the map gives O(1) node access.' },
    ],
  },
  stacks: {
    id: 'stacks', name: 'Stacks', realm: 'Stack Realm', level: 'Intermediate', icon: '\uD83D\uDDFC',
    tagline: 'The Tower of Last-In-First-Out',
    persona: 'The last secret placed is the first revealed.',
    intuition: "A stack is like a pile of Phantom Thief calling cards. You place them one on top of another. When you need one, you take from the top - the last one placed. LIFO: Last In, First Out. Your browser's back button is a stack.",
    analogy: 'A stack of plates at a buffet. You add plates to the top, take from the top. You cannot grab a plate from the middle without removing those above it first.',
    description: ['A stack is a linear data structure following LIFO - Last In, First Out.', 'Core operations: push (add to top), pop (remove from top), peek (view top) - all O(1).', 'Implemented using arrays or linked lists.', 'Used for: function call stack, undo/redo, expression evaluation, DFS, backtracking.', 'Monotonic stacks solve "next greater element" problems in O(n).'],
    keyTakeaway: 'Stacks are O(1) push/pop. Master monotonic stacks for array problems involving "next greater/smaller".',
    visualization: 'stack',
    complexity: { Access: 'O(n)', Search: 'O(n)', Insert: 'O(1)', Delete: 'O(1)', Space: 'O(n)' },
    codes: {
      python: 'class Stack:\n    def __init__(self): self._data = []\n    def push(self, val): self._data.append(val)\n    def pop(self): return self._data.pop() if self._data else None\n    def peek(self): return self._data[-1] if self._data else None\n\ndef is_valid(s):\n    stack = []\n    pairs = {")": "(", "}": "{", "]": "["}\n    for ch in s:\n        if ch in "({[": stack.append(ch)\n        elif ch in pairs:\n            if not stack or stack[-1] != pairs[ch]: return False\n            stack.pop()\n    return len(stack) == 0\n\ndef next_greater(nums):\n    result = [-1] * len(nums); stack = []\n    for i, num in enumerate(nums):\n        while stack and nums[stack[-1]] < num: result[stack.pop()] = num\n        stack.append(i)\n    return result',
      java: 'import java.util.Stack;\npublic class Stacks {\n    public static boolean isValid(String s) {\n        Stack<Character> stack = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (c==\'(\'||c==\'{\'||c==\'[\') stack.push(c);\n            else {\n                if (stack.isEmpty()) return false;\n                char top = stack.pop();\n                if (c==\')\'&&top!=\'(\') return false;\n                if (c==\'}\'&&top!=\'{\') return false;\n                if (c==\']\'&&top!=\'[\') return false;\n            }\n        }\n        return stack.isEmpty();\n    }\n}',
      c: '#define MAX 100\ntypedef struct { int data[MAX]; int top; } Stack;\nvoid init(Stack* s) { s->top = -1; }\nvoid push(Stack* s, int v) { s->data[++s->top] = v; }\nint pop(Stack* s) { return s->data[s->top--]; }\nint isEmpty(Stack* s) { return s->top == -1; }',
    },
    interview: [
      { q: 'What is a monotonic stack and when do you use it?', a: 'A stack that maintains elements in monotonically increasing or decreasing order. Used for "next greater element", "largest rectangle in histogram". Processes each element at most twice - O(n).' },
      { q: 'How do you implement a queue using two stacks?', a: 'Use stack1 for enqueue (push), stack2 for dequeue. When dequeuing, if stack2 is empty, pour all of stack1 into stack2 (reversing order). Amortized O(1) per operation.' },
      { q: 'How do you evaluate a postfix expression using a stack?', a: 'Scan left to right. If operand, push. If operator, pop two operands, apply operator, push result. Final stack top is the answer. O(n) time.' },
      { q: 'What is the min stack problem?', a: 'Design a stack that supports push, pop, and getMin in O(1). Solution: maintain a parallel min-stack. When pushing x, also push min(x, current_min) to the min-stack.' },
    ],
  },
  queues: {
    id: 'queues', name: 'Queues', realm: 'Stack Realm', level: 'Intermediate', icon: '\uD83D\uDE82',
    tagline: 'The Line of First-Come-First-Served',
    persona: 'Order is power. First in, first out.',
    intuition: 'A queue is a line of people waiting. The first person in line is the first to be served. FIFO: First In, First Out. BFS uses a queue. Task schedulers use queues. Message queues power distributed systems.',
    analogy: 'A ticket counter queue. People join at the back, leave from the front. No cutting in line. The order of arrival determines the order of service.',
    description: ['A queue is a linear data structure following FIFO - First In, First Out.', 'Core operations: enqueue (add to rear), dequeue (remove from front) - both O(1).', 'Implemented using arrays (circular buffer) or linked lists.', 'Deque (double-ended queue) supports O(1) operations at both ends.', 'Priority Queue (heap) serves elements by priority, not arrival order.'],
    keyTakeaway: 'Queues power BFS. Deques power sliding window maximum. Priority queues power Dijkstra and scheduling.',
    visualization: 'queue',
    complexity: { Access: 'O(n)', Search: 'O(n)', Insert: 'O(1)', Delete: 'O(1)', Space: 'O(n)' },
    codes: {
      python: 'from collections import deque\nqueue = deque()\nqueue.append(1); queue.append(2); queue.append(3)\nprint(queue.popleft())  # 1\n\ndef bfs(graph, start):\n    visited = set([start]); queue = deque([start]); order = []\n    while queue:\n        node = queue.popleft(); order.append(node)\n        for neighbor in graph[node]:\n            if neighbor not in visited: visited.add(neighbor); queue.append(neighbor)\n    return order\n\ndef max_sliding_window(nums, k):\n    dq, result = deque(), []\n    for i, num in enumerate(nums):\n        while dq and nums[dq[-1]] < num: dq.pop()\n        dq.append(i)\n        if dq[0] == i - k: dq.popleft()\n        if i >= k - 1: result.append(nums[dq[0]])\n    return result',
      java: 'import java.util.*;\npublic class Queues {\n    public static List<Integer> bfs(Map<Integer, List<Integer>> graph, int start) {\n        List<Integer> order = new ArrayList<>();\n        Set<Integer> visited = new HashSet<>();\n        Queue<Integer> queue = new LinkedList<>();\n        queue.offer(start); visited.add(start);\n        while (!queue.isEmpty()) {\n            int node = queue.poll(); order.add(node);\n            for (int n : graph.getOrDefault(node, new ArrayList<>()))\n                if (!visited.contains(n)) { visited.add(n); queue.offer(n); }\n        }\n        return order;\n    }\n}',
      c: '#define MAX 100\ntypedef struct { int data[MAX]; int front, rear, size; } Queue;\nvoid init(Queue* q) { q->front = q->rear = q->size = 0; }\nvoid enqueue(Queue* q, int v) { q->data[q->rear++ % MAX] = v; q->size++; }\nint dequeue(Queue* q) { q->size--; return q->data[q->front++ % MAX]; }',
    },
    interview: [
      { q: 'What is the difference between a stack and a queue?', a: 'Stack is LIFO (Last In First Out) - like a pile of plates. Queue is FIFO (First In First Out) - like a line of people. Stack uses push/pop; queue uses enqueue/dequeue.' },
      { q: 'How do you implement a stack using two queues?', a: 'For push: enqueue to q2, then move all of q1 to q2, then swap q1 and q2. This makes push O(n) but pop O(1).' },
      { q: 'What is a circular queue and why is it useful?', a: 'A queue implemented with a fixed-size array where the rear wraps around to the front. Avoids wasted space from dequeuing. Uses modulo arithmetic: rear = (rear + 1) % capacity.' },
      { q: 'When would you use a priority queue over a regular queue?', a: "When elements have different priorities and higher-priority items should be processed first. Examples: Dijkstra shortest path, A* search, task scheduling, Huffman coding." },
    ],
  },
  hashing: {
    id: 'hashing', name: 'Hashing', realm: 'Hashing Realm', level: 'Intermediate', icon: '#\uFE0F\u20E3',
    tagline: 'O(1) Lookup - The Magic of Hash Functions',
    persona: 'The Phantom Thieves always know exactly where to find what they need.',
    intuition: 'A hash table is a direct-address table with a twist. Instead of using the key directly as an index, you run it through a hash function that maps it to a bucket. The magic: O(1) average lookup, insert, and delete.',
    analogy: 'A library with a smart librarian. You give them a book title, they instantly tell you the shelf number using a formula. Two books might map to the same shelf (collision) - they handle it by chaining books together on that shelf.',
    description: ['A hash function maps keys to indices (buckets) in an array.', 'Collision handling: Chaining (linked list per bucket) or Open Addressing (probe for next empty slot).', 'Load factor = n/m (items/buckets). Keep it below 0.7 for good performance.', 'Average O(1) for insert, lookup, delete. Worst case O(n) with many collisions.', 'Python dict, Java HashMap, C++ unordered_map are all hash tables.'],
    keyTakeaway: 'Hash maps give O(1) average operations. Use them to trade space for time in almost any problem.',
    visualization: 'hashing',
    complexity: { Insert: 'O(1) avg', Lookup: 'O(1) avg', Delete: 'O(1) avg', Worst: 'O(n)', Space: 'O(n)' },
    codes: {
      python: 'freq = {}\narr = [1, 2, 3, 2, 1, 3, 3]\nfor num in arr: freq[num] = freq.get(num, 0) + 1\n\ndef two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen: return [seen[complement], i]\n        seen[num] = i\n    return []\n\nfrom collections import defaultdict\ndef group_anagrams(strs):\n    groups = defaultdict(list)\n    for s in strs: groups[tuple(sorted(s))].append(s)\n    return list(groups.values())\n\ndef longest_consecutive(nums):\n    num_set = set(nums); best = 0\n    for n in num_set:\n        if n - 1 not in num_set:\n            curr, length = n, 1\n            while curr + 1 in num_set: curr += 1; length += 1\n            best = max(best, length)\n    return best',
      java: 'import java.util.*;\npublic class Hashing {\n    public static int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement)) return new int[]{map.get(complement), i};\n            map.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n    public static Map<Integer, Integer> frequency(int[] arr) {\n        Map<Integer, Integer> freq = new HashMap<>();\n        for (int n : arr) freq.merge(n, 1, Integer::sum);\n        return freq;\n    }\n}',
      c: '#define SIZE 100\ntypedef struct { int key; int val; int used; } Entry;\nEntry table[SIZE];\nint hash(int key) { return ((key % SIZE) + SIZE) % SIZE; }\nvoid insert(int key, int val) {\n    int h = hash(key);\n    while (table[h].used && table[h].key != key) h = (h + 1) % SIZE;\n    table[h] = (Entry){key, val, 1};\n}\nint lookup(int key) {\n    int h = hash(key);\n    while (table[h].used) { if (table[h].key == key) return table[h].val; h = (h + 1) % SIZE; }\n    return -1;\n}',
    },
    interview: [
      { q: 'What is a hash collision and how is it handled?', a: 'A collision occurs when two keys hash to the same bucket. Two main strategies: (1) Chaining - each bucket holds a linked list of entries. (2) Open Addressing - probe for the next empty slot.' },
      { q: 'What is the load factor and why does it matter?', a: 'Load factor = number of entries / number of buckets. As it increases, collision probability rises. Most implementations resize (rehash) when load factor exceeds 0.7-0.75, doubling the table size.' },
      { q: 'How would you design a hash function for strings?', a: 'Polynomial rolling hash: h = sum(s[i] * p^i) % m, where p is a prime (31 or 37) and m is a large prime. This distributes strings uniformly. Java uses this approach in String.hashCode().' },
      { q: 'What is the difference between HashMap and HashSet?', a: 'HashMap stores key-value pairs. HashSet stores only keys (implemented as a HashMap with dummy values). Both offer O(1) average operations.' },
    ],
  },
  heaps: {
    id: 'heaps', name: 'Heaps', realm: 'Heap Realm', level: 'Intermediate', icon: '\uD83C\uDFD4\uFE0F',
    tagline: 'Always Access the Extreme',
    persona: 'The Phantom Thieves always know who the most dangerous target is.',
    intuition: 'A heap is a complete binary tree with one rule: every parent is greater than (max-heap) or less than (min-heap) its children. This gives you O(1) access to the maximum or minimum, and O(log n) insert and delete.',
    analogy: 'A hospital emergency room. Patients are triaged by severity. The most critical patient is always seen first (root of max-heap). New patients are added and sorted by priority.',
    description: ['A heap is a complete binary tree stored as an array. Parent of i is at (i-1)//2, children at 2i+1 and 2i+2.', 'Max-heap: every parent >= children. Min-heap: every parent <= children.', 'Insert: add at end, heapify up. Extract: swap root with last, remove last, heapify down.', 'Build heap from array: O(n) - more efficient than n insertions.', 'Heap Sort: build max-heap, repeatedly extract max. O(n log n), in-place.'],
    keyTakeaway: 'Heaps give O(1) peek at min/max and O(log n) insert/extract. Use for top-K, scheduling, Dijkstra.',
    visualization: 'heap',
    complexity: { Peek: 'O(1)', Insert: 'O(log n)', Extract: 'O(log n)', Build: 'O(n)', Space: 'O(n)' },
    codes: {
      python: 'import heapq\nheap = []\nheapq.heappush(heap, 5); heapq.heappush(heap, 1); heapq.heappush(heap, 3)\nprint(heapq.heappop(heap))  # 1 (minimum)\n\nmax_heap = []\nfor val in [5, 1, 3, 8, 2]: heapq.heappush(max_heap, -val)\nprint(-heapq.heappop(max_heap))  # 8 (maximum)\n\ndef kth_largest(nums, k):\n    heap = nums[:k]; heapq.heapify(heap)\n    for num in nums[k:]:\n        if num > heap[0]: heapq.heapreplace(heap, num)\n    return heap[0]',
      java: 'import java.util.PriorityQueue;\npublic class Heaps {\n    public static int kthLargest(int[] nums, int k) {\n        PriorityQueue<Integer> pq = new PriorityQueue<>();\n        for (int num : nums) { pq.offer(num); if (pq.size() > k) pq.poll(); }\n        return pq.peek();\n    }\n    public static void heapSort(int[] arr) {\n        int n = arr.length;\n        for (int i = n/2-1; i >= 0; i--) heapify(arr, n, i);\n        for (int i = n-1; i > 0; i--) { int t=arr[0]; arr[0]=arr[i]; arr[i]=t; heapify(arr, i, 0); }\n    }\n    static void heapify(int[] arr, int n, int i) {\n        int largest = i, l = 2*i+1, r = 2*i+2;\n        if (l < n && arr[l] > arr[largest]) largest = l;\n        if (r < n && arr[r] > arr[largest]) largest = r;\n        if (largest != i) { int t=arr[i]; arr[i]=arr[largest]; arr[largest]=t; heapify(arr, n, largest); }\n    }\n}',
      c: '#define MAX 100\nint heap[MAX], size = 0;\nvoid push(int val) {\n    heap[size] = val; int i = size++;\n    while (i > 0 && heap[(i-1)/2] < heap[i]) { int t=heap[i]; heap[i]=heap[(i-1)/2]; heap[(i-1)/2]=t; i=(i-1)/2; }\n}\nint pop() {\n    int max = heap[0]; heap[0] = heap[--size]; int i = 0;\n    while (1) { int l=2*i+1,r=2*i+2,m=i; if(l<size&&heap[l]>heap[m]) m=l; if(r<size&&heap[r]>heap[m]) m=r; if(m==i) break; int t=heap[i]; heap[i]=heap[m]; heap[m]=t; i=m; }\n    return max;\n}',
    },
    interview: [
      { q: 'What is the difference between a heap and a BST?', a: 'Heap: O(1) min/max access, O(log n) insert/delete, no ordered traversal. BST: O(log n) search/insert/delete, supports ordered traversal. Use heap for priority queue, BST for ordered data with search.' },
      { q: 'How do you find the Kth largest element efficiently?', a: 'Use a min-heap of size K. Iterate through the array: if element > heap top, replace top. After processing all elements, heap top is the Kth largest. O(n log k) time, O(k) space.' },
      { q: 'Why is building a heap O(n) and not O(n log n)?', a: 'When heapifying from the bottom up, most nodes are near the leaves and require few swaps. The total work is sum of heights = O(n). This is tighter than the naive O(n log n) of inserting n elements one by one.' },
      { q: 'What is a priority queue and how is it different from a regular queue?', a: 'A priority queue serves elements by priority, not arrival order. Implemented with a heap. Regular queue is FIFO. Priority queue is used in Dijkstra, A*, task scheduling, Huffman coding.' },
    ],
  },
  'sliding-window': {
    id: 'sliding-window', name: 'Sliding Window', realm: 'Sliding Window Realm', level: 'Intermediate', icon: '\uD83D\uDDD4\uFE0F',
    tagline: 'A Moving Frame That Solves Subarray Problems',
    persona: 'The Phantom Thieves scan the Palace through a moving window of vision.',
    intuition: 'Sliding window maintains a window (subarray) that expands and contracts as it slides through the array. Instead of recomputing the window from scratch each time, you add the new element and remove the old one. O(n) instead of O(n^2).',
    analogy: 'A train window. As the train moves, new scenery enters from the right and old scenery leaves from the left. You never stop the train to look back - you just track what is currently visible. That is sliding window.',
    description: ['Fixed window: window size k is constant. Slide by adding right element, removing left element.', 'Variable window: expand right until condition violated, then shrink from left.', 'Use when: maximum/minimum subarray of size k, longest substring with constraint, minimum window substring.', 'Key insight: avoid recomputing the entire window - just update incrementally.', 'Often combined with hash maps to track character/element frequencies in the window.'],
    keyTakeaway: 'Sliding window converts O(n*k) to O(n). Recognize it when you see subarray/substring with a size or constraint.',
    visualization: 'sliding-window',
    complexity: { Time: 'O(n)', Space: 'O(1) to O(k)', Fixed: 'O(n)', Variable: 'O(n)' },
    codes: {
      python: 'def max_sum_k(arr, k):\n    window_sum = sum(arr[:k]); max_sum = window_sum\n    for i in range(k, len(arr)):\n        window_sum += arr[i] - arr[i-k]\n        max_sum = max(max_sum, window_sum)\n    return max_sum\n\ndef length_of_longest_substring(s):\n    char_index = {}; left = max_len = 0\n    for right, ch in enumerate(s):\n        if ch in char_index and char_index[ch] >= left: left = char_index[ch] + 1\n        char_index[ch] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len',
      java: 'public class SlidingWindow {\n    public static int maxSumK(int[] arr, int k) {\n        int sum = 0; for (int i = 0; i < k; i++) sum += arr[i]; int max = sum;\n        for (int i = k; i < arr.length; i++) { sum += arr[i] - arr[i-k]; max = Math.max(max, sum); }\n        return max;\n    }\n    public static int lengthOfLongestSubstring(String s) {\n        Map<Character, Integer> map = new HashMap<>(); int max = 0, left = 0;\n        for (int right = 0; right < s.length(); right++) {\n            char c = s.charAt(right);\n            if (map.containsKey(c) && map.get(c) >= left) left = map.get(c) + 1;\n            map.put(c, right); max = Math.max(max, right - left + 1);\n        }\n        return max;\n    }\n}',
      c: 'int maxSumK(int arr[], int n, int k) {\n    int sum = 0, max;\n    for (int i = 0; i < k; i++) sum += arr[i]; max = sum;\n    for (int i = k; i < n; i++) { sum += arr[i] - arr[i-k]; if (sum > max) max = sum; }\n    return max;\n}',
    },
    interview: [
      { q: 'What is the difference between fixed and variable sliding window?', a: 'Fixed window: size k is constant, slide by adding right and removing left element. Variable window: expand right until constraint violated, then shrink from left. Variable window is used for longest/shortest subarray problems.' },
      { q: 'How do you find the longest substring with at most k distinct characters?', a: 'Variable window with a frequency map. Expand right, add character to map. When distinct chars > k, shrink from left (decrement freq, remove if 0). Track max window size. O(n) time.' },
      { q: 'How do you find the maximum of each window of size k?', a: 'Use a monotonic deque. Maintain indices of useful elements in decreasing order. For each new element, remove smaller elements from back. Remove elements outside window from front. Front is always the max. O(n) time.' },
      { q: 'When does sliding window NOT work?', a: 'When the window condition is not monotonic - shrinking the window does not necessarily fix the violation. Also does not work when you need non-contiguous subarrays (use DP instead).' },
    ],
  },
  'bit-manipulation': {
    id: 'bit-manipulation', name: 'Bit Manipulation', realm: 'Bit Realm', level: 'Intermediate', icon: '\u2699\uFE0F',
    tagline: 'Binary Magic - Manipulate at the Bit Level',
    persona: 'The Phantom Thieves operate in binary - 0 means hidden, 1 means revealed.',
    intuition: 'Every integer is stored as bits. Bit manipulation lets you operate directly on those bits - faster than arithmetic, no extra space. XOR to find unique elements, AND to check bits, shifts to multiply or divide by powers of 2.',
    analogy: 'A row of light switches (bits). AND is both must be on. OR is at least one on. XOR is exactly one on. Shift left doubles the value. These operations happen in a single CPU instruction.',
    description: ['AND (&): 1 only if both bits are 1. Used for masking, checking if bit is set.', 'OR (|): 1 if either bit is 1. Used for setting bits.', 'XOR (^): 1 if bits differ. Used for toggling, finding unique elements, swapping without temp.', 'NOT (~): flip all bits. ~n = -(n+1) in two complement representation.', 'Left shift (<<): multiply by 2^k. Right shift (>>): divide by 2^k. Both are O(1).'],
    keyTakeaway: 'XOR is the most powerful bit trick. n & (n-1) removes lowest set bit. n & (-n) isolates lowest set bit.',
    visualization: 'bit',
    complexity: { 'All ops': 'O(1)', 'Count bits': 'O(log n)', 'Brian Kernighan': 'O(set bits)', Space: 'O(1)' },
    codes: {
      python: 'def is_set(n, k): return (n >> k) & 1\ndef set_bit(n, k): return n | (1 << k)\ndef clear_bit(n, k): return n & ~(1 << k)\ndef toggle_bit(n, k): return n ^ (1 << k)\n\ndef count_bits(n):\n    count = 0\n    while n: n &= n - 1; count += 1\n    return count\n\ndef single_number(nums):\n    result = 0\n    for n in nums: result ^= n\n    return result\n\ndef is_power_of_2(n): return n > 0 and (n & (n-1)) == 0\n\ndef all_subsets(arr):\n    n = len(arr)\n    return [[arr[i] for i in range(n) if mask & (1 << i)] for mask in range(1 << n)]',
      java: 'public class BitManipulation {\n    public static boolean isSet(int n, int k) { return (n >> k & 1) == 1; }\n    public static int setBit(int n, int k) { return n | (1 << k); }\n    public static int clearBit(int n, int k) { return n & ~(1 << k); }\n    public static int countBits(int n) { int count = 0; while (n != 0) { n &= n - 1; count++; } return count; }\n    public static int singleNumber(int[] nums) { int result = 0; for (int n : nums) result ^= n; return result; }\n    public static boolean isPowerOf2(int n) { return n > 0 && (n & (n-1)) == 0; }\n}',
      c: 'int isSet(int n, int k) { return (n >> k) & 1; }\nint setBit(int n, int k) { return n | (1 << k); }\nint clearBit(int n, int k) { return n & ~(1 << k); }\nint countBits(int n) { int c=0; while(n){n&=n-1;c++;} return c; }\nint singleNumber(int arr[], int n) { int r=0; for(int i=0;i<n;i++) r^=arr[i]; return r; }\nint isPowerOf2(int n) { return n > 0 && (n & (n-1)) == 0; }',
    },
    interview: [
      { q: 'How do you find the single non-duplicate in an array where every other element appears twice?', a: 'XOR all elements. Pairs cancel out (a ^ a = 0) and 0 ^ x = x. The result is the unique element. O(n) time, O(1) space.' },
      { q: 'How do you check if a number is a power of 2?', a: 'n > 0 && (n & (n-1)) == 0. Powers of 2 have exactly one set bit. n-1 flips all bits below that bit. AND gives 0 only for powers of 2.' },
      { q: 'What does n & (n-1) do?', a: 'It removes the lowest set bit of n. Example: n=12 (1100), n-1=11 (1011), n&(n-1)=8 (1000). Used to count set bits and check powers of 2.' },
      { q: 'How do you generate all subsets using bit manipulation?', a: 'For n elements, iterate mask from 0 to 2^n - 1. For each mask, bit i being set means element i is in the subset. This generates all 2^n subsets in O(2^n * n) time.' },
    ],
  },
  trees: {
    id: 'trees', name: 'Trees', realm: 'Tree Realm', level: 'Advanced', icon: '\uD83C\uDF33',
    tagline: 'The Hierarchy of Infinite Branches',
    persona: 'Every root holds a kingdom. Every leaf, a secret.',
    intuition: 'A tree is a hierarchical structure - one root, branching into children, each child branching further. File systems, HTML DOM, organization charts - all trees. The Phantom Thieves Palace has floors - each floor branches into rooms.',
    analogy: 'A family tree. One ancestor at the top, children below, grandchildren below them. Each person (node) knows their children but not their cousins. The root has no parent; leaves have no children.',
    description: ['A tree is a connected acyclic graph with one root node.', 'Binary trees have at most 2 children per node (left and right).', 'BST property: left subtree values < node < right subtree values.', 'Tree traversals: Inorder (LNR), Preorder (NLR), Postorder (LRN), Level-order (BFS).', 'Balanced BSTs (AVL, Red-Black) guarantee O(log n) operations.'],
    keyTakeaway: 'Master the 4 traversals and BST operations. Most tree problems are solved recursively.',
    visualization: 'tree',
    complexity: { Access: 'O(log n)', Search: 'O(log n)', Insert: 'O(log n)', Delete: 'O(log n)', Space: 'O(n)' },
    codes: {
      python: 'class TreeNode:\n    def __init__(self, val=0): self.val = val; self.left = self.right = None\n\ndef inorder(root):\n    if not root: return []\n    return inorder(root.left) + [root.val] + inorder(root.right)\n\ndef max_depth(root):\n    if not root: return 0\n    return 1 + max(max_depth(root.left), max_depth(root.right))\n\nfrom collections import deque\ndef level_order(root):\n    if not root: return []\n    result, queue = [], deque([root])\n    while queue:\n        level = []\n        for _ in range(len(queue)):\n            node = queue.popleft(); level.append(node.val)\n            if node.left: queue.append(node.left)\n            if node.right: queue.append(node.right)\n        result.append(level)\n    return result',
      java: 'public class Trees {\n    static class TreeNode { int val; TreeNode left, right; TreeNode(int v) { val = v; } }\n    public static List<Integer> inorder(TreeNode root) {\n        List<Integer> result = new ArrayList<>();\n        inorderHelper(root, result); return result;\n    }\n    private static void inorderHelper(TreeNode node, List<Integer> result) {\n        if (node == null) return;\n        inorderHelper(node.left, result); result.add(node.val); inorderHelper(node.right, result);\n    }\n    public static int maxDepth(TreeNode root) {\n        if (root == null) return 0;\n        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n    }\n    public static TreeNode lca(TreeNode root, TreeNode p, TreeNode q) {\n        if (root == null || root == p || root == q) return root;\n        TreeNode left = lca(root.left, p, q), right = lca(root.right, p, q);\n        return left != null && right != null ? root : (left != null ? left : right);\n    }\n}',
      c: 'typedef struct Node { int val; struct Node *left, *right; } Node;\nNode* newNode(int v) { Node* n = malloc(sizeof(Node)); n->val = v; n->left = n->right = NULL; return n; }\nvoid inorder(Node* root) { if (!root) return; inorder(root->left); printf("%d ", root->val); inorder(root->right); }\nint maxDepth(Node* root) { if (!root) return 0; int l=maxDepth(root->left),r=maxDepth(root->right); return 1+(l>r?l:r); }\nNode* insert(Node* root, int val) {\n    if (!root) return newNode(val);\n    if (val < root->val) root->left = insert(root->left, val);\n    else root->right = insert(root->right, val);\n    return root;\n}',
    },
    interview: [
      { q: 'What is the difference between a tree and a graph?', a: 'A tree is a connected acyclic graph with exactly n-1 edges for n nodes. Every tree is a graph, but not every graph is a tree. Trees have a root; graphs may have cycles.' },
      { q: 'What are the four tree traversals?', a: 'Inorder (Left-Node-Right): gives sorted order for BST. Preorder (Node-Left-Right): used for copying/serializing. Postorder (Left-Right-Node): used for deletion. Level-order (BFS): processes level by level.' },
      { q: 'What is the height of a balanced BST with n nodes?', a: 'O(log n). A balanced BST halves the search space at each level. An unbalanced BST (like a sorted array inserted sequentially) degrades to O(n) height.' },
      { q: 'How do you find the Lowest Common Ancestor of two nodes?', a: 'Recursively: if root is null or equals p or q, return root. Recurse left and right. If both return non-null, root is the LCA. Otherwise return whichever is non-null. O(n) time.' },
      { q: 'What is a segment tree and when do you use it?', a: 'A tree for range queries (sum, min, max) with O(log n) query and update. Build in O(n). Used when you need both point updates and range queries on an array.' },
    ],
  },
  graphs: {
    id: 'graphs', name: 'Graphs', realm: 'Graph Realm', level: 'Advanced', icon: '\uD83D\uDD78\uFE0F',
    tagline: 'The Web of All Connections',
    persona: 'Every connection is a path. Every path, a possibility.',
    intuition: 'Graphs model relationships. Social networks, maps, the internet - all are graphs. Nodes (vertices) connected by edges. The Phantom Thieves navigate a Palace like a graph - rooms are nodes, doors are edges. Find the shortest path to the treasure.',
    analogy: 'A city map. Intersections are nodes, roads are edges. Some roads are one-way (directed). Some have tolls (weighted). Finding the fastest route is Dijkstra. Checking if all areas are reachable is connectivity.',
    description: ['A graph G = (V, E) consists of vertices V and edges E connecting them.', 'Directed graphs have one-way edges; undirected have two-way.', 'Weighted graphs assign costs to edges - used in shortest path algorithms.', 'Representations: adjacency matrix O(V^2) space, adjacency list O(V+E) space.', 'Key algorithms: BFS (shortest path unweighted), DFS (cycle detection, topological sort), Dijkstra (weighted shortest path).'],
    keyTakeaway: 'BFS for shortest path (unweighted). Dijkstra for weighted. DFS for cycle detection and topological sort.',
    visualization: 'graph',
    complexity: { Access: 'O(1)', Search: 'O(V+E)', Insert: 'O(1)', Delete: 'O(V+E)', Space: 'O(V+E)' },
    codes: {
      python: 'from collections import deque, defaultdict\nimport heapq\n\ndef bfs(graph, start, end):\n    queue = deque([(start, [start])]); visited = {start}\n    while queue:\n        node, path = queue.popleft()\n        if node == end: return path\n        for neighbor in graph[node]:\n            if neighbor not in visited: visited.add(neighbor); queue.append((neighbor, path + [neighbor]))\n    return None\n\ndef dijkstra(graph, start):\n    dist = defaultdict(lambda: float("inf")); dist[start] = 0; heap = [(0, start)]\n    while heap:\n        d, u = heapq.heappop(heap)\n        if d > dist[u]: continue\n        for v, weight in graph[u]:\n            new_dist = dist[u] + weight\n            if new_dist < dist[v]: dist[v] = new_dist; heapq.heappush(heap, (new_dist, v))\n    return dict(dist)',
      java: 'import java.util.*;\npublic class Graphs {\n    public static boolean hasCycle(Map<Integer, List<Integer>> graph) {\n        Set<Integer> visited = new HashSet<>(), recStack = new HashSet<>();\n        for (int node : graph.keySet()) if (dfs(graph, node, visited, recStack)) return true;\n        return false;\n    }\n    private static boolean dfs(Map<Integer, List<Integer>> g, int node, Set<Integer> vis, Set<Integer> rec) {\n        if (rec.contains(node)) return true;\n        if (vis.contains(node)) return false;\n        vis.add(node); rec.add(node);\n        for (int n : g.getOrDefault(node, new ArrayList<>())) if (dfs(g, n, vis, rec)) return true;\n        rec.remove(node); return false;\n    }\n}',
      c: '#define V 6\nint graph[V][V];\nvoid bfs(int start) {\n    int visited[V]={0}, queue[V], front=0, rear=0;\n    visited[start]=1; queue[rear++]=start;\n    while(front<rear) { int node=queue[front++]; printf("%d ",node); for(int i=0;i<V;i++) if(graph[node][i]&&!visited[i]){visited[i]=1;queue[rear++]=i;} }\n}\nvoid dfs(int node, int visited[]) { visited[node]=1; printf("%d ",node); for(int i=0;i<V;i++) if(graph[node][i]&&!visited[i]) dfs(i,visited); }',
    },
    interview: [
      { q: 'What is the difference between BFS and DFS?', a: 'BFS uses a queue, explores level by level, finds shortest path in unweighted graphs. DFS uses a stack (or recursion), explores as deep as possible first, used for cycle detection, topological sort, connected components.' },
      { q: 'How does Dijkstra algorithm work?', a: 'Greedy shortest path for weighted graphs with non-negative edges. Use a min-heap. Start with distance 0 for source, infinity for others. Repeatedly extract minimum distance node, relax its neighbors. O((V+E) log V) with a heap.' },
      { q: 'What is topological sorting?', a: "Linear ordering of vertices in a DAG such that for every edge u->v, u comes before v. Used for task scheduling, build systems, course prerequisites. Implemented via DFS or Kahn's algorithm (BFS with in-degree)." },
      { q: 'How do you detect a cycle in a directed graph?', a: "DFS with a recursion stack. Mark nodes as visited and in-recursion-stack. If you visit a node already in the recursion stack, there is a cycle. O(V+E) time." },
      { q: 'What is Union-Find and when do you use it?', a: "A data structure for tracking connected components. Supports union (merge two sets) and find (which set does a node belong to) in near O(1) with path compression and union by rank. Used for Kruskal MST." },
    ],
  },
  dp: {
    id: 'dp', name: 'Dynamic Programming', realm: 'DP Realm', level: 'Advanced', icon: '\uD83E\uDDE0',
    tagline: 'Remember the Past. Conquer the Future.',
    persona: 'Every subproblem solved is a stepping stone to the final heist.',
    intuition: 'Dynamic Programming is recursion with memory. Instead of solving the same subproblem a thousand times, you solve it once and remember the answer. Like a Phantom Thief who maps every room of the Palace - never entering the same room twice.',
    analogy: 'Climbing stairs. To reach step n, you came from step n-1 or n-2. The number of ways to reach step n = ways(n-1) + ways(n-2). You only need to compute each step once. That is DP.',
    description: ['DP solves problems by breaking them into overlapping subproblems and storing results.', 'Two approaches: top-down (memoization) and bottom-up (tabulation).', 'Optimal substructure: optimal solution contains optimal solutions to subproblems.', 'Overlapping subproblems: same subproblems are solved multiple times in naive recursion.', 'Classic problems: Fibonacci, Knapsack, Longest Common Subsequence, Coin Change, Edit Distance.'],
    keyTakeaway: 'DP = recursion + memoization. Identify the state, the transition, and the base case.',
    visualization: 'dp',
    complexity: { Access: 'O(1)', Search: 'O(n)', Insert: 'O(n)', Delete: 'O(n)', Space: 'O(n)' },
    codes: {
      python: 'def fib(n):\n    dp = [0] * (n + 1); dp[1] = 1\n    for i in range(2, n + 1): dp[i] = dp[i-1] + dp[i-2]\n    return dp[n]\n\ndef coin_change(coins, amount):\n    dp = [float("inf")] * (amount + 1); dp[0] = 0\n    for i in range(1, amount + 1):\n        for coin in coins:\n            if coin <= i: dp[i] = min(dp[i], dp[i - coin] + 1)\n    return dp[amount] if dp[amount] != float("inf") else -1\n\ndef lcs(s1, s2):\n    m, n = len(s1), len(s2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1] + 1\n            else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    return dp[m][n]',
      java: 'public class DP {\n    public static int coinChange(int[] coins, int amount) {\n        int[] dp = new int[amount + 1]; java.util.Arrays.fill(dp, amount + 1); dp[0] = 0;\n        for (int i = 1; i <= amount; i++) for (int coin : coins) if (coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n    public static int knapsack(int[] weights, int[] values, int capacity) {\n        int n = weights.length; int[][] dp = new int[n + 1][capacity + 1];\n        for (int i = 1; i <= n; i++) for (int w = 0; w <= capacity; w++) {\n            dp[i][w] = dp[i-1][w];\n            if (weights[i-1] <= w) dp[i][w] = Math.max(dp[i][w], dp[i-1][w-weights[i-1]] + values[i-1]);\n        }\n        return dp[n][capacity];\n    }\n}',
      c: 'int coinChange(int coins[], int n, int amount) {\n    int dp[1001]; for(int i=0;i<=amount;i++) dp[i]=amount+1; dp[0]=0;\n    for(int i=1;i<=amount;i++) for(int j=0;j<n;j++) if(coins[j]<=i&&dp[i-coins[j]]+1<dp[i]) dp[i]=dp[i-coins[j]]+1;\n    return dp[amount]>amount?-1:dp[amount];\n}',
    },
    interview: [
      { q: 'What is the difference between memoization and tabulation?', a: 'Memoization is top-down: start with the original problem, recurse, cache results. Tabulation is bottom-up: start from base cases, fill a table iteratively. Both are O(n) for Fibonacci. Tabulation avoids recursion stack overhead.' },
      { q: 'How do you identify if a problem can be solved with DP?', a: 'Two signals: (1) Optimal substructure - optimal solution uses optimal solutions to subproblems. (2) Overlapping subproblems - same subproblems appear multiple times. If both are present, DP applies.' },
      { q: 'Explain the Coin Change problem and its DP solution.', a: 'Given coins and an amount, find minimum coins to make the amount. State: dp[i] = min coins for amount i. Transition: dp[i] = min(dp[i], dp[i-coin]+1) for each coin. Base: dp[0]=0. O(amount * coins) time.' },
      { q: 'What is the Longest Increasing Subsequence problem?', a: 'Find the length of the longest strictly increasing subsequence. O(n^2) DP: dp[i] = max(dp[j]+1) for all j<i where nums[j]<nums[i]. O(n log n) solution uses patience sorting with binary search.' },
      { q: 'What is the 0/1 Knapsack problem?', a: 'Given items with weights and values, maximize value within a weight capacity. Each item can be taken (1) or not (0). 2D DP: dp[i][w] = max value using first i items with capacity w. O(n*W) time and space.' },
    ],
  },
  backtracking: {
    id: 'backtracking', name: 'Backtracking', realm: 'Backtracking Realm', level: 'Advanced', icon: '\u267B\uFE0F',
    tagline: 'Explore All Paths - Retreat When Stuck',
    persona: 'A Phantom Thief who hits a dead end retreats and tries another route.',
    intuition: 'Backtracking is systematic trial and error. You build a solution incrementally, and when you reach a dead end (constraint violated), you undo the last choice and try the next option. It explores all possibilities but prunes branches early.',
    analogy: 'A maze. You walk forward until you hit a wall. Then you backtrack to the last junction and try a different path. You keep doing this until you find the exit or exhaust all paths.',
    description: ['Backtracking = DFS + pruning. Explore choices, undo when stuck.', 'Three components: choice (what to try), constraint (when to prune), goal (when to stop).', 'Classic problems: N-Queens, Sudoku, permutations, combinations, subsets, word search.', 'Time complexity is exponential in worst case but pruning makes it practical.', 'Memoization can convert backtracking to DP when subproblems overlap.'],
    keyTakeaway: 'Backtracking = make a choice, recurse, undo the choice. Always define your constraint clearly.',
    visualization: 'backtracking',
    complexity: { Time: 'O(b^d)', Space: 'O(d)', Pruned: 'Much less', Worst: 'Exponential', Note: 'b=branching, d=depth' },
    codes: {
      python: 'def solve_n_queens(n):\n    results = []; board = [-1] * n\n    def is_safe(row, col):\n        for r in range(row):\n            if board[r] == col: return False\n            if abs(board[r] - col) == abs(r - row): return False\n        return True\n    def backtrack(row):\n        if row == n: results.append(board[:]); return\n        for col in range(n):\n            if is_safe(row, col):\n                board[row] = col; backtrack(row + 1); board[row] = -1\n    backtrack(0); return results\n\ndef subsets(nums):\n    result = []\n    def backtrack(start, current):\n        result.append(current[:])\n        for i in range(start, len(nums)):\n            current.append(nums[i]); backtrack(i + 1, current); current.pop()\n    backtrack(0, []); return result',
      java: 'public class Backtracking {\n    public static List<List<Integer>> subsets(int[] nums) {\n        List<List<Integer>> result = new ArrayList<>();\n        backtrack(nums, 0, new ArrayList<>(), result); return result;\n    }\n    static void backtrack(int[] nums, int start, List<Integer> curr, List<List<Integer>> result) {\n        result.add(new ArrayList<>(curr));\n        for (int i = start; i < nums.length; i++) {\n            curr.add(nums[i]); backtrack(nums, i + 1, curr, result); curr.remove(curr.size() - 1);\n        }\n    }\n}',
      c: '#include <stdbool.h>\n#define N 4\nint board[N];\nbool isSafe(int row, int col) {\n    for (int r = 0; r < row; r++) { if (board[r] == col) return false; if (abs(board[r] - col) == abs(r - row)) return false; }\n    return true;\n}\nvoid solve(int row) {\n    if (row == N) { for (int i = 0; i < N; i++) printf("%d ", board[i]); printf("\\n"); return; }\n    for (int col = 0; col < N; col++) if (isSafe(row, col)) { board[row] = col; solve(row + 1); board[row] = -1; }\n}',
    },
    interview: [
      { q: 'What is the difference between backtracking and brute force?', a: 'Brute force generates all possibilities then filters. Backtracking prunes invalid branches early, avoiding generating them entirely. Backtracking is smarter brute force with early termination.' },
      { q: 'How do you generate all subsets of an array?', a: 'For each element, make two choices: include or exclude. Recurse with both choices. This gives 2^n subsets. With backtracking: add element, recurse, remove element. O(2^n) time and space.' },
      { q: 'How do you solve Sudoku with backtracking?', a: 'Find an empty cell. Try digits 1-9. For each digit, check if it is valid (not in same row, column, or 3x3 box). If valid, place it and recurse. If recursion fails, backtrack (remove digit, try next).' },
      { q: 'When should you use backtracking vs DP?', a: 'Use backtracking when you need all solutions or the problem has no overlapping subproblems. Use DP when you only need the count/optimal value and subproblems overlap.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Backtracking Algorithms - Abdul Bari",
                "url": "https://www.youtube.com/watch?v=DKCtRlhJm9o"
        },
        {
                "title": "Backtracking Prep Playlist - NeetCode",
                "url": "https://www.youtube.com/watch?v=pfiQ_y1MowA&list=PLot-Xpkr5xuHn-15r407U41t4gK7_SUsS"
        }
],
      docs: [
        {
                "title": "Backtracking Explanations - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/backtracking-algorithms/"
        }
],
      blogs: [
        {
                "title": "Backtracking Explained with Diagrams - freeCodeCamp",
                "url": "https://www.freecodecamp.org/news/backtracking-algorithms-explained-with-examples/"
        },
        {
                "title": "LeetCode Backtracking Study Guide",
                "url": "https://leetcode.com/discuss/general-discussion/112032/backtracking-template"
        }
]
    },
  },
  tries: {
    id: 'tries', name: 'Tries', realm: 'Trie Realm', level: 'Advanced', icon: '\uD83C\uDF10',
    tagline: 'Prefix Trees - Autocomplete and Word Search',
    persona: 'The Phantom Thieves database - search any codename by prefix instantly.',
    intuition: 'A Trie (prefix tree) stores strings character by character. Each path from root to a marked node spells a word. The power: prefix search in O(m) where m is the prefix length, regardless of how many words are stored.',
    analogy: 'A phone book organized by letters. To find all names starting with Jo, you go to J, then O, and see all branches. You never look at names starting with other letters. That is a Trie.',
    description: ['A Trie node contains an array/map of children (one per character) and an isEnd flag.', 'Insert: traverse character by character, create nodes as needed. O(m) where m = word length.', 'Search: traverse character by character. If any character is missing, word not found. O(m).', 'Prefix search: same as search but stop at prefix end - all subtree words share this prefix.', 'Space: O(ALPHABET_SIZE * m * n) - can be large. Compressed tries (Patricia trees) save space.'],
    keyTakeaway: 'Tries give O(m) insert/search where m = word length. Perfect for autocomplete, spell check, IP routing.',
    visualization: 'trie',
    complexity: { Insert: 'O(m)', Search: 'O(m)', Prefix: 'O(m)', Space: 'O(n*m*A)', Note: 'A=alphabet size' },
    codes: {
      python: 'class TrieNode:\n    def __init__(self): self.children = {}; self.is_end = False\n\nclass Trie:\n    def __init__(self): self.root = TrieNode()\n    def insert(self, word):\n        node = self.root\n        for ch in word:\n            if ch not in node.children: node.children[ch] = TrieNode()\n            node = node.children[ch]\n        node.is_end = True\n    def search(self, word):\n        node = self.root\n        for ch in word:\n            if ch not in node.children: return False\n            node = node.children[ch]\n        return node.is_end\n    def starts_with(self, prefix):\n        node = self.root\n        for ch in prefix:\n            if ch not in node.children: return False\n            node = node.children[ch]\n        return True',
      java: 'public class Trie {\n    private TrieNode root = new TrieNode();\n    static class TrieNode { TrieNode[] children = new TrieNode[26]; boolean isEnd; }\n    public void insert(String word) {\n        TrieNode node = root;\n        for (char c : word.toCharArray()) { int i = c - \'a\'; if (node.children[i] == null) node.children[i] = new TrieNode(); node = node.children[i]; }\n        node.isEnd = true;\n    }\n    public boolean search(String word) {\n        TrieNode node = root;\n        for (char c : word.toCharArray()) { int i = c - \'a\'; if (node.children[i] == null) return false; node = node.children[i]; }\n        return node.isEnd;\n    }\n    public boolean startsWith(String prefix) {\n        TrieNode node = root;\n        for (char c : prefix.toCharArray()) { int i = c - \'a\'; if (node.children[i] == null) return false; node = node.children[i]; }\n        return true;\n    }\n}',
      c: '#define ALPHA 26\ntypedef struct TrieNode { struct TrieNode* children[ALPHA]; int isEnd; } TrieNode;\nTrieNode* newNode() { return calloc(1, sizeof(TrieNode)); }\nvoid insert(TrieNode* root, char* word) {\n    TrieNode* node = root;\n    for (int i = 0; word[i]; i++) { int idx = word[i] - \'a\'; if (!node->children[idx]) node->children[idx] = newNode(); node = node->children[idx]; }\n    node->isEnd = 1;\n}',
    },
    interview: [
      { q: 'When would you use a Trie over a HashMap for string storage?', a: 'Use Trie when you need prefix operations (autocomplete, starts_with), longest common prefix, or lexicographic ordering. HashMap gives O(1) exact lookup but cannot efficiently find all words with a given prefix.' },
      { q: 'How do you implement autocomplete with a Trie?', a: 'Insert all words. For a prefix query, traverse to the prefix node, then DFS/BFS all paths from that node, collecting words at isEnd nodes. O(m + k) where m = prefix length, k = number of results.' },
      { q: 'What is a compressed Trie (Patricia Tree)?', a: 'A compressed Trie merges chains of single-child nodes into one edge with a string label. Reduces space from O(n*m*A) to O(n) nodes. Used in IP routing tables and suffix trees.' },
      { q: 'How would you find the longest common prefix of an array of strings?', a: 'Insert all strings into a Trie. Traverse from root, following the single-child path as long as each node has exactly one child and is not an end node. The path length is the longest common prefix.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Trie Data Structure & Insertion - WilliamFiset",
                "url": "https://www.youtube.com/watch?v=TykR-7Q6T7s"
        },
        {
                "title": "Trie Playlist & Problems - NeetCode",
                "url": "https://www.youtube.com/watch?v=oobqoCJl500"
        }
],
      docs: [
        {
                "title": "Trie Implementation Reference - LeetCode Learn",
                "url": "https://leetcode.com/explore/learn/card/trie/"
        }
],
      blogs: [
        {
                "title": "Trie Data Structure In-Depth - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/trie-insert-and-search/"
        },
        {
                "title": "Tries and Autocomplete Applications - HackerEarth",
                "url": "https://www.hackerearth.com/practice/data-structures/advanced-data-structures/trie/tutorial/"
        }
]
    },
  },
  greedy: {
    id: 'greedy', name: 'Greedy Algorithms', realm: 'Greedy Realm', level: 'Advanced', icon: '\u26A1',
    tagline: 'Local Optimal Choices - Globally Optimal Results',
    persona: 'Always take the best available option. No regrets.',
    intuition: 'Greedy algorithms make the locally optimal choice at each step, hoping it leads to a globally optimal solution. Unlike DP which considers all possibilities, greedy commits to one choice and never looks back. It works when the greedy choice property holds.',
    analogy: 'Paying for something with coins. To make change for 67 cents, you greedily pick the largest coin that fits: 50 cents, then 10, then 5, then 2x1. This greedy approach works for standard coin systems but not all coin systems.',
    description: ['Greedy works when: (1) Greedy choice property - local optimal leads to global optimal. (2) Optimal substructure - optimal solution contains optimal sub-solutions.', 'Classic greedy problems: Activity Selection, Fractional Knapsack, Huffman Coding, Dijkstra, Prim.', 'Interval scheduling: sort by finish time, greedily select non-overlapping intervals.', 'Huffman coding: greedily merge two lowest-frequency nodes. Optimal prefix-free code.', 'Greedy does NOT work for 0/1 Knapsack (use DP) or general coin change (use DP).'],
    keyTakeaway: 'Greedy is fast (usually O(n log n)) but only correct when the greedy choice property holds. Always prove it.',
    visualization: 'greedy',
    complexity: { Time: 'O(n log n)', Space: 'O(1) to O(n)', Proof: 'Exchange argument', Note: 'Problem-specific' },
    codes: {
      python: 'def activity_selection(activities):\n    sorted_acts = sorted(activities, key=lambda x: x[1])\n    selected = [sorted_acts[0]]\n    for start, end in sorted_acts[1:]:\n        if start >= selected[-1][1]: selected.append((start, end))\n    return selected\n\ndef fractional_knapsack(items, capacity):\n    items.sort(key=lambda x: x[1]/x[0], reverse=True)\n    total_value = 0\n    for weight, value in items:\n        if capacity >= weight: total_value += value; capacity -= weight\n        else: total_value += value * (capacity / weight); break\n    return total_value\n\ndef can_jump(nums):\n    max_reach = 0\n    for i, jump in enumerate(nums):\n        if i > max_reach: return False\n        max_reach = max(max_reach, i + jump)\n    return True',
      java: 'import java.util.*;\npublic class Greedy {\n    public static int maxActivities(int[] start, int[] end) {\n        Integer[] idx = new Integer[start.length];\n        for (int i = 0; i < idx.length; i++) idx[i] = i;\n        Arrays.sort(idx, (a, b) -> end[a] - end[b]);\n        int count = 1, lastEnd = end[idx[0]];\n        for (int i = 1; i < idx.length; i++) if (start[idx[i]] >= lastEnd) { count++; lastEnd = end[idx[i]]; }\n        return count;\n    }\n    public static int jump(int[] nums) {\n        int jumps = 0, curEnd = 0, farthest = 0;\n        for (int i = 0; i < nums.length - 1; i++) { farthest = Math.max(farthest, i + nums[i]); if (i == curEnd) { jumps++; curEnd = farthest; } }\n        return jumps;\n    }\n}',
      c: 'typedef struct { int start; int end; } Activity;\nint cmp(const void* a, const void* b) { return ((Activity*)a)->end - ((Activity*)b)->end; }\nint activitySelection(Activity acts[], int n) {\n    qsort(acts, n, sizeof(Activity), cmp);\n    int count = 1, lastEnd = acts[0].end;\n    for (int i = 1; i < n; i++) if (acts[i].start >= lastEnd) { count++; lastEnd = acts[i].end; }\n    return count;\n}',
    },
    interview: [
      { q: 'How do you prove a greedy algorithm is correct?', a: 'Use the exchange argument: assume an optimal solution differs from the greedy solution. Show that swapping the optimal choice with the greedy choice does not worsen the solution. This proves greedy is at least as good as optimal.' },
      { q: 'Why does greedy fail for 0/1 Knapsack but work for Fractional Knapsack?', a: 'In Fractional Knapsack, you can take fractions, so taking the highest value/weight ratio item is always optimal. In 0/1 Knapsack, you must take whole items, so a greedy choice might block a better combination - DP is needed.' },
      { q: 'What is Huffman Coding and why is it greedy?', a: 'Huffman Coding builds an optimal prefix-free binary code. Greedily merge the two lowest-frequency nodes into a new node. Repeat until one tree remains. The greedy choice (always merge smallest) produces the optimal code.' },
      { q: 'Explain the Jump Game problem and its greedy solution.', a: 'Given array where nums[i] = max jump from i, determine if you can reach the last index. Greedy: track the farthest reachable index. At each position, update farthest. If current position exceeds farthest, return false. O(n) time.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Greedy Algorithms Tutorial - Abdul Bari",
                "url": "https://www.youtube.com/watch?v=ARvQurGDgXk"
        },
        {
                "title": "Greedy Interview Playlist - NeetCode",
                "url": "https://www.youtube.com/watch?v=H9n-c4U16mQ&list=PLot-Xpkr5xuh8T_PDrh4z9D5bJ84jL0zE"
        }
],
      docs: [
        {
                "title": "Greedy Algorithms Overview - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/greedy-algorithms/"
        }
],
      blogs: [
        {
                "title": "Greedy Approach & Fractional Knapsack - tutorialspoint",
                "url": "https://www.tutorialspoint.com/data_structures_algorithms/greedy_algorithms.htm"
        },
        {
                "title": "Greedy Algorithms Basics - HackerEarth",
                "url": "https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/tutorial/"
        }
]
    },
  },
  'union-find': {
    id: 'union-find', name: 'Union-Find', realm: 'Union-Find Realm', level: 'Advanced', icon: '\uD83D\uDD17',
    tagline: 'Track Connected Components Efficiently',
    persona: 'The Phantom Thieves network - who is connected to whom?',
    intuition: 'Union-Find (Disjoint Set Union) tracks which elements belong to the same group. Two operations: find (which group does x belong to?) and union (merge two groups). With path compression and union by rank, both operations are nearly O(1).',
    analogy: 'Social network friend groups. Initially everyone is their own group. When two people become friends, their groups merge. To check if two people are connected, find their group leaders. If same leader, they are connected.',
    description: ['Each element starts as its own set. parent[i] = i.', 'Find: follow parent pointers to root. With path compression: O(alpha(n)) amortized.', 'Union: merge two sets by connecting their roots. Union by rank prevents tall trees.', 'Path compression: when finding root, make all nodes on path point directly to root.', 'Applications: Kruskal MST, cycle detection in undirected graphs, number of connected components.'],
    keyTakeaway: 'Union-Find with path compression + union by rank gives near O(1) per operation. Essential for graph connectivity.',
    visualization: 'union-find',
    complexity: { Find: 'O(alpha(n))', Union: 'O(alpha(n))', Build: 'O(n)', Space: 'O(n)', Note: 'alpha = inverse Ackermann' },
    codes: {
      python: 'class UnionFind:\n    def __init__(self, n):\n        self.parent = list(range(n)); self.rank = [0] * n; self.components = n\n    def find(self, x):\n        if self.parent[x] != x: self.parent[x] = self.find(self.parent[x])\n        return self.parent[x]\n    def union(self, x, y):\n        px, py = self.find(x), self.find(y)\n        if px == py: return False\n        if self.rank[px] < self.rank[py]: px, py = py, px\n        self.parent[py] = px\n        if self.rank[px] == self.rank[py]: self.rank[px] += 1\n        self.components -= 1; return True\n    def connected(self, x, y): return self.find(x) == self.find(y)',
      java: 'public class UnionFind {\n    int[] parent, rank; int components;\n    UnionFind(int n) { parent = new int[n]; rank = new int[n]; components = n; for (int i = 0; i < n; i++) parent[i] = i; }\n    int find(int x) { if (parent[x] != x) parent[x] = find(parent[x]); return parent[x]; }\n    boolean union(int x, int y) {\n        int px = find(x), py = find(y); if (px == py) return false;\n        if (rank[px] < rank[py]) { int t = px; px = py; py = t; }\n        parent[py] = px; if (rank[px] == rank[py]) rank[px]++; components--; return true;\n    }\n    boolean connected(int x, int y) { return find(x) == find(y); }\n}',
      c: 'int parent[1001], rnk[1001];\nvoid init(int n) { for(int i=0;i<n;i++){parent[i]=i;rnk[i]=0;} }\nint find(int x) { if(parent[x]!=x) parent[x]=find(parent[x]); return parent[x]; }\nvoid unite(int x, int y) {\n    int px=find(x), py=find(y); if(px==py) return;\n    if(rnk[px]<rnk[py]){int t=px;px=py;py=t;}\n    parent[py]=px; if(rnk[px]==rnk[py]) rnk[px]++;\n}',
    },
    interview: [
      { q: 'What is path compression and why does it matter?', a: 'Path compression makes every node on the find path point directly to the root. This flattens the tree, making future finds faster. Combined with union by rank, it gives amortized O(alpha(n)) per operation - essentially O(1).' },
      { q: 'How do you detect a cycle in an undirected graph using Union-Find?', a: 'For each edge (u, v): if find(u) == find(v), they are already in the same component - adding this edge creates a cycle. Otherwise, union(u, v). O(E * alpha(V)) time.' },
      { q: 'How does Kruskal MST algorithm use Union-Find?', a: 'Sort edges by weight. For each edge (u, v): if find(u) != find(v), add edge to MST and union(u, v). Skip edges that would create a cycle. O(E log E) for sorting + O(E * alpha(V)) for union-find.' },
      { q: 'What is the difference between Union-Find and BFS/DFS for connectivity?', a: 'BFS/DFS: O(V+E) per query, good for one-time connectivity check. Union-Find: O(alpha(n)) per query after O(n) build, good for dynamic connectivity with many union and find operations.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Union Find / Disjoint Set Kruskal - WilliamFiset",
                "url": "https://www.youtube.com/watch?v=Ib9F8_W93iM"
        },
        {
                "title": "Union Find / Disjoint Set Tutorial - NeetCode",
                "url": "https://www.youtube.com/watch?v=ayW5B2W9hQM"
        }
],
      docs: [
        {
                "title": "Disjoint-Set (Union Find) Algorithms - Princeton CS",
                "url": "https://algs4.cs.princeton.edu/15uf/"
        }
],
      blogs: [
        {
                "title": "Disjoint Set Data Structure Overview - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/disjoint-set-data-structure-union-find-algorithm/"
        },
        {
                "title": "Disjoint Set / Union Find Explore Card - LeetCode",
                "url": "https://leetcode.com/explore/learn/card/graph/618/disjoint-set/"
        }
]
    },
  },
  dijkstra: {
    id: 'dijkstra', name: 'Dijkstra Algorithm', realm: 'Dijkstra Realm', level: 'Advanced', icon: '\uD83D\uDDFA\uFE0F',
    tagline: 'Shortest Path in Weighted Graphs',
    persona: 'The Phantom Thieves always find the fastest route to the treasure.',
    intuition: 'Dijkstra finds the shortest path from a source to all other nodes in a weighted graph with non-negative edges. It greedily picks the unvisited node with the smallest known distance, relaxes its neighbors, and repeats. Like GPS navigation.',
    analogy: 'You are in a city and want the fastest route to every other location. You start at home (distance 0). You always visit the closest unvisited place next, updating distances to its neighbors. By the time you visit a place, you have found the shortest path to it.',
    description: ['Greedy algorithm: always process the node with minimum current distance.', 'Uses a min-heap (priority queue) for efficient minimum extraction: O((V+E) log V).', 'Relaxation: if dist[u] + weight(u,v) < dist[v], update dist[v].', 'Does NOT work with negative edge weights (use Bellman-Ford instead).', 'Applications: GPS navigation, network routing, game pathfinding (A* is an extension).'],
    keyTakeaway: 'Dijkstra = BFS + weights + min-heap. O((V+E) log V). Fails with negative edges.',
    visualization: 'dijkstra',
    complexity: { Time: 'O((V+E) log V)', Space: 'O(V)', 'With heap': 'O((V+E) log V)', 'Naive': 'O(V^2)' },
    codes: {
      python: 'import heapq\nfrom collections import defaultdict\n\ndef dijkstra(graph, start):\n    dist = {node: float("inf") for node in graph}; dist[start] = 0; heap = [(0, start)]\n    while heap:\n        d, u = heapq.heappop(heap)\n        if d > dist[u]: continue\n        for v, weight in graph[u]:\n            new_dist = dist[u] + weight\n            if new_dist < dist[v]: dist[v] = new_dist; heapq.heappush(heap, (new_dist, v))\n    return dist\n\ngraph = defaultdict(list)\ngraph[0].extend([(1, 4), (2, 1)]); graph[1].extend([(3, 1)]); graph[2].extend([(1, 2), (3, 5)])\nprint(dijkstra(graph, 0))  # {0:0, 1:3, 2:1, 3:4}',
      java: 'import java.util.*;\npublic class Dijkstra {\n    public static int[] dijkstra(List<int[]>[] graph, int start, int n) {\n        int[] dist = new int[n]; Arrays.fill(dist, Integer.MAX_VALUE); dist[start] = 0;\n        PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> a[0]-b[0]);\n        pq.offer(new int[]{0, start});\n        while (!pq.isEmpty()) {\n            int[] curr = pq.poll(); int d = curr[0], u = curr[1];\n            if (d > dist[u]) continue;\n            for (int[] edge : graph[u]) { int v = edge[0], w = edge[1]; if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; pq.offer(new int[]{dist[v], v}); } }\n        }\n        return dist;\n    }\n}',
      c: '#include <limits.h>\n#define V 9\nint minDist(int dist[], int visited[]) { int min=INT_MAX,idx=-1; for(int v=0;v<V;v++) if(!visited[v]&&dist[v]<=min){min=dist[v];idx=v;} return idx; }\nvoid dijkstra(int graph[V][V], int src) {\n    int dist[V], visited[V]={0}; for(int i=0;i<V;i++) dist[i]=INT_MAX; dist[src]=0;\n    for(int count=0;count<V-1;count++) { int u=minDist(dist,visited); visited[u]=1; for(int v=0;v<V;v++) if(!visited[v]&&graph[u][v]&&dist[u]!=INT_MAX&&dist[u]+graph[u][v]<dist[v]) dist[v]=dist[u]+graph[u][v]; }\n}',
    },
    interview: [
      { q: 'Why does Dijkstra fail with negative edge weights?', a: 'Dijkstra assumes once a node is visited, its shortest distance is finalized. With negative edges, a later path could give a shorter distance to an already-visited node. Use Bellman-Ford for negative edges.' },
      { q: 'What is the time complexity of Dijkstra with a binary heap?', a: 'O((V+E) log V). Each vertex extracted from heap once: O(V log V). Each edge relaxation may insert into heap: O(E log V). Total: O((V+E) log V).' },
      { q: 'What is the difference between Dijkstra and BFS for shortest path?', a: 'BFS finds shortest path in unweighted graphs O(V+E). Dijkstra handles weighted graphs with non-negative weights O((V+E) log V). BFS is Dijkstra where all weights are 1.' },
      { q: 'How does A* differ from Dijkstra?', a: 'A* adds a heuristic h(n) estimating distance to goal. Priority = actual distance + heuristic. This guides search toward the goal. Dijkstra is A* with h(n) = 0.' },
    ],
    resources: {
      youtube: [
        {
                "title": "Dijkstra's Shortest Path Algorithm - Abdul Bari",
                "url": "https://www.youtube.com/watch?v=XB4MIexjvY0"
        },
        {
                "title": "Dijkstra's Single Source Shortest Path - WilliamFiset",
                "url": "https://www.youtube.com/watch?v=pSqmAO-m7Lk"
        }
],
      docs: [
        {
                "title": "NetworkX Dijkstra Pathfinding - Python Reference",
                "url": "https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.shortest_paths.weighted.dijkstra_path.html"
        }
],
      blogs: [
        {
                "title": "Dijkstra's Shortest Path Algorithm - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/"
        },
        {
                "title": "Dijkstra's Pathfinding Visual Guide - freeCodeCamp",
                "url": "https://www.freecodecamp.org/news/dijkstras-shortest-path-algorithm-visual-introduction/"
        }
]
    },
  },
};

