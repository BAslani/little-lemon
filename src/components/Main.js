import greekSalad from "./Assets/greek salad.jpg"
import bruchetta from "./Assets/bruchetta.svg"
import lemonDessert from "./Assets/lemon dessert.jpg"
import owners1 from "./Assets/Mario and Adrian A.jpg"
import owners2 from "./Assets/Mario and Adrian b.jpg"

function Main() {
    return (
        <main>
            <div className="heroContainer">
                <section className="hero">
                    <h1 className="title">Little Lemon</h1>
                    <h2 className="location">Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button className="btn">Reserve a Table</button>
                </section>
            </div>
            <section className="specials">
                <div className="specialsHeader">
                    <h2>This week's Special</h2>
                    <button className="btn">Online Menu</button>
                </div>
                <div className="cardsContainer">
                    {/* card */}
                    <article className="card">
                        <img src={greekSalad} alt="greek salad" />
                        <header>
                            <h2 className="cardTitle">Greek Salad</h2>
                            <h2 className="price">$12.99</h2>
                        </header>
                        <p>
                            The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <p>Order a Delivery </p>
                    </article>
                    {/* card */}
                    <article className="card">
                        <img src={bruchetta} alt="bruchetta" />
                        <header>
                            <h2 className="cardTitle">Bruchetta</h2>
                            <h2 className="price">$5.99</h2>
                        </header>
                        <p>
                            Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                        </p>
                        <p>Order a Delivery </p>
                    </article>
                    {/* card */}
                    <article className="card">
                        <img src={lemonDessert} alt="Lemon Dessert" />
                        <header>
                            <h2 className="cardTitle">Lemon Dessert</h2>
                            <h2 className="price">$10.99</h2>
                        </header>
                        <p>
                            This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                        <p>Order a Delivery </p>
                    </article>
                </div>
            </section>
            <section className="testimonials">
                <h1>Testimonials</h1>
            </section>
            <section className="about">
                <header>
                    <h1 className="aboutTitle">Little Lemon</h1>
                    <h2 className="location">Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                </header>
                <div className="aboutImgContainer1">
                    <img src={owners1} alt="owners"/>
                </div>
                <div className="aboutImgContainer2">
                    <img src={owners2} alt="owners"/>
                </div>
            </section>
        </main>
    )
}

export default Main;