import Garras from './assets/garras.png';
import Eslingas from './assets/eslingas.png';
import Cables from './assets/cables.png';

export const imgs = [
	Garras,
	Eslingas,
	Cables
];

export const categories = {
	garras: 'Garras',
	eslingas: 'Eslingas',
	cables: 'Cables',
};

const {
	garras,
	eslingas,
	cables,
} = categories;

export const questions = [
	{
		"id": 1,
		"difficulty": "Fácil",
		"question": "¿Qué factores afectan la capacidad de carga de los cables de acero?",
		"category": cables,
		"correct_answer": "Diámetro, tipo de construcción, material, grado de acero y condiciones de uso.",
		"incorrect_answers": [
			"Solo diámetro del cable.",
			"Solo tipo de construcción del cable.",
			"Solo condiciones de uso."
		]
	},
	{
		"id": 2,
		"difficulty": "Intermedio",
		"question": "¿Cuál es uno de los tipos de daño comunes en cables de acero debido a tensión y asentamiento de secciones del cable?",
		"category": cables,
		"correct_answer": "Aumento de longitud y disminución del diámetro.",
		"incorrect_answers": [
			"Corrosión interna.",
			"Fatiga por flexión.",
			"Aplastamiento."
		]
	},
	{
		"id": 3,
		"difficulty": "Difícil",
		"question": "¿Cómo se compone un cable de acero?",
		"category": cables,
		"correct_answer": "Alambres de acero enrollados alrededor de un núcleo.",
		"incorrect_answers": [
			"Un solo alambre de acero.",
			"Hilos de acero tejidos juntos.",
			"Alambres de acero entrelazados."
		]
	},
	{
		"id": 4,
		"difficulty": "Fácil",
		"question": "¿Qué es la fatiga en cables de acero?",
		"category": cables,
		"correct_answer": "Daño por flexión excesiva.",
		"incorrect_answers": [
			"Corrosión interna.",
			"Aplastamiento.",
			"Estiramiento del cable."
		]
	},
	{
		"id": 5,
		"difficulty": "Intermedio",
		"question": "¿Cuál es la principal causa de corrosión en cables de acero?",
		"category": cables,
		"correct_answer": "Exposición a sustancias químicas corrosivas.",
		"incorrect_answers": [
			"Exposición a altas temperaturas.",
			"Desgaste por fricción.",
			"Tensión excesiva."
		]
	},
	{
		"id": 6,
		"difficulty": "Intermedio",
		"question": "¿Cuál es el propósito principal de las eslingas en operaciones de izaje?",
		"category": eslingas,
		"correct_answer": "Levantar y transportar cargas pesadas seguramente.",
		"incorrect_answers": [
			"Alinear materiales.",
			"Cortar materiales.",
			"Soldar materiales."
		]
	},
	{
		"id": 9,
		"difficulty": "Difícil",
		"question": "¿Qué puede ocurrir si las eslingas no se utilizan correctamente en una operación de izaje?",
		"category": eslingas,
		"correct_answer": "Accidentes graves y daños materiales.",
		"incorrect_answers": [
			"Menor eficiencia en la operación.",
			"Mayor desgaste en las eslingas.",
			"Impacto en la seguridad."
		]
	},
	{
		"id": 11,
		"difficulty": "Fácil",
		"question": "¿Función principal de las garras de elevación en aplicaciones verticales?",
		"category": garras,
		"correct_answer": "Garantizar estabilidad al levantar acero.",
		"incorrect_answers": [
			"Cortar acero.",
			"Hacer izajes horizontales.",
			"Transportar bidones de aceite."
		]
	},
	{
		"id": 12,
		"difficulty": "Intermedio",
		"question": "¿Mecanismo de seguridad en garras de elevación para evitar deslizamientos?",
		"category": garras,
		"correct_answer": "Bloqueo en posición durante levante y descenso de carga.",
		"incorrect_answers": [
			"Luces de advertencia.",
			"Sensor de temperatura.",
			"Control remoto."
		]
	},
	{
		"id": 13,
		"difficulty": "Difícil",
		"question": "¿Importancia de capacidad y apertura grabadas en garras de elevación?",
		"category": garras,
		"correct_answer": "Conocer límites y evitar sobrecarga.",
		"incorrect_answers": [
			"Identificar fabricante.",
			"Indicar temperatura máxima.",
			"Mostrar fecha de fabricación."
		]
	}, {
		"id": 15,
		"difficulty": "Intermedio",
		"question": "¿Qué garantizan las garras de elevación en aplicaciones verticales?",
		"category": Garras,
		"correct_answer": "Estabilidad en el levantamiento de acero.",
		"incorrect_answers": [
			"Eficiencia en izajes horizontales.",
			"Transporte de bidones de aceite.",
			"Versatilidad en objetos irregulares."
		]
	}, {
		"id": 16,
		"difficulty": "Intermedio",
		"question": "¿Cuál es un objetivo clave de las eslingas de carga?",
		"category": eslingas,
		"correct_answer": "Distribuir la carga de manera uniforme.",
		"incorrect_answers": [
			"Resistir altas temperaturas.",
			"Tener capacidad de carga ilimitada.",
			"Facilitar el transporte."
		]
	},{
		"id": 18,
		"difficulty": "Difícil",
		"question": "¿Qué factores deben considerarse al seleccionar el tipo de eslinga adecuado para una carga específica?",
		"category": eslingas,
		"correct_answer": "Tipo de carga, distancia, entorno y seguridad.",
		"incorrect_answers": [
		"Color de la eslinga, longitud y marca del fabricante.",
		"Tipo de enganche, temperatura y capacidad de carga.",
		"Diámetro de la cuerda, resistencia a la corrosión y precio."
		]
		},{
			"id": 17,
			"difficulty": "Difícil",
			"question": "¿Cuál es la importancia de inspeccionar regularmente las eslingas de carga en operaciones de izaje?",
			"category": eslingas,
			"correct_answer": "Detectar daños potenciales y prevenir accidentes graves.",
			"incorrect_answers": [
			"Cumplir con regulaciones de seguridad.",
			"Reducir el costo de mantenimiento.",
			"Garantizar una mayor vida útil de las eslingas."
			]
			}
]