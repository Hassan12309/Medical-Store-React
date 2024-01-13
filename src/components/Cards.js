// ProductCards.js
import React from 'react';
import Medicine4 from './medicine4.jpg';
import Medicine5 from './medicine5.png';
import Medicine6 from './medicine6.jpg';

const ProductCards = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Product Card 1 */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img className="card-img-top" src={Medicine4} alt="Medicine Image" />
            <div className="card-body">
              <h4 className="card-title">Pain Relief Medicine</h4>
              <p className="card-text">Effective pain relief for various conditions.</p>
              <a href="#" className="btn btn-primary">Buy Now</a>
            </div>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img className="card-img-top" src={Medicine5} alt="Medicine Image 2" />
            <div className="card-body">
              <h4 className="card-title">Cold and Flu Medicine</h4>
              <p className="card-text">Relief from cold and flu symptoms.</p>
              <a href="#" className="btn btn-primary">Buy Now</a>
            </div>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img className="card-img-top" src={Medicine6} alt="Medicine Image 3" />
            <div className="card-body">
              <h4 className="card-title">Digestive Health Supplement</h4>
              <p className="card-text">Supports digestive system health.</p>
              <a href="#" className="btn btn-primary">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
