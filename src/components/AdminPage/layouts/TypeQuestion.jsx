import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const TypeQuestion = () => {
    
  
  
  const navigate = useNavigate();

  
  useEffect(() => {
    fetchData();
  }, []);


 

  const [userField, setUserField] = useState({
    name: "",
  });

  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
    //console.log(userField);
  };


  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        "http://127.0.0.1:8000/api/add_new_type",
        userField
      );
      console.log(responce);
      navigate("/admin/exam_category");
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  const [userData, setUserData] = useState([]);
  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/exam_category");
      setUserData(result.data.results);
      console.log(result.data.results);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };










  return ( 

<div  className="content-wrapper">
         
         <div  className="content-header">
           <div   classNameName="container-fluid">
             <div  className="row mb-2">
               <div  className="col-sm-6">
                 <h1  className="m-0">type questions</h1>
               </div> 
               <div  className="col-sm-6">
                 <ol  className="breadcrumb float-sm-right">
                   <li  className="breadcrumb-item"><NavLink to="/admin/dashboard">Home</NavLink></li>
                   <li  className="breadcrumb-item active">type question</li>
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
                                 <th>#</th>
                                 <th>Name</th>
                             </thead>
    
                             <tbody>

 


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
          
 
   <div class="modal fade" id="myModal" role="dialog">
     <div class="modal-dialog">
     
     
       <div class="modal-content">
         <div class="modal-header">
           <h4 class="modal-title">Add new type</h4>
           <button type="button" class="close" data-dismiss="modal">&times;</button>
         </div>
         <div class="modal-body">
           <form>  
                 <div class="row">
                     <div class="col-sm-12">
                         <div class="form-group">
                             <label for="">Enter type name</label>
                             {/* {{ csrf_field()}} */}
                             <input type="text" required="required" name="name" placeholder="Enter type name" class="form-control" onChange={(e) => changeUserFieldHandler(e)}/>
                         </div>
                     </div>
                     <div class="col-sm-12">
                         <div class="form-group">
                             <button class="btn btn-primary"  onClick={(e) => onSubmitChange(e)}>Add</button>
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
 
export default TypeQuestion;