import React from "react";
import Button from "@ui/Button";
import {Card} from "@components/Card";
import { CourseDTO } from "@src/modules/Course/dataContext/CourseDTO.dto";
import "./styles.scss";

interface Props {
  onClick: any,
  userRole: string
}

const CourseCardMobile = (props: Props & CourseDTO.ICourse) => {
  return (
    <div className="card-mobile-container"> 
     
      
    
  </div>);        
};

export default CourseCardMobile;
