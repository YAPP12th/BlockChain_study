/* ====== index
##. Top Products in Revenue

================ */
/*Top Products in Revenue*/
Morris.Donut({
    element: 'donut-example',
    data: [
        {label: "Product 1 ($325K)", value: 30},
        {label: "Product 2 ($187K)", value: 20},
        {label: "Product 3 ($165K)", value: 18},
        {label: "Product 4 ($125K)", value: 12},
        {label: "Product 5 ($106K)", value: 10}
    ],
    colors: [Utility.getBrandColor('grape'), Utility.getBrandColor('inverse'), Utility.getBrandColor('green')]
});