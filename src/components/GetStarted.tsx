import s from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${s.flexCenter} h-[140px] w-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${s.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${s.flexStart} flex-row`}>
          <p
            className={`font-poppins font-medium text-[18px] leading-[23px] mr-2`}
          >
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrowup" className="w-[23px] h-[23px]" />
        </div>
        <p className={`font-poppins font-medium text-[18px] leading-[23px]`}>
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;