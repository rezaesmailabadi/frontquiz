import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';



const AddQuestions = () => {
    


    const params = useParams();

    const [userField, setUserField] = useState({
        question : "",
        option_1 :"",
        option_2 :"",
        option_3 :"",
        option_4 :"",
        ans :"",
        exam_id : params.id,
    });




   
    console.log(params);


    //   console.log("Hwllo velesh");

  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
    //console.log(userField);
  };

  console.log(userField);

  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        "http://127.0.0.1:8000/api/add_new_question",
        userField
      );
    //   userField = "";
    //   console.log(responce);
     
    } catch (err) {
      console.log("Something Wrong");
    }
  };

    

  const [examData, setExamData] = useState([]);
  const fetchexamData = async () => {
     try {
       const result = await axios("http://127.0.0.1:8000/api/add_questions/"+ params.id);
       setExamData(result.data.results);
       console.log(result.data.results);
     } catch (err) {
       console.log("somthing Wrong");
     }
   };

useEffect(() => {
  fetchexamData();
}, []);


















    return ( 
 <div className="content-wrapper">
     
     <div className="content-header">
       <div className="container-fluid">
         <div className="row mb-2">
           <div className="col-sm-6">
             <h1 className="m-0">Add questions</h1>
           </div> 
           <div className="col-sm-6">
             <ol className="breadcrumb float-sm-right">
               <li className="breadcrumb-item"><a href="#">Home</a></li>
               <li className="breadcrumb-item active">Add questions</li>
             </ol>
           </div> 
         </div> 
       </div> 
 
       <section className="content">
         <div className="container-fluid">
           <div className="row">
             <div className="col-12">
                
               <div className="card">
                 <div className="card-header">
                   <h3 className="card-title">Title</h3>
   
                   <div className="card-tools">
                         <a className="btn btn-info btn-sm" href="javascript:;" data-toggle="modal" data-target="#myModal">Add new</a>
                   </div>
                 </div>
                 <div className="card-body">
                     <table className="table table-striped table-bordered table-hover datatable">
                         <thead>
                             <tr>
                                 <th>#</th>
                                 <th>Question</th>
                                 <th>ans</th>
                                 <th>Status</th>
                                 <th>Actions</th>
                             </tr>
                         </thead>
                         <tbody>

                         {examData?.map((exam,i) =>{
                                                
                                                return(
                                                   <tr>
                                                       <td>{i}</td>
                                                       <td>{exam.questions}</td>
                                                       <td>{exam.ans}</td>
                                                       <td>{exam.status}</td>
                                                <td>
                                                   <NavLink to="/">Edit</NavLink>-
                                                   <NavLink to="/">delete</NavLink>
                                                </td>
                                                   </tr>
                                                )
                   
                                               })}  


                           {/* @foreach ($questions as $key=>$question)
                               <tr>
                                   <td>{{ $key+1}}</td>
                                   <td>{{ $question['questions']}}</td>
                                   <td>{{ $question['ans']}}</td>
                                   <td><input className="question_status" data-id="{{ $question['id']}}" <?php if($question['status']==1){ echo "checked";} ?> type="checkbox" name="status"></td>
                                   <td>
                                       <a href="{{ url('admin/update_question/'. $question['id'])}}" className="btn btn-primary btn-sm">Update</a>
                                       <a href="{{ url('admin/delete_question/'. $question['id'])}}" className="btn btn-danger btn-sm">Delete</a>
                                   </td>
                               </tr>
                           @endforeach */}
                         </tbody>
                       
                     </table>
                 </div>
                  
               </div>
                
             </div>
           </div>
         </div>
       </section>
     </div>
      
 
      
 <div className="modal fade" id="myModal" role="dialog">
     <div className="modal-dialog modal-lg">
     
        
       <div className="modal-content">
         <div className="modal-header">
           <h4 className="modal-title">Add new Question</h4>
           <button type="button" className="close" data-dismiss="modal">&times;</button>
         </div>
         <div className="modal-body">
           <form action="{{ url('/admin/add_new_question')}}" className="database_operation">  
                 <div className="row">
                     <div className="col-sm-12">
                         <div className="form-group">
                             <label for="">Enter Question</label>
                             {/* {{ csrf_field()}} */}
                             <input type="hidden" name="exam_id" value="{{ Request::segment(3)}}"/>
                             <input type="text" required="required" name="question" placeholder="Enter Question" className="form-control" onChange={(e) => changeUserFieldHandler(e)}/>
                         </div>
                     </div>
                     <div className="col-sm-6">
                         <div className="form-group">
                             <label for="">Enter Option 1</label>
                             <input type="text" required="required" name="option_1" placeholder="Enter Question" className="form-control" onChange={(e) => changeUserFieldHandler(e)}/>
                         </div>
                     </div>
                     <div className="col-sm-6">
                         <div className="form-group">
                             <label for="">Enter Option 2</label>
                             <input type="text" required="required" name="option_2" placeholder="Enter Option 2" className="form-control" onChange={(e) => changeUserFieldHandler(e)}/>
                         </div>
                     </div>
                     <div className="col-sm-6">
                         <div className="form-group">
                             <label for="">Enter Option 3</label>
                             <input type="text" required="required" name="option_3" placeholder="Enter  Option 3" className="form-control" onChange={(e) => changeUserFieldHandler(e)}/>
                         </div>
                     </div>
                     <div className="col-sm-6">
                         <div className="form-group">
                             <label for="">Enter Option 4</label>
                             <input type="text" required="required" name="option_4" placeholder="Enter  Option 4" className="form-control" onChange={(e) => changeUserFieldHandler(e)}/>
                         </div>
                     </div>
                     {/* {{-- <div className="col-sm-12">
                         <div className="form-group">
                             <label for="">Enter correct ans</label>
                             <input type="text" required="required" name="ans" placeholder="Enter  correct ans" className="form-control">
                         </div>
                     </div> --}} */}
                     <div className="form-group">
                       <label for="">Select correct option</label>
                       <select className="form-control" required="required" name="ans" onChange={changeUserFieldHandler} > 
                           <option value="">Select</option>
                         
                           <option value="option_1">option 1</option>
                           <option value="option_2">option 2</option>
                           <option value="option_3">option 3</option>
                           <option value="option_4">option 4</option>
           
                       </select>
                   </div>
 
                     <div className="col-sm-12">
                         <div className="form-group">
                             <button className="btn btn-primary" onClick={(e) => onSubmitChange(e)}>Add</button>
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
 
export default AddQuestions;