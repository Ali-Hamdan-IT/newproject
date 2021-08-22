import style from "../../styles/Classes/classId.module.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import React from "react";
import {classes} from '../../database/classes.js';
import {useEffect , useState} from 'react';
function ClassId() {
  const [badge, setBadge] = React.useState(0);
  const router = useRouter();
  const classid = router.query.classid;
  console.log(router.query);
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
  });
  const classes = useStyles();
  const [classData, setClassData]= useState(null);
  const [isloading , setIsLoading]= useState(true);

  useEffect( ()=>{
    async function fetchdataApi(){
  const response = await fetch(`/api/lessons/${classid}`);
  const data = await response.json();
  setClassData(data);
  setIsLoading(false);}
  fetchdataApi();
  },[])
  if(isloading){
    return <h2>Loading....</h2>
  }

  return (
    <div>
      <div className={style.classHead}>
        <img src={classData.image} className={style.image} alt="" />
        <IconButton aria-label="cart" className={style.badgeIcon}>
          <Badge badgeContent={badge} color="secondary">
            <EventAvailableIcon className={style.badge} />
          </Badge>
        </IconButton>
        <h1 className={style.headTilte}>{classData.title}</h1>
        <Button
          type="button"
          className={style.button}
          variant="contained"
          color="primary"
          onClick={() => {
            setBadge(1);
          }}
        >
          Book Now
        </Button>
      </div>
      <div className={style.bread}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/classesLessons">
            /Classes&Services
          </Link>
          <Typography color="textPrimary">{`Class Number ${classid}`}</Typography>
        </Breadcrumbs>
      </div>
      <div className={style.cardContainer}>
        <Card className={classes.root}>
          <CardContent align="center">
            <h2 className={style.h2}>Opening Hours</h2>

            <div style={{ maxWidth: "250px" }}>
              {classData.schedule.map((sch, index) => {
                return (
                  <React.Fragment key={index}>
                    <h4 className={style.h4}>{sch.day}</h4>
                    <p className={style.p}>{sch.time}</p>
                    <br />
                  </React.Fragment>
                );
              })}
            </div>
          </CardContent>
        </Card>
        <Card style={{ width: "550px" }}>
          <CardContent align="center">
            <div>
              <h2 className={style.h2}>{classData.title} Lesson</h2>
              <p className={style.p}>{classData.description}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent align="center">
            <div style={{ maxWidth: "250px" }}>
              <h2 className={style.coach}>Coach</h2>
              <Image
                src={classData.coachImage}
                width="160px"
                height="100px"
                className={style.img}
                alt=""
              />
              <p className={style.coachName}>{classData.coach}</p>
              <span className={style.span}>Number {classData.number}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
export default ClassId;

