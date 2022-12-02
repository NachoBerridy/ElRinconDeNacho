import Dots from "../../Atoms/Animations/dots"
const DotsContainer = () => {
    const amount = 100;
    return (
        <div className="flex flex-wrap w-full h-full bg-black">
            {[...Array(amount)].map((e, i) => (	
                <Dots key={i} />
            ))}
        </div>
    );
}

export default DotsContainer;