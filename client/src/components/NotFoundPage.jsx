import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="justify-center items-center flex flex-col h-screen leading-none text-center text-[#111] bg-slate-500">
            <h1 className="text-[10rem] font-extrabold">404</h1>
            <p className="text-5xl font-extrabold pb-5">Oops! Page Not Found</p>
            <p className="text-amber-950 font-extrabold text-xl pb-5">Sorry, the page you are looking for does not exist.</p>
            <Link to="/">
                <button className="py-4 px-6 border-none bg-[#111] text-white rounded-full hover:bg-[#111111da] font-semibold">Go to Home</button>
            </Link>
        </div>
    )
}

export default NotFoundPage
