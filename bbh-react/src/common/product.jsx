

const product = [ 
    { title : 'Chou', id : 1, isFruit : false},
    { title : 'Ail', id : 2, isFruit : false},
    { title : 'Pomme', id : 3, isFruit : true},
];

const listItems = product.map(product =>
    <li className="text-white font-bold" key={product.id}
    style={{
        color : product.isFruit ? 'green' : 'red'
    }}>
        {product.title}
    
    </li>
);

export function Produit(){
return (
    <div>
        <h1 className="font-bold mb-3">Les fruit sont dans rouge : </h1>
    <ul className="text-white font-bold mb-3">{listItems}</ul>
    </div>
)}