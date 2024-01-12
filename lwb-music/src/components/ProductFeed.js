import Product from "./Product";

function ProductFeed({ products }) {
    return(
        <div>
            <h1>Our Scores:</h1>
            {products.map(({ id, title, price, description, image },
              <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                image={image}
              />
            ))}
        </div>
    );
}

export default ProductFeed;