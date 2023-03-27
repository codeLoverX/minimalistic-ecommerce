import Product from "./model/product";
import { Category } from "./type";

import { xboxDescription, airpodsDescription, airtagDescription } from './items/descriptions';
import AttributeSet, { AttributeType } from "./model/attribute-set";
import Attribute from "./model/attribute";

const shoeSizes = new AttributeSet('Size')
    .addItemList([
        new Attribute('40'),
        new Attribute('41'),
        new Attribute('42'),
        new Attribute('43')
    ]);


const clothesSizes = new AttributeSet('Size')
    .addItemList([
        new Attribute('Small', 'S'),
        new Attribute('Medium', 'M'),
        new Attribute('Large', 'L'),
        new Attribute('Extra Large', 'XL')
    ]);

const colors = new AttributeSet('Color')
    .setType(AttributeType.swatch)
    .addItemList([
        new Attribute('Green', '#44FF03'),
        new Attribute('Cyan', '#03FFF7'),
        new Attribute('Blue', '#030BFF'),
        new Attribute('Black', '#000000'),
        new Attribute('White', '#FFFFFF')
    ]);

const yesNo = [new Attribute('Yes'), new Attribute('No')];

const capacity = new AttributeSet('Capacity')
    .addItemList([
        new Attribute('512G'),
        new Attribute('1T')
    ]);

const products: Product[] = [
    new Product('Nike Air Huarache Le')
        .setId('huarache-x-stussy-le')
        .setPrice(120)
        .setDescription('<p>Great Nike Air Huarache Le sneakers for everyday use!</p><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><p>Great Nike Air Huarache Le sneakers for everyday use!</p><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><p>Great Nike Air Huarache Le sneakers for everyday use!</p><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><p>Great Nike Air Huarache Le sneakers for everyday use!</p><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><p>Great Nike Air Huarache Le sneakers for everyday use!</p>')
        .setShortDescription('<p>Great Nike Air Huarache Le sneakers for everyday use</p>')
        .addImages([
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",     
            "https://footdistrict.com/media/resize/2000x2500/catalog/product/1/3/137_195238352950/nike-air-huarache-le-dh8143-200-0.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrz961kAHKFwj4m48zFWWMbJQSUzvc_pZzA&usqp=CAU",
            "https://cdn.sanity.io/images/c1chvb1i/production/6fd93f1a9f39351cfa7523531fcca0140cfbc0be-700x468.jpg/NIKE-AIR-HUARACHE-PREMIUM-BROWN-PURPLE-1.jpg",
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087'
        ])
        .setCategory(Category.clothes)
        .setInStock(false)
        .setBrand('Nike x Stussy')
        .addAttributeSet(shoeSizes),

    new Product('Barker shoes')
        .setId('barker-shoes')
        .setPrice(120)
        .setDescription('<p>Great barker for everyday use!</p><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><p>Great barker for everyday use!</p><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><p>Great barker for everyday use!</p><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><p>Great barker for everyday use!</p><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><p>Great barker for everyday use!</p><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><p>Great barker for everyday use!</p><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span>')
        .addImages([
            "https://cdn.shopify.com/s/files/1/0046/9139/4658/files/SS20_HOMEPAGE_MCCLEANPAIR_880x550_crop_center.jpg?v=1614334815",
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrz961kAHKFwj4m48zFWWMbJQSUzvc_pZzA&usqp=CAU",
            "https://cdn.shopify.com/s/files/1/0046/9139/4658/files/SS20_HOMEPAGE_MCCLEANPAIR_880x550_crop_center.jpg?v=1614334815",
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrz961kAHKFwj4m48zFWWMbJQSUzvc_pZzA&usqp=CAU",
            "https://cdn.shopify.com/s/files/1/0046/9139/4658/files/SS20_HOMEPAGE_MCCLEANPAIR_880x550_crop_center.jpg?v=1614334815"
        ])
        .setCategory(Category.clothes)
        .setShortDescription('<p>Great Barker shoes for everyday use</p>')
        .setBrand('Gucci')
        .addAttributeSet(shoeSizes),

    new Product('Jacket')
        .setId('c')
        .setPrice(430)
        .addImages([
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg',
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            "https://www.bfgcdn.com/1500_1500_90/004-3470/canada-goose-hybridge-coat-parka-detail-3.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrz961kAHKFwj4m48zFWWMbJQSUzvc_pZzA&usqp=CAU",
            "https://www.bfgcdn.com/1500_1500_90/004-3470/canada-goose-hybridge-coat-parka-detail-3.jpg",
            'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png'
        ])
        .addAttributeSet(clothesSizes)
        .setBrand('Loreal')
        .setShortDescription('<p>Great awesome winter jacket for everyday use</p>')
        .setDescription('<p>Awesome winter jacket</p>')
        .setCategory(Category.clothes),

    new Product('Essential Jacket')
        .setId('essential-jacket')
        .setPrice(430)
        .addImages([
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bomber-jackets-lead-1633354600.jpg",
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bomber-jackets-lead-1633354600.jpg",
            "https://sg-live-01.slatic.net/p/7948126501241b21a3adc5ddacc6d02d.jpg",
            "https://www.pacsun.com/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw16bc27e8/product_images/0202491920014001NEW_00_001.jpg"
        ])
        .addAttributeSet(clothesSizes)
        .setBrand('Gucci')
        .setInStock(false)
        .setShortDescription('<p>Great Essential jacket for everyday use</p>')
        .setDescription('<span>Awesome essential jacket</span><span>Awesome essential jacket</span><p>Awesome essential jacket</p><span>Awesome essential jacket</span><span>Awesome essential jacket</span><p>Awesome essential jacket</p><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span><p>Awesome essential jacket</p><span>Awesome essential jacket</span><span>Awesome essential jacket</span><p>Awesome essential jacket</p><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span>')
        .setCategory(Category.clothes),

    new Product('Puffer Jacket')
        .setId('puffer-jacket')
        .setPrice(430)
        .addImages([
            "https://www.king-apparel.com/media/catalog/product/cache/acf4131f5a2ab517c9bc09e04f221b37/e/a/earlham-puffer-jacket-black-king-apparel-aw20-epjb-6.jpg",
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            "https://www.king-apparel.com/media/catalog/product/cache/acf4131f5a2ab517c9bc09e04f221b37/e/a/earlham-puffer-jacket-black-king-apparel-aw20-epjb-6.jpg",
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e4637cba-5f06-4803-a0ed-75bcda394767/jordan-essential-puffer-jacket-LVvL19.png',
            'https://5.imimg.com/data5/HW/PB/UP/SELLER-75155666/mens-puffer-jacket-500x500.jpg'
        ])
        .addAttributeSet(clothesSizes)
        .setBrand('Adidas')
        .setShortDescription('<p>Great puffer jacket for everyday use</p>')
        .setDescription('<p>Awesome puffer jacket</p>')
        .setCategory(Category.clothes),

    new Product('Packet Jacket')
        .setId('packet-jacket')
        .setPrice(430)
        .addImages([
            "https://i.ytimg.com/vi/Jg0wtRQ5Wbk/maxresdefault.jpg",
            "https://resources.mandmdirect.com/Images/_default/n/n/3/nn30706_1_cloudzoom.jpg",
            "https://cdn.shopify.com/s/files/1/0740/6535/products/jacket-in-a-packet-emerald_1_grande.jpg",
            "https://arctica.com/wp-content/uploads/2019/06/GW817M-black-front.png",
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61EW7xooDBL._AC_UX385_.jpg",
            "https://cdn.shopify.com/s/files/1/0740/6535/products/mens-jacket-in-a-packet-iron_1_grande.jpg?v=1551095261"
        ])
        .addAttributeSet(clothesSizes)
        .setBrand('Nike Jackets')
        .setShortDescription('<p>Great packet jackets for everyday use</p>')
        .setDescription('<span>Awesome packet jacket</span>')
        .setCategory(Category.clothes),


    new Product('PlayStation 5')
        .setId('ps-5')
        .setPrice(700)
        .addImages([
            'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg',
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            'https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg',
            "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/11/PS5-Review-8-scaled.jpg",
            "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/New_PS5_Slim_concept_PlayStation_5_concept_drdNBC.jpg",
            "https://media.wired.com/photos/6189e5b0748096a2f3317edd/master/w_2560%2Cc_limit/Gear-Xbox-vs-PS5-1230432282.jpg"
        ])
        .addAttributeSet(colors)
        .addAttributeSet(capacity)
        .setBrand('Sony')
        .setShortDescription('<p>Great PS5 for everyday use</p>')
        .setInStock(false)
        .setDescription('<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>')
        .setCategory(Category.tech),

    new Product('Xbox Series S 512GB')
        .setId('xbox-series-s')
        .setPrice(277)
        .addImages([
            'https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg',
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            "https://m.media-amazon.com/images/I/619Bmcg-EIL.jpg",
            'https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg',
            "https://assets.xboxservices.com/assets/af/2e/af2e6de5-7421-4f4b-a99b-1b067a1af382.jpg?n=10202018_Image-1084_Fam_1920x944.jpg"
        ])
        .setBrand('Microsoft')
        .setInStock(false)
        .addAttributeSet(colors)
        .setShortDescription('<p>Great Xbox for everyday use</p>')
        .addAttributeSet(capacity)
        .setDescription(xboxDescription)
        .setCategory(Category.tech),

    new Product('iMac 2021')
        .setId('apple-imac-2021')
        .setPrice(1400)
        .setBrand('Apple')
        .addImages([
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000',
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            "https://www.apple.com/newsroom/images/product/mac/standard/Apple-Mac-Studio-Studio-Display-hero-220308_big.jpg.slideshow-xlarge_2x.jpg",
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000',
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            "https://www.apple.com/newsroom/images/product/mac/standard/Apple-Mac-Studio-Studio-Display-hero-220308_big.jpg.slideshow-xlarge_2x.jpg"
        ])
        .addAttributeSet(new AttributeSet('Capacity')
            .addItem(new Attribute('256GB'))
            .addItem(new Attribute('512GB'))
        )
        .setDescription('The new iMac!')
        .setShortDescription('<p>Great iMac for everyday use</p>')
        .addAttributeSet(new AttributeSet('With USB 3 ports').addItemList(yesNo))
        .addAttributeSet(new AttributeSet('Touch ID in keyboard').addItemList(yesNo))
        .setCategory(Category.tech),

    new Product('iPhone 12 Pro')
        .setId('apple-iphone-12-pro')
        .setPrice(830)
        .setBrand('Apple')
        .setDescription('This is iPhone 12. Nothing else to say.')
        .addImages([
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000',
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000',
            "https://i.insider.com/54afe79c69beddf7730a8cef?width=1136&format=jpeg",
            "https://media.wired.com/photos/5952d4f5ae4a4866ec227956/1:1/w_1539,h_1539,c_limit/iPhone-AP_070109070253.jpg"
        ])
        .addAttributeSet(capacity)
        .setShortDescription('<p>Great iPhone 12 for everyday use</p>')
        .addAttributeSet(colors)
        .setCategory(Category.tech),

    new Product('AirPods Pro')
        .setId('apple-airpods-pro')
        .setPrice(249)
        .setShortDescription('<p>Great Nike AirPods Pro for everyday use</p>')
        .setBrand('Apple')
        .addImages([
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000',
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            "https://www.cnet.com/a/img/resize/6a5dab5b05c60703342a972b2447ba31fee4c433/hub/2021/02/01/8937a063-c152-4b0d-bcb8-ca430b2a5016/galaxybuds-airpods-thumb-3.jpg?auto=webp&fit=crop&height=675&width=1200",
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000',
            "https://i.guim.co.uk/img/media/6e43ca392bc23e56df3b67ac26f6371332501717/1110_542_3236_1943/master/3236.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1980fe9c5f415d653a18310ee0ca483a"
        ])
        .setInStock(false)
        .setDescription(airpodsDescription)
        .setCategory(Category.tech),

    new Product('AirTag')
        .setId('apple-airtag')
        .setPrice(100)
        .setBrand('Apple')
        .setShortDescription('<p>Great Air Tag for everyday use</p>')
        .addImages([
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000',
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000',
            "https://m-cdn.phonearena.com/images/reviews/235464-image/Apple-AirTags-Review-014.jpg",
            "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-12/211220-apple-airtags-stalking-2x1-bn-1715-309371.jpg",
            "https://ktla.com/wp-content/uploads/sites/4/2021/05/IMG_9388.jpg"
        ])
        .setDescription(airtagDescription)
        .setCategory(Category.tech)
];

export { products };
