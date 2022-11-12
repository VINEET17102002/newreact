import React from 'react'

export const Slides = () => {
    return (
        <div>
            <br /><br /><br />
            <h1 id="pic" style={{ fontSize: "50px", color: "#FD841F", fontFamily: "serif" }}>Glimpse of our college &rarr;</h1><br />

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
                        aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.collegebatch.com/info/wp-content/uploads/2018/06/MIT-WPU-Pune.jpg"
                            className="d-block w-100" alt="..." height="600px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Our Campus</h3>
                            <p>Campus surrounded with greenery.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHw%3D&w=1000&q=80"
                            className="d-block w-100" alt="..." height="600px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Our Campus</h3>
                            <p>Clean and Healthy environment for students.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.shiksha.com/mediadata/images/1572439798phpgNWR81.jpeg"
                            className="d-block w-100" alt="..." height="600px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Classrooms</h3>
                            <p>Hi-Tech classrooms with comfortable seats.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://lv7ms1pq6dm2sea8j1mrajzw-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/empty-classroom-1200x675.jpg" className="d-block w-100" alt="..."
                            height="600px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Classrooms</h3>
                            <p>Students provided with high speed net.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/edu/art/5ca604e70eba9.jpeg" className="d-block w-100"
                            alt="..." height="600px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Hostels</h3>
                            <p>Clean and cozy rooms with good wifi connection.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://is1-2.housingcdn.com/01c16c28/1ef847a42b310b73ff27737e807d8666/v0/fs/3_rk_-for-rent-raja_bazar-Kolkata-bedroom.jpg" className="d-block w-100" alt="..."
                            height="600px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Hostels</h3>
                            <p>comfortable beds and furniture.</p>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
