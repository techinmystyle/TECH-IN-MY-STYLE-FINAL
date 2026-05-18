export interface Resource {
  icon: 'video' | 'book'
  title: string
  description: string
  link: string
  linkText: string
}

export interface SubtopicData {
  slug: string
  title: string
  breadcrumb: string
  readingTime: string
  description: string
  prerequisites: string[]
  examples: string
  realWorld: string[]
  applications: string[]
  interviewQuestions: { q: string; a: string }[]
  resources: Resource[]
}

// ── Getting Started ──────────────────────────────────────────────
import pythonOverview from './subtopics/python-overview'
import pythonInstallation from './subtopics/python-installation'
import ides from './subtopics/ides'

// ── Syntax and Semantics ─────────────────────────────────────────
import indentation from './subtopics/indentation'
import comments from './subtopics/comments'
import statements from './subtopics/statements'

// ── Data Types ───────────────────────────────────────────────────
import numbers from './subtopics/numbers'
import strings from './subtopics/strings'
import booleans from './subtopics/booleans'
import lists from './subtopics/lists'
import tuples from './subtopics/tuples'
import sets from './subtopics/sets'
import dictionaries from './subtopics/dictionaries'
import nonetype from './subtopics/nonetype'

// ── Variables and Constants ──────────────────────────────────────
import variableDeclaration from './subtopics/variable-declaration'
import constants from './subtopics/constants'

// ── Operators ────────────────────────────────────────────────────
import arithmeticOperators from './subtopics/arithmetic-operators'
import comparisonOperators from './subtopics/comparison-operators'
import logicalOperators from './subtopics/logical-operators'
import membershipOperators from './subtopics/membership-operators'
import identityOperators from './subtopics/identity-operators'

// ── Control Flow ─────────────────────────────────────────────────
import conditionalStatements from './subtopics/conditional-statements'
import loops from './subtopics/loops'
import breakContinuePass from './subtopics/break-continue-pass'
import listComprehensions from './subtopics/list-comprehensions'

// ── Functions ────────────────────────────────────────────────────
import functionDefinition from './subtopics/function-definition'
import functionArguments from './subtopics/function-arguments'
import returnStatement from './subtopics/return-statement'
import lambdaFunctions from './subtopics/lambda-functions'
import recursion from './subtopics/recursion'

// ── Error Handling ───────────────────────────────────────────────
import exceptions from './subtopics/exceptions'
import raisingExceptions from './subtopics/raising-exceptions'
import customExceptions from './subtopics/custom-exceptions'

// ── Data Structures ──────────────────────────────────────────────
import listsAdvanced from './subtopics/lists-advanced'
import tuplesAdvanced from './subtopics/tuples-advanced'
import setsAdvanced from './subtopics/sets-advanced'
import dictionariesAdvanced from './subtopics/dictionaries-advanced'

// ── OOP ──────────────────────────────────────────────────────────
import classesObjects from './subtopics/classes-objects'
import variablesOop from './subtopics/variables-oop'
import methods from './subtopics/methods'
import inheritance from './subtopics/inheritance'
import encapsulation from './subtopics/encapsulation'
import polymorphism from './subtopics/polymorphism'
import abstraction from './subtopics/abstraction'
import magicMethods from './subtopics/magic-methods'

// ── Regular Expressions ──────────────────────────────────────────
import regexIntro from './subtopics/regex-intro'
import regexSyntax from './subtopics/regex-syntax'
import reModule from './subtopics/re-module'

// ── Advanced Topics ──────────────────────────────────────────────
import iterators from './subtopics/iterators'
import multithreading from './subtopics/multithreading'

const subtopicsMap: Record<string, SubtopicData> = {
  // Getting Started
  'python-overview': pythonOverview,
  'python-installation': pythonInstallation,
  'ides': ides,

  // Syntax and Semantics
  'indentation': indentation,
  'comments': comments,
  'statements': statements,

  // Data Types
  'numbers': numbers,
  'strings': strings,
  'booleans': booleans,
  'lists': lists,
  'tuples': tuples,
  'sets': sets,
  'dictionaries': dictionaries,
  'nonetype': nonetype,

  // Variables and Constants
  'variable-declaration': variableDeclaration,
  'constants': constants,

  // Operators
  'arithmetic-operators': arithmeticOperators,
  'comparison-operators': comparisonOperators,
  'logical-operators': logicalOperators,
  'membership-operators': membershipOperators,
  'identity-operators': identityOperators,

  // Control Flow
  'conditional-statements': conditionalStatements,
  'loops': loops,
  'break-continue-pass': breakContinuePass,
  'list-comprehensions': listComprehensions,

  // Functions
  'function-definition': functionDefinition,
  'function-arguments': functionArguments,
  'return-statement': returnStatement,
  'lambda-functions': lambdaFunctions,
  'recursion': recursion,

  // Error Handling
  'exceptions': exceptions,
  'raising-exceptions': raisingExceptions,
  'custom-exceptions': customExceptions,

  // Data Structures
  'lists-advanced': listsAdvanced,
  'tuples-advanced': tuplesAdvanced,
  'sets-advanced': setsAdvanced,
  'dictionaries-advanced': dictionariesAdvanced,

  // OOP
  'classes-objects': classesObjects,
  'variables-oop': variablesOop,
  'methods': methods,
  'inheritance': inheritance,
  'encapsulation': encapsulation,
  'polymorphism': polymorphism,
  'abstraction': abstraction,
  'magic-methods': magicMethods,

  // Regular Expressions
  'regex-intro': regexIntro,
  'regex-syntax': regexSyntax,
  're-module': reModule,

  // Advanced Topics
  'iterators': iterators,
  'multithreading': multithreading,
}

export function getSubtopic(slug: string): SubtopicData | null {
  return subtopicsMap[slug] || null
}
