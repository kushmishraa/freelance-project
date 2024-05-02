import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SlickCarousel from '../Components/SlickCarousel';
import { Paper } from '@mui/material';

export const CategoryDetailsPage = () => {
    const params = useParams();
    useEffect(() => {
        window.scrollTo({ top: true, behavior: "smooth" })
    }, [params.categoryName])
    const className = {
        singleProductContainer: "h-[450px] p-[10px] cursor-pointer",
        productBannerImageContainer:
            "max-w-[250px] min-w-[250px] bg-white  shadow-lg hover:shadow-2xl transition delay-70 hover:mb-[20px]  cursor-pointer",
        productTileCarouselHolder:
            " absolute w-full top-0 scale-0 group-hover/productImage:scale-100 max-h-[400px] transition delay-70 ease-in origin-right",
        bannerHolder: 'w-full h-[500px] bg-black relative',
        productContainer: 'mx-[10%]',
        addToWishlistContainer: 'absolute scale-y-0 group-hover/productImage:scale-y-100 bg-white w-full top-[100%] h-[60px] flex items-center justify-center orgin-bottom',
        productBottomContainer: "p-[12px] border-2 hover:border-gray-400"

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
            productHeading: "StormBorn",
            productBannerImage: "/freelance-project/productCatImages/tshirt2.webp",
            productTileImages: [
                "/freelance-project/productCatImages/tshirt2-1.webp",
                "/freelance-project/productCatImages/tshirt2-2.webp",
                "/freelance-project/productCatImages/tshirt2-3.webp",
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
            productHeading: "StormBorn",
            productBannerImage: "/freelance-project/productCatImages/tshirt2.webp",
            productTileImages: [
                "/freelance-project/productCatImages/tshirt2-1.webp",
                "/freelance-project/productCatImages/tshirt2-2.webp",
                "/freelance-project/productCatImages/tshirt2-3.webp",
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
            productHeading: "StormBorn",
            productBannerImage: "/freelance-project/productCatImages/tshirt2.webp",
            productTileImages: [
                "/freelance-project/productCatImages/tshirt2-1.webp",
                "/freelance-project/productCatImages/tshirt2-2.webp",
                "/freelance-project/productCatImages/tshirt2-3.webp",
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

    const navigate = useNavigate();


    const handleCardClick = (productHeading, e) => {

        navigate(`/product/${productHeading}`)
    }


    return (
        <div>
            {/* banner holder */}
            <div className={className.bannerHolder}>
                <img src='/freelance-project/categoryDetailsPageBannerImage/beachBannerImage.jpg' className='w-full h-full object-cover md:object-fill opacity-50' />
                <div className='absolute top-[50%] px-[30px]'>
                    <h2 className='text-[40px] font-bolder text-white'>{params.categoryName.toUpperCase()}</h2>
                </div>
            </div>
            {/* banner holder */}

            {/* product container */}
            <div className={className.productContainer}>
                <div className='flex justify-center  flex-wrap'>{
                    productArr.map((productDetails, index) => {
                        return (

                            <div className={className.singleProductContainer} onClick={(e) => handleCardClick(productDetails.productHeading, e)}>
                                {/* product banner image container */}
                                < div className={className.productBannerImageContainer} >
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

                                        {/* Add to wishlist container */}
                                        <div className={className.addToWishlistContainer}>
                                            <button className='px-[10px] py-[5px] border-[1px] border-black 
                                                hover:bg-red-500 transition duration-70 
                                                hover:border-[0px] 
                                                hover:text-white' onClick={(e) => e.stopPropagation()}>Add to whishlist</button>
                                        </div>
                                        {/* Add to wishlist container */}
                                    </div>

                                    {/* product description bottom box container */}
                                    <Paper elevation={4}>
                                        <div className={className.productBottomContainer}>
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
                        )
                    })
                }
                </div>
            </div>
            {/* product container */}

        </div >
    )
}