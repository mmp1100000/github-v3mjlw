import Link from "next/link";
import React, { useState } from "react";
import PageBanner from "../src/components/PageBanner";
import RangeSlider from "../src/components/RangeSlider";
import Layout from "../src/layouts/Layout";
import { useListings } from "../src/hooks/useListings";

const ListingGrid = () => {
  const [filters, setFilters] = useState({});
  const { listings, loading, error } = useListings(filters);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newFilters = {
      search: formData.get('search'),
      category: formData.get('category'),
      location: formData.get('location')
    };
    setFilters(newFilters);
  };

  if (error) return <div>Error loading listings: {error}</div>;

  return (
    <Layout>
      <PageBanner title={"Listing Grid"} pageName={"Listing"} />
      <section className="listing-grid-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget search-listing-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Filter Search</h4>
                  <form onSubmit={handleSearch}>
                    <div className="search-form">
                      <div className="form_group">
                        <input
                          type="search"
                          className="form_control"
                          placeholder="Search keyword"
                          name="search"
                        />
                        <i className="ti-search" />
                      </div>
                      <div className="form_group">
                        <select name="category" className="wide">
                          <option disabled selected value="">Category</option>
                          <option value="restaurant">Restaurant</option>
                          <option value="hotel">Hotel</option>
                          <option value="entertainment">Entertainment</option>
                        </select>
                      </div>
                      <div className="form_group">
                        <select name="location" className="wide">
                          <option disabled selected value="">Location</option>
                          <option value="california">California</option>
                          <option value="new-york">New York</option>
                          <option value="las-vegas">Las Vegas</option>
                        </select>
                      </div>
                      <div className="form_group">
                        <button className="main-btn icon-btn">Search Now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="listing-grid-wrapper">
                <div className="row">
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    listings.map((listing) => (
                      <div key={listing.id} className="col-md-6 col-sm-12">
                        <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                          <div className="listing-thumbnail">
                            <img
                              src={listing.image}
                              alt={listing.title}
                            />
                            <a href="#" className="cat-btn">
                              <i className="flaticon-chef" />
                            </a>
                            {listing.featured && (
                              <span className="featured-btn">Featured</span>
                            )}
                            <ul className="ratings ratings-four">
                              {[...Array(listing.rating)].map((_, index) => (
                                <li key={index} className="star">
                                  <i className="flaticon-star-1" />
                                </li>
                              ))}
                              <li>
                                <span>
                                  <a href="#">({listing.reviews} Reviews)</a>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-content">
                            <h3 className="title">
                              <Link href={`/listing-details-1?id=${listing.id}`}>
                                <a>{listing.title}</a>
                              </Link>
                            </h3>
                            <span className="price">
                              ${listing.price.min} - ${listing.price.max}
                            </span>
                            <span className="phone-meta">
                              <i className="ti-tablet" />
                              <a href={`tel:${listing.phone}`}>{listing.phone}</a>
                              <span className={`status st-${listing.status}`}>
                                {listing.status}
                              </span>
                            </span>
                            <div className="listing-meta">
                              <ul>
                                <li>
                                  <span>
                                    <i className="ti-location-pin" />
                                    {listing.location}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-heart" />
                                    <a href="#">Save</a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ListingGrid;