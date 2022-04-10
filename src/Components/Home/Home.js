import React, { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import AboutUs from "../AboutUs/AboutUs";
import RecipeShowCard from "../Shared/RecipeShowCard/RecipeShowCard";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";
import "./Home.css";

const Home = () => {
  const [foodPostData, setFoodPostData] = useState([]);
  const [furniturePostData, setFurniturePostData] = useState([]);
  const [mobileIctPostData, setMobileIctPostData] = useState([]);
  const urlGetFood = `http://localhost:5000/post/food`;
  const urlGetFurniture = `http://localhost:5000/post/furniture`;
  const urlGetMobileIct = `http://localhost:5000/post/mobile-ict-equipment`;
  useEffect(() => {
    fetch(urlGetFood)
      .then((res) => res.json())
      .then((data) => setFoodPostData(data));
  }, []);
  useEffect(() => {
    fetch(urlGetFurniture)
      .then((res) => res.json())
      .then((data) => setFurniturePostData(data));
  }, []);
  useEffect(() => {
    fetch(urlGetMobileIct)
      .then((res) => res.json())
      .then((data) => setMobileIctPostData(data));
  }, []);

  const images = [
    {
      url: "https://www.gloriafood.com/wp-content/uploads/2021/03/How_to_Improve_Your_Food_Delivery_Service_in_2022_-_fb.png",
    },
    {
      url: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202110/e7-sixteen_nine.jpg",
    },
    {
      url: "https://images.moneycontrol.com/static-mcnews/2021/08/Express-delivery-770x433.jpg",
    },
  ];
  return (
    <div className="sectionRoot bg-gray-100">
      <div>
        <SimpleImageSlider
          width={"100%"}
          height={700}
          images={images}
          showNavs={true}
        />
      </div>
      {/* banner picture */}

      {foodPostData.length > 0 && (
        <>
          <SectionHeader text={"Foods"} />
          <div className="wrapper py-5 grid grid-cols-3 gap-5">
            {foodPostData.map((singlePost) => {
              return (
                <RecipeShowCard key={singlePost._key} singlePost={singlePost} />
              );
            })}
          </div>
        </>
      )}
      {furniturePostData.length > 0 && (
        <>
          <SectionHeader text={"Furniture"} />
          <div className="wrapper py-5 grid grid-cols-3 gap-5">
            {furniturePostData.map((singlePost) => {
              return (
                <RecipeShowCard key={singlePost._key} singlePost={singlePost} />
              );
            })}
          </div>
        </>
      )}
      {mobileIctPostData.length > 0 && (
        <>
          <SectionHeader text={"Mobile & ICT Equipment Service"} />
          <div className="wrapper py-5 grid grid-cols-3 gap-5">
            {mobileIctPostData.map((singlePost) => {
              return (
                <RecipeShowCard key={singlePost._key} singlePost={singlePost} />
              );
            })}
          </div>
        </>
      )}

      <SectionHeader text={"Our services"} />
      <div className="wrapper py-10">
        <div className="grid grid-cols-3 gap-4">
          <ServiceCard
            image={"fa-print"}
            title={"Document Service"}
            description={
              "Under this service we are providing document delivery for both corporate and retail customers nationwide. Envelopes weighing between 01 to 200 grams are being serviced. These documents are being distributed vide 600+ outlets across Bangladesh."
            }
          ></ServiceCard>
          <ServiceCard
            image={"fa-mobile-alt"}
            title={"Mobile & ICT Equipment Service"}
            description={
              "These are regular parcel services limited to the mobile and ICT importers/distributors/manufacturers and vendors. who seek the parcel delivery services from us."
            }
          ></ServiceCard>
          <ServiceCard
            image={"fa-angle-double-up"}
            title={"Super Express Service"}
            description={
              'These are Extra urgent delivery documents in the company\'s list of enveloped services categories, under the "Super Express Service". The Booking rate for each document is BDT 120 / - only.'
            }
          ></ServiceCard>
          <ServiceCard
            image={"fa-utensils"}
            title={"Food Delivery"}
            description={
              'These are Extra urgent delivery documents in the company\'s list of enveloped services categories, under the "Super Express Service". The Booking rate for each document is BDT 120 / - only.'
            }
          ></ServiceCard>
          <ServiceCard
            image={"fa-couch"}
            title={"Furniture"}
            description={
              "Under this service we are providing document delivery for both corporate and retail customers nationwide. Envelopes weighing between 01 to 200 grams are being serviced. These documents are being distributed vide 600+ outlets across Bangladesh."
            }
          ></ServiceCard>
        </div>
      </div>
      <div>
        <SectionHeader text={"About us"} />
        <AboutUs></AboutUs>
      </div>
    </div>
  );
};

export default Home;
