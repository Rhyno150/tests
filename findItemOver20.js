

function findItemsOver20(list)
{
  let aryList = [];
  for(let dict of list){
    if(dict["qty"] > 20){
      aryList.push(dict);
    }
  }
  return aryList;
}

function findItemsOver(list, threshold)
{
  let aryList = [];
  for(let dict of list){
    if(dict["qty"] > threshold){
      aryList.push(dict);
    }
  }
  
  return aryList;
}