import { Link } from 'react-router-dom';
import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';

const [
	imgGarra,
	imgEslinga,
	imgCable,
] = imgs;

export const CategoryList = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
			{/* Category Link Garras */}
			<CategoryCard
				category={categories.garras}
				src={imgGarra}
				alt={`Categoría ${categories.garras}`}
				gradientColor=' from-purple-500 to-pink-500'
			/>
			{/* Category Link Eslingas */}
			<CategoryCard
				category={categories.eslingas}
				src={imgEslinga}
				alt={`Categoría ${categories.eslingas}`}
				gradientColor='from-lime-400 to-teal-700'
			/>
			{/* Category Link Cables de Acero */}
			<CategoryCard
				category={categories.cables}
				src={imgCable}
				alt={`Categoría ${categories.cables}`}
				gradientColor='from-red-400 to-zinc-400'
			/>
		</div>
	);
};
