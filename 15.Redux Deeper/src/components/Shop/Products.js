import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{
		id: 1,
		title: 'My First Book',
		price: 6,
	},
	{
		id: 2,
		title: 'My Second Book',
		price: 5,
	},
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => (
					<ProductItem
						key={product.id}
						title={product.title}
						price={product.price}
						id={product.id}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
