import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import {DateTimeInput, DateTimeInputSimple, DateInput, DateInputSimple} from 'react-hichestan-datetimepicker';
import DatePicker, { DateObject } from "react-multi-date-picker"
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { NavLink } from 'react-router-dom';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';


const ManageExam = () => {
    

  const [value, setValue] = useState(new Date());

    const [userField, setUserField] = useState({
        title :"",
        exam_date :"",
        time_clock : "",
        exam_duration :"",
        exam_category :"",
        exam_type  : "",
        count :"",
      });

      const [categoryData,setCategoryData] = useState([]);
      const [examType,setExamType] = useState([]);

      // console.log();

    


  // const object ={
  //   ...userField,
  //   time : value
  // }


  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
    // console.log(userField);
  };
  // console.log(userField);

  const onSubmitChange = async (e) => {
    e.preventDefault();
    console.log(userField);
    try {
      const responce = await axios.post(
        "http://127.0.0.1:8000/api/add_new_exam",
        userField
        // object
      );
      // userField = "";
    // console.log(value);
    console.log(userField);
    console.log(responce);
     
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  


    const fetchData = async () => {
      try {
        const result = await axios("http://127.0.0.1:8000/api/exam_category");
        setCategoryData(result.data.results.category);
        // console.log(result.data.results);
      } catch (err) {
        console.log("somthing Wrong");
      }
    };

    const fetchDataa = async () => {
      try {
        const result = await axios("http://127.0.0.1:8000/api/exam_type");
        setExamType(result.data.results.category);
        // console.log(result.data.results);
      } catch (err) {
        console.log("somthing Wrong");
      }
    };

    // useEffect(() =>{
    //   console.log(value);
    // },[value]);







    const [examData, setExamData] = useState([]);
    const fetchexamData = async () => {
       try {
         const result = await axios("http://127.0.0.1:8000/api/manage_exam");
         setExamData(result.data.results);
        //  console.log(result.data.results);
       } catch (err) {
         console.log("somthing Wrong");
       }
     };
      const [selectedCategory, setSelectedCategory] = useState(null);



  useEffect(() => {
    fetchData();
    fetchexamData();
    fetchDataa();
  }, []);


  // const [startDate, setStartDate] = useState(new Date());

  


  function handleChange(val){

    const time = `${val.year}/${val.month}/${val.day}`;
    const timee = `${val.hour}:${val.minute}:${val.second}`;

    setUserField({...userField,exam_date:time});
    setUserField({...userField,time_clock:timee});

  // console.log(time.split('-'));  

    // console.log(`${val.year}/${val.month}/${val.day} - ${val.hour}:${val.minute}:${val.second} `);
    setValue(time);
  }


  





  // console.log(value);


    return ( 
      
                
  <div  className="content-wrapper">
     
    <div  className="content-header">
      <div  className="container-fluid">
        <div  className="row mb-2">
          <div  className="col-sm-6">
            <h1  className="m-0">Manage Exam</h1>
          </div> 
          <div  className="col-sm-6">
            <ol  className="breadcrumb float-sm-right">
              <li  className="breadcrumb-item"><a href="#">Home</a></li>
              <li  className="breadcrumb-item active">Manage Exam</li>
            </ol>
          </div> 
        </div> 
      </div> 

      <section  className="content">
        <div  className="container-fluid">
          <div  className="row">
            <div  className="col-12">
               
              <div  className="card">
                <div  className="card-header">
                  <h3  className="card-title">Title</h3>
  
                  <div  className="card-tools">
                        <a  className="btn btn-info btn-sm" href="javascript:;" data-toggle="modal" data-target="#myModal">Add new</a>
                  </div>
                </div>
                <div  className="card-body">
                    <table  className="table table-striped table-bordered table-hover datatable">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                {/* <th>Category</th> */}
                                <th>Exam Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                           {/* @foreach ($exams as $key=>$exam)
                               <tr>
                                   <td>{{ $key+1}}</td>
                                   <td>{{ $exam['title']}}</td>
                                   <td>{{ $exam['cat_name']}}</td>
                                   <td>{{ $exam['exam_date']}}</td>
                                   <td><input type="checkbox"  className="exam_status" data-id="{{ $exam['id']}}" <?php if($exam['status']==1){ echo "checked";} ?> name="status"></td>
                                   <td>
                                       <a href="{{ url('admin/edit_exam/'.$exam['id'])}}"  className="btn btn-info">Edit</a>
                                       <a href="{{ url('admin/delete_exam/'.$exam['id'])}}"  className="btn btn-danger">Delete</a>
                                       <a href="{{ url('admin/add_questions/'.$exam['id'])}}"  className="btn btn-primary">Add Question</a>
                                   </td>
                               </tr>
                           @endforeach */}






{/* خط پایین باید از کامنت در بیاید  */}
                            {/* {examData?.map((exam,i) =>{
                                                
                             return(
                                <tr>
                                    <td>{i}</td>
                                    <td>{exam.title}</td>
                                    <td>{exam.cat_name}</td>
                                    <td>{exam.exam_date}</td>
                                    <td>status</td>
                             <td>
                                <NavLink to="/">Edit</NavLink>-
                                <NavLink to="/">delete</NavLink>-
                                <NavLink to={`/admin/add_questions/${exam.id}`}>addQuestion</NavLink>
                             </td>
                                </tr>
                             )

                            })}  
 */}







                        </tbody>
                        <tfoot>
                            
                        </tfoot>
                    </table>
                </div>
                 
              </div>
               
            </div>
          </div>
        </div>
      </section>
    </div>
     

     
<div  className="modal fade" id="myModal" role="dialog">
    <div  className="modal-dialog">
    
       
      <div  className="modal-content">
        <div  className="modal-header">
          <h4  className="modal-title">Add new Exam</h4>
          <button type="button"  className="close" data-dismiss="modal">&times;</button>
        </div>
        <div  className="modal-body">
          <form  className="database_operation">  
                <div  className="row">
                    <div  className="col-sm-12">
                        <div  className="form-group">
                            <label for="">Enter title</label>
                            {/* {{ csrf_field()}} */}
                            <input type="text" required="required" name="title" placeholder="Enter title"  className="form-control"  onChange={(e) => changeUserFieldHandler(e)} />
                        </div>
                    </div>
                    <div  className="col-sm-12">
                        
                        {/* <div  className="form-group">
                            <label for="">Enter Date</label>
                            <input type="date" required="required" name="exam_date"   className="form-control" onChange={(e) => changeUserFieldHandler(e)} />
                        </div> */}


                  <DatePicker 
                  format="MM/DD/YYYY HH:mm:ss"
                  // dataFormat = "d MMM yyyy"
                  plugins={[
                    <TimePicker position="bottom" />
                  ]}
                  calendar={persian}
                  locale={persian_fa}
                    selected={value}
                    onChange= {date => handleChange(date)}
                    name='exam_date'
                  /> 


{/* <Calendar 
 calendar={persian}
 locale={persian_fa}
      value={value}
      onChange={setValue}
    />
 */}



{/* 

                      <DateTimeInputSimple
                      // DateTimeInput
// DateTimeInputSimple
                      value={startDate}
                      name= "exam_date"
                      onChange={(e) => changeUserFieldHandler(e)}
                      /> */}


          


                    </div>
                    <div  className="col-sm-12">
                      <div  className="form-group">
                          <label for="">Enter duration (in minutes)</label>
                          <input type="text" required="required" name="exam_duration"   className="form-control"  onChange={(e) => changeUserFieldHandler(e)}/>
                      </div>
                  </div>

                  <div  className="col-sm-12">
                      <div  className="form-group">
                          <label for="">count</label>
                          <input type="text" required="required" name="count"   className="form-control"  onChange={(e) => changeUserFieldHandler(e)}/>
                      </div>
                  </div>

                    <div  className="col-sm-12">
                        <div  className="form-group">
                            <label for="" >Select category</label>
                            <select onChange={changeUserFieldHandler} 
                            
                             className="form-control" required="required" name="exam_category">
                                <option >Select</option>
                           
                  {categoryData?.map((category,i) =>{
                    // console.log(category);
                                return(
                                  <option onClick={e => {

                                    // console.log("option", e.target.value);

                                  }}
                                  value={category.id}
                                
                                  id={category.id}
                                  key={i}
                                  >
                  
                                    {category.name}
                                  </option>
                                )
                              })}  
                            </select>
                              
                        </div>
                    </div>




{/*  type question  */}




            <div  className="col-sm-12">
                        <div  className="form-group">
                            <label for="" >Select type question </label>
                            <select onChange={changeUserFieldHandler} 
                            
                             className="form-control" required="required" name="exam_type">
                                <option >Select</option>
                           
                  {examType?.map((category,i) =>{
                    // console.log(category);
                                return(
                                  <option onClick={e => {

                                    // console.log("option", e.target.value);

                                  }}
                                  value={category.id}
                                
                                  id={category.id}
                                  key={i}
                                  >
                  
                                    {category.name}
                                  </option>
                                )
                              })}  
                            </select>
                              
                        </div>
                    </div>
























{/* 
                            <select
                            onChange={(e) => console.log("change", e.target)}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select> */}

                    <div  className="col-sm-12">
                        <div  className="form-group">
                            <button  className="btn btn-primary" onClick={(e) => onSubmitChange(e)}>Add</button>
                        </div>
                    </div>
                </div>
            </form>
      </div>
      
    </div>
    </div>	

</div>
        </div>
     );
}
 
export default ManageExam;