import { Link } from 'react-router-dom';

const categories = ['all', 'sci-fi', 'drama', 'comedy', 'action'];

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white p-4'>
      <div className='flex gap-4 justify-center'>
        {categories.map((cat) => (
          <Link
            key={cat}
            to={cat === 'all' ? '/' : `/category/${cat}`}
            className='hover:underline capitalize'
          >
            {cat}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;