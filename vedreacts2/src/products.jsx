import React from 'react';

const Products = () => {
    const products = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'];

    return (
        <div className="pro">
            {products.map((product, index) => (
                <div key={index} className="card bg-red-600 w-60 h-60 rounded-md m-5 flex float-start ">
                    <h2>{product}</h2>
                </div>
            ))}
        </div>
    );
};

export default Products;