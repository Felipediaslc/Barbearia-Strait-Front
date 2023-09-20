export const Input = (props) => {
    return (
        <div className="relative mt-2  ">
            <input {  ...props}
            className="w-full sm:w-60 px-5 py-3 text-sm placeholder-transparent bg-transparent  border-0 border-b-2 
             appearance-none 
              dark:text-white dark:border-white rounded-md border-amber-500 text-amber-500 
            peer focus:bg-transparent  
             placeholder-shown:border-white   placeholder-shown:bg-transparent" />
            <label htmlFor={props?.id}
              className=" absolute left-2 -top-2.5 px-1 text-sm  text-amber-500 transition-all bg-transparent rounded 
              peer-placeholder-shown:text-sm peer-placeholder-shown:text-white peer-placeholder-shown:top-3
               peer-placeholder-shown:border-none dark:text-white peer-placeholder-shown:left-4 peer-placeholder-shown:bg-transparent
              peer-focus:-top-2.5  peer-focus:left-2 peer-focus:text-black peer-focus:bg-amber-500
               peer-focus:font-semibold ">{props?.placeholder}</label>
        </div>
    );
}