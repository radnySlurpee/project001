const INITIAL_STATE = {
    sections: [
        {
        title: 'hats',
        imageUrl: 'https://goodmockups.com/wp-content/uploads/2018/04/Free-Baseball-P-Cap-Mockup-PSD-File.jpg',
        id: 1,
        linkUrl: 'shop/hats'
        },
        {
        title: 'jackets',
        imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/22_hoodie-mockups.jpg',
        id: 2,
        linkUrl: 'shop/jackets'
        },
        {
        title: 'sneakers',
        imageUrl: 'https://houseofheat.co/app/uploads/2019/02/cai-x-nike-blazer-mid-bv0072-001-release-date-lead-1200x750.jpg',
        id: 3,
        linkUrl: 'shop/sneakers'
        },
        {
        title: 'womens',
        imageUrl: 'https://image.freepik.com/free-photo/happy-asian-woman-using-cell-phone-yellow-background-autumn-season_35721-152.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
        },
        {
        title: 'mens',
        imageUrl: 'https://image.freepik.com/free-photo/redhead-man-blue-wall-with-glasses-smiling_1368-46164.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;