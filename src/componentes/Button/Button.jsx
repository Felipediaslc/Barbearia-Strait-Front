export const Button = (props) => {
    return (
        <div className="relative  ">
            <button htmlFor={props?.id} className="h-10 px-20 text-amber-600 transition-colors 
          duration-150 border border-amber-600 rounded-lg focus:shadow-outline
           hover:bg-amber-600 hover:text-black">{props?.id}</button>
            
            
        </div>
    );
}