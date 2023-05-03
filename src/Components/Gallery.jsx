import LazyLoad from "react-lazy-load";
function Gallery() {
  return (
    <div>
      {/* this is the food gallery section */}
      <h2 className="text-center mb-14 mt-20 font-extrabold text-5xl">
        Food Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://img.freepik.com/free-photo/high-angle-pakistani-meal-with-meat_23-2148825108.jpg?w=360&t=st=1683027462~exp=1683028062~hmac=72c566ae713b45c251dead3844ff5c21deea0f6b4fe588702b163c6783c8611c"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://img.freepik.com/free-photo/top-view-indian-food-assortment_23-2148747714.jpg?w=900&t=st=1683026919~exp=1683027519~hmac=67839a625e9fc0858f597ebe270f5c694ecb39124bab18ceeba9b73e03192823"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://img.freepik.com/free-photo/selection-food-tray_1340-23421.jpg?w=900&t=st=1683026926~exp=1683027526~hmac=8a7834e2e915299c4fcc002418eb049c2fb432c63ee8800a65e54b40a2be69d3"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://img.freepik.com/free-photo/indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18712.jpg?w=826&t=st=1683026930~exp=1683027530~hmac=d9b98e5af0bdbf4dc23e3547bded3b5e26790521be6b8bf9dcd98e306cc0e0bc"
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://img.freepik.com/free-photo/plate-food-with-different-dishes-including-chicken-rice-other-food_1340-24267.jpg?w=900&t=st=1683026945~exp=1683027545~hmac=7731aada0ba5eea9a77588950a3288f9dff3a8d25c894efb8840cff2fa8d0b9e"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://img.freepik.com/free-photo/delicious-indian-food-arrangement_23-2148747691.jpg?w=360&t=st=1683027915~exp=1683028515~hmac=c6f31168b4f8d6750194068a339e8237db4722f8d79057a65ba0f365300d458c"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://img.freepik.com/free-photo/indian-butter-chicken-black-bowl-wooden-table_123827-20755.jpg?w=900&t=st=1683026969~exp=1683027569~hmac=d71605330b0428de5e7e9b9403c72e41f45205705dc7d22649c002b2c68e9c6d"
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://img.freepik.com/premium-photo/restaurant-style-spicy-chicken-biryani-wooden-bowl-with-raita-salan-popular-indian-pakistani-food_466689-2199.jpg?w=360"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://img.freepik.com/free-photo/top-view-delicious-food-arrangement_23-2148723477.jpg?w=740&t=st=1683026993~exp=1683027593~hmac=904073f71464df6129846990f34e8a071ab73c1f6bf90fb0c7d788896b1c76ed"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://img.freepik.com/free-photo/vertical-shot-chickpea-curry-chana-masala-with-lime-bowl-white-surf_181624-31989.jpg?w=740&t=st=1683027739~exp=1683028339~hmac=4520837898255a989dccae4341f6bdeb45d4bc94a2cfc6388ff0bf5ced2c369c"
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://img.freepik.com/free-photo/high-angle-delicious-pakistan-meal-arrangement-basket_23-2148821574.jpg?w=360&t=st=1683027449~exp=1683028049~hmac=65e94c1077c3cf76d7280b6c535a1b115f82b883bda738026f596f3d39064229"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://img.freepik.com/free-photo/arrangement-different-pakistan-goodies_23-2148821571.jpg?w=360&t=st=1683027458~exp=1683028058~hmac=b52c7f456bfea6e6a72541729e892b6ff56a5d755b0ecfe1c9189ed0d1227638"
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
