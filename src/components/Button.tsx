type props = {
  styles: string;
};

const Button = ({ styles }: props) => {
  return (
    <button
      type="button"
      className={`px-6 py-4 bg-blue-gradient font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
