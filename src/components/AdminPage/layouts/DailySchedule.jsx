import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import axios from "axios";

const DailySchedule = () => {
  const [value, setValue] = useState(new Date());
  const [userField, setUserField] = useState({
    exam_date: "",
  });

  function handleChange(val) {
    const time = `${val.year}/${val.month}/${val.day} - ${val.hour}:${val.minute}:${val.second} `;
    setUserField({ ...userField, exam_date: time });
    //   console.log(time.split('-'));
       const timee = time.split('-');
    //    console.log(timee[0]); 
    // console.log(`${val.year}/${val.month}/${val.day} - ${val.hour}:${val.minute}:${val.second} `);
    setValue(time);
  }

  //   ------------------------------------------------------

  const [categoryData, setCategoryData] = useState([]);
  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/manage_exam");
      setCategoryData(result.data.results.manageexam);
      //   console.log(categoryData);
      // console.log(result.data.results);
      // console.log(categoryData);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
//   -------------------------------------------------------------------------

  //   console.log(categoryData[0]);

  return (
    <div>
      <DatePicker
        format="MM/DD/YYYY"
        calendar={persian}
        locale={persian_fa}
        selected={value}
        onChange={(date) => handleChange(date)}
        name="exam_date"
      />

      {categoryData?.map((category, i) => {
          // console.log(category);
        //   {category.time === timee[0] ? }
          return (
            <section>
              title :   {category.title} __
                count : {category.count} دقیقه   __
                time : {category.exam_date} __
                <button>ثبت نام </button>
            </section>
        );
      })}

      
    </div>
  );
};

export default DailySchedule;
