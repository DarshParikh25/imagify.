const Explore = () => {
    return (
        <div className="relative w-full flex flex-col items-center h-[82.75vh] top-[17.25%] z-10 px-10"> 
            <h1 className="text-3xl font-extrabold">Explore</h1>
            <ul className="grid grid-cols-3 gap-x-36 gap-y-10 mt-10">
                <li>
                    <div className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp;   For You (AI-Based)</div>
                    <div className="ml-7 text-sm">Dynamic feed based on user behavior</div>
                    <ul className="ml-12 mt-2">
                        <li>Inspired by your Boards</li>
                        <li>Similar to images you&apos;ve saved</li>
                        <li>From creators you follow</li>
                        <li>New in your favorite categories</li>
                        <li>Based on your color preferences</li>
                    </ul>
                </li>
                <li>
                    <div className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp; Trending Now</div>
                    <div className="ml-7 text-sm">Most engaging content across the platform</div>
                    <ul className="ml-12 mt-2">
                        <li>Most Saved Today</li>
                        <li>Viral This Week</li>
                        <li>Fastest Growing Boards</li>
                        <li>Top Creators of the Month</li>
                        <li>Most Loved</li>
                    </ul>
                </li>
                <li>
                    <div className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp; Themes & Aesthetics</div>
                    <div className="ml-7 text-sm">Mood-based visual discovery</div>
                    <ul className="ml-12 mt-2">
                        <li>Dark Academia</li>
                        <li>Pastel Core</li>
                        <li>Monochrome</li>
                        <li>Boho Vibes</li>
                        <li>Clean Minimalism</li>
                    </ul>
                </li>
                <li>
                    <div className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp;  Boards to Follow</div>
                    <div className="ml-7 text-sm">Curated boards from top creators or staff picks</div>
                    <ul className="ml-12 mt-2">
                        <li>Best of Typography</li>
                        <li>Dream Workspaces</li>
                        <li>Cozy Interiors</li>
                        <li>Nature Meets Fashion</li>
                        <li>Creative Color Palettes</li>
                    </ul>
                </li>
                <li>
                    <div className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp; Local Discovery</div>
                    <div className="ml-7 text-sm">Explore visuals based on region</div>
                    <ul className="ml-12 mt-2">
                        <li>India: Food & Decor</li>
                        <li>Japan: Street Fashion</li>
                        <li>Europe: Architecture</li>
                        <li>Scandinavia: Minimal Interiors</li>
                        <li>NYC: Editorial Shoots</li>
                    </ul>
                </li>
                <li>
                    <div className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp; Fresh Drops</div>
                    <div className="ml-7 text-sm">Recently uploaded images</div>
                    <ul className="ml-12 mt-2">
                        <li>New This Week</li>
                        <li>New in Art / Fashion / Travel</li>
                        <li>From Emerging Creators</li>
                        <li>Based on Tags You Follow</li>
                        <li>First Uploads from New Users</li>
                    </ul>
                </li>
                <li>
                    <div className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp; Weekly Curations / Challenges</div>
                    <div className="ml-7 text-sm">Theme-driven uploads to boost engagement</div>
                    <ul className="ml-12 mt-2">
                        <li>Cozy Corners Week</li>
                        <li>Typographic Tuesdays</li>
                        <li>Weekend Moodboard</li>
                        <li>“Shoot the Street” Challenge</li>
                        <li>Color of the Week: Olive Green</li>
                    </ul>
                </li>
                <li>
                    <div className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp; Explore by Color / Palette</div>
                    <div className="ml-7 text-sm">Visually filter the gallery by color</div>
                    <ul className="ml-12 mt-2">
                        <li>Warm Tones</li>
                        <li>Cool Tones</li>
                        <li>B/W</li>
                        <li>Earthy</li>
                        <li>Bright & Vibrant</li>
                    </ul>
                </li>
                <li>
                    <div className="text-lg font-semibold">&gt;&nbsp;&nbsp;&nbsp; Tags You Might Like</div>
                    <div className="ml-7 text-sm">Smartly suggested niche tags</div>
                    <ul className="ml-12 mt-2">
                        <li>#neutraltones</li>
                        <li>#grunge</li>
                        <li>#flatlaystyle</li>
                        <li>#aestheticsetup</li>
                        <li>#colorblock</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Explore
