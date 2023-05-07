import React from "react";
import Rating from "../atoms/rating";
import SellerInformation from "./sellerInformation";

const ProductComponent = ({ data }) => {
  return (
    <div className="h-full flex flex-col p-5">
      <div className="flex flex-col md:flex-row h-100">
        <div className="md:w-1/2 flex flex-col items-center gap-y-5">
          <img className="h-96" src="" alt="image" width="100%" />
          <button className="btn btn-primary">Add to Cart</button>
        </div>
        <div className="flex flex-col gap-y-5 md:w-1/2 p-5">
          <h2 className="text-3xl font-extrabold">
            {data?.product_name || "Sample Product"},{" "}
            <span className="text-lg font-thin">
              {data?.product_category || "Sample Category"}
            </span>
          </h2>
          <p className="h-1/2 overflow-y-auto">
            {data?.product_description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit in voluptate, explicabo alias eaque, consequatur iusto quo vitae eligendi repudiandae nostrum at provident optio quos? Temporibus corrupti laborum obcaecati quia consequatur inventore voluptatibus tempora quis blanditiis quod, ab animi a, cumque repellat exercitationem incidunt dolore nam neque consequuntur? Modi, corporis aliquid ipsam incidunt quos quis harum molestias, earum perspiciatis reiciendis veniam similique, officiis architecto soluta sit et! Rerum odit hic cupiditate libero iste obcaecati modi, iure totam aperiam, tempora sed tenetur minima ut nulla quos, officia labore provident voluptatum reprehenderit quaerat impedit deleniti? Error reprehenderit placeat, sint maxime fugiat blanditiis voluptas accusantium aspernatur quam ullam, cupiditate at omnis. Voluptate deleniti nobis libero exercitationem quia omnis suscipit, rem nam facilis maxime, unde sequi corporis explicabo similique dicta. Nemo, architecto delectus? Consectetur ducimus sint voluptatem tempora, temporibus vero asperiores officiis, dolorem eligendi illum autem quam molestiae tenetur architecto incidunt consequuntur eaque sunt recusandae consequatur? Laboriosam reprehenderit est tempora distinctio ad cum ipsum alias laudantium labore velit laborum delectus magni quis, animi natus veritatis repellendus praesentium porro vel, quod eum a aliquam! Nam ducimus, molestias quam dolorum nihil modi ut deleniti nulla, placeat et magnam non perspiciatis itaque animi quaerat voluptas adipisci voluptatem reiciendis optio aperiam ipsam quisquam voluptates? Temporibus, doloribus. Voluptate laborum, beatae, a dolores id ratione sint labore animi optio illum vel dolorem minus. Suscipit, earum? Dolore a est nemo error aperiam distinctio fugit, dolorum iste voluptas magnam facilis consequatur quibusdam libero provident ea aspernatur incidunt quae dolor soluta. Aliquam fugiat inventore magnam, nihil totam quae modi, cupiditate iusto, esse cum magni tenetur? Illum rerum voluptates quis quisquam fugiat quam quidem, vel tenetur excepturi impedit quaerat amet at commodi nobis, ipsa voluptate modi. Quis numquam nobis porro quibusdam sed optio adipisci debitis, asperiores temporibus minima dolore, perspiciatis reprehenderit. Molestiae dolor amet a dolore, ducimus ipsa alias temporibus enim excepturi dolorem expedita porro eos vel sequi animi corporis pariatur quo quasi exercitationem in deserunt natus laborum nesciunt! Dolorem quo dolorum, autem sequi veniam numquam, atque nulla ipsum similique, labore odio dicta qui est quam earum voluptas aut? Odio perferendis cupiditate distinctio culpa quia eius consequatur autem dignissimos aliquam architecto, ipsum, iure iste, officiis voluptatibus officia porro omnis? Eius quibusdam sint, fuga, doloribus beatae facilis blanditiis asperiores quas fugit deleniti numquam vel excepturi illo at nostrum, eaque libero! Incidunt, dolorem aliquam aliquid quos eligendi reiciendis quibusdam quas hic inventore officiis explicabo iste! Dolore exercitationem similique aperiam ad quia molestias facilis consectetur, eum quod, quos, ea sint aliquid delectus voluptatum in doloribus. Non recusandae obcaecati totam veritatis, similique ipsam mollitia, expedita, omnis tempore ullam iste iusto voluptatem repellat maxime? Asperiores magnam impedit illo inventore possimus molestiae eum tenetur saepe perferendis, quo doloribus distinctio tempora similique nulla consequuntur facere ipsa recusandae? Neque est exercitationem libero rem ut velit laudantium ullam iusto! Impedit sunt iusto cum, rem doloremque facere officiis explicabo dignissimos tempora non perspiciatis veniam nemo iure ipsum dolore expedita, laboriosam exercitationem saepe. Repudiandae delectus fugit nostrum est voluptas id ipsa? Dolorem hic eos, dignissimos inventore sed ipsum? Corrupti, cumque error, quam sed explicabo dignissimos quibusdam voluptatum, tempora inventore laudantium odio. Laudantium odio possimus fugiat."}
          </p>
          <div className="flex flex-col gap-y-2">
            <h4 className="text-lg">Seller Information:</h4>
            <SellerInformation data={data?.seller} />
          </div>
        </div>
      </div>
      <div className="flex">Reviews Section</div>
    </div>
  );
};

export default ProductComponent;
