
const Home = () => {
    return (
        <div className="relative w-full">
            <div className="absolute w-full text-gray-100 pt-16 md:pt-36 lg:pt-48 pl-16 bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                <h1 className=" bg-none text-[#EB671C] text-xl md:text-5xl lg:text-8xl font4 text-start">Eat Healthy <br /> <span className="font1">& Live Well</span></h1>
                <p className="font2 text-[#FFF1B0] text-xs md:text-base lg:text-3xl text-start md:mt-5">Healthy food is food that gives you all the <br /> nutrients you need to stay healthy, feel well and have plenty of energy.</p>
            </div>
            <img className="w-full h-[90vh]" src='https://i.ibb.co/JFFdHHr/task-management-concept-vector-24073177.jpg' />
        </div>
    );
};

export default Home;