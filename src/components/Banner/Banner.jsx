import bannerImg from '../../assets/books.jpg';

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-slate-100 rounded-2xl my-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
