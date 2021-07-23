import React from 'react';
import featured from '../../../images/featured.png'

const FeatureService = () => {
    return (
         <section className="features-service pd-0 pb-md-5 my-5">
             <div className="container mb-5">
                 <div className="row mb-5">
                     <div className="col-md-5 mb-4 m-md-0">
                         <img src={featured} alt="" className="img-fluid" />
                     </div>
                     <div className="col-md-7 align-self-center">
                         <h1>Exptional Dental Care, on your team</h1>
                         <p className="text-secondary my-5">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam ab, quisquam doloribus laborum iure, labore a cupiditate iste veritatis quo earum nulla ipsam quod. ipsum dolor sit amet consectetur adipisicing elit. Modi ad, qui cumque natus aut quae iusto alias numquam quibusdam velit tenetur asperiores dolore temporibus nemo.</p>
                         <button className="btn btn-primary">Learn More</button>
                     </div>
                 </div>
             </div>
         </section>
    );
};

export default FeatureService;