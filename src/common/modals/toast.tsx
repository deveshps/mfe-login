import React,{ useEffect } from "react";
import {useStateStore} from "../../store/state-store";
import styles from "../../styles/toast.module.css";


const Toast = () => {
  const [information,setInformation] = useStateStore('Info', {type:"info",value:""});

  useEffect(() => {
    let timeOut:any;
    if (information?.value) {
      timeOut = setTimeout(() => setInformation({type:"info",value:""}), 3000);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [information?.value]);
  const extraStyle = information?.type === 'info' ? {} : {backgroundColor:"#F9461C"};
  return (
    <div
      className={styles.toastWrapper}
      style={{
        opacity: information?.value ? 1 : 0,
        transform: information?.value ? "translateX(0)" : "translateX(-100vh)",
        transition: "all 0.5s ease-out",
        ...extraStyle
      }}
    >
      {information?.value}
    </div>
  );
};

export default Toast;