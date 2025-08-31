const Categories = () => {
    return (
        <div className="relative w-full flex flex-col items-center h-[82.75vh] top-[17.25%] z-10 px-10"> 
            <h1 className="text-3xl font-extrabold">Categories</h1>
            <ul className="grid grid-cols-3 gap-x-44 gap-y-10 mt-10">
                <li>
                    <span className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp; Art & Illustration</span>
                    <span className="ml-2 text-sm"> (5)</span>
                    <ul className="ml-12 mt-2">
                        <li>Digital Illustrations</li>
                        <li>Painting</li>
                        <li>Pencil & Ink Drawing</li>
                        <li>Sketches</li>
                        <li>Concept Art</li>
                    </ul>
                </li>
                <li>
                    <span className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp; Photography</span>
                    <span className="ml-2 text-sm"> (5)</span>
                    <ul className="ml-12 mt-2">
                        <li>Portraits</li>
                        <li>Landscapes</li>
                        <li>Street Photography</li>
                        <li>Editorial/Fashion</li>
                        <li>B/W</li>
                    </ul>
                </li>
                <li>
                    <span className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp; Interior & Decor</span>
                    <span className="ml-2 text-sm"> (5)</span>
                    <ul className="ml-12 mt-2">
                        <li>Home Decor</li>
                        <li>DIY Decor</li>
                        <li>Minimalist Interiors</li>
                        <li>Workspace Design</li>
                        <li>Cozy Corners</li>
                    </ul>
                </li>
                <li>
                    <span className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp; Fashion & Style</span>
                    <span className="ml-2 text-sm"> (5)</span>
                    <ul className="ml-12 mt-2">
                        <li>Outfit Inspiration</li>
                        <li>Streetwear</li>
                        <li>Accessories Styling</li>
                        <li>Seasonal Looks</li>
                        <li>Lookbooks</li>
                    </ul>
                </li>
                <li>
                    <span className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp; Graphic Design</span>
                    <span className="ml-2 text-sm"> (5)</span>
                    <ul className="ml-12 mt-2">
                        <li>Branding</li>
                        <li>Typography Art</li>
                        <li>Posters & Prints</li>
                        <li>Logos</li>
                        <li>Packaging Design</li>
                    </ul>
                </li>
                <li>
                    <span className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp; UI/UX & Web Design</span>
                    <span className="ml-2 text-sm"> (5)</span>
                    <ul className="ml-12 mt-2">
                        <li>Mobile Apps Design</li>
                        <li>Websites</li>
                        <li>Dashboard Interfaces</li>
                        <li>Products Design</li>
                        <li>UX Wireframes</li>
                    </ul>
                </li>
                <li>
                    <span className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp;  Food</span>
                    <span className="ml-2 text-sm"> (5)</span>
                    <ul className="ml-12 mt-2">
                        <li>Food Styling</li>
                        <li>Baking & Deserts</li>
                        <li>Cafes</li>
                        <li>Food Photography</li>
                        <li>Street Food & Local Eats</li>
                    </ul>
                </li>
                <li>
                    <span className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp; Travel & Places</span>
                    <span className="ml-2 text-sm"> (5)</span>
                    <ul className="ml-12 mt-2">
                        <li>Scenic Views</li>
                        <li>Hidden Gems</li>
                        <li>City Views</li>
                        <li>Cultural Landmarks</li>
                        <li>Natural Landscapes</li>
                    </ul>
                </li>
                <li>
                    <span className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp; Moodboards & Aesthetics</span>
                    <span className="ml-2 text-sm"> (5)</span>
                    <ul className="ml-12 mt-2">
                        <li>Color Palettes</li>
                        <li>Visual Themes</li>
                        <li>Seasonal Moodboards</li>
                        <li>Texture & Material Boards</li>
                        <li>Inspirational Grids</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
    
}

export default Categories