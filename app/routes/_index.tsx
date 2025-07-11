import logo from "./../images/windowhouse_logo.png";
import house from "./../images/kim_house.jpg";

export default function Home() {
    return (
        <>
            <h1>Hi from Home</h1>
            <div className="">
                <img className="home_img_container__img" src={logo} />
                <img className="home_img_container__img" src={house} />
            </div>
        </>
    );
}
