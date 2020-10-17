import React from "react";
import { motion } from "framer-motion";


const NavMenuItem = ({item}) => {

    return (
        <motion.a
            style={{color: "white"}}
            initial={{left: "0%"}}
            transition={{
                type: "spring",
                stiffness: 1000,
                damping: 40 }}
            whileHover={{
                padding:"10px",
                color:"rgb(0,0,0)",
                backgroundColor: "rgb(158,255,65)"
            }}
            href="/">
                {item} <br/>
        </motion.a>
    );

};

export default NavMenuItem;