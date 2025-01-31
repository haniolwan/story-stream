import HeadphonesSvg from "../icons/headphones";
import OpenBookSvg from "../icons/open-book";
import UploadSvg from "../icons/upload";

const Features = () => {
  const features = [
    {
      icon: <UploadSvg className="h-10 w-10 text-primary" />,
      title: "Easy Upload",
      description: "Simply upload your EPUB files and we'll handle the rest.",
    },
    {
      icon: <HeadphonesSvg className="h-10 w-10 text-primary" />,
      title: "Listen Anywhere",
      description: "Access your audiobooks on any device, anytime.",
    },
    {
      icon: <OpenBookSvg className="h-10 w-10 text-primary" />,
      title: "Large Library",
      description:
        "Convert and store as many books as you want in your personal library.",
    },
  ];
  return (
    <section className="md:px-40 text-center pt-20">
      <div className="gap-20 container mx-auto px-4">
        <div className="flex flex-col items-center mb-10 gap-4">
          <p className="w-fit rounded-lg dark:bg-white bg-purple-100 bg-opacity-50 p-1 mb-3 tracking-wider text-purple-600 text-[16px] font-bold text-center font-[400] leading-[1.2rem] font-inter">
            POWERFUL FEATURES
          </p>
          <h2 className="text-[54px] leading-[64.8px] font-inter">
            Audiobooks reimagined
          </h2>
          <p className="text-[35px] text-[#52525b] leading-[30px] font-inter">
            Features built to let you enjoy audiobooks to the fullest
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="dark:bg-gray-900 bg-white p-6 rounded-lg shadow-xl text-center"
            >
              <div className="mb-4 flex justify-center dark:text-white text-gray-800">
                {feature.icon}
              </div>
              <h3 className="dark:text-white text-gray-900 text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="dark:text-white text-gray-600 text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
