interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?:(event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: ButtonProps){
    return (
        <button 
            onClick={ props.onClick } 
            className="p-3 m-5  text-white border rounded border-gray-500 
            hover:bg-yellow-500 justify-center bg-gray-600 hover:border-yellow-500">
        {props.children}
        </button>
    )
}

