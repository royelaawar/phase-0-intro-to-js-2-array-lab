const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name){
  cats.push (name)
}

  function destructivelyRemoveLastCat(name){
    cats.pop(name)
  } 


  function destructivelyPrependCat(name){
 cats.unshift(name)
  }
  
  function destructivelyRemoveFirstCat(name){
    cats.shift(name)
  }

  function appendCat(name){
    const copyCat = [...cats]
    copyCat.push(name)
    return copyCat
  }

  function prependCat(name){
    const copyCats = [...cats]
    copyCats.unshift(name)
    return copyCats
  }

  function removeLastCat(name){
    const copyCatss = [...cats]
    copyCatss.pop(name)
    return copyCatss
  }
    function removeFirstCat(name){
      const copyCatsss = [...cats]
      copyCatsss.shift(name)
      return copyCatsss
    }