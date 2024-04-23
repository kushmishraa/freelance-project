import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SlickCarousel from "../Components/SlickCarousel";
import { Paper } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";

export const ProductDetailPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const className = {
        productSectionCarouselHolder: "max-w-full",
        singleProductContainer: "w-[100%] h-[450px] p-[10px]",
        productBannerImageContainer:
            "max-w-[250px] min-w-[250px] bg-white  shadow-lg hover:shadow-2xl transition delay-70 hover:mb-[20px]  cursor-pointer",
        productTileCarouselHolder:
            " absolute w-full top-0 scale-0 group-hover/productImage:scale-100 max-h-[400px] transition delay-70 ease-in origin-right",
    }

    const productArr = [
        {
            productHeading: "Bulmer Tshirt",
            productBannerImage: "/freelance-project/productCatImages/tshirt1.webp",
            productTileImages: [
                "/freelance-project/productCatImages/tshirt1-2.webp",
                "/freelance-project/productCatImages/tshirt1-3.webp",
                "/freelance-project/productCatImages/tshirt1-4.webp",
            ],
        },
        {
            productHeading: "StormBorn",
            productBannerImage: "/freelance-project/productCatImages/tshirt2.webp",
            productTileImages: [
                "/freelance-project/productCatImages/tshirt2-1.webp",
                "/freelance-project/productCatImages/tshirt2-2.webp",
                "/freelance-project/productCatImages/tshirt2-3.webp",
            ],
        },
        {
            productHeading: "Bulmer Tshirt",
            productBannerImage: "/freelance-project/productCatImages/tshirt1.webp",
            productTileImages: [
                "/freelance-project/productCatImages/tshirt1-2.webp",
                "/freelance-project/productCatImages/tshirt1-3.webp",
                "/freelance-project/productCatImages/tshirt1-4.webp",
            ],
        },
        {
            productHeading: "StormBorn",
            productBannerImage: "/freelance-project/productCatImages/tshirt2.webp",
            productTileImages: [
                "/freelance-project/productCatImages/tshirt2-1.webp",
                "/freelance-project/productCatImages/tshirt2-2.webp",
                "/freelance-project/productCatImages/tshirt2-3.webp",
            ],
        },
    ];

    useEffect(() => {
        window.scrollTo({ top: true, behavior: "smooth" })
    }, [params.productName])

    const similarCardClick = (productName) => {
        navigate(`/product/${productName}`)
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row">

                <div className="w-[100%] md:w-[51%] flex justify-center flex-wrap gap-[7px]">
                    <div className="md:max-w-[45%] overflow-hidden">
                        <img className="w-full h-full hover:scale-[1.2] transition delay-70 object-cover" src="/freelance-project/productCatImages/tshirt1.webp" />
                    </div>
                    <div className="md:max-w-[45%] overflow-hidden">
                        <img className="w-full h-full hover:scale-[1.2] transition delay-70 object-cover" src="/freelance-project/productCatImages/tshirt1-2.webp" />
                    </div>
                    <div className="md:max-w-[45%] overflow-hidden">
                        <img className=" w-full h-full hover:scale-[1.2] transition delay-70 object-cover" src="/freelance-project/productCatImages/tshirt1-3.webp" />
                    </div>
                    <div className="md:max-w-[45%] overflow-hidden">
                        <img className="w-full h-full hover:scale-[1.2] transition delay-70 object-cover" src="/freelance-project/productCatImages/tshirt1-4.webp" />
                    </div>
                    <div className="md:max-w-[45%] overflow-hidden">
                        <img className=" w-full h-full hover:scale-[1.2] transition delay-70 object-cover" src="/freelance-project/productCatImages/tshirt2.webp" />
                    </div>
                    <div className="md:max-w-[45%] overflow-hidden">
                        <img className="w-full h-full hover:scale-[1.2] transition delay-70 object-cover" src="/freelance-project/productCatImages/tshirt2-1.webp" />
                    </div>
                </div>

                <div className="w-[100%] md:w-[49%] h-full px-[50px] py-[20px]">
                    <div className="">
                        <h2 className="text-2xl font-bold">{params.productName}</h2>
                        <h2 className="text-gray-500">Pure Cotton Tailored Fit Checked Casual Shirt</h2>
                    </div>

                    <div>
                        <div className="flex gap-[5px]">
                            <span className="font-bold">1349</span>
                            <span>MRP</span>
                            <span className="text-gray-500"><s>2699</s></span>
                            <span className="text-green-700">(50% OFF)</span>
                        </div>

                        <div>
                            <h3 className="text-green-700 font-bold">inclusive of all taxes</h3>
                        </div>
                    </div>

                    <div className="py-[20px]">
                        <h2 className="font-bold">SELECT SIZE</h2>
                        <div className="pt-[10px]">
                            <select className="w-[100px] p-[10px]">
                                <option className="text-left">S</option>
                                <option>M</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-[20px] justify-evenly
                border-b-[2px] border-gray-300 pb-[20px]">
                        <div className="
                            group/cart
                            border-[1px] 
                            border-black py-[15px]
                            w-full text-center rounded
                            flex gap-[10px] justify-center items-center
                            hover:bg-black transition delay-70
                            cursor-pointer
                            ">
                            <div className="hidden md:inline">
                                <ShoppingCartIcon className="group-hover/cart:text-white" />
                            </div>
                            <h2 className="group-hover/cart:text-white">ADD TO CART</h2>
                        </div>

                        <div className="
                        group/wishlist
                        border-[1px] 
                        border-black py-[15px] flex justify-center items-center  gap-[10px]
                        w-full text-center rounded cursor-pointer
                        hover:bg-black transition delay-70">
                            <div className="hidden md:inline">
                                <FavoriteIcon className="group-hover/wishlist:text-red-500" />
                            </div>
                            <h2 className="group-hover/wishlist:text-white">Wishlist</h2>
                        </div>
                    </div>

                    <div className="pt-[20px]">
                        <h3 className="font-bold">DELIVERY OPTIONS</h3>
                    </div>

                    <div className="flex flex-col gap-[10px] pt-[10px]">
                        <div className="bg-white rounded w-fit pl-[10px] flex border-[1px] border-black">
                            <input placeholder="Enter Pincode"
                                className="py-[15px] px-[10px] outline-none bg-transparent" />
                            <button className="px-[15px] hover:bg-black hover:text-white transition delay-70 w-[100%]">check</button>
                        </div>
                        <span className="text-gray-500 text-[13px]">Please enter PIN code to check delivery time & Pay on Delivery Availability</span>
                    </div>

                    <div className="py-[15px] *:py-[5px] border-b-[2px] border-gray-300">
                        <p>100% Original Products</p>
                        <p>Pay on delivery might be available</p>
                        <p>Easy 14 days returns and exchanges</p>
                    </div>

                    <div className="pt-[10px]">
                        <div>
                            <h2 className="text-xl font-bold">Product Details</h2>
                            <div className="pt-[20px]">
                                <p>
                                    White other checked opaque casual shirt ,has a spread collar, button placket, 1 patch pocket, long regular sleeves, curved hem
                                </p>
                            </div>
                        </div>

                        <div className="pt-[10px]">
                            <h2 className="font-bold">Size & Fit</h2>
                            <div className="pt-[10px]">
                                <h3>Tailored Fit</h3>
                                <h3>Size worn by the model: M</h3>
                                <h3>Chest: 38''</h3>
                                <h3>Height: 6'1''</h3>
                            </div>
                        </div>

                        <div>
                            <h2>Material & Care</h2>
                            <div>
                                <h3>100% Cotton</h3>
                                <h3>Machine Wash</h3>
                            </div>
                        </div>

                        <div className="pt-[10px]">
                            <h2 className="font-bold">Specification</h2>
                            <div className="flex flex-wrap gap-[27px] pt-[10px]">
                                <div className="w-[43%] border-b-2 border-gray-300 pb-[5px] ">
                                    <div className="text-gray-500 text-[12px]">sleeve length</div>
                                    <div>Long Sleeves</div>
                                </div>

                                <div className="w-[43%] border-b-2 border-gray-300 pb-[5px]">
                                    <div className="text-[12px]">collar</div>
                                    <div>Spread Collar</div>
                                </div>

                                <div className="w-[43%] border-b-2 border-gray-300 pb-[5px]">
                                    <div className="text-[12px]">Fit</div>
                                    <div>Tailored Fit</div>
                                </div>

                                <div className="w-[43%] border-b-2 border-gray-300 pb-[5px]">
                                    <div className="text-[12px]">Print or Pattern Type</div>
                                    <div>Tailored Fit</div>
                                </div>

                                <div className="w-[43%] border-b-2 border-gray-300 pb-[5px]">
                                    <div className="text-[12px]">Occassion</div>
                                    <div>Casual</div>
                                </div>

                                <div className="w-[43%] border-b-2 border-gray-300 pb-[5px]">
                                    <div className="text-[12px]">Length</div>
                                    <div>Regualr</div>
                                </div>

                                <div className="w-[43%] border-b-2 border-gray-300 pb-[5px]">
                                    <div className="text-[12px]">Hemline</div>
                                    <div>Curved</div>
                                </div>

                                <div className="w-[43%] border-b-2 border-gray-300 pb-[5px]">
                                    <div className="text-[12px]">Placket</div>
                                    <div>Button Placket</div>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>

            </div>

            <div className="py-[50px]">
                <h2 className="text-2xl font-bold p-[20px]">Similar Products</h2>
                <div className={className.productSectionCarouselHolder}>
                    <SlickCarousel
                        arrows={false}
                        autoplay={true}
                        slidesToShow={4}
                        pauseOnHover={true}
                        infinite={true}
                        showDots={false}
                        centerMode={true}
                        autoplaySpeed={2000}
                        speed={100}
                        centerPadding={"20%"}
                    >
                        {productArr?.map((productDetails) => {
                            return (
                                // single product container
                                <div className={className.singleProductContainer} onClick={() => similarCardClick(productDetails.productHeading)}>
                                    {/* product banner image container */}
                                    <div className={className.productBannerImageContainer}>
                                        <div className="group/productImage relative">
                                            {/* product image */}
                                            <div className="">
                                                <img
                                                    src={productDetails.productBannerImage}
                                                    className="max-w-[100%] max-h-[100%]"
                                                    loading="lazy"
                                                ></img>
                                            </div>
                                            {/* product image */}

                                            {/* product tiles carousel holder */}
                                            <div className={className.productTileCarouselHolder}>
                                                <SlickCarousel
                                                    infinite={true}
                                                    autoplay={true}
                                                    pauseOnHover={false}
                                                    slidesToShow={1}
                                                    showDots={true}
                                                    autoplaySpeed={1000}
                                                    speed={500}
                                                >
                                                    {productDetails.productTileImages.map((tileImages) => {
                                                        return (
                                                            // tile images
                                                            <div className="">
                                                                <img src={tileImages} loading="lazy" />
                                                            </div>
                                                            // tile images end
                                                        );
                                                    })}
                                                </SlickCarousel>
                                            </div>
                                            {/* product tiles carousel holder */}
                                        </div>

                                        {/* product description bottom box container */}
                                        <Paper elevation={4}>
                                            <div className="p-[12px] border-2 hover:border-gray-400">
                                                <div>
                                                    <h2 className="font-bold">
                                                        {productDetails.productHeading}
                                                    </h2>
                                                </div>
                                                <div>
                                                    <h2 className="text-gray-500">Pure Cotton tshirt</h2>
                                                </div>

                                                <div className="flex gap-[5px]">
                                                    <span className="font-bold font-xl">₹1,000</span>
                                                    <s className="font-normal text-gray-500">₹12,333</s>
                                                    <span className="text-green-700">50% Off</span>
                                                </div>
                                            </div>
                                        </Paper>
                                        {/* product description bottom box container */}
                                    </div>
                                    {/* product banner image container */}
                                </div>
                                // single product container end
                            );
                        })}
                    </SlickCarousel>
                </div>
            </div>
        </div>
    )
}