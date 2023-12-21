import "../../sass/components/Form/formComplete.scss"

function FormComplete () {
   const refresh = () => {
      location.reload()
   }

   return (   
      <section className="flex basis-4/6 justify-center items-center mt-8 sm:mt-5 py-3">
         <div className="w-full md:w-3/4 h-1/2 flex flex-col justify-center items-center">
            <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="40" cy="40" r="40" fill="url(#a)"/>
               <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/>
               <defs>
                  <linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient>
               </defs>
            </svg>

            <div className="complete-text text-center">
               <h2 className="mt-5">THANK YOU!</h2>

               <p className="mt-3">
                  {`We've added your card details`}
               </p>
            </div>

            {/* BTN */}
            <div className="complete-BTN w-full mt-8 my-1 py-2 flex flex-row justify-center">
               <button 
                  className="w-full xl:w-3/4 py-3 text-center text-white"
                  onClick={refresh}
               >
                  Continue
               </button>
            </div>
         </div> 
      </section>
   );
}
export default FormComplete