import Link from "next/link";
import { useRouter } from 'next/router';
import React from "react";
import ListingDetailsRight from "../src/components/ListingDetailsRight";
import Layout from "../src/layouts/Layout";
import { useListings } from "../src/hooks/useListings";
import ListingDetailsSkeleton from "../src/components/skeletons/ListingDetailsSkeleton";

const ListingDetails1 = () => {
  const router = useRouter();
  const { id } = router.query;
  const { listings, loading } = useListings();
  const listing = listings.find(l => l.id === parseInt(id));

  if (loading) {
    return (
      <Layout>
        <ListingDetailsSkeleton />
      </Layout>
    );
  }

  if (!listing) {
    return (
      <Layout>
        <div className="container pt-120 pb-120">
          <div className="text-center">Listing not found</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="page-breadcrumbs page-breadcrumbs-one pt-120 pb-70">
        <div className="container">
          <div className="breadcrumbs-wrapper-one">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="listing-info-name">
                  <div className="info-name d-flex">
                    <div className="thumb">
                      <img
                        src={listing.image}
                        alt={listing.title}
                      />
                    </div>
                    <div className="content">
                      <span className="cat-btn">{listing.category}</span>
                      <h3>{listing.title}</h3>
                      <p className="tag">
                        <a href="#">{listing.category}</a>,
                        <a href="#">{listing.location}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="listing-info-content">
                  <div className="info-button-box">
                    <ul className="ratings ratings-three">
                      {[...Array(listing.rating)].map((_, index) => (
                        <li key={index} className="star">
                          <i className="flaticon-star-1" />
                        </li>
                      ))}
                      <li>
                        <span>({listing.reviews} Reviews)</span>
                      </li>
                    </ul>
                    <span className={`status st-${listing.status}`}>{listing.status}</span>
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
                <div className="listing-content mb-50 wow fadeInUp">
                  <h3 className="title">{listing.title}</h3>
                  <p>{listing.description || "Experience the best service and ambiance at our establishment. We pride ourselves on delivering exceptional quality and memorable experiences to all our guests."}</p>
                </div>
                <div className="listing-features-box mb-50 wow fadeInUp">
                  <h4 className="title">Features</h4>
                  <div className="row">
                    {listing.features ? listing.features.map((feature, index) => (
                      <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                        <div className="icon-box icon-box-one">
                          <div className="icon">
                            <i className="ti-credit-card" />
                          </div>
                          <div className="info">
                            <h6>{feature}</h6>
                          </div>
                        </div>
                      </div>
                    )) : (
                      <>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="icon-box icon-box-one">
                            <div className="icon">
                              <i className="ti-credit-card" />
                            </div>
                            <div className="info">
                              <h6>Card Payment</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="icon-box icon-box-one">
                            <div className="icon">
                              <i className="ti-wifi" />
                            </div>
                            <div className="info">
                              <h6>Free WiFi</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="icon-box icon-box-one">
                            <div className="icon">
                              <i className="ti-car" />
                            </div>
                            <div className="info">
                              <h6>Parking Available</h6>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="listing-gallery-box">
                  <h4 className="title">Photo Gallery</h4>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="gallery-item mb-30">
                        <a
                          href={listing.image}
                          className="img-popup"
                        >
                          <img
                            src={listing.image}
                            alt="gallery image"
                          />
                        </a>
                      </div>
                    </div>
                    {listing.gallery && listing.gallery.map((image, index) => (
                      <div key={index} className="col-md-6 col-sm-12">
                        <div className="gallery-item mb-30">
                          <a href={image} className="img-popup">
                            <img src={image} alt="gallery image" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <ListingDetailsRight listing={listing} />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ListingDetails1;