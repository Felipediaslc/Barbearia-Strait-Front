export const Button = (props) => {
    return (
        <div className="relative  ">
            <button htmlFor={props?.id} className="sm:tracking-widest h-10 px-20 text-amarelo transition-colors 
          duration-150 border border-amarelo rounded-lg focus:shadow-outline
           hover:bg-amarelo hover:text-black">{props?.id}</button>
            
            
        </div>
    );
}