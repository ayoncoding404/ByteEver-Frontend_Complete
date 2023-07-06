import React from "react";
import "../Styles/Product.scss";
import { Button, ButtonRed } from "./Button";

const Product = () => {
  return (
    <div className="prodcontain">
      <p className="pro-dot">Products</p>
      <p className="pro-sol">Our Products</p>

      <div className="prod-box">
        <div className="prod-box">
          <a className="anch1">www.pluginever.com</a>
          <p className="plug">PLUGINEVER</p>
          <p className="prod_para1">
            Discover the easiest way to Grow your business with our free <br />{" "}
            and paid WordPress plugins.
          </p>
          <div>
            <h4 className="button_text">Visit The Site</h4>
            <Button />
          </div>
        </div>
        <div className="ever">
          <a className="anch2">www.everaccounting.com</a>
          <p className="ever_acc">Everaccounting</p>
          <p className="prod_para2">
            Discover the easiest way to Manage your business finances right from
            your <br /> WordPress dashboard.
          </p>
          <div className="button_red">
            <h4 className="button_text_red">Visit The Site</h4>
            <ButtonRed />
          </div>
        </div>
        <div className="prod-box_studio">
          <a className="anch3">www.wcstudio.com</a>
          <p className="wc_std">WC STUDIO</p>
          <p className="prod_para3">
            Discover the easiest way to Grow your business with our free <br />{" "}
            and paid WordPress plugins.
          </p>
          <div>
            <h4 className="button_text">Visit The Site</h4>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
