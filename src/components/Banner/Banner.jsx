import bannerImg from '../../assets/books.jpg';

const Banner = () => {
  return (
    <div className="hero bg-slate-100 rounded-2xl my-12 p-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div className='lg:1/2'>
       <img className='w-full h-full rounded-xl'
          src={bannerImg}
          alt='The banner Image'
        />
       </div>
        <div className='lg:w-1/2'>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <button className="mt-14 btn bg-lime-500 px-8 text-white font-bold">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
