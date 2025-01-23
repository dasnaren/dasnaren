import React, { useState } from "react";
import Counter from "./Counter";

const TestimonialComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      description:
        "This product completely changed my workflow! It's incredibly easy to use and saved me hours every week.",
      author: "John Doe, Freelance Web Developer",
    },
    {
      description:
        "I can't believe the results I've seen after just a few weeks. This is truly a game-changer.",
      author: "Jane Smith, Marketing Specialist",
    },
    {
      description:
        "The customer service was outstanding, and the product delivered exactly as promised. Highly recommend!",
      author: "Chris Johnson, Entrepreneur",
    },
    {
      description:
        "I’ve tried many similar tools, but none have been as effective or intuitive as this one. So happy with my purchase!",
      author: "Emily Williams, Graphic Designer",
    },
    {
      description:
        "This has been a fantastic addition to my business. It’s streamlined everything and helped me grow faster than I expected.",
      author: "Michael Brown, Small Business Owner",
    },
  ];

  const nextTestimonial = () => setCurrentIndex(currentIndex + 1);
  const prevTestimonial = () => setCurrentIndex(currentIndex - 1);

  return (
    <>
      <Counter currentIndex={currentIndex} />
      <h1>Testimonial Project</h1>
      <div>{testimonials[currentIndex].description}</div>
      <span>{testimonials[currentIndex].author}</span>
      <br />
      <button
        onClick={nextTestimonial}
        disabled={testimonials.length === currentIndex + 1}
      >
        Next
      </button>
      <button onClick={prevTestimonial} disabled={currentIndex === 0}>
        Previous
      </button>
    </>
  );
};

export default TestimonialComponent;
