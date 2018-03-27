import MOCK from 'mockjs'
MOCK.setup({
    timeout: '200-600'
})
MOCK.mock('/index', 'get', {
    //这是重点推荐
    recommend_book:[
        {
            book_id: 19,
            book_title: "1548",
            book_price: 2000000,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 25,
            book_title: "123",
            book_price: 2000000,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 26,
            book_title: "book3title",
            book_price: 15,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 27,
            book_title: "book4title",
            book_price: 15,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 28,
            book_title: "book5title",
            book_price: 78,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 29,
            book_title: "book6title",
            book_price: 56,
            photo_url: '@image(180x150)'
        }
    ],
    //这是热搜书籍
    hotest_book: [
        {
            book_id: 19,
            book_title: "1548",
            book_price: 2000000,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 25,
            book_title: "123",
            book_price: 2000000,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 26,
            book_title: "book3title",
            book_price: 15,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 27,
            book_title: "book4title",
            book_price: 15,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 28,
            book_title: "book5title",
            book_price: 78,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 29,
            book_title: "book6title",
            book_price: 56,
            photo_url: '@image(180x150)'
        }

    ],
    //这是轮播的图片
    display_photo: [
        {
            book_id: 30,
            photo_url: require('./images/pic1.jpg')
        },
        {
            book_id: 29,
            photo_url: require('./images/pic2.jpg')
        },
        {
            book_id: 28,
            photo_url: require('./images/pic3.jpg')
        },
        {
            book_id: 27,
            photo_url: require('./images/pic4.jpg')
        },
        {
            book_id: 26,
            photo_url: require('./images/pic5.jpg')
        },
        {
            book_id: 25,
            photo_url: require('./images/pic6.jpg')
        }
    ],
    //这是新品上架的书
    latest_book: [
        {
            book_id: 30,
            book_title: "book7title",
            book_price: 454,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 29,
            book_title: "book6title",
            book_price: 898,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 28,
            book_title: "book5title",
            book_price: 78,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 27,
            book_title: "book4title",
            book_price: 15,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 26,
            book_title: "book3title",
            book_price: 15,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 25,
            book_title: "book2title",
            book_price: 56,
            photo_url: '@image(180x150)'
        }
    ],
    //这是随便看看的书
    frag_book: [
        {
            book_id: 19,
            book_title: "1548",
            book_price: 2000000,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 25,
            book_title: "123",
            book_price: 2000000,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 26,
            book_title: "book3title",
            book_price: 15,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 27,
            book_title: "book4title",
            book_price: 15,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 28,
            book_title: "book5title",
            book_price: 78,
            photo_url: '@image(180x150)'
        },
        {
            book_id: 30,
            book_title: "book6title",
            book_price: 56,
            photo_url: '@image(180x150)'
        }
    ],
    //这是热销书籍
    best_sellers: [
        {
            user_id: 1,
            user_name: "hokaman",
            score: 0,
            icon: require('./images/timg.jpg')
        },
        {
            user_id: 4,
            user_name: "历史学",
            score: 0,
            icon: require('./images/timg.jpg')
        },
        {
            user_id: 5,
            user_name: "历史学2",
            score: 0,
            icon: require('./images/timg.jpg')
        }
    ]
})


MOCK.mock('/users/token', 'post', {
    error_code: 200,
    user:{
        token: 'etHH09sdjInfda8S7',
        user_id: 1293845,
        user_name:'hooooooyin',
    }
})


MOCK.mock('/users', 'get', {
    error_code: 200,
    user:{
        token: 'etHH09sdjInfda8S7',
        user_id: 1293845,
        user_name:'hooooooyin',
    }
})


MOCK.mock('/books/search_result', 'get', {
    error_code:200,
    result: {
        token: "eyJ0eXAiOiJqd3QiLCJhbGjQE",
        //以下是搜索结果
        search_book: [
            {
                book_id: 30,
                book_title: "book7title",
                book_name: "booknama7",
                book_price: 454,
                photo_url: require('./images/pic1.jpg')
            },
            {
                book_id: 29,
                book_title: "book6title",
                book_name: "booknama6",
                book_price: 454,
                photo_url: require('./images/pic2.jpg')
            }
        ],
        //以下是猜你喜欢
        recommend_book: [
            {
                book_id: 29,
                book_title: "book6title",
                book_name: "book6name",
                book_price: 898,
                photo_url: require('./images/pic3.jpg')
            },
            {
                book_id: 19,
                book_title: "1548",
                book_name: "verymuch",
                book_price: 2000000,
                photo_url: require('./images/pic4.jpg')
            },
            {
                book_id: 39,
                book_title: "1548",
                book_name: "verymuch",
                book_price: 2000000,
                photo_url: require('./images/pic5.jpg')
            }
        ]}
})

MOCK.mock('/users/search_result', 'get', {
    error_code:200,

    result:{
        token: "eyJ0eXAiOiJqd3QiLCJhbGjQE",
        user:[
        {
            user_id: 1,
            user_name: '阿龙',
            icon: require('./images/timg.jpg'),
            school: '华南师范大学',
            major: '计算机学院',
        },
        {
            user_id: 2,
            user_name: '嘉文',
            icon: require('./images/timg.jpg'),
            school: '华南师范大学',
            major: '计算机学院',
        }
    ]}
})



MOCK.mock('/users/information', 'get', {
    error_code:200,
    user: {
        token: "eyJ0eXBlIjoiand0IiwiYWxnb3JpdGhtIjoic2hhMjU2In0.eyJ1c2VyaWQiOjEsImlzc3VlZEF0IjoiMjAxOC0wMy0xMlQxNToxOToyNiswMDAwIiwidHRsIjo4NjQwMH0.1DAhjzQpsEH6xIsHorRf_HW9xCfLlf_JFRUNjEc_L8E",
        information: {
            user_name: "hokaman",
            email: "hokaman@123.com",
            icon: require('./images/timg.jpg'),
            school: "scnu",
            major: "computer",
            grade: "2015",
            score: 0,
            phone_num: "12345678910",
            wechat_id: "154878",
            qq: 123456
        },
        upload_books: [
            {
                book_id: 27,
                book_title: "book4title",
                book_price: 15,
                photo_url:  require('./images/pic2.jpg')
            },
            {
                book_id: 26,
                book_title: "book3title",
                book_price: 15,
                photo_url:  require('./images/pic3.jpg')
            },
            {
                book_id: 25,
                book_title: "123",
                book_price: 2000000,
                photo_url:  require('./images/pic4.jpg')
            },
            {
                book_id: 19,
                book_title: "1548",
                book_price: 2000000,
                photo_url:  require('./images/pic5.jpg')
            }
        ],
        //这是我下单的书
        order_book: [
            {
                book_id: 28,
                book_title: "book5title",
                book_price: 78,
                order_status: "sold",
                photo_url:  require('./images/pic5.jpg'),
                seller_id: 3,
                seller_name: "user3",
                seller_phone_num: null,
                seller_wechat_id: null,
                seller_qq: 1548
            },
            {
                book_id: 29,
                book_title: "book5title",
                book_price: 78,
                order_status: "selling",
                photo_url:  require('./images/pic6.jpg'),
                seller_id: 3,
                seller_name: "user3",
                seller_phone_num: null,
                seller_wechat_id: null,
                seller_qq: 1548
            }
        ],
        //这是我收藏的书
        favor_books: [{
            book_id: 39,
            book_title: "book123",
            book_price: 200,
            photo_url:  require('./images/pic1.jpg')
        },
        {
            book_id: 38,
            book_title: "book123",
            book_price: 200,
            photo_url:  require('./images/pic2.jpg')
        },
        {
            book_id: 37,
            book_title: "book123",
            book_price: 200,
            photo_url:  require('./images/pic3.jpg')
        },
        {
            book_id: 36,
            book_title: "book123",
            book_price: 200,
            photo_url:  require('./images/pic4.jpg')
        },
    ],
        //这是我发出的留言
        comments: [
            {
                book_id: 19,
                book_title: "1548",
                text: "commen9",
                time: "2018年1月7日   21点05分"
            },
            {
                book_id: 20,
                book_title: "1548",
                text: "commen7",
                time: "2018年1月7日   21点05分"
            },
            {
                book_id: 21,
                book_title: "1548",
                text: "comment6",
                time: "2018年1月7日   21点05分"
            },
            
        ]
    }
})

MOCK.mock('/users/confirm', 'get', {
    error_code: 200,
    token: 'SAFNKnsadwJcq987Da',
    message:'confirm success'
})

MOCK.mock('/users/icon', 'post', {
    error_code:201,
    token: 'gagagga2gags',
    message: 'Your head picture upload success'
})

MOCK.mock('/users/information', 'post', {
    error_code :201,
    info: {
        token:'gegagag322',
        user_name: "hokaman",
        email: "hokaman@123.com",
        icon: require('./images/timg.jpg'),
        school: "scnu",
        major: "computer",
        grade: "2015",
        phone_num: "12345678910",
        wechat_id: "154878",
        qq: 123456,
        score: 0,
    }
})

MOCK.mock('/books', 'post', {
    error_code: 200,
    upload:{
        token:'fefegeg',
        book_id:'12355'
     }
})

MOCK.mock('/books', 'get', {
    error_code:200,
    book:{
        token:'fjeigaj1334',
        book_pic: [
            {
                photo_url: require('./images/pic1.jpg')
            },
            {
                photo_url: require('./images/pic2.jpg')
            },
            {
                photo_url: require('./images/pic3.jpg')
            }
        ],
        book_comments: [
            {
                user_id: 1,
                user_name: "hokaman",
                text: "very good",
                time: "2018年1月7日   21点05分"
            },
            {
                user_id: 1,
                user_name: "hokaman",
                text: "very good",
                time: "2018年1月7日   21点05分"
            },
            {
                user_id: 1,
                user_name: "hokaman",
                text: "comment2",
                time: "2018年1月7日   21点05分"
            },
            {
                user_id: 1,
                user_name: "hokaman",
                text: "comment3",
                time: "2018年1月7日   21点05分"
            },
            {
                user_id: 1,
                user_name: "hokaman",
                text: "comment4",
                time: "2018年1月7日   21点05分"
            }
        ],
        book_user_id: 1,
        book_user_name: "hokaman"
    }
})

MOCK.mock('/users', 'get', {
    error_code: 200,
  other: {
    token:'fege545',
    user_name: "hokaman",
    icon: require('./images/timg.jpg'),
    school: "scnu",
    major: "computer",
    grade: "2014",
    phone_num: "12345678910",
    wechat_id: "154878",
    qq: 123456789,
    score: 0
    }
})

MOCK.mock('/favors', 'post', {
    error_code: 200,
    token:'f4e5f4e5af4a8',
})

MOCK.mock('/orders', 'post', {
    error_code: 200,
    token:'f4e5f4e5af4a8',
})

MOCK.mock('/users/password', 'post', {
    token: 'gagagagga',
    message: 'Password modify succeed'
})

MOCK.mock('/comment', 'post', {
    error_code: 200,
    comment:{
        token: '124342fefeg',
        comment_id: '12355'
    }
})

MOCK.mock('/comments', 'get', {
    error_code:200,
    token:'12fejfi1',
    comment: [
        {
            comment_id: 6,
            user_id: 1,
            user_name: "hokaman",
            text: "comment5",
            time: "2018年1月7日   21点05分"
        },
        {
            comment_id: 7,
            user_id: 1,
            user_name: "hokaman",
            text: "comment6",
            time: "2018年1月7日   21点05分"
        },
        {
            comment_id: 8,
            user_id: 1,
            user_name: "hokaman",
            text: "commen7",
            time: "2018年1月7日   21点05分"
        }
    ] 
})