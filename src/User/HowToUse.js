import PageTitle from "../Components/User/PageTitle";
import HowToUseBar from "../Components/User/HowToUseBar";

const HowToUse = () => {
    return (
        <div className="user-tutorial flex flex-col flex-grow px-36 py-5">
            <PageTitle title="How to Use" subtitle="Here's step by step how to use the converter." />

            <div className="flex-grow flex items-center justify-center w-full max-h-[30rem] rounded-lg bg-primary-400 px-6 py-5">
                <div className="w-5/6 h-full overflow-x-hidden overflow-y-scroll scrollbar-hide">
                    <HowToUseBar text={[1, "Go to dashboard page."]} addedClass="ml-5"/>
                    <HowToUseBar text={[2, "Drop your mp3 file on the file section or click Choose File to choose your file using file manager."]} addedClass="ml-48"/>
                    <HowToUseBar text={[3, "Choose the type of current instrument by clicking on the drop-down, the converted output will be your song with the opposite of your current instrument. if ypur current instrument is Piano, then the output will be Guitar sounded, vice versa."]} addedClass="ml-5"/>
                    <HowToUseBar text={[4, "Click Convert button and wait for the progress."]} addedClass="ml-48"/>
                    <HowToUseBar text={[5, "If the progress is done, you can see the output will be displayed on the bottom section. You can play the song by clicking the play button/"]} addedClass="ml-5"/>
                    <HowToUseBar text={[6, "You can download the song by clicking download button."]} addedClass="ml-48"/>
                </div>
            </div>
        </div>
    );
}
 
export default HowToUse;