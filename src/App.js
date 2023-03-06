import React, { useState, useEffect } from "react";

function App () {
  const [products, setProducts] = useState({
    coffe: 0,
    sugar: 0
  });

  const addCoffe = () => setProducts({...products, coffe: products.coffe + 1});
  const addSugar = () => setProducts({...products, sugar: products.sugar + 1});
  const remoteCoffe = () => setProducts({...products, coffe: products.coffe - 1});
  const remoteSugar = () => setProducts({...products, sugar: products.sugar - 1});
  const [cofRemove,  setCofRemove] = useState(false);
  const [sugRemove,  setSugRemove] = useState(false);

  if (products.coffe < 0) {products.coffe = 0};
  if (products.sugar < 0) {products.sugar = 0};

  const save = () => {
    localStorage.setItem('coffe', products.coffe);
    localStorage.setItem('sugar', products.sugar);
  }

  const clear = () => {
    localStorage.removeItem('coffe');
    localStorage.removeItem('sugar');
    setProducts({coffe: 0, sugar: 0});
  }

  useEffect(()=>{
    if (localStorage.getItem('coffe')){
      setProducts({
        coffe: +localStorage.getItem('coffe'),
        sugar: +localStorage.getItem('sugar')
      });
    }
  }, []);  
  
  useEffect(() => {
    if (products.coffe > 0) {
      setCofRemove(true);
    } else {
      setCofRemove(false);
    }
  }, [products.coffe]);

  useEffect(() => {
    if (products.sugar > 0) {
      setSugRemove(true);
    } else {
      setSugRemove(false);
    }
  }, [products.sugar]);
  
  return (
    <div className="wrapper">
      <div className="list">
        <h1>Product list</h1>
        <div className='product'>
          <span>{`Coffe: ${products.coffe}`}</span>
          <button onClick={addCoffe}>Add</button>
          {cofRemove && <button onClick={remoteCoffe}>Remote</button>}         
        </div>

        <div className='product'>
          <span>{`Sugar: ${products.sugar}`}</span>
          <button onClick={addSugar}>Add</button>
          {sugRemove > 0 && <button onClick={remoteSugar}>Remote</button>}
        </div>

        <div className='save'>
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
        </div>

      </div>
    </div> 
  );
}

export default App;





