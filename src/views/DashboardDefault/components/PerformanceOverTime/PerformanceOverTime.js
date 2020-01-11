import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';
import axios from "axios";

import { GenericMoreButton } from 'components';
import { Chart } from './components';
var mine;


const useStyles = makeStyles(theme => ({
  root: {},
  content: {},
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      marginLeft: theme.spacing(1)
    }
  },
  inner: {
    height: 375,
    minWidth: 500
  },
  chart: {
    height: '100%'
  }
}));

const PerformanceOverTime =  props => {
  
  const { className, ...rest } = props;
  const classes = useStyles();
  var link =("http://localhost:3003/marks/").concat(localStorage.getItem('first_name') + "," + localStorage.getItem('last_name'));
  console.log(link)
  const response =  axios.get(link).then(
        data =>{
          mine=data.data["0"]
          console.log(data.data.length)
          // console.log("data is")
          // console.log(data.data["0"])  
          if(data.data.length>0)
          {
            localStorage.setItem("Tests",mine.Tests)
            localStorage.setItem("Marks",mine.Marks)
            console.log(localStorage.getItem("Tests").split(","))
          }
          else
          {
            localStorage.setItem("Tests",["No Tests Taken"])
            localStorage.setItem("Marks",["0"])
          }
        }
      ).then(
        my_data =>{
  // if(mine.data.length<1)
  //   {
  //      data = {
  //       thisWeek: {
  //         data: [],
  //         labels: []
  //       },
  //       thisMonth: {
  //         data: [],
  //         labels: []
  //       },
        
  //       thisYear: {
          
  //         data: [20, 14, 67, 56, 66, 89, 79, 0, 92, 39, 15,91 ],
  //         labels: [
  //           'OCT101',
  //           'OCT102',
  //           'OCT103',
  //           'OCT104',
  //           'NOV101',
  //           'NOV102',
  //           'NOV103',
  //           'NOV104',
  //           'DEC101',
  //           'DEC102',
  //           'DEC103',
  //           'DEC104'
  //         ]
  //       }
  //     };
  //   }
  // 
    }
      )
  
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Performance Over Time"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Chart
              className={classes.chart}
              data={localStorage.getItem("Marks").split(",")}
              labels={localStorage.getItem("Tests").split(",")}
            />
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

PerformanceOverTime.propTypes = {
  className: PropTypes.string
};

export default PerformanceOverTime;
