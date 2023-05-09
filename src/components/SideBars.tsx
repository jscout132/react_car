interface SideBarsProps{
    children: React.ReactNode;
    className?: string;
}

function SideBars( props:SideBarsProps ) {
  return (
    <button 
        className='pt-10 pl-8 align-center ml-5 bg-gray-200 shadow-md 
        flex flex-row h-2/4 border-l-8 transition border-gray-200 hover:border-yellow-500'>
        {props.children}
    </button>
  );
}

export default SideBars;
