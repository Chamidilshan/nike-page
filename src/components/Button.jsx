const Button = ({label, iconUrl}) => {
  return (
    <button className="
    flex bg-coral-red
    gap-2 px-7 py-4 border
    font-montserrat text-lg leading-none
    rounded-full text-white border-coral-red
    justify-center items-center"
    > 
      {label}
      <img
      src={iconUrl}
      alt="arrow-right"
      className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  )
} 

export default Button