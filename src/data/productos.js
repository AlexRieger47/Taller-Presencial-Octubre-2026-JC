// Same fields a product document would have in MongoDB (Station 1).
// Today they are written by hand; in the full app they come from the API.
const foto = (id, ancho = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${ancho}&q=80&auto=format&fit=crop`;

export const categorias = ['Todos', 'Tortas', 'Cafés', 'Salado', 'Veganas'];

export const productoEstrella = {
  nombre: 'Torta de chocolate',
  imagen: foto('1578985545062-69928b1d9587', 1400),
};

export const productos = [
  {
    id: 1,
    nombre: 'Torta de chocolate',
    descripcion: 'Bizcocho húmedo con ganache',
    precio: '$45.000',
    categoria: 'Tortas',
    imagen: foto('1578985545062-69928b1d9587'),
  },
  {
    id: 2,
    nombre: 'Cupcakes de vainilla',
    descripcion: 'Caja x 6, con crema de frutos rojos',
    precio: '$30.000',
    categoria: 'Tortas',
    imagen: foto('1563729784474-d77dbb933a9e'),
  },
  {
    id: 3,
    nombre: 'Capuchino',
    descripcion: 'Espresso de origen Huila y leche texturizada',
    precio: '$8.500',
    categoria: 'Cafés',
    imagen: foto('1572442388796-11668a67e53d'),
  },
  {
    id: 4,
    nombre: 'Latte de la casa',
    descripcion: 'Suave, con un toque de canela',
    precio: '$9.000',
    categoria: 'Cafés',
    imagen: foto('1509042239860-f550ce710b93'),
  },
  {
    id: 5,
    nombre: 'Quiche de espinaca',
    descripcion: 'Masa quebrada, espinaca y queso campesino',
    precio: '$14.000',
    categoria: 'Salado',
    imagen: foto('1608855238293-a8853e7f7c98'),
  },
  {
    id: 6,
    nombre: 'Croissant de mantequilla',
    descripcion: 'Hojaldre horneado cada mañana',
    precio: '$7.000',
    categoria: 'Salado',
    imagen: foto('1555507036-ab1f4038808a'),
  },
  {
    id: 7,
    nombre: 'Galletas de avena',
    descripcion: 'Caja x 12, sin huevo ni lácteos',
    precio: '$18.000',
    categoria: 'Veganas',
    imagen: foto('1499636136210-6f4ee915583e'),
  },
  {
    id: 8,
    nombre: 'Brownie vegano',
    descripcion: 'Cacao al 70 % y nueces',
    precio: '$9.500',
    categoria: 'Veganas',
    imagen: foto('1606313564200-e75d5e30476c'),
  },
];
