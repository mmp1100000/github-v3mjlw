import Link from "next/link";
import React from "react";
import Layout from "../src/layouts/Layout";
import { useListings } from "../src/hooks/useListings";
import { useCategories } from "../src/hooks/useCategories";
import LoadingSpinner from "../src/components/LoadingSpinner";

const Index = () => {
  const { listings: featuredListings, loading: featuredLoading } = useListings({ featured: 'true' });
  const { listings: allListings, loading: allLoading } = useListings();
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();

  return (
    <Layout>
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <div className="hero-wrapper-one">
          <div 
            className="hero-bg" 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.8)',
              zIndex: -1
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="hero-content" style={{ color: '#fff' }}>
                  <h1 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: '#fff' }}>
                    Explore Your Amazing City
                  </h1>
                  <h3 className="wow fadeInDown" data-wow-delay=".5s" style={{ color: '#fff' }}>
                    People Don&apos;t Take Trips, Trips Take People
                  </h3>
                  <div
                    className="hero-search-wrapper wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="row">
                        <div className="col-lg-5 col-md-4">
                          <div className="form_group">
                            <input
                              type="search"
                              className="form_control"
                              placeholder="Search By Category"
                              name="search"
                              required
                            />
                            <i className="ti-ink-pen"></i>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div className="form_group">
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Location"
                              name="location"
                              required
                            />
                            <i className="ti-location-pin"></i>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                          <div className="form_group">
                            <button className="main-btn icon-btn">Search Now</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <p className="tags" style={{ color: '#fff' }}>
                    <span style={{ color: '#fff' }}>Popular:</span>
                    <a href="#" style={{ color: '#fff' }}>Saloon</a>,
                    <a href="#" style={{ color: '#fff' }}>Restaurant</a>,
                    <a href="#" style={{ color: '#fff' }}>Game</a>,
                    <a href="#" style={{ color: '#fff' }}>Counter</a>,
                    <a href="#" style={{ color: '#fff' }}>Train Station</a>,
                    <a href="#" style={{ color: '#fff' }}>Parking</a>,
                    <a href="#" style={{ color: '#fff' }}>Shopping</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      
      {/*====== Start Category Section ======*/}
      <section className="category-area">
        <div className="category-wrapper-one wow fadeInDown">
          <div className="row no-gutters">
            {categoriesLoading ? (
              <div className="col-12">
                <LoadingSpinner />
              </div>
            ) : categoriesError ? (
              <div className="col-12 text-center">
                <p>Error loading categories: {categoriesError}</p>
              </div>
            ) : (
              categories.map((category) => (
                <div key={category.id} className="col-lg-2 col-md-4 category-column">
                  <div className="category-item category-item-one">
                    <div className="info text-center">
                      <div className="icon">
                        <i className={category.icon}></i>
                      </div>
                      <h3 className="title">
                        <Link href={category.link}>
                          <a>{category.title}</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      {/*====== End Category Section ======*/}

      {/*====== Start Listing Section ======*/}
      <section className="listing-grid-area pt-115 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75 wow fadeInUp">
                <span className="sub-title">Featured List</span>
                <h2>Explore Destination</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {featuredLoading ? (
              <div className="col-12 text-center">Loading featured listings...</div>
            ) : (
              featuredListings.map((listing) => (
                <div key={listing.id} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                    <div className="listing-thumbnail">
                      <img src={listing.image} alt={listing.title} />
                      <span className="featured-btn">Featured</span>
                      <div className="thumbnail-meta d-flex align-items-center justify-content-between">
                        <div className="meta-icon-title d-flex align-items-center">
                          <div className="icon">
                            <i className="flaticon-chef"></i>
                          </div>
                          <div className="title">
                            <h6>{listing.category}</h6>
                          </div>
                        </div>
                        <span className={`status st-${listing.status}`}>{listing.status}</span>
                      </div>
                    </div>
                    <div className="listing-content">
                      <h3 className="title">
                        <Link href={`/listing-details-1?id=${listing.id}`}>
                          <a>{listing.title}</a>
                        </Link>
                      </h3>
                      <div className="ratings">
                        <ul className="ratings ratings-three">
                          {[...Array(listing.rating)].map((_, index) => (
                            <li key={index} className="star">
                              <i className="flaticon-star-1"></i>
                            </li>
                          ))}
                          <li>
                            <span>
                              <a href="#">({listing.reviews} Reviews)</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <span className="price">${listing.price.min}.00 - ${listing.price.max}.00</span>
                      <span className="phone-meta">
                        <i className="ti-tablet"></i>
                        <a href={`tel:${listing.phone}`}>{listing.phone}</a>
                      </span>
                      <div className="listing-meta">
                        <ul>
                          <li>
                            <span>
                              <i className="ti-location-pin"></i>
                              {listing.location}
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="ti-heart"></i>
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
      </section>
      {/*====== End Listing Section ======*/}

      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-area">
        <div className="container">
          <div
            className="newsletter-wrapper newsletter-wrapper-one bg_cover"
            style={{
              backgroundImage: "url(assets/images/bg/newsletter-bg-1.jpg)",
            }}
          >
            <div className="row">
              <div className="col-lg-5">
                <div className="newsletter-content-box-one wow fadeInLeft">
                  <div className="icon">
                    <i className="flaticon-email"></i>
                  </div>
                  <div className="content">
                    <h2>Get Special Rewards</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="newsletter-form wow fadeInRight">
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Enter Address"
                      name="email"
                      required
                    />
                    <i className="ti-location-pin"></i>
                    <button className="main-btn icon-btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Newsletter Section ======*/}
    </Layout>
  );
};
export default Index;