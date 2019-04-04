/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import { map, partial } from 'ramda';

const { pre, code } = hh(h);


// PRIVATE
function generateItem(dispatch, lineClass, codeSnippet) {
  const { line } = codeSnippet;
  return code({ className: lineClass }, [line]);
}

// PUBLIC
function codeSnippet(dispatch, classList, codeSnippet) {
  const [ containerClass, lineClass ] = classList;
  const generatedLines = map( partial( generateItem, [dispatch, lineClass]), codeSnippet );
  return pre({ className: containerClass }, [...generatedLines]);
}


export default codeSnippet;
