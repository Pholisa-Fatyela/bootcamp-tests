function mostProfitableDepartment(profitableDepartment) {
    var departmentName = '';
    var totalSales = 0;

    for (var i = 0; i < profitableDepartment.length; i++) {
        var sales = profitableDepartment[i].sales;
        var department = profitableDepartment[i].department;

        if (profitableDepartment[i].sales > totalSales) {
            totalSales = sales;
            departmentName = department;
        }
    }
    return departmentName;
}