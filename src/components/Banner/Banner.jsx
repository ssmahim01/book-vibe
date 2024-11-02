import { NavLink } from 'react-router-dom';
import bannerImg from '../../assets/books.jpg';

const Banner = () => {
  return (
    <div className="hero bg-slate-100 rounded-2xl my-12 lg:p-20 md:p-16 p-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div className='lg:1/2'>
       <img className='w-full h-full rounded-xl'
          src={bannerImg}
          alt='The banner Image'
        />
       </div>
        <div className='lg:w-1/2'>
          <h1 className="md:text-5xl text-3xl font-bold">Books to freshen up your bookshelf</h1>
          <NavLink to="/listedBooks" className="lg:mt-14 mt-8 btn bg-lime-500 px-8 text-white font-bold">View The List</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
