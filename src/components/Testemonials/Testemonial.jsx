import React from "react";
import "./Testemonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Fade } from "react-reveal";

//import the images
import Profile1 from "../../images/profile1.jpg";
import Profile2 from "../../images/profile2.jpg";
import Profile3 from "../../images/profile3.jpg";
import Profile4 from "../../images/profile4.jpg";
import Profile5 from "../../images/profile5.jpg";

//import the files
import StarRating from "./StarRating.jsx";

const Testemonial = () => {
  const clients = [
    {
      img: Profile1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus quasi ea reiciendis distinctio accusamus consequatur incidunt tempore dolores voluptatem!",
    },
    {
      img: Profile2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus quasi ea reiciendis distinctio accusamus consequatur incidunt tempore dolores voluptatem!",
    },
    {
      img: Profile3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus quasi ea reiciendis distinctio accusamus consequatur incidunt tempore dolores voluptatem!",
    },
    {
      img: Profile4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus quasi ea reiciendis distinctio accusamus consequatur incidunt tempore dolores voluptatem!",
    },
    {
      img: Profile5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus quasi ea reiciendis distinctio accusamus consequatur incidunt tempore dolores voluptatem!",
    },
  ];
  return (
    <div>
      <Fade bottom>
        <div className="testemonials">
          <h1>
            clients always <span>order this</span>
          </h1>
          <div className="theSwiper">
            <Swiper
              className="allSwiper"
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {clients.map((client, index) => {
                return (
                  <SwiperSlide className="slide" id={index}>
                    <img src={client.img} alt="" />
                    <div className="textandstar">
                      <p>{client.review}</p>
                      <div className="stars">
                        <StarRating />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Testemonial;
