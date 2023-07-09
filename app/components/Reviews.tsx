import React from "react";
import Slider from "react-slick";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    comment: "Great service and delicious snacks!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "BandidasCo always exceeds my expectations!",
    rating: 4,
  },
  // Add more reviews here...
  {
    id: 3,
    name: "Sarah Johnson",
    comment: "The flavors are incredible, highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Anderson",
    comment: "Best ice cream in town, hands down!",
    rating: 4,
  },
  {
    id: 5,
    name: "Emily Davis",
    comment: "BandidasCo never disappoints, a must-try!",
    rating: 5,
  },
  {
    id: 6,
    name: "David Wilson",
    comment: "The elotes are so flavorful and perfectly seasoned!",
    rating: 4,
  },
  {
    id: 7,
    name: "Sophia Rodriguez",
    comment: "Incredible variety and great customer service!",
    rating: 5,
  },
  {
    id: 8,
    name: "Benjamin Thompson",
    comment: "I always look forward to their tasty treats!",
    rating: 4,
  },
  {
    id: 9,
    name: "Olivia Lewis",
    comment: "BandidasCo brings joy to every event, love it!",
    rating: 5,
  },
  {
    id: 10,
    name: "Daniel Harris",
    comment: "Delicious and unique flavors, a real treat!",
    rating: 4,
  },
];

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="max-w-lg mx-auto">
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-medium">{review.name}</h3>
            <p className="text-sm">{review.comment}</p>
            <div className="flex mt-2">
              {Array.from({ length: review.rating }, (_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-4 h-4 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0l2.06 6.31H20l-5.29 3.86L15.29 20 10 15.38 4.71 20l1.53-9.83L0 6.31h7.94L10 0zm0 2.53L8.82 6.31H2.97l5.05 3.69-1.79 5.57L10 13.47l4.76 3.1-1.79-5.57L17.03 6.3H11.18L10 2.53z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
