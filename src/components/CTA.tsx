import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`flex justify-center items-center sm:my-16 my-6
  ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className={`flex-1 flex flex-col`}>
      <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px mt-5]`}>
        Everything you need to accept card payments and{" "}
        <br className="sm:block hidden" /> grow your business anywhere on the
        planet.
      </p>
    </div>
    <div className="sm:w-[150px] w-full flex sm:justify-center justify-start sm:ml-10 ml-0 sm:mt-0 mt-10">
      <Button styles="rounded-md " />
    </div>
  </section>
);

export default CTA;
