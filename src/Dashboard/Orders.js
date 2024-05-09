import { Paper } from "@mui/material";
import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ArrowBack } from "@mui/icons-material";
import { dashboardIndexing } from "./constantForPageIndexing";

export const Orders = (props) => {
  const { setTabToShow, navigate } = props;
  const orders = [{ status: 0 }, { status: 1 }, { status: 2 }];

  const renderDeliveryStatus = (status) => {
    return (
      <div className="flex p-[10px] items-center gap-[10px]">
        {/* order status icon */}
        <div className="w-[30px] flex items-center justify-center rounded-[100%] h-[30px] bg-black">
          {status != 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#FFFFFF"
                fill-rule="nonzero"
                d="M19.173 7.059l-7.232-4a.469.469 0 0 0-.454 0l-7.232 4A.503.503 0 0 0 4 7.5v9c0 .185.098.355.255.441l7.232 4a.469.469 0 0 0 .454 0l7.232-4a.503.503 0 0 0 .256-.441v-9a.503.503 0 0 0-.256-.441zm-7.459-2.992L17.922 7.5 15.33 8.933 9.123 5.5l2.591-1.433zm-.482 15.6L4.964 16.2V8.334l6.268 3.466v7.866zm.482-8.734L5.507 7.5l2.591-1.433L14.305 9.5l-2.59 1.433zm6.75 5.267l-6.268 3.466V11.8l6.268-3.466V16.2z"
              ></path>
            </svg>
          )}

          {status == 1 && (
            <svg height="20px" width="20px">
              <g id="Page-1" stroke="none" fill-rule="evenodd" fill="#FFFFFF">
                <g
                  id="Orders-revamp---List---Return-Flow"
                  transform="translate(-16.000000, -158.000000)"
                  fill-rule="nonzero"
                >
                  <g
                    id="Group-17-Copy-98"
                    transform="translate(0.000000, 137.000000)"
                  >
                    <g
                      id="Group-6-Copy"
                      transform="translate(12.000000, 16.000000)"
                    >
                      <g id="Asset" transform="translate(0.000000, 1.000000)">
                        <g id="Group-2">
                          <g
                            id="Group-7"
                            transform="translate(4.000000, 4.000000)"
                          >
                            <path
                              d="M11.3333333,6.88888889 L14,6.88888889 C15.9636791,6.88888889 17.5555556,8.48076533 17.5555556,10.4444444 C17.5555556,12.4081236 15.9636791,14 14,14 L6,14 C5.50908022,14 5.11111111,14.3979691 5.11111111,14.8888889 C5.11111111,15.3798087 5.50908022,15.7777778 6,15.7777778 L14,15.7777778 C16.9455187,15.7777778 19.3333333,13.3899631 19.3333333,10.4444444 C19.3333333,7.49892578 16.9455187,5.11111111 14,5.11111111 L11.3333333,5.11111111 C10.8424136,5.11111111 10.4444444,5.50908022 10.4444444,6 C10.4444444,6.49091978 10.8424136,6.88888889 11.3333333,6.88888889 Z"
                              id="Path-3"
                            ></path>
                            <path
                              d="M10.1848493,11.9611183 C10.531982,11.6139856 10.531982,11.0511723 10.1848493,10.7040396 C9.8377166,10.3569069 9.27490328,10.3569069 8.92777058,10.7040396 L5.37146064,14.2603495 C5.02432794,14.6074822 5.02432794,15.1702955 5.37146064,15.5174282 L8.92777058,19.0737382 C9.27490328,19.4208709 9.8377166,19.4208709 10.1848493,19.0737382 C10.531982,18.7266055 10.531982,18.1637922 10.1848493,17.8166595 L7.25707872,14.8888889 L10.1848493,11.9611183 Z"
                              id="Path-8"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          )}
        </div>
        <div>
          {status == 0 && (
            <h3 className="text-green-500 font-bold">Delivered</h3>
          )}
          {status == 1 && <h3 className="font-bold">Returned</h3>}
          {status == 2 && <h3 className="font-bold">In Transit</h3>}
          <h3 className="text-gray-500">On Sat,9 Dec</h3>
        </div>
      </div>
    );
  };

  return (
    <Paper elevation={3} className="flex flex-col">
      <div onClick={() => {
        navigate("/dashboard")
        setTabToShow(dashboardIndexing.dashboard)
      }} className="p-[10px]">
        <ArrowBack className="cursor-pointer" />
      </div>
      <div className="p-[20px]">
        <h2 className="font-bold">All Orders</h2>
        <h3 className="text-gray-500">From Anytime</h3>
      </div>

      <div className="flex flex-col p-[10px] md:p-[30px] gap-[10px] bg-gray-100 ">
        {orders.map((orderDetail) => {
          return (
            <Paper elevation={2} className="flex flex-col gap-[5px] p-[10px]">
              {/* product status logo and detail */}
              <div>{renderDeliveryStatus(orderDetail.status)}</div>

              {orderDetail.status == 1 && (
                <div className="p-[20px]">
                  <h3>
                    Your refund of
                    <span className="font-bold"> ₹1,268.00</span> for the return
                    has been processed successfully on 14th Nov 2023.
                  </h3>
                </div>
              )}

              {/* product details */}
              <div className="flex flex-col bg-gray-200 hover:bg-gray-300 cursor-pointer p-[12px]">
                <div className="flex justify-between items-center gap-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[100px] h-[120px]">
                      <img
                        src="/freelance-project/productCatImages/tshirt1.webp"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <h2 className="font-bold">Bulmer Tshirts</h2>
                      </div>
                      <div>
                        <h3 className="text-[12px] text-gray-500">
                          Men Bulmer Orange Tshirts
                        </h3>
                      </div>
                      <div>
                        <h2 className="font-bold text-[14px]">Size : XL</h2>
                      </div>
                    </div>
                  </div>

                  <div className="self-right">
                    <ChevronRightIcon />
                  </div>
                </div>
              </div>

              {/* return refund status availbility */}
              <div className="bg-gray-200   flex gap-[10px] items-center p-[5px]">
                <div className="p-[10px]">
                  <div className="w-[10px] h-[10px] rounded-[100%] bg-green-500"></div>
                </div>
                <div>
                  <h3 className="text-gray-500">
                    Exchange/Return window closed on 23 Dec
                  </h3>
                </div>
              </div>
            </Paper>
          );
        })}
      </div>
    </Paper>
  );
};
