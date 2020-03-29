import React from "react";
import choosesImg from "./coverimages/chooses-img.jpg";

const Choose = () => {
  return (
    <section className="choose-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 pl-0">
            <div className="choose-img">
              <img src={choosesImg} alt="" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="single-choose-wrap">
              <h2>
                “What were they thinking? 'It's an alien apocalypse! Quick, grab
                the beer!’’
              </h2>
              <span>Rick Yancey</span>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-choose">
                    <span>1</span>
                    <h3>Harvesting</h3>
                    <p>
                      It is the grapes which contain all the required
                      ingredients.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-choose">
                    <span>2</span>
                    <h3>Relaxation</h3>
                    <p>
                      It is the grapes which contain all the required
                      ingredients.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 offset-sm-3 offset-lg-0">
                  <div className="single-choose">
                    <span>3</span>
                    <h3>Foundation</h3>
                    <p>
                      It is the grapes which contain all the required
                      ingredients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
