import house from "./../images/kim_house.jpg";

export default function Home() {
    return (
        <>
            <div className="home_intro_container">
                <img className="home_intro_container__img" src={house} alt="the windowhouse where pottery is done" />
                <h1 className="home_intro_container__h1">
                    Kimberly is a hobby potter developing her art one pot at a
                    time
                </h1>
            </div>
        </>
    );
}
