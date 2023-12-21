
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://miro.medium.com/v2/resize:fit:1358/1*5YZ0iRIg34qXgH5ja5nNbA.gif)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="absolute w-11/12 text-gray-200 px-10 h-full justify-center flex flex-col">
                    <h1 className=" bg-none font-bold text-3xl md:text-5xl lg:text-8xl font4  text-start">Welcome to TaskSync</h1>
                    <p className="font2 text-xs lg:text-base text-start md:mt-5">TaskSync is a dynamic task management platform designed to streamline your productivity. Seamlessly sync and organize your tasks, projects, <br /> and deadlines in one intuitive interface. With collaborative features, real-time updates, and user-friendly controls, TaskSync <br /> empowers individuals and teams to efficiently achieve their goals. Experience a synchronized approach <br /> to task management, ensuring clarity, efficiency, and success in every project.
                    </p>
                    <button className="wrapper btn hover:bg-[#3B82F6] hover:text-white w-28 text-xs lg:w-32 mt-5 mr-4 text-[#3B82F6] border border-[#3B82F6]">Let’s Explore</button>
                </div>
            </div>
    );
};

export default Banner;