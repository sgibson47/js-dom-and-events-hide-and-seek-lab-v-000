function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').getElementsByClassName('target')[0];
}

function increaseRankBy(n){
  const rankedLists = document.getElementsByClassName('ranked-list');
  for (let list of rankedLists){
    let listItems = list.children;
    for (let listItem of listItems){
      let start = listItem.textContent;
      listItem.innerHTML = n + parseInt(start);
    }
  }
}

function deepestChild(){
  let thing = document.querySelector('div#grand-node');
  let child = thing.children[0]
  
  //while child is a true value
  while(child){
    // set thing equal to its first child
    thing = child
    // set child equal to the former child/current thing's first child
    child = thing.children[0]
    // if thing.children[0] gives us a truthy value we'll do this all again
    // if not, i.e. there are no children, we've reached the bottom! 
  }
  // return the deepest thing we could get
  return thing;
}