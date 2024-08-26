export default function App() {
  let y = new Date();
  let year = y.getFullYear();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <p className="my-4 font-extrabold text-red-900 hover:scale-110 transition-transform duration-300 ease-in-out">
        This Project is made using context to turn the page to 
        dark or light mode using a simple Toggle switch
      </p>
      <p className="my-4 font-extrabold text-red-900 hover:scale-110 transition-transform duration-300 ease-in-out">
        Made With ❤️ By Shardendu Mishra
      </p>
      <p className="my-4 font-extrabold text-red-900 hover:scale-110 transition-transform duration-300 ease-in-out">
        Made in: {year} ©️ ShardenduMishra Creates
      </p>
    </div>
  );
}
