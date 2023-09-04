import s from "../style";
import { stats } from "../constant";

const Stats = () => {
  return (
    <section
      id="stat"
      className={`md:${s.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat, index) => (
        <div className={`flex justify-start items-center `}>
          <div
            key={stat.id}
            className={` flex-1 flex justify-start items-center flex-row m-3`}
          >
            <h4
              className="font-poppins font-semibold text-white xs:text-[40px] text-[30px] 
            xs:leading-[53px] leading-[43px]"
            >
              {stat.value}
            </h4>
            <p
              className="font-poppins font-normal text-gradient xs:text-[20px] text-[15px] 
            xs:leading-[26px] leading-[21px] uppercase ml-3"
            >
              {stat.title}
            </p>
          </div>
          {index !== stats.length - 1 && (
            <div className="">
              <div className=" mx-5 md:block hidden bg-white/50 w-[2px] h-[15px] rounded-full"></div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Stats;
