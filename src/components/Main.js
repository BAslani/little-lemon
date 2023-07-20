import greekSalad from "./Assets/greek salad.jpg"
import bruchetta from "./Assets/bruchetta.svg"
import lemonDessert from "./Assets/lemon dessert.jpg"
import owners1 from "./Assets/Mario and Adrian A.jpg"
import owners2 from "./Assets/Mario and Adrian b.jpg"
import hero from "./Assets/restauranfood.jpg"

function Main() {
    return (
        <main className="main">
            <section className="heroSection">
                <article className="hero sectionCenter">
                    <section className="heroInfo">
                        <h1 className="title">Little Lemon</h1>
                        <h2 className="location">Chicago</h2>
                        <p>
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </p>
                        <button className="btn">Reserve a Table</button>
                    </section>
                    <div className="heroImg">
                        <img src={hero} alt="restaurant dish"/>
                    </div>
                </article>
            </section>
            <section className="specialsSection">
                <section className="specials sectionCenter">
                    <div className="specialsHeader">
                        <h2>This week's Special</h2>
                        <button className="btn">Online Menu</button>
                    </div>
                    <section className="cardsContainer sectionCenter">
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
                    </section>
                </section>
            </section>
            <section className="testimonialsSection">
                <section className="testimonials sectionCenter">
                    <h1>Testimonials</h1>
                </section>
            </section>
            <section className="aboutSection">
                <section className="about sectionCenter">
                    <div className="aboutInfo">
                        <h1 className="aboutTitle">Little Lemon</h1>
                        <h2 className="location">Chicago</h2>
                        <p>
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </p>
                    </div>
                    <div className="aboutImgContainer">
                        <div className="aboutImg1">
                            <img src={owners1} alt="owners" />
                        </div>
                        <div className="aboutImg2">
                            <img src={owners2} alt="owners" />
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Main;