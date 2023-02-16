import PageTitle from "../Components/User/PageTitle";
import HowToUseBar from "../Components/User/HowToUseBar";

const HowToUse = () => {
    return (
        <div className="user-tutorial flex flex-col flex-grow px-36 py-5">
            <PageTitle title="How to Use" subtitle="Here's step by step how to use the converter." />

            <div className="flex-grow flex items-center justify-center w-full max-h-[30rem] rounded-lg bg-primary-400 px-6 py-5">
                <div className="w-5/6 h-full overflow-x-hidden overflow-y-scroll scrollbar-hide">
                    <HowToUseBar text={[1, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vitae, earum libero eveniet odio corrupti, rem amet voluptates corporis dolorum minus suscipit ab molestiae assumenda aut soluta ducimus. Obcaecati, provident?"]} addedClass="ml-5"/>
                    <HowToUseBar text={[2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vitae, earum libero eveniet odio corrupti, rem amet voluptates corporis dolorum minus suscipit ab molestiae assumenda aut soluta ducimus. Obcaecati, provident?"]} addedClass="ml-48"/>
                    <HowToUseBar text={[3, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vitae, earum libero eveniet odio corrupti, rem amet voluptates corporis dolorum minus suscipit ab molestiae assumenda aut soluta ducimus. Obcaecati, provident?"]} addedClass="ml-5"/>
                    <HowToUseBar text={[4, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vitae, earum libero eveniet odio corrupti, rem amet voluptates corporis dolorum minus suscipit ab molestiae assumenda aut soluta ducimus. Obcaecati, provident?"]} addedClass="ml-48"/>
                    <HowToUseBar text={[5, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vitae, earum libero eveniet odio corrupti, rem amet voluptates corporis dolorum minus suscipit ab molestiae assumenda aut soluta ducimus. Obcaecati, provident?"]} addedClass="ml-5"/>
                </div>
            </div>
        </div>
    );
}
 
export default HowToUse;