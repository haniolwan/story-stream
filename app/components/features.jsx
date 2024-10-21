const Features = () => {
    const features = [
        {
            title: "Feature One",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
            background: "",
        },
        {
            title: "Feature Two",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
            background: "",
        },
        {
            title: "Feature Three",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
            background: "",
        },
        {
            title: "Feature Four",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
            background: "",
        }
    ]
    return (
        <section className="px-52 text-center pt-20">
            <div className="gap-20 container mx-auto px-4">
                <div className="flex flex-col items-center mb-10 gap-4">
                    <p className="w-fit rounded-lg bg-purple-100 bg-opacity-50 p-1 mb-3 tracking-wider text-purple-600 text-[16px] font-bold text-center font-[400] leading-[1.2rem] font-inter">POWERFUL FEATURES</p>
                    <h2 className="text-[54px] leading-[64.8px] font-inter">
                        Audiobooks reimagined
                    </h2>
                    <p className="text-[35px] text-[#52525b] leading-[30px] font-inter">
                        Features built to let you enjoy audiobooks to the fullest
                    </p>
                </div>
                <div className="flex gap-[60px] items-center flex-wrap">
                    {features.map(({ title, body, background }) => {
                        return (
                            <div key={title} className="text-start bg-white rounded-lg p-6 flex flex-col transition-transform transform">
                                {/* <img src={background} alt="Feature 1" className="mb-4" /> */}
                                {/* <div className="bg-gray-600 rounded-2xl" /> */}
                                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                                <p className="text-gray-600 text-center">
                                    {body}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section >
    )
}
export default Features;