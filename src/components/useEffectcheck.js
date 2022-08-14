import react, {useState} from 'react';

function UseEffectCheck () {
    const [name, setName] = useState('Rajesh');
    const [shopCart, setShopCart] = useState({});

let updatedValue = {};
updatedValue = {item1:"juice"};

let changeCartValue = () => {
    setShopCart(shopCart => ({
        ...shopCart,
        ...updatedValue
      }));
}

    let changeNmae = () => {
        setName("Smarajit");
    }
    return (
        <>
        <p>The teacher name is {name}</p>
        <button onClick={changeNmae}>Click change name</button>
        <button onClick={changeCartValue}>Click change cart value</button>
        </>
     );
}

export default UseEffectCheck;