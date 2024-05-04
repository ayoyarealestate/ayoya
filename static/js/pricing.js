
    /* =====================================
           Pricing Card
     ====================================== */

     $('.price-part .price-box .price-boxs').on('mouseover', function () {
        $('.price-part .p-card:nth-child(2) .price-boxs').removeClass('active');
    });
    $('.price-part .price-box .price-boxs').on('mouseleave', function () {
        $('.price-part .p-card:nth-child(2) .price-boxs').addClass('active');
    });
