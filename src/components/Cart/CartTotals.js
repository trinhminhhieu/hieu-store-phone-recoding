import React from 'react';
import {Link} from "react-router-dom";

export default function  CartTotals({value}) {
	
          const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
              return (
                    <React.Fragment>
                        <div className="container">
                        <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">

                           <Link to="/">
                           <button className="btn btn-outline-danger text-uppercase mb-3 px-5 " type="button"

                            onClick={() => clearCart()}
                           >
                             xóa 
                           </button>

                           </Link>
                           <h5>
                             <span className="text-title">
                             tổng tiền : </span>
                           <strong>
                                    {cartSubTotal} đ
                           </strong>
                           </h5>
                           <h5>
                             <span className="text-title">
                             phí vận chuyển : </span>
                           <strong>
                                    {cartTax} đ
                           </strong>
                           </h5>
                           <h5>
                             <span className="text-title">
                             số tiền phải thanh toán  : </span>
                           <strong>
                                    {cartTotal} đ
                           </strong>
                           </h5>
                          </div>

                        </div>
                        </div>
                    </React.Fragment>

              	);
       
}