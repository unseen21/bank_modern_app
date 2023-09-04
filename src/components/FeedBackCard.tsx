import { quotes } from "../assets";

type cardProps = {
  content: string;
  name: string;
  title: string;
  img: string;
};

const FeedBackCard = ({ content, name, title, img }: cardProps) => (
  <div
    className="flex justify-between flex-col px-10 py-10 rounded-[20px] max-w-[370px]
  md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
  >
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42px] h-[42px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row items-center">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full " />
      <div className="flex flex-col justify-center-center ml-4">
        <h4 className="font-poppins font-semibold text-[20px] text-white leading-[32px]">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[18px] text-dimWhite leading-[28px]">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedBackCard;
