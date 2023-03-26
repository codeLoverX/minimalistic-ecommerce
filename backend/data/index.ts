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
        .setDescription('<span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span><span>Great Nike Air Huarache Le sneakers for everyday use!</span>')
        .addImages([
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrz961kAHKFwj4m48zFWWMbJQSUzvc_pZzA&usqp=CAU",
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087'
        ])
        .setCategory(Category.clothes)
        .setBrand('Nike x Stussy')
        .addAttributeSet(shoeSizes),

    new Product('Barker shoes')
        .setId('barker-shoes')
        .setPrice(120)
        .setDescription('<span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span><span>Great barker for everyday use!</span>')
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
        .setBrand('Gucci')
        .addAttributeSet(shoeSizes),

    new Product('Jacket')
        .setId('jacket-canada-goosee')
        .setPrice(430)
        .addImages([
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg',
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrz961kAHKFwj4m48zFWWMbJQSUzvc_pZzA&usqp=CAU",
            'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png'

        ])
        .addAttributeSet(clothesSizes)
        .setBrand('Canada Goose')
        .setDescription('<span>Awesome winter jacket</span>')
        .setCategory(Category.clothes),

    new Product('Essential Jacket')
        .setId('essential-jacket')
        .setPrice(430)
        .addImages([
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bomber-jackets-lead-1633354600.jpg",
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bomber-jackets-lead-1633354600.jpg"
        ])
        .addAttributeSet(clothesSizes)
        .setBrand('Essential Jacket')
        .setDescription('<span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span><span>Awesome essential jacket</span>')
        .setCategory(Category.clothes),

    new Product('Puffer Jacket')
        .setId('puffer-jacket')
        .setPrice(430)
        .addImages([
            "https://www.king-apparel.com/media/catalog/product/cache/acf4131f5a2ab517c9bc09e04f221b37/e/a/earlham-puffer-jacket-black-king-apparel-aw20-epjb-6.jpg",
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            
            "https://www.king-apparel.com/media/catalog/product/cache/acf4131f5a2ab517c9bc09e04f221b37/e/a/earlham-puffer-jacket-black-king-apparel-aw20-epjb-6.jpg"
        ])
        .addAttributeSet(clothesSizes)
        .setBrand('Puffer Jacket')
        .setDescription('<span>Awesome puffer jacket</span>')
        .setCategory(Category.clothes),

    new Product('Packet Jacket')
        .setId('packet-jacket')
        .setPrice(430)
        .addImages([
            "https://i.ytimg.com/vi/Jg0wtRQ5Wbk/maxresdefault.jpg"
        ])
        .addAttributeSet(clothesSizes)
        .setBrand('Canada Goose')
        .setDescription('<span>Awesome packet jacket</span>')
        .setCategory(Category.clothes),


    new Product('PlayStation 5')
        .setId('ps-5')
        .setPrice(700)
        .addImages([
            'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg',
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            
            'https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg'
        ])
        .addAttributeSet(colors)
        .addAttributeSet(capacity)
        .setBrand('Sony')
        .setInStock(false)
        .setDescription('<span>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</span>')
        .setCategory(Category.tech),

    new Product('Xbox Series S 512GB')
        .setId('xbox-series-s')
        .setPrice(277)
        .addImages([
            'https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg',
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            
            'https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg'
        ])
        .setBrand('Microsoft')
        .setInStock(false)
        .addAttributeSet(colors)
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
            
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000',
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            

        ])
        .addAttributeSet(new AttributeSet('Capacity')
            .addItem(new Attribute('256GB'))
            .addItem(new Attribute('512GB'))
        )
        .setDescription('The new iMac!')
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
        ])
        .addAttributeSet(capacity)
        .addAttributeSet(colors)
        .setCategory(Category.tech),

    new Product('AirPods Pro')
        .setId('apple-airpods-pro')
        .setPrice(249)
        .setBrand('Apple')
        .addImages([
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000',
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000',
        ])
        .setInStock(false)
        .setDescription(airpodsDescription)
        .setCategory(Category.tech),

    new Product('AirTag')
        .setId('apple-airtag')
        .setPrice(100)
        .setBrand('Apple')
        .addImages([
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000',
            "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399",
            
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000'
        ])
        .setDescription(airtagDescription)
        .setCategory(Category.tech)
];

export { products };
