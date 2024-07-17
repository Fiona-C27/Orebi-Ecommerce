import { FaArrowLeft } from "react-icons/fa";


const SamplePrevArrow =(props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute top-[30%] left-[-20px] bg-[#c2c2c2] w-[64px] h-[64px] rounded-full !flex justify-center items-center z-[999]"
        style={{ ...style,  }}
        onClick={onClick}
      >
        <FaArrowLeft className='text-x1 text-white font-bold cursor-pointer'/>
      </div>
    );
  }

export default SamplePrevArrow;