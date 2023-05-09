interface SquaresProps{
    children: React.ReactNode;
    className?: string;
}

function Squares(props:SquaresProps) {
  return (
    <section className="shadow bg-gray-200 ml-3 mr-3
    w-1/3 h-28 pt-6 border-l-8 transition border-gray-200 hover:border-yellow-500">
        {props.children}
    </section>
  );
}

export default Squares;
