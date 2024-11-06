import React from "react";

const ListingDetailsSkeleton = () => {
  return (
    <>
      <section className="page-breadcrumbs page-breadcrumbs-one pt-120 pb-70">
        <div className="container">
          <div className="breadcrumbs-wrapper-one">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="listing-info-name">
                  <div className="info-name d-flex">
                    <div className="thumb skeleton-box" style={{ width: '120px', height: '120px' }}></div>
                    <div className="content ml-4" style={{ flex: 1 }}>
                      <div className="skeleton-box" style={{ width: '80px', height: '24px', marginBottom: '10px' }}></div>
                      <div className="skeleton-box" style={{ width: '200px', height: '32px', marginBottom: '10px' }}></div>
                      <div className="skeleton-box" style={{ width: '150px', height: '20px' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="listing-info-content">
                  <div className="info-button-box">
                    <div className="d-flex justify-content-end">
                      <div className="skeleton-box" style={{ width: '120px', height: '24px' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="listing-details-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="listing-details-wrapper listing-details-wrapper-one">
                <div className="listing-content mb-50">
                  <div className="skeleton-box" style={{ width: '300px', height: '36px', marginBottom: '20px' }}></div>
                  <div className="skeleton-box" style={{ width: '100%', height: '80px' }}></div>
                </div>
                <div className="listing-features-box mb-50">
                  <div className="skeleton-box" style={{ width: '200px', height: '32px', marginBottom: '30px' }}></div>
                  <div className="row">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                        <div className="skeleton-box" style={{ width: '100%', height: '100px', marginBottom: '20px' }}></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="listing-gallery-box">
                  <div className="skeleton-box" style={{ width: '200px', height: '32px', marginBottom: '30px' }}></div>
                  <div className="row">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="col-md-6 col-sm-12">
                        <div className="skeleton-box" style={{ width: '100%', height: '250px', marginBottom: '30px' }}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget reservation-form-widget mb-30">
                  <div className="skeleton-box" style={{ width: '200px', height: '32px', marginBottom: '30px' }}></div>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="skeleton-box" style={{ width: '100%', height: '50px', marginBottom: '20px' }}></div>
                  ))}
                  <div className="skeleton-box" style={{ width: '100%', height: '50px', marginTop: '30px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingDetailsSkeleton;