import React from "react";
import { motion } from "framer-motion";


const NavMenuItem = ({item}) => {

    return (
        <motion.a
            transition={{  
                type: "spring",
                stiffness: 1000,
                damping: 100 }}
            whileHover={{   
                backgroundColor: "rgb(158,255,65)", 
                color: "rgb(0,0,0)" }}>

                {item} <br/>
        </motion.a>
    );

};


export default NavMenuItem;