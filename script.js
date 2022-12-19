(function () {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month_selected = (new Date).getMonth(); // current month
  var option = '';
  option = '<option>Month</option>'; // first option

  for (let i = 0; i < months.length; i++) {
      let month_number = (i + 1);

      // value month number with 0. [01 02 03 04..]
      let month = (month_number <= 9) ? '0' + month_number : month_number;

      // or value month number. [1 2 3 4..]
      // let month = month_number;

      // or value month names. [January February]
      // let month = months[i];

      let selected = (i === month_selected ? ' selected' : '');
      option += '<option value="' + month + '"' + selected + '>' + months[i] + '</option>';
  }
  document.getElementById("month").innerHTML = 'option';
})();







(function () {
    let year_satart = 2021;
    let year_end = (new Date).getFullYear(); // current year
    let year_selected = 2022;

    let option = '';
    option = '<option>Year</option>'; // first option

    for (let i = year_satart; i <= year_end; i++) {
        let selected = (i === year_selected ? ' selected' : '');
        option += '<option value="' + i + '"' + selected + '>' + i + '</option>';
    }

    document.getElementById("year").innerHTML = 'option';
}

)();






  




