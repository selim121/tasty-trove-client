

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 lg:w-5/12 mx-auto text-center my-8">
            <p className="text-[#4a02afdc] mb-2">{subHeading}</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;