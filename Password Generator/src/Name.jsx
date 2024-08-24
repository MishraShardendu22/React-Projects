let y = new Date();
let year = y.getFullYear();

export default function Name() {
  return (
    <div >
        <h1 className="font-extrabold text-2xl text-red-900 hover:scale-110 transition duration-300 ease-in-out ">Made With ❤️ By Shardendu Mishra </h1>
        <h1 className="font-extrabold text-2xl text-red-900 hover:scale-110 transition duration-300 ease-in-out ">Made in : {year} ©️ of ShardenduMishra Create`s</h1>
    </div>
  )
}
