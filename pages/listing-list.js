import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { useListings } from "../src/hooks/useListings";
import ListingListSkeleton from "../src/components/skeletons/ListingListSkeleton";
import { niceSelect } from "../src/utils";

const RangeSlider = dynamic(() => import("../src/components/RangeSlider"), {
  ssr: false,
});

const ListingList = () => {
  const [filters, setFilters] = useState({});
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('default');
  const { listings, loading, error } = useListings(filters);

  useEffect(() => {
    // Initialize nice-select on mount and when loading completes
    if (!loading) {
      niceSelect();
    }
  }, [loading]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newFilters = {
      search: formData.get('search'),
      category: formData.get('category'),
      location: formData.get('location'),
      country: formData.get('country'),
      place: formData.get('place'),
      minPrice: priceRange[0],
      maxPrice: priceRange[1]
    };

    Object.keys(newFilters).forEach(key => 
      !newFilters[key] && delete newFilters[key]
    );

    setFilters(newFilters);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSortBy(value);
    
    let sortedListings = [...listings];
    switch (value) {
      case 'rating':
        sortedListings.sort((a, b) => b.rating - a.rating);
        break;
      case 'price':
        sortedListings.sort((a, b) => a.price.min - b.price.min);
        break;
      case 'reviews':
        sortedListings.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        sortedListings.sort((a, b) => a.id - b.id);
    }
  };

  const handlePriceRangeChange = (values) => {
    setPriceRange(values);
  };

  const displayedListings = listings.filter(listing => {
    if (priceRange[0] > 0 || priceRange[1] < 1000) {
      return listing.price.min >= priceRange[0] && listing.price.max <= priceRange[1];
    }
    return true;
  });

  return (
    <Layout>
      <PageBanner title={"List Layout"} />
      {loading ? (
        <ListingListSkeleton />
      ) : (
        <section className="listing-list-area pt-120 pb-90">
          <div className="container">
            <div className="listing-search-filter mb-40">
              <div className="row">
                <div className="col-md-8">
                  <div className="filter-left d-flex align-items-center">
                    <div className="show-text">
                      <span>Showing {displayedListings.length} Results</span>
                    </div>
                    <div className="sorting-dropdown">
                      <select 
                        className="wide"
                        value={sortBy}
                        onChange={handleSort}
                      >
                        <option value="default">Default Sorting</option>
                        <option value="rating">By Rating</option>
                        <option value="price">By Price</option>
                        <option value="reviews">By Reviews</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="filter-right">
                    <ul className="filter-nav">
                      <li>
                        <Link href="/listing-grid">
                          <a>
                            <i className="ti-view-grid" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/listing-list">
                          <a className="active">
                            <i className="ti-view-list-alt" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
                          <select name="category" className="wide" defaultValue="">
                            <option value="" disabled>Select Category</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="hotel">Hotel</option>
                            <option value="museum">Museum</option>
                            <option value="fitness">Fitness</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="shopping">Shopping</option>
                            <option value="art">Art</option>
                            <option value="sports">Sports</option>
                          </select>
                        </div>
                        <div className="form_group">
                          <select name="location" className="wide" defaultValue="">
                            <option value="" disabled>Select Location</option>
                            <option value="california">California</option>
                            <option value="new york">New York</option>
                            <option value="chicago">Chicago</option>
                            <option value="los angeles">Los Angeles</option>
                            <option value="miami">Miami</option>
                            <option value="houston">Houston</option>
                            <option value="boston">Boston</option>
                            <option value="seattle">Seattle</option>
                            <option value="denver">Denver</option>
                          </select>
                        </div>
                        <div className="form_group">
                          <select name="country" className="wide" defaultValue="">
                            <option value="" disabled>Select Country</option>
                            <option value="usa">USA</option>
                          </select>
                        </div>
                        <div className="form_group">
                          <select name="place" className="wide" defaultValue="">
                            <option value="" disabled>Select Place</option>
                            <option value="city">City Center</option>
                            <option value="beach">Beach Area</option>
                            <option value="downtown">Downtown</option>
                          </select>
                        </div>
                      </div>
                      <div className="price-range-widget">
                        <h4 className="widget-title">Price Range</h4>
                        <div id="slider-range" className="mb-20" />
                        <div className="price-number">
                          <RangeSlider 
                            initialMin={priceRange[0]}
                            initialMax={priceRange[1]}
                            min={0}
                            max={1000}
                            step={10}
                            onChange={handlePriceRangeChange}
                          />
                          <span className="amount">
                            ${priceRange[0]} - ${priceRange[1]}
                          </span>
                        </div>
                      </div>
                      <div className="form_group">
                        <button type="submit" className="main-btn icon-btn">Search Now</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="listing-list-wrapper">
                  {error ? (
                    <div className="text-center text-danger py-5">{error}</div>
                  ) : displayedListings.length === 0 ? (
                    <div className="text-center py-5">No listings found matching your criteria</div>
                  ) : (
                    displayedListings.map((item) => (
                      <div key={item.id} className="listing-item listing-list-item-two mb-60 wow fadeInUp">
                        <div className="listing-thumbnail">
                          <img
                            src={item.image}
                            alt={item.title}
                          />
                          <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                            <div className="meta-icon-title d-flex align-items-center">
                              <div className="icon">
                                <i className={`flaticon-${item.category.toLowerCase()}`} />
                              </div>
                              <div className="title">
                                <h6>{item.category}</h6>
                              </div>
                            </div>
                            <span className={`status st-${item.status}`}>{item.status}</span>
                          </div>
                        </div>
                        <div className="listing-content">
                          <h3 className="title">
                            <Link href={`/listing-details-1?id=${item.id}`}>
                              <a>{item.title}</a>
                            </Link>
                          </h3>
                          <div className="ratings">
                            <ul className="ratings ratings-three">
                              {[...Array(item.rating)].map((_, index) => (
                                <li key={index} className="star">
                                  <i className="flaticon-star-1" />
                                </li>
                              ))}
                              <li>
                                <span>
                                  <a href="#">({item.reviews} Reviews)</a>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <span className="price">${item.price.min}.00 - ${item.price.max}.00</span>
                          <span className="phone-meta">
                            <i className="ti-tablet" />
                            <a href={`tel:${item.phone}`}>{item.phone}</a>
                          </span>
                          <div className="listing-meta">
                            <ul>
                              <li>
                                <span>
                                  <i className="ti-location-pin" />
                                  {item.location}
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
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};
export default ListingList;