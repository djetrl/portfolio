
import  {Skills as BaseSkills} from '../component'
import { connect } from 'react-redux';
import { useState } from 'react';
const Skills = ({pageNumber}) => {
  const [infoVisible, SetInfoVisible]=useState(false)
  return(
    <BaseSkills infoVisible={infoVisible} SetInfoVisible={SetInfoVisible}/>
  )
};
export default connect(({ page })=>({pageNumber:page.count}))(Skills);