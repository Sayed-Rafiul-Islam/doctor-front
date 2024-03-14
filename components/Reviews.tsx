import { ReviewCarousel } from "./slider/review-slider";
// 
// 
// 
// 
// 

const Reviews = () => {

    const reviews = [
        {
          name: "Alice Johnson",
          review: "Dr. Smith provided clear explanations and seemed knowledgeable. However, the wait time was a bit long.",
          rating: 4,
          imageUrl: "https://i.ibb.co/7SqwLVF/woman-1.jpg"
        },
        {
          name: "Bob Thompson",
          review: "Dr. Smith was excellent! He took the time to listen to my concerns and provided thorough explanations. Highly recommend.",
          rating: 5,
          imageUrl: "https://i.ibb.co/3dzpkcy/man-1.jpg"
        },
        {
          name: "Carl Lee",
          review: "My experience with Dr. Smith was okay. He seemed a bit rushed during the appointment, but he addressed my concerns.",
          rating: 3,
          imageUrl: "https://i.ibb.co/vBLJRcz/man-3.jpg"
        },
        {
          name: "David Rodriguez",
          review: "I'm very satisfied with Dr. Smith's care. He's attentive, compassionate, and knowledgeable. Will definitely continue seeing him.",
          rating: 5,
          imageUrl: "https://i.ibb.co/KFCdkS7/man-2.jpg"
        },
        {
          name: "Elena Nguyen",
          review: "I had a disappointing experience with Dr. Smith. He seemed disinterested and didn't provide much information. Would not recommend.",
          rating: 2,
          imageUrl: "https://i.ibb.co/8dN40XN/woman-2.jpg"
        }
      ];
      
    return ( 
        <div className="lg:my-32 md:my-28 my-20">
            <h2 className="font-bold text-4xl text-center"><span className="text-primary">Reviews</span> From Patients</h2>
            <ReviewCarousel reviews={reviews} />
        </div>
     );
}
 
export default Reviews;