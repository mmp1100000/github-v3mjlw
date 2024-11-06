import React from "react";

const ListingListSkeleton = () => {
  return (
    <section className="listing-list-area pt-120 pb-90">
      <div className="container">
        <div className="listing-search-filter mb-40">
          <div className="row">
            <div className="col-md-8">
              <div className="filter-left d-flex align-items-center">
                <div className="show-text">
                  <div className="skeleton-box" style={{ width: '150px', height: '24px' }}></div>
                </div>
                <div className="sorting-dropdown">
                  <div className="skeleton-box" style={{ width: '200px', height: '50px', marginLeft: '20px' }}></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="filter-right">
                <div className="d-flex justify-content-end">
                  <div className="skeleton-box" style={{ width: '50px', height: '50px', marginRight: '10px' }}></div>
                  <div className="skeleton-box" style={{ width: '50px', height: '50px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="sidebar-widget-area">
              <div className="widget search-listing-widget mb-30">
                <div className="skeleton-box" style={{ width: '150px', height: '32px', marginBottom: '30px' }}></div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="skeleton-box" style={{ width: '100%', height: '60px', marginBottom: '15px' }}></div>
                ))}
                <div className="skeleton-box" style={{ width: '100%', height: '50px', marginTop: '15px' }}></div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="listing-list-wrapper">
              {[1, 2, 3].map((i) => (
                <div key={i} className="listing-item listing-list-item-two mb-60">
                  <div className="d-flex flex-column flex-md-row">
                    <div style={{ flex: '0 0 48%' }}>
                      <div className="skeleton-box" style={{ width: '100%', height: '290px', borderRadius: '5px' }}></div>
                    </div>
                    <div style={{ flex: '0 0 52%', padding: '20px' }}>
                      <div className="skeleton-box" style={{ width: '80%', height: '32px', marginBottom: '15px' }}></div>
                      <div className="skeleton-box" style={{ width: '60%', height: '24px', marginBottom: '15px' }}></div>
                      <div className="skeleton-box" style={{ width: '40%', height: '24px', marginBottom: '15px' }}></div>
                      <div className="skeleton-box" style={{ width: '70%', height: '24px', marginBottom: '15px' }}></div>
                      <div className="skeleton-box" style={{ width: '100%', height: '1px', margin: '20px 0' }}></div>
                      <div className="d-flex justify-content-between">
                        <div className="skeleton-box" style={{ width: '45%', height: '24px' }}></div>
                        <div className="skeleton-box" style={{ width: '45%', height: '24px' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingListSkeleton;