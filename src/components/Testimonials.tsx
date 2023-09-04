import styles from "../style";
import { feedback } from "../constant";
import FeedBackCard from "./FeedBackCard";

const Testimonials = () => {
  return (
    <section
      id="client"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      {/* TODO */}
      {/* <div className="absolute z-[1] w-[60%] h-[50%] -top-[50px]  -right-[50%] rounded-full blue__gradient" /> */}
      <div className="absolute z-[0] w-[60%] h-[100%] -right-[50%] rounded-full blue__gradient" />
      {/* <div className="absolute z-[1] w-[60%] h-[10%] top-[500px]  -right-[50%] rounded-full pink__gradient" /> */}

      <div
        className="w-full flex justify-between items-center 
              md:flex-row flex-col sm:mg-16 mb-6 relative z-[1]"
      >
        <h1 className={styles.heading2}>
          What people are <br className="sm:block hideen" /> saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left  max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div
        className="flex flex-wrap sm:justify-start
            justify-center w-full feedback-container relative z-[1]"
      >
        {feedback.map((card) => (
          <FeedBackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
