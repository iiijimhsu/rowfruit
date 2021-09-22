import React, { useState, useEffect } from "react";
import TitleTag from "./TitleTag";
import { v4 } from "uuid";
import $ from "jquery";
import FruitType from "./ProductLIst/FruitType";
function Middle(props) {
  const {
    data,
    cartData,
    addCart,
    setCounts,
    modalRef,
    setModalData,
    setDataLoading,
  } = props;

  //美白商品資料
  const whiteningData = data.filter((item) => {
    return item.tag.indexOf("whitening") > -1;
  });
  //瘦身商品資料
  const slimmingData = data.filter((item) => {
    return item.tag.indexOf("slimming") > -1;
  });
  //銀髮族商品資料
  const silverHairData = data.filter((item) => {
    return item.tag.indexOf("silverHair") > -1;
  });
  //顧眼睛商品資料
  const visionData = data.filter((item) => {
    return item.tag.indexOf("vision") > -1;
  });

  useEffect(() => {
    $(".allButton").on("click", () => {
      const totalClass = $("#all").find(".productItem").length;
      const activeClass = $("#all").find(".active").length;
      if (totalClass !== activeClass) {
        $("#all").find(".productItem").addClass("active");
      } else {
        $("#all").find(".productItem").removeClass("active");
      }
    });
    $(".whiteningButton").on("click", () => {
      $("#whitening").find(".productItem").toggleClass("active");
    });
    $(".slimmingButton").on("click", () => {
      $("#slimming").find(".productItem").toggleClass("active");
    });
    $(".silverHairButton").on("click", () => {
      $("#silverHair").find(".productItem").toggleClass("active");
    });
    $(".visionButton").on("click", () => {
      $("#vision").find(".productItem").toggleClass("active");
    });
  });

  //Title資料設定
  const title = [
    { className: "title-all", title: "全部商品", buttonClass: "allButton" },
    {
      className: "title-whitening",
      title: "美白商品",
      buttonClass: "whiteningButton",
    },
    {
      className: "title-slimming",
      title: "瘦身商品",
      buttonClass: "slimmingButton",
    },
    {
      className: "title-silverHair",
      title: "銀髮族",
      buttonClass: "silverHairButton",
    },
    { className: "title-vision", title: "顧眼睛", buttonClass: "visionButton" },
  ];
  return (
    <>
      <main
        className="col-12 col-lg-7 customizedProduct"
        id="customizedProduct"
      >
        <TitleTag
          key={v4()}
          className={title[0].className}
          title={title[0].title}
          buttonClass={title[0].buttonClass}
        />
        <p className="introduction">
          點擊圖片查看詳細資訊，可以按<i className="far fa-plus-square"></i>
          加入客製化水果盒
        </p>
        {/* 全部商品 */}

        <div id="all" name="all">
          {data.map((item, index) => {
            const { id, fruit_name, fruit_image, items, nutrients } = item;
            return (
              <FruitType
                key={id}
                cartData={cartData}
                addCart={addCart}
                id={id}
                fruit_name={fruit_name}
                fruit_image={fruit_image}
                items={items}
                nutrients={nutrients}
                setCounts={setCounts}
                modalRef={modalRef}
                setModalData={setModalData}
                setDataLoading={setDataLoading}
              />
            );
          })}
          <div id="whitening" name="whitening">
            <TitleTag
              key={v4()}
              className={title[1].className}
              title={title[1].title}
              buttonClass={title[1].buttonClass}
            />
            {whiteningData.map((item) => {
              const { id, fruit_name, fruit_image, items, nutrients } = item;
              return (
                <FruitType
                  key={id}
                  cartData={cartData}
                  addCart={addCart}
                  id={id}
                  fruit_name={fruit_name}
                  fruit_image={fruit_image}
                  items={items}
                  nutrients={nutrients}
                  setCounts={setCounts}
                  modalRef={modalRef}
                  setModalData={setModalData}
                  setDataLoading={setDataLoading}
                />
              );
            })}
          </div>
          <div id="slimming" name="slimming">
            <TitleTag
              key={v4()}
              className={title[2].className}
              title={title[2].title}
              buttonClass={title[2].buttonClass}
            />
            {slimmingData.map((item) => {
              const { id, fruit_name, fruit_image, items, nutrients } = item;
              return (
                <FruitType
                  key={id}
                  cartData={cartData}
                  addCart={addCart}
                  id={id}
                  fruit_name={fruit_name}
                  fruit_image={fruit_image}
                  items={items}
                  nutrients={nutrients}
                  setCounts={setCounts}
                  modalRef={modalRef}
                  setModalData={setModalData}
                  setDataLoading={setDataLoading}
                />
              );
            })}
          </div>
          <div id="silverHair" name="silverHair">
            <TitleTag
              key={v4()}
              className={title[3].className}
              title={title[3].title}
              buttonClass={title[3].buttonClass}
            />
            {silverHairData.map((item) => {
              const { id, fruit_name, fruit_image, items, nutrients } = item;
              return (
                <FruitType
                  key={id}
                  cartData={cartData}
                  addCart={addCart}
                  id={id}
                  fruit_name={fruit_name}
                  fruit_image={fruit_image}
                  items={items}
                  nutrients={nutrients}
                  setCounts={setCounts}
                  modalRef={modalRef}
                  setModalData={setModalData}
                  setDataLoading={setDataLoading}
                />
              );
            })}
          </div>
          <div id="vision" name="vision">
            <TitleTag
              key={v4()}
              className={title[4].className}
              title={title[4].title}
              buttonClass={title[4].buttonClass}
            />
            {visionData.map((item) => {
              const { id, fruit_name, fruit_image, items, nutrients } = item;
              return (
                <FruitType
                  key={id}
                  cartData={cartData}
                  addCart={addCart}
                  id={id}
                  fruit_name={fruit_name}
                  fruit_image={fruit_image}
                  items={items}
                  nutrients={nutrients}
                  modalRef={modalRef}
                  setCounts={setCounts}
                  setModalData={setModalData}
                  setDataLoading={setDataLoading}
                />
              );
            })}
          </div>
          <div style={{ height: "500px" }}></div>
        </div>
      </main>
    </>
  );
}
export default Middle;
