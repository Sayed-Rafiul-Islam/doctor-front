import { ReviewCarousel } from "./slider/review-slider";

const Reviews = () => {
    return ( 
        <div>
            <ReviewCarousel reviews={[{imageUrl : "abc",name : '', rating : "4.5", review : "valona"}]} />
        </div>
     );
}
 
export default Reviews;