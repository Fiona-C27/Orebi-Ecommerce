import { FaArrowRight } from "react-icons/fa6";

const SampleNextArrow =(props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute top-[30%] right-[-20px] bg-[#c2c2c2] w-[64px] h-[64px] rounded-full !flex justify-center items-center"
        style={{ ...style,  }}
        onClick={onClick}
      >
        <FaArrowRight className='text-x1 text-white font-bold cursor-pointer'/>
      </div>
    );
  }

export default SampleNextArrow;
